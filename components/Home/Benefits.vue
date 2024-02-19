<template>
  <div class="wrapper">
    <div class="sm-cards">
      <div v-for="(card, index) in cards" :key="index">
        <a class="card-item" v-if="index===0" @click="gotoEbay()">
          <NuxtImg quality="80" loading="lazy" format="webp" :src="`/images/${card}.png`" :alt="$t(`home.benefits.cards.${card}.text`)" class="h-6 md:h-16 mb-2" />
          <p class="text-blue text-sm md:text-base text-center px-2">{{$t(`home.benefits.cards.${card}.text`)}}</p>
        </a>
        <a class="card-item" v-else  :href="myAccountUrl + $t(`home.benefits.cards.${card}.link`) + '?gtw=' + selectedCountry.gtw"  target="_blank">
          <NuxtImg quality="80" loading="lazy" format="webp" :src="`/images/${card}.png`" :alt="$t(`home.benefits.cards.${card}.text`)" class="h-6 md:h-16 mb-2" />
          <p class="text-blue text-sm md:text-base text-center px-2">{{$t(`home.benefits.cards.${card}.text`)}}</p>
        </a> 
      </div>
    </div>
    
    <h2 class="main-heading" v-text="$t('home.benefits.heading')"></h2>


    <div class=" mb-10">
      <div class="cards" ref="benefitItems">
          <div class="card" v-for="(benefit, i) in benefits" :key="i">
            <NuxtImg quality="80" loading="lazy" format="webp" :src="`/images/${benefit}.png`" :alt="$t(`benefits.items.${benefit}.title`)" class="h-[41px] mb-5 max-md:mb-3" />
            <p class="text-blue font-medium text-[26px] max-md:text-xl mb-4 max-md:mb-2 leading-none">{{ $t(`benefits.items.${benefit}.title`) }}</p>
            <p class="text-base text-[#333333] max-w-sm leading-5">{{ $t(`benefits.items.${benefit}.description`) }}</p>
          </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="dot" 
            :class="position===i?'active-dot':''" 
            v-for="i in dots" :key="i" 
            @click="scroll(i)"
            ></div>
      </div>
    </div>
    <div class="flex justify-center">
      <a :href="signupUrl" target="_blank" class="btn-signup">
            {{ $t('common.sign-up') }}
        </a>
    </div>
  </div>
</template>
  
<script setup>
const {locale} = useI18n();

const store = useStore();
const { lang, selectedCountry } = storeToRefs(store)

const benefitItems = ref(null);
const position = ref(0)
const dots = ref([])
const cards = ref([ 'shop', 'prealert', 'payment', 'track-package',])
const benefits = ref([ 'fast', 'secure', 'return', 'save', 'track', 'locker', 'hub', 'credit-card' ])

const myAccountUrl = ref(useRuntimeConfig().public.VUE_APP_MYACCOUNT_URL)

const signupUrl = computed(()=>{     
  if(selectedCountry.value && process.client){
    let srvParam = window.location.origin + '/' + selectedCountry.value.gtw + '/' + lang.value + '/auth';
    srvParam = encodeURIComponent(srvParam);
    return `${useRuntimeConfig().public.VUE_APP_SIGNUP_URL}?srv=${srvParam}&culture=${lang.value}&gtw=${selectedCountry.value.gtw}&pc=EXPERT`
  }else{
    return  `/${locale.value}/country-picker`
  }
})

const scroll=(i)=>{
  position.value = i;
  benefitItems.value.scrollLeft = i*benefitItems.value.offsetWidth
}
const gotoEbay=()=>{
  document.getElementById('ebayDeals').scrollIntoView()
}

onMounted(()=>{
  dots.value = window.innerWidth<680? [0,1,2,3,4,5,6,7] : window.innerWidth<1040? [0,1,2,3] : [0,1,2]
  window.addEventListener('resize',()=>{
    dots.value = window.innerWidth<680? [0,1,2,3,4,5,6,7] : window.innerWidth<1040? [0,1,2,3] : [0,1,2]
  })
  benefitItems.value && benefitItems.value.addEventListener('scroll',()=>{
    position.value = Math.round(benefitItems.value.scrollLeft/benefitItems.value.offsetWidth)
  })
})
  </script>

  <style lang="scss" scoped>
  .wrapper{
      @apply min-w-full pb-8 relative z-20 mb-9 ;
  
      .sm-cards{
          @apply flex flex-wrap sm:flex-nowrap items-center justify-center -translate-y-14 relative z-20 max-sm:-translate-y-10;
  
          .card-item{
              @apply w-[200px] h-[140px] p-2 mx-6 mb-5 flex flex-col justify-center items-center rounded-xl shadow-lg bg-gradient-to-t from-[#fff] to-[#EBF6FB]
                     max-md:w-28 max-md:h-28 max-md:mx-[6px] max-md:p-1 transition-all duration-200
                     hover:from-yellow hover:to-yellow cursor-pointer hover:-translate-y-2
                     ;
              img{
                  @apply max-md:w-8 max-md:mb-2;
              }
              p{
                  @apply max-md:text-[10px] max-md:leading-3;
              }
          }
      }
  
      .main-heading{
          @apply text-blue font-medium text-4xl mb-12 px-3 text-center;
      }
      
      .cards{
        scroll-behavior: smooth;
          @apply sm:px-10 lg:px-20 mb-5 overflow-x-scroll flex sm:grid grid-flow-col;
  
          .card{
              @apply min-h-[200px] px-5 w-full min-w-full sm:w-[320px] sm:min-w-[320px] sm:max-w-[320px] flex flex-col items-center justify-start text-center      ;
          }
      }
      .cards::-webkit-scrollbar{
        @apply hidden
      }
      .dot{
        @apply w-3 h-3 bg-slate-600 rounded-full mx-1 cursor-pointer transition-all duration-100;
      }
      .active-dot{
        @apply bg-black w-4 h-4;
      }
      .more-btn{
        @apply px-12 py-[10px] rounded-[40px] text-[22px] font-normal bg-white text-blue cursor-pointer border border-blue transition-all duration-200 hover:bg-yellow hover:text-blue;
      }
  }
  .btn-signup{
    @apply px-12 py-[10px] rounded-[40px] text-lg sm:text-2xl font-medium bg-yellow text-blue cursor-pointer transition-all duration-200 hover:bg-blue hover:text-white capitalize; 
  }
  
  </style>
