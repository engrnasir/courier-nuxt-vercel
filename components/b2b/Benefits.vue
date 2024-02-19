<template>
  <div class="wrapper">
    <div class="sm-cards">
      <a class="card-item" v-for="(card, index) in cards" :key="index" :href="index==0? prealertUrl : `/${selectedCountry.gtw}/${lang}` +  $t(`b2b.benefits.cards.${card}.link`)"  target="_blank">
        <NuxtImg quality="80" loading="lazy" :src="`/images/b2b/${card}.png`" :alt="$t(`home.benefits.cards.${card}.text`)" class="h-8 md:h-16 mb-2"/>
        <p class="text-blue text-base text-center px-2">{{$t(`b2b.benefits.cards.${card}.text`)}}</p>
      </a>
    </div>
    
    <h2 class="main-heading" v-text="$t('b2b.benefits.heading')"></h2>

    <div class="row cards">
      <div class="card" v-for="(benefit, i) in benefits" :key="i">
          <NuxtImg quality="80" loading="lazy" :src="`/images/b2b/${benefit}.png`" :alt="$t(`b2b.benefits.items.${benefit}.title`)" class="w-12 mb-3 md:mb-5"/>
          <p class="text-blue font-medium text-xl md:text-[26px] mb-2 md:mb-4 w-max">{{ $t(`b2b.benefits.items.${benefit}.title`) }}</p>
          <p class="text-base text-[#333333] leading-5">{{ $t(`b2b.benefits.items.${benefit}.text`) }}</p>
      </div>
    </div>
    <div class="flex justify-center">
      <nuxt-link :to="`/${selectedCountry.gtw}/${lang}/benefits`" class="more-btn">
        {{$t('home.benefits.more-reasons')}}
      </nuxt-link>
    </div>
  </div>
</template>
  
<script setup>
const store = useStore();
const { lang, selectedCountry } = storeToRefs(store);

const  cards = ref([
        'prealert',
        'restrict',
        'faq',
      ]);

const benefits = ref([
          'simple',
          'special',
          'support',
          'tracking',
        ]);

const myAccountUrl = ref(useRuntimeConfig().public.VUE_APP_MYACCOUNT_URL)
const { t } = useI18n()
const prealertUrl = computed(()=>{
  return myAccountUrl.value + t(`b2b.benefits.cards.prealert.link`) + '?gtw=' + selectedCountry.value.gtw
})
</script>
  
  
  <style lang="scss" scoped>
  .wrapper{
      @apply min-w-full pb-8 relative z-20 mb-9 ;
  
      .sm-cards{
          @apply flex items-center justify-center -translate-y-14 relative z-20 max-sm:-translate-y-10;
  
          .card-item{
              @apply w-28 h-28 md:w-[250px] md:h-[140px] p-1 md:p-2 mx-[6px] md:mx-6 flex flex-col justify-center items-center rounded-xl shadow-lg bg-gradient-to-t from-[#fff] to-[#EBF6FB]
                      transition-all duration-200
                     hover:from-yellow hover:to-yellow cursor-pointer hover:-translate-y-2
                     ;
              img{
                  @apply w-8 md:w-auto mb-2 md:mb-0;
              }
              p{
                  @apply text-[10px] md:text-base leading-3 md:leading-tight;
              }
          }
      }
  
      .main-heading{
          @apply text-blue font-medium text-4xl mb-12 px-3 text-center;
      }
      .cards{
          @apply mb-14 px-5 grid grid-cols-4 justify-items-center gap-5
          max-2xl:grid-cols-2 
          max-[600px]:grid-cols-1
          ;
  
          .card{
              @apply max-w-[250px] w-full flex flex-col items-center text-center
                  max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center 
              ;
          }
      }
      .more-btn{
        @apply px-12 py-[10px] rounded-[40px] text-[22px] font-normal bg-white text-blue cursor-pointer border border-blue transition-all duration-200 hover:bg-yellow hover:text-blue;
      }
  }
  
  
  </style>
