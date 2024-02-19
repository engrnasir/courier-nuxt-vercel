<template>
    <div class="w-full h-screen text-white bg-blue z-[9999] flex items-center justify-center text-2xl" v-if="!selectedCountry">
      Loading...
    </div>
    <!-- <ThankyouPopup/> -->
    <HeaderMarketplaceBanner v-if="selectedCountry.marketplace"/>
    <div class="overlay" @click="setShowCountries(false)" v-show="showCountries"></div>
    <div class="menu-overlay" @click="setShowMenu(false)" v-show="showMenu"></div>

    <div class="bg-blue absolute top-0 left-0 w-full" :class="selectedCountry.marketplace?'h-[358px]':'h-[230px]'"></div>
    <NuxtImg quality="80" loading="lazy" src="/images/map.png" alt="earth map" class="w-full h-min overflow-x-hidden absolute top-0 left-0 z-0 hidden sm:block" />
    <NuxtImg quality="80" loading="lazy" src="/images/mobile-map.png" alt="earth map" class="w-full h-min overflow-x-hidden absolute top-0 left-0 z-0 sm:hidden" />
    <div class="sticky md:static left-0 z-50 top-0">
      <div class="w-full h-14 sticky top-0 md:hidden" v-if="selectedCountry.marketplace && scrollY>54"></div>
      <HeaderLogoNav v-if="selectedCountry" class="relative z-40" />
    </div>
    <Header v-if="selectedCountry" />  
    <slot></slot>

    <Footer :bgBlue="false" class="relative z-10"/>
</template>

<script setup>
import gateways from "~/assets/gateways";
const store = useStore();
const route = useRoute()
const {
  showCountries,
  showMenu,
  selectedCountry
} = storeToRefs(store);
const {
  setShowCountries,
  setShowMenu,
  setLang,
  setSelectedCountry,
  setSelectedMapInde
} = store;

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
.topSticky{
  top: 60px;
}
.menu-overlay{
    @apply w-full min-h-screen fixed left-0 top-0 bg-black opacity-40 z-40 md:hidden;
}

</style>