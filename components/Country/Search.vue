<template>
    <div class="w-full relative z-50">
        <div class="flex max-lg:flex-row-reverse items-center relative border-b border-white pb-3 lg:pb-5 mb-16 3xl:mb-24">
            <NuxtImg quality="80" loading="lazy" src="/images/search.png" alt="search" 
                class="w-5 3xl:w-7 mr-3 transition-transform duration-200" 
                :class="searchKey?'':'lg:translate-x-36 3xl:translate-x-48 opacity-80'"/>
 
            <input type="text" name="countryKey" :placeholder="$t('country-picker.search.placeholder')" v-model="searchKey" autocomplete="off"
                class="text-white text-lg 3xl:text-2xl w-full bg-transparent outline-none transition-transform duration-200"
                :class="searchKey?'':'lg:-translate-x-7 3xl:-translate-x-10'"
                @focus="searchbarFocused=true" @blur="searchbarFocused=false"
            />
     
            <NuxtImg quality="80" loading="lazy" src="/images/x.png" alt="x" class="w-4 h-4 lg:w-7 lg:h-7 opacity-90 cursor-pointer -translate-x-0 mr-5 lg:mr-0 lg:-translate-x-12 3xl:translate-x-0" 
            v-if="searchKey"
            @click="searchKey=''"/>
        </div>

        <div class="absolute left-0 top-10 lg:top-12 z-[999]  w-full  max-h-[450px] overflow-y-scroll bg-white shadow-md text-[#405570] px-3 lg:px-6 py-4 text-base 3xl:text-2xl capitalize" :class="searchbarFocused?'opacity-100':'opacity-0'">

            <p v-if="searchKey && filteredCountries.length<=0" v-text="$t('country-picker.search.no-results')"></p>

            <p v-if="searchbarFocused && searchKey.length<=0" v-text="$t('country-picker.search.type')"></p>
            <div v-if="filteredCountries.length>0">
                <div class="cursor-pointer p-2 hover:bg-[#eeeeee50]" 
                    v-for="(item, i) in filteredCountries" :key="i"
                    @click.stop="handleSelection(item)"
                    >
                    <div class="text-[#3E454E] lowercase flex">
                        <div v-for="(word,i) in item.country.name.split(' ')" :key="i" class="flex">
                            <p v-for="(t,i) in word" :key="i" 
                                :class="[
                                (searchKey.toLowerCase().includes(t.toLowerCase())?'font-bold ':''),
                                (i===0?'uppercase':'')] " v-html="t"></p>
                            &nbsp;
                        </div>
                    </div>
                    <p class="text-[#67778B]">{{ maps[item.mapId].name }}</p>
                </div>
            </div>
        </div>
    </div>       
</template>

<script setup>
import maps from '@/assets/maps'
import { useStore } from '@/stores';
import {storeToRefs} from 'pinia';

const searchbarFocused = ref(false);
const searchKey = ref("");
const store = useStore();
const { lang, selectedCountry,src } = storeToRefs(store);
const { setSelectedMapIndex, setSelectedCountry } = store;

const allCountry=computed(()=>{
    let temp=[]
    maps.forEach((el,i)=>{
        el.countries.forEach(c=>{
            temp.push({
                mapId: i,
                country: c
            })
        })
    })
    return temp
})
const filteredCountries=computed(()=>{
    return searchKey.value.trim()? allCountry.value.filter(el=>{
        return el.country.name.toLowerCase().trim().includes(searchKey.value.toLowerCase().trim())
    }) : []
})

const handleSelection=(item)=>{
    setSelectedMapIndex(item.mapId)
    setSelectedCountry(item.country)
    searchKey.value='';
    if (src.value != null && src.value == 'mkt') {
        if(selectedCountry.value.marketplace){
            window.location.href = `${useRuntimeConfig().public.VUE_APP_MTK_SITE_URL}/${selectedCountry.value.gtw}_${selectedCountry.value.locale}/`;
        }else if(selectedCountry.value.legacy){
            window.location.href = `https://aeropost.com/site/${lang.value}?gtw=${selectedCountry.value.gtw}`;
        }else{
            navigateTo(`/${selectedCountry.value.gtw}/${lang.value}`)
        }
    }else{ 
        navigateTo(`/${selectedCountry.value.gtw}/${lang.value}`)
    }
}

</script>

<style>

</style>
