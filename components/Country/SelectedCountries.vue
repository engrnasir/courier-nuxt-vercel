<template>
    <div class="lg:w-1/2 relative z-30 lg:self-end text-white ">
        <p class="mb-8 3xl:mb-20 text-3xl 3xl:text-4xl" v-text="$t('country-picker.select')"></p>
        <h2 class="capitalize text-2xl 3xl:text-3xl mb-8">{{lang == 'en' ? selectedMap.name : selectedMap.nameEs}}</h2>
        <div class="grid lg:grid-cols-3 gap-3 3xl:gap-5">
            <div 
            class="flex item-center hover:text-darkYellow cursor-pointer" 
            :class="c===selectedCountry?'text-darkYellow':''"
            v-for="(c,i) in selectedMap.countries" :key="i"
            @click="handleSelection(c)" >
                <NuxtImg quality="80" loading="lazy" :src="`/images/flags/${c.flagUrl}`" :alt="c.name" class=" w-4 h-4 3xl:w-7 3xl:h-7 rounded-full mr-4"/>
                <p class="text-sm 3xl:text-xl">{{ c.name }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useStore } from '@/stores';
import {storeToRefs} from 'pinia';
import maps from '~/assets/maps';

const router = useRouter();
const store = useStore();
const { selectedMapIndex, selectedCountry,lang,src } = storeToRefs(store);
const { setSelectedMapIndex, setSelectedCountry } = store;

const selectedMap = computed(()=> maps[selectedMapIndex.value])

const handleSelection = (c)=>{
    setSelectedMapIndex(selectedMap.value.mapId)
    setSelectedCountry(c)
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
