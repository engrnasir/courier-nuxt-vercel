<template>
    <div class="w-full flex items-center max-md:h-14 px-8 max-md:px-4" :class="showMenu || bgBlue? 'bg-blue':''">
        <div class="row py-2 flex items-center">
              <div class="flex justify-between items-center w-[100%]" >
                  <div class="flex items-center">
                      <NuxtImg quality="80" loading="lazy" src="/images/menu.png" alt="menu" 
                          class="hidden max-md:block w-6 cursor-pointer relative z-50 mr-3"
                          @click="setShowMenu(!showMenu)"/>
                      <NuxtLink :to="`/${selectedCountry.gtw}/${lang}`">
                        <NuxtImg quality="80" loading="lazy" src="/images/mailpac.png" alt="logo" class=" h-4 md:h-8" v-if="selectedCountry && selectedCountry.gtw==='KIN'"/>
                        <!-- 
                            <NuxtImg quality="80" loading="lazy" src="/images/aeropost-marketplace.svg" alt="aeropost-marketplace" class="h-8 md:h-12" v-else-if="selectedCountry && selectedCountry.gtw==='BHS'"/> 
                        -->
                        <NuxtImg quality="80" loading="lazy" src="/images/Aeropost-Courier.png" alt="aeropost-Courier" class="h-8 md:h-12" v-else-if="selectedCountry && selectedCountry.region === 'caribbean'"/>
                        <NuxtImg quality="80" loading="lazy" src="/images/aeropost-casillero.png" alt="Aeropost-casillero" class=" h-8 md:h-12" v-else/>
                      </NuxtLink>
                  </div>

                  <div class="relative hidden md:flex items-center" v-if="shop" @click="$emit('showSearchbar')">
                    <input type="text" class="searchInput" :placeholder="lang==='en'?'Search':'Buscar'">
                    <NuxtImg quality="80" loading="lazy" src="/images/search-gray.png" alt="search gray" class="w-5 absolute left-1 pb-1"/>
                  </div>
      
                  <a :href="loginUrl" target="_blank" class="btn loginBtn">{{lang==='en'?'Log in':'Iniciar Sesión'}}</a>
      
                  <div class="max-md:hidden ">
                      <HeaderCountryControl/>
                  </div>
      
              </div>
          </div>
    </div>
</template>

<script setup>
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia';
const store = useStore();
const { lang, showMenu, selectedCountry } = storeToRefs(store);
const { setLang, setShowMenu } = store;

const props = defineProps({
    shop:Boolean
})

const bgBlue = ref(false);
const {locale} = useI18n()
const loginUrl = computed(()=>{
    if(selectedCountry.value){
        return `${useRuntimeConfig().public.VUE_APP_MYACCOUNT_URL}/${lang.value}?gtw=${selectedCountry.value.gtw}`
    }else{
        return `/${locale.value}/country-picker`
    }
})

onBeforeMount(()=>{
    window.addEventListener('scroll',(e)=>{
        bgBlue.value = window.scrollY>0 && window.innerWidth<840?true:false;
    })
})
</script>

<style lang="scss" scoped>
.loginBtn{
    @apply px-9 py-2 hidden max-md:inline-block  max-md:px-5  max-md:text-sm   max-md:py-1 ;
}
.searchInput{
    @apply w-60 h-7 xl:w-80 xl:h-8  p-2 pl-7 rounded-md text-sm outline-none focus:shadow-inner;
}

</style>
