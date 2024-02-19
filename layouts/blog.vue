<template>
    <div class="no-scrollbar dark:bg-dark-primary">

      <HeaderMarketplaceBanner v-if="selectedCountry.marketplace && !noHeader"/>
      <div class="overlay" @click="setShowCountries(false)" v-show="showCountries "></div>
      <div class="menu-overlay" @click="setShowMenu(false)" v-show="showMenu"></div>
      <div class="bg-blue dark:bg-dark-header absolute top-0 left-0 w-full rounded-b-lg" :class="selectedCountry.marketplace?'h-[300px]':'h-[230px]'"></div>
      <NuxtImg quality="80" loading="lazy" src="/images/map.png" class="w-full max-h-[240px]  sm:max-h-[360px] md:max-h-[460px] lg:max-h-[600px] overflow-x-hidden absolute top-0 left-0 z-10 "/>
      <div class="sticky md:static left-0 z-50 top-0">
        <div class="w-full h-14 sticky top-0 md:hidden" v-if="selectedCountry && selectedCountry.marketplace && scrollY>54">{{ show }}</div>
        <HeaderLogoNav class="relative z-40" />
      </div>
      <HeaderNavigation class="md:hidden"/>
      <div class="bg-blue dark:bg-dark-header rounded-b-xl overflow-hidden relative max-md:mb-10 max-md:pb-5">
        <Header :shop="true" class="relative z-[999]" />
        
        <OtherScrollLeftRight class="pt-5 px-5 md:hidden relative z-30" :header="true" :autoscroll="true">
          <HomeBannersItem  v-for="(banner, i) in banners" :index="i" :key="i" :banner="banner"/>
        </OtherScrollLeftRight>
      </div>
      <slot></slot> 
  
      <Footer v-if="!noHeader" :bgBlue="false" class="relative z-10"/>
    </div>
  </template>
  
<script setup>
import banners from "@/assets/amazon/banners";
import allStores from '@/assets/shop/allStores';
import gateways from "~/assets/gateways";

const route = useRoute();

const searchKey = ref("");
const showSearch = ref(false);

const store = useStore();
const {
  lang,
  showCountries,
  showMenu,
  selectedCountry
} = storeToRefs(store);

const {
  setShowCountries,
  setShowMenu,
  setLang,
  setSelectedCountry,
  setSelectedMapIndex
} = store

const filteredStores = computed(()=>{
  return allStores.value.filter(el => el.title.toLocaleLowerCase().trim().includes(searchKey.value.toLocaleLowerCase().trim()))
})
const noHeader = computed(()=>{
  return route.query.noHeader? true : false;
})

const scrollY = ref(0)
onBeforeMount(()=>{
  window.addEventListener('scroll',()=>{
    scrollY.value = window.scrollY;
  })
})
</script>
<style scoped>
.overlay{
    @apply w-full min-h-screen fixed left-0 top-0 bg-black opacity-10 z-30;
}
.menu-overlay{
    @apply w-full min-h-screen fixed left-0 top-0 bg-black opacity-40 z-40 md:hidden;
}
.searchInput{
  @apply  w-full h-7 xl:h-8  p-2 pl-7 rounded-md text-sm md:text-lg outline-none focus:shadow-inner;
}
.no-scrollbar::-webkit-scrollbar{
  @apply hidden;
}

  </style>
  
  