<template>
    <div>
      <B2BKaliyoPopup v-if="showpopup" @close="close()" />
        <div class="min-w-full" v-if="selectedCountry">

        <HeaderHeroTitle 
            :title="$t('b2b.hero.title')"  
            :utext="$t('b2b.hero.utext')" 
            :applybtn="true"
            @applybtnclick=" show()"/>

        <B2BBenefits />
        <HomeSlider :key="componentKey" :b2b="true" class="max-md:hidden" />

        <!-- About us -->

        <B2BAboutSection />
        <HomeFavStores :isHome="true" />
        <p class="row p-5 bg-[#EBF6FB] dark:bg-dark-secondary text-blue dark:text-dark-text rounded-sm mb-10">
            {{ $t('common.affliateDisclosure') }}
        </p>

         <HomeDealsSection :title="hotDealsTitle" :deals="hotDeals" :isHome="true"/>
        <HomeDealsSection :title="recommendedProdTitle" :deals="recommendedProds" :isHome="true"/>
         
        
        <FooterTitle :bgBlue='true'></FooterTitle>
        
        </div>
    </div>
    </template>
    
    <script setup>
    import hotDeals from '@/assets/shop/ebayDeals';
    import recommendedProds from '@/assets/shop/recommended';

    const route = useRoute();
    const skip = ref(false);
    const showpopup = ref(false);
    const key = ref(0)

    const store = useStore();
    const { selectedCountry, lang } = storeToRefs(store);
    
    const componentKey = computed(()=> `testimonial${selectedCountry.value.name}`)
    const hotDealsTitle = computed(()=>{ return lang.value==='en'? 'Hot Deals':'Las mejores ofertas' })
    const recommendedProdTitle = computed(()=>{ return lang.value==='en'? 'Recommended Products':'Productos Recomendados' })

    const show =()=>{
        if(selectedCountry.value.gtw!=='BHS' && process.client){
            window.location.href = `/${selectedCountry.value.gtw}/${lang.value}/b2b?popup=true`;
        }
    }
    const close =()=>{
        if(process.client){
            window.location.href = `/${selectedCountry.value.gtw}/${lang.value}/b2b`;
        }
    }
    onMounted(()=>{
        const popup = route.query.popup
        showpopup.value = selectedCountry.value.gtw!=='BHS' && popup? true : false
        !selectedCountry.value.business ? navigateTo(`/${selectedCountry.value.gtw}/${lang.value}`):''
    })
    </script>
  
  