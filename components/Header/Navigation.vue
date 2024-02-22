<template>
  <div class="row nav-wrapper " :class="[(showMenu?'showMenu':''),(banner?'nav-banner':'')]">
    <div  class="hidden max-md:block control-wrapper">
      <HeaderCountryControl/>
    </div>
    <nav class="w-full">
        <ul class="items" >
            <li class="item" @click="setRoute('how-it-works')">
              {{ $t('how-it-works.title') }}
            </li>
            <!-- <li class="item text-yellow shopItem" @click="setRoute('shop/all')">
              <p>{{ $t('shop.title') }}</p>
              <div class="w-full overflow-hidden hidden md:block">
                <div class="bottomLine"></div>
              </div>
            </li> -->
            <li class="item" @click="setRoute('rates')" v-if="!selectedCountry.value?.hideRates">
              {{ $t('rates.title') }}
            </li>
            <li class="item" @click="setRoute('calculator')">
              {{ $t('calculator.title') }}
            </li>
            <li class="item" @click="setRoute('benefits')">
              {{ $t('benefits.title') }}
            </li>
            <li class="item mr-0" @click="setRoute('b2b')" v-if="selectedCountry && selectedCountry.business"> 
              {{ $t('b2b.title') }}
            </li>
            <li class="item mr-0" @click="setRoute('contactus')">
              {{ $t('contact.title') }}
            </li> 
        </ul>
    </nav>
    <div class="flex items-center min-w-max max-md:min-w-full">
        <a :href="loginUrl" target="_blank" class="btn max-lg:text-sm mr-[14px] max-lg:mr-2 max-md:hidden">{{lang==='en'?'Log in':'Iniciar Sesión'}}</a>
        <!-- <a :href="signupUrl" target="_blank" class="btn max-lg:text-sm">{{lang==='en'?'Sign Up for Free':'Regístrate Gratis'}}</a> -->
        <div class="w-full flex items-center gap-3 flex-col md:flex-row mx-auto">
          <a href="https://apps.apple.com/jm/app/aeropost/id6473463747" target="_blank">
            <NuxtImg quality="80" loading="lazy" src="/images/app-store.svg" alt="appstore" class="h-8" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.aeropost.courierapp&hl=en&gl=US" target="_blank" class="">
            <NuxtImg quality="80" loading="lazy" src="/images/play-store.svg" alt="playstore" class="h-8" />
          </a>
        </div>
    </div>
  </div>
</template>

<script setup>

const {locale} = useI18n();
const store = useStore();
const {
  lang,
  showMenu,
  selectedCountry
} = storeToRefs(store);

const {
  setShowMenu
} = store;

const router = useRouter()
const config = useRuntimeConfig()
const loginUrl = computed(()=>{
  if(selectedCountry.value){
    return `${config.public.VUE_APP_MYACCOUNT_URL}/${lang.value}?gtw=${selectedCountry.value.gtw}`
  }else{
    return `/country-picker`
  }
})
 
const signupUrl = computed(()=>{
  if(selectedCountry.value && process.client){
    let srvParam = window.location.origin + '/' + selectedCountry.value.gtw + '/' + lang.value + '/auth';
    srvParam = encodeURIComponent(srvParam);
    return `${useRuntimeConfig().public.VUE_APP_SIGNUP_URL}?srv=${srvParam}&culture=${lang.value}&gtw=${selectedCountry.value.gtw}&pc=EXPERT`
  }else{
    return `/country-picker`
  }
})

const banner = computed(()=>{
  return selectedCountry.value?.marketplace
})
const setRoute = (page)=>{
  if(selectedCountry.value){
    navigateTo(`/${selectedCountry.value.gtw}/${lang.value}/${page}`)
    setShowMenu(false)
  }else{
    navigateTo( `/country-picker`)
  }
}

</script>

<style lang="scss" scoped>
.nav-wrapper{
  @apply flex justify-between items-center relative z-50;
}

nav{
  .items{
    @apply flex items-start text-white;
  }
  .item{
    @apply mr-4 text-base hover:text-yellow font-medium cursor-pointer;
  }
}
.bottomLine{
  @apply w-full h-[2px] rounded-full relative z-50 bg-yellow animate-moveLeftRight;
}

@media screen and (max-width:840px) {
  .nav-wrapper{
    @apply w-[260px] mx-0 fixed left-0 top-14 h-screen justify-start flex-col items-start bg-white shadow-2xl 
            px-3 py-5 pb-[600px] overflow-y-scroll
            transition-all duration-300
            -translate-x-full
            ;
  }
  .nav-banner{
    @apply top-28
  }
  .showMenu{
    @apply translate-x-0;
  }
  .nav-wrapper::-webkit-scrollbar{
    display: none
  }
  .control-wrapper{
    @apply w-full;
  }
  .items{
    @apply  min-w-full mb-7 flex-col items-start text-blue;
  }
  .item{
    @apply w-full py-5 pl-3  mr-0 text-blue flex flex-col items-center  ;
  }
  .item:last-child{
    @apply border-b;
  }
  .btn:last-child{
    @apply w-full flex justify-center items-center px-8 bg-yellow hover:bg-blue hover:text-white;
  }


 
}
</style>
