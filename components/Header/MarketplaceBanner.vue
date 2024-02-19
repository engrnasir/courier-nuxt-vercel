<template>
    <div class="sticky top-0 left-0 md:relative z-[999] w-full h-14 md:h-[60px] flex  items-center justify-between bg-[#F6D000] text-sm text-blue max-md:p-2 md:pr-6" :class="show? 'flex':'hidden'">
        <div class="flex md:items-center max-md:flex-col max-md:justify-center text-[10px] leading-tight md:text-sm max-md:mr-2" >
            <div class=" left-0 top-0 md:w-[296px] md:h-[58px] md:bg-[#FF929233] clipPath  md:px-6 md:py-2">
                <p>{{$t('marketplace.currently')}}<br class="max-md:hidden"> <b>Aeropost Courier</b></p>
            </div>

            <p class="md:mx-5 hidden md:inline">
                {{$t('marketplace.link')}}<br class="max-md:hidden"> <a :href="marketplaceLink" target="blank" class="font-bold">Aeropost Marketplace</a>.
            </p>
        </div>

        <a :href="marketplaceLink" target="blank" class="mbtn">
            <NuxtImg quality="80" loading="lazy" src="/img/aeropost-circle.png" alt="Logotype" class="inline h-4 mr-2 -pl-2"/>
            {{$t('marketplace.go')}}
        </a>
    </div>
</template>
<script setup>
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia';
const store = useStore();
const { lang, showMenu, selectedCountry } = storeToRefs(store);
const { setLang, setShowMenu } = store;

const show = computed(()=>{
    return selectedCountry.value?.marketplace
})
const marketplaceLink = computed(()=>{
    const { gtw, locale, legacy } = selectedCountry.value
    return legacy 
        ? `https://aeropost.com/site/${locale}?gtw=${gtw}`
        : `${useRuntimeConfig().public.VUE_APP_MTK_SITE_URL}/${gtw}_${gtw==='LIM'?lang.value:locale}/`
})
</script>

<style lang="scss" scoped>
.mbtn{
  @apply min-w-max pl-2 pr-3 md:pl-3 md:pr-6 py-1 md:py-[10px] rounded-[40px] text-[12px] md:text-sm font-medium bg-blue text-white cursor-pointer transition-all duration-200 hover:bg-white hover:text-blue; 
}
.clipPath{
    @media only screen and (min-width:840px){
        clip-path: polygon(0 0, 100% 0, 86% 100%, 0% 100%);
    }
}
</style>
