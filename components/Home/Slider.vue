<template>
  <div class="py-14 relative" :class="b2b? '':'bg-yellow dark:bg-dark-text'">
    <h2 class="testimonial-headinng" v-if="b2b"> {{ $t('b2b.testimonials') }}</h2>
    <h2 class="testimonial-headinng" v-else> {{ $t('home.testimonials') }}</h2>
    
    <div class="row">
        <div  v-html="reviews.html"></div>
    </div>
  </div>
</template>

<script setup>
import enTrustPilots from '@/assets/enTrustPilots';
import esTrustPilots from '@/assets/esTrustPilots';

const store = useStore();
const { selectedCountry, lang } = storeToRefs(store);

const props = defineProps({
    b2b:Boolean
})

const trustPilots=computed(()=>{
    return lang.value==='en'? enTrustPilots : esTrustPilots;
})
const reviews=computed(()=>{
    const result = selectedCountry.value? trustPilots.value.find(el=> el.gtw === selectedCountry.value.gtw) : trustPilots.value.find(el=> el.gtw === 'DOM')
    return result;
})

onMounted(()=>{
  useHead({
    script:[
      {
        type:"text/javascript",
        async:true,
        id:"trustPilots-script-ID",
        src:"//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js",
        tagPosition:"head"
      }
    ]
  })
  const trustbox = document.getElementById('trustbox');
  if(trustbox && window.Trustpilot){
      window.Trustpilot.loadFromElement(trustbox);
  }
})
</script>

<style lang="scss" scoped>
.testimonial-headinng{
    @apply text-blue font-medium px-5 text-2xl md:text-4xl mb-6 md:mb-12 text-center;
}
.slider::-webkit-scrollbar{
    display: none;
}
.slider {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.dot{
    @apply w-5 h-5 p-2 mx-3 rounded-full bg-white cursor-pointer max-md:w-3 max-md:h-3;
}
.active {
  @apply bg-[#0075FF];
}

</style>
