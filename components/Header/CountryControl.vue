<template>
  <div class="wrapper">
        <nuxt-link class="select" :to="`/country-picker`">
            <p class="text-base mr-3">{{selectedCountry?.name ?? 'Select country'}}</p>
            <NuxtImg quality="80" loading="lazy" src="/images/down.png" alt="down arrow" class="w-3"/>
        </nuxt-link>
        <p>
            <button 
                :class="locale==='en'?'':'active-lang'" 
                class="border-r-2 border-sky-100 lang-item"
                @click="setLanguage('es')">
                Español
            </button> 
            <button 
                class="lang-item"
                :class="locale==='en'?'active-lang':''"
                @click="setLanguage('en')">
                English
            </button>
        </p>
    </div>
</template> 
<script setup>
const route = useRoute();
const routr = useRouter();
const { locale, setLocale } = useI18n()

const store = useStore();
const {
  lang,
  selectedCountry
} = storeToRefs(store);

const {
    setLang,
    setSelectedCountries
} = store;

const setLanguage =async(lg)=> {
    // console.log({
    //     code:lg,
    //     iso:lg==='en'?'en-EN':'es-ES',
    //     name:lg==='en'?'English':'Español',
    //     file:lg==='en'?'en.yaml':'es.yaml'
    // });
    localStorage.setItem('lang', lg)
    setLocale(lg);
    setLang(lg);
    const path = route.fullPath;
    let gtw = route.params.gtw
    if(path.includes('rates') || path.includes('restricted')){
        gtw = path.substring(1,4)
    }
    if(gtw && lg){
        const url = `/${gtw}/${lg}/${path.substring(8)}`
        if(route.path !== url){
           window.open(url,"_self")
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    @apply flex items-center text-white;
}
.select{
    @apply flex items-center justify-center px-3 py-[6px] border border-sky-100 rounded-[27px] cursor-pointer relative;
}
.lang-item{
    @apply px-[10px] cursor-pointer ;
}
.active-lang{
    @apply text-[#F6D000];
}

@media only screen and (max-width:840px){
    .wrapper{
        @apply flex-col mb-5 ;
    }
    .select{
        @apply w-full text-blue border-blue mb-3;
    }
    .lang-item{
        @apply text-[#737373] ;
    }
    .active-lang{
        @apply text-blue font-bold;
    }
    
}

</style>
