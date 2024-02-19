<template>
    <div class="min-w-full transition-all duration-1000 bg-[#F5F5F5]">
    <HeaderHeroTitle :title="$t('faqs.hero.title')"/>

    <!-- <div class="whitespace-pre-line">
        {{ $t('faqs.questions[0].answer') }}
    </div> -->
    
   

    <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto relative z-30 -mt-20 -mb-28 max-md:mt-0 max-md:mb-0 max-md:-translate-y-12">
        <div id="gladly-help-center" v-if="selectedCountry.gtw==='SCL'"></div>
        
        <div v-for="i in [0,1,2,3,4]" :key="i" class="border-b-2 border-[#EBEBEB] py-3 last:border-none" v-else>
            <div class="flex items-center justify-between cursor-pointer" @click="collapse(i)">
            <h3 class="font-bold text-base md:text-2xl text-blue  uppercase mr-3" v-text="$t(`faqs.questions.${i}.question`)"></h3>
            <NuxtImg quality="80" loading="lazy" src="/images/plus.png" alt="" class="w-5 h-5 showbtn"/>
            <NuxtImg quality="80" loading="lazy" src="/images/close.png" alt="" class="w-5 h-5 hidebtn faqs-hide"/>
            </div>
            <div class="overflow-hidden">
            <div class="whitespace-pre-line text-base text-[#333333] transition-all duration-500 py-5 px-3 questionItem faqs-hide animate-slidedown">
                {{ $t(`faqs.questions.${i}.answer`) }}
                <p class="font-bold mt-1" v-if="i==3 && selectedCountry.gtw ==='BHS'">{{ $t(`faqs.questions.${i}.disclaimer`) }}</p>
            </div>
            </div>
        </div>
        
    </div>

    <div class="max-md:hidden">
        <HomeSlider />
    </div>
    
    <div class="py-[60px] flex flex-col items-center bg-blue bg-bgImg bg-center bg-cover bg-no-repeat">
        <p class="font-light text-[32px] text-white" v-text="$t('faqs.footer.title')"></p>
        <p class="font-light text-[22px] mb-8 text-white" v-text="$t('faqs.footer.description')"></p>
        <nuxt-link :to="`/${lang}/${selectedCountry.gtw}/contactus`" class="btn-yellow relative z-10">
            {{$t('faqs.footer.button')}}
        </nuxt-link>
    </div>

    </div>
</template>
    
<script setup>

const gladlyScript = ref("")
const store = useStore();
const { selectedCountry, lang } = storeToRefs(store)


const collapse = (index)=>{
    const items =  document.querySelectorAll('.questionItem')
    const plusbtns =  document.querySelectorAll('.showbtn')
    const closebtns =  document.querySelectorAll('.hidebtn')
    items.forEach((el,i)=>{
        if(i!==index){
        el.classList.add('faqs-hide')
        closebtns[i].classList.add('faqs-hide')
        plusbtns[i].classList.remove('faqs-hide')
        }
    })
    closebtns[index].classList.toggle('faqs-hide')
    plusbtns[index].classList.toggle('faqs-hide')
    items[index].classList.toggle('faqs-hide')
};
const loadChileFaqs = ()=>{
    const enbrandId = 'Xbkp-x8PS_mqxC7GQ8Rfvg'
    const esbrandId = 'vOB2iLf1TZSoaSCWvmNllA'

    window.gladlyHCConfig = { api: 'https://aeropost.us-1.gladly.com', orgId: 'd4fE62hCSz6r0jyMB3ka7w', brandId: lang.value==='en'? enbrandId:esbrandId , cdn: 'https://cdn.gladly.com', selector: '#gladly-help-center' };
    
    function l() {
    var t = document
    let e = t.createElement('script');
    e.type = 'text/javascript';
    e.async = !0;
    e.src = 'https://cdn.gladly.com/help-center/hcl.js';
    var a = t.getElementsByTagName('script')[0];
    a.parentNode.insertBefore(e, a);
    }
    var w = window;
    w.attachEvent? w.attachEvent('onload', l) : w.addEventListener('DOMContentLoaded', l, !1);
}

onMounted(()=>{
    selectedCountry.value.gtw==='SCL'? loadChileFaqs():''
})
</script>
  
  <style lang="scss">
  .gladlyHC-answersIndex-item,
  .gladlyHC-faqSection-listItem{
    @apply font-bold text-base md:text-2xl text-blue  capitalize mr-3 py-3 border-b-2 border-[#EBEBEB];
  
  }
  .gladlyHC-searchInput{
    @apply text-base p-3 border-2 border-[#EBEBEB];
  }
  .gladlyHC-faqHeading{
    @apply text-3xl text-blue;
  }
  .gladlyHC-faqSection-header{
    @apply text-blue
  }
  .gladlyHC-answerDetail-backLink,
  .gladlyHC-answersIndex-link a{
    @apply text-white w-min bg-blue px-4 py-2 rounded text-base;
  }
  .gladlyHC-answerDetail-name{
    @apply text-lg font-semibold mb-2;
  }
  .gladlyHC-searchMenu{
    @apply p-2;
  }
  
  .faqs-hide{
    @apply hidden;
  }
  </style>
    