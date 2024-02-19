<template>
  <div class="wrapper" :class="aboutus?'aboutus-wrapper':''">
      <h1 class="text-center relative z-30 " v-if="title">
        {{ title }}
        <br class="lg:hidden">
        <span v-if="utext" class="border-b-2 w-max">
          {{ utext }}
        </span>
      </h1>
      <p class="description relative z-30" :class="aboutus?'aboutus-description':''" v-if="description">{{ description }} {{ selectedCountry.name }}</p>
      <a :href="signupUrl" class="btn-yellow signUpBtn relative z-30" v-if="showSignUp">
        {{ $t('common.sign-up') }}
      </a>
      <button @click="$emit('applybtnclick')" class="btn-yellow btn-apply"  v-if="applybtn">
        {{ $t('b2b.hero.apply') }}
      </button>
  </div>
</template>

<script setup>
const store = useStore();
const { selectedCountry } = storeToRefs(store);
const props = defineProps({
  title:String,
  utext:String,
  description:String,
  showSignUp:Boolean,
  applybtn:Boolean,
  homepage:Boolean,
  aboutus:Boolean
})

const { locale } = useI18n();
const signupUrl = computed(()=>{
  if(process.client){
    let srvParam = window.location.origin + '/' + selectedCountry.value.gtw + '/' + locale.value + '/auth';
    srvParam = encodeURIComponent(srvParam);
    return `${useRuntimeConfig().public.VUE_APP_SIGNUP_URL}?srv=${srvParam}&culture=${locale.value}&gtw=${selectedCountry.value.gtw}&pc=EXPERT`     
  }else{
    return '';
  }
}) 
</script>

<style lang="scss" scoped>
.wrapper{
  @apply w-full bg-blue px-5 pt-[80px] pb-[140px] text-center text-white flex flex-col items-center
          max-md:pt-8 max-md:pb-20
  ;
  h1{
    @apply font-medium text-[53px] leading-[105%] mb-4 
            max-md:text-3xl
    ;
  }
  .description{
    @apply text-2xl font-light max-w-[850px]  max-md:w-10/12 max-md:text-xl;
  }
  .signUpBtn{
    @apply mt-5 hidden max-md:inline-block z-30;
  }
  .btn-apply{
    text-transform: none;
    @apply mt-5 relative z-30;
  }
}
.aboutus-wrapper{
  @apply pt-12 pb-20  max-md:pb-10  max-md:pt-0;
  .aboutus-description{
    @apply text-3xl max-md:text-xl;

  }
}

</style>
