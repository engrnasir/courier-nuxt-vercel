<style scoped>
.wrap{
    background-image: url('https://ik.imagekit.io/phc7dlrym/courier-aeropost/images/bg-footer.png');
    @apply py-[60px] flex flex-col items-center bg-center bg-cover bg-no-repeat px-5;
}
.bgBlue{
    @apply bg-blue dark:bg-dark-secondary
}
.bgWhite{
    @apply bg-[#DDF1FA];
}
</style>
<template> 
  <div class="wrap" :class="bgBlue===true?'bgBlue':'bgWhite'">
        <p class="font-light text-[32px] mb-8 text-center" :class="bgBlue===true?'text-white':'text-blue'" 
            v-html="$t('footer.tagline')"></p>
        <a :href="signupUrl" target="_blank" :class="bgBlue===true?'btn-yellow':'btn-blue'">
            {{ $t('common.sign-up') }}
        </a>
    </div>
</template>

<script setup>
const {locale} = useI18n();

const props = defineProps({
    bgBlue: Boolean
})

const store = useStore();
const {
  lang,
  selectedCountry
} = storeToRefs(store);


const signupUrl = computed(()=>{     
    if(selectedCountry.value && process.client){
        let srvParam = window.location.origin + '/' + selectedCountry.value.gtw + '/' + lang.value + '/auth';
        srvParam = encodeURIComponent(srvParam);
        return `${useRuntimeConfig().public.VUE_APP_SIGNUP_URL}?srv=${srvParam}&culture=${lang.value}&gtw=${selectedCountry.value.gtw}&pc=EXPERT`
    }else{
        return  `/country-picker`
    }
})
</script>
