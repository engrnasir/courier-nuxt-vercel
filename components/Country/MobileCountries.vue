<template>
    <div class="relative z-30 max-lg:font-light text-white ">
        <p class="mb-10 3xl:mb-20 max-lg:text-center text-2xl 3xl:text-4xl" v-text="$t('country-picker.select')"></p>
        <div class="mb-5" v-for="(m, i) in maps" :key="i">
            <h2 class="capitalize text-2xl 3xl:text-3xl mb-3 flex items-center justify-between cursor-pointer" @click="toggleCountry(i)">
                <span>{{ lang == 'en' ? m.name : m.nameEs }}</span>
                <NuxtImg quality="80" loading="lazy" src="/images/down-arrow.png" alt="down-arrow" class="w-5 downArr" />                
            </h2>
            <div class="overflow-hidden">
                <!-- selectedMap===m   :class="showStatus[i]? 'grid':'hidden'"-->
                <div class="grid gap-3 px-5 animate-slidedown mobile-countries hidden">
                    <div 
                        class="flex item-center hover:text-darkYellow cursor-pointer" 
                        :class="c===selectedCountry?'text-darkYellow':''"
                        v-for="(c,j) in m.countries" :key="j"
                        @click="handleSelection(c,i)" >
                        <NuxtImg quality="80" loading="lazy" :src="`/images/flags/${c.flagUrl}`" :alt="c.name" class=" w-4 h-4 3xl:w-7 3xl:h-7 rounded-full mr-4" />
                        <p class="text-sm 3xl:text-xl">{{ c.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import maps from '@/assets/maps';
const store = useStore();
const { 
    src, selectedCountry,lang, selectedMapIndex, selectedMap
 } = storeToRefs(store);
const { setSelectedMapIndex, setSelectedCountry } = store;

const showStatus = ref([false, false, false]);

const mcountries= computed(()=>{ return document.querySelectorAll('.mobile-countries'); })
const marrows= computed(()=>{ return document.querySelectorAll('.downArr') })

const handleSelection=(c,i)=>{
    setSelectedMapIndex(i)
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
const toggleCountry=(i)=>{
    if(mcountries.value && marrows.value){
        mcountries.value.forEach((el,j)=>{
            if(i!==j){
                marrows.value[j].classList.remove('rotate-180')
                el.classList.add('hidden')
            }
        })
        marrows.value[i].classList.toggle('rotate-180')
        mcountries.value[i].classList.toggle('hidden')            
    }
}

onMounted(()=>{
    console.log(marrows.value)
    marrows?.value[selectedMapIndex.value].classList.toggle('rotate-180')
    mcountries?.value[selectedMapIndex.value].classList.toggle('hidden')
})
</script>
