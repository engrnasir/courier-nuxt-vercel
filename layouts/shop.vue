<template>
    <div class="no-scrollbar dark:bg-dark-primary">

      <div class="w-full h-screen flex items-center justify-center fixed top-0 left-0 z-[99999] bg-[#00000095]" v-if="showSearch">
        <button class="fixed top-10 right-10 text-2xl text-white" @click="showSearch=false">X</button>
        <div class=" w-full px-5 relative z-30  mb-20">
            <div class="relative w-full max-w-sm mx-auto flex items-center">
              <input type="text" class="searchInput" :placeholder="lang==='en'?'Search':'Buscar'" v-model="searchKey">
              <NuxtImg quality="80" loading="lazy" src="/images/search-gray.png" alt="search gray" class="w-5 absolute left-1 pb-1" />
            </div>
            <div class="w-full max-w-sm max-h-[300px] mx-auto overflow-y-scroll rounded-lg shadow-md bg-white py-5 mt-2" >
              <p v-if="filteredStores.length<=0" class="px-2">No Result Found!</p>
              <p class="w-full" v-else>
                <a :href="item.link" target="_blank" v-for="(item, i) in filteredStores" :key="i" class="w-full flex items-center p-2"  >
                  <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/stores/${item.img}`" alt="image" class="h-2.5 mr-5"/>
                  <p class="text-sm">{{ item.title }} </p>
                </a>
              </p>

            </div>
          </div>

      </div>


      <HeaderMarketplaceBanner v-if="selectedCountry && selectedCountry.marketplace && !noHeader"/>
      <div class="overlay" @click="setShowCountries(false)" v-show="showCountries "></div>
      <div class="menu-overlay" @click="setShowMenu(false)" v-show="showMenu"></div>
      <div class="bg-blue dark:bg-dark-header absolute top-0 left-0 w-full rounded-b-lg" :class="selectedCountry && selectedCountry.marketplace?'h-[300px]':'h-[230px]'"></div>
      <NuxtImg quality="80" loading="lazy" src="/images/map.png" class="w-full max-h-[240px]  sm:max-h-[360px] md:max-h-[460px] lg:max-h-[600px] overflow-x-hidden absolute top-0 left-0 z-10 "/>
      <div class="sticky md:static left-0 z-50 top-0">
        <div class="w-full h-14 sticky top-0 md:hidden" v-if="selectedCountry.marketplace && scrollY>54">{{ show }}</div>
        <HeaderLogoNav v-if="selectedCountry" class="relative z-40" />
      </div>
        <div class="bg-blue dark:bg-dark-header rounded-b-xl overflow-hidden relative max-md:mb-10 max-md:pb-5">
          <Header :shop="true" class="relative z-[999]" />

          <div class=" w-full px-5 relative z-30 md:hidden" v-if="!noHeader">
            <div class="relative w-full max-w-sm mx-auto flex items-center" @click="showSearch=true">
              <input type="text" class="searchInput" :placeholder="lang==='en'?'Search':'Buscar'" >
              <NuxtImg quality="80" loading="lazy" src="/images/search-gray.png" alt="search gray" class="w-5 absolute left-1 pb-1" />
            </div>
           
          </div>
          
          <OtherScrollLeftRight class="pt-5 px-5 md:hidden relative z-50" :header="true" :autoscroll="true">
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

const route = useRoute();

const searchKey = ref("")
const showSearch = ref(false)

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

 filteredStores = computed(()=>{
  return allStores.filter(el => el.title.toLocaleLowerCase().trim().includes(searchKey.value.toLocaleLowerCase().trim()))
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
  