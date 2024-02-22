<template>
     <div class="min-h-screen">
        <div class="countryPickerWrapper">
            <NuxtImg quality="80" loading="lazy" src="/images/x.png" alt="x" @click="goBack()" class="w-8 h-8 md:w-12 md:h-12 cursor-pointer fixed right-1 top-1 3xl:right-3 3xl:top-3"/>
    
            
            <div class="w-full flex flex-col items-center mb-10">
                <div class="flex flex-col items-center justify-center">
                    <NuxtImg quality="80" loading="lazy" src="/images/Aeropost-Courier.png" alt="aeropost white logo" class="h-14 mb-3 "/>
                </div>
                <p class="text-2xl 3xl:text-3xl text-white"  v-if="showAll">
                    {{ lang==='en'?'Choose where your country is located':'Elige dónde se encuentra tu país' }}
                </p>
                <div class="flex flex-col items-center text-center mb-5" v-else>
                    <h1 class="max-w-[883px] text-2xl 3xl:text-3xl text-white border-b-2 border-[#A8EEFF] px-5 pb-1">Locations</h1>
                </div>
            </div>

            <div class="flex items-center justify-end pb-5">
                <a @click="showAll = !showAll" class="text-white font-medium text-base md:text-xl block text-center hover:text-darkYellow cursor-pointer" >
                    {{ showAll ? $t('country-picker.view.by-region') : $t('country-picker.view.all')}}
                </a>
            </div>

            <div class="relative z-50">
                <CountrySearch/>
            </div>
    
            <template v-if="showAll" >
                <div class="grid max-md:grid-cols-1 grid-cols-3 gap-8 relative z-30 text-white px-8 3xl:px-16">
                    <div v-for="(m, i) in maps" :key="i">
                        <h2 class="capitalize text-2xl 3xl:text-3xl mb-6 flex items-center justify-between " @click="setSelectedMapIndex(i)">{{ lang == 'en' ? m.name : m.nameEs }}</h2>
                        <div class="grid  max-md:grid-cols-1 max-lg:grid-cols-2 gap-5 font-light" :class="m.countries.length>8?'grid-cols-3':'grid-cols-2'">
                            <div 
                                class="flex item-center hover:text-darkYellow cursor-pointer" 
                                :class="c===selectedCountry?'text-darkYellow':''"
                                v-for="(c,i) in m.countries" :key="i"
                                @click="handleSelection(c)" >
                                <NuxtImg quality="80" loading="lazy" :src="`/images/flags/${c.flagUrl}`" :alt="c.name" class=" w-4 h-4 3xl:w-7 3xl:h-7 rounded-full mr-4"/>
                                <p class="text-sm 3xl:text-xl">{{ c.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <CountrySelectedCountries class="max-lg:hidden"/>
                <CountryMobileCountries class="lg:hidden" />
                <CountryEarthMap class="fixed left-0 bottom-0 max-h-[85vh] w-[650px] h-[800px]  3xl:w-[1000px] 3xl:h-[900px] max-lg:hidden" />
            </template>
        </div>
        <div class="w-full h-min p-5 bg-white text-center md:text-right ">
            © {{ new Date().getFullYear() }} Aeropost.   All Rights Reserved.
        </div>
    </div>


   
</template>

<script setup>
import maps from '@/assets/maps';
definePageMeta({
    layout:"none"
})
const { t } = useI18n();
useSeoMeta({
    title: ()=> t('seo.country-picker.title'),
    ogTitle: ()=> t('seo.country-picker.title'),
    description: ()=> t('seo.country-picker.description'),
    ogDescription: ()=> t('seo.country-picker.description'),
})
const router = useRouter()
const store = useStore();
const { lang, selectedCountry, src, selectedMapIndex } = storeToRefs(store);
const { setSelectedMapIndex, setSelectedCountry, setLanguageFromQueryParam } = store;

const showAll = ref(true);

const selectedMap = computed(()=> maps[selectedMapIndex.value])

const handleSelection=(c)=>{
    setSelectedMapIndex(selectedMap.value.mapId)
    setSelectedCountry(c)
    if (src.value!= null && src.value== 'mkt') {
        if(selectedCountry.value.marketplace && process.client){
            window.location.href = `${useRuntimeConfig().public.VUE_APP_MTK_SITE_URL}/${selectedCountry.value.gtw}_${selectedCountry.value.locale}/`;
        }else if(selectedCountry.value.legacy && process.client){
            window.location.href = `https://aeropost.com/site/${lang.value}?gtw=${selectedCountry.value.gtw}`;
        }else{
            navigateTo(`/${selectedCountry.value.gtw}/${lang.value}`)
        }
    }else{ 
        navigateTo(`/${selectedCountry.value.gtw}/${lang.value}`)
    }
}

const goBack=()=>{
    history.back()
}

onBeforeMount(()=>{
    setLanguageFromQueryParam();
    const route = useRoute()
    console.log(route.fullPath);
})

</script>

<style lang="scss" scoped>
.countryPickerWrapper{
    @apply bg-gradient-to-b from-[#0047A3] to-[#00377E] flex flex-col  w-full h-screen overflow-scroll relative z-[999] p-8 3xl:p-16; // pb-14
}
.countryPickerWrapper::-webkit-scrollbar{
    @apply hidden;
}

</style>

