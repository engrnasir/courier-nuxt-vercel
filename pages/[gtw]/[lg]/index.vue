<template>
  <div class="min-w-full" v-if="selectedCountry">
    <HeaderHeroTitle
      :title="$t('home.hero.title')"
      :utext="$t('home.hero.utext')"
      :description="$t('home.hero.description')"
      :showSignUp="true"
    />
    <HomeBenefits class="relative z-10"/>

    <HomeFavStores :isHome="true" />
    <p class="row p-5 bg-[#EBF6FB] text-blue rounded-sm my-10">
      {{ $t("common.affliateDisclosure") }}
    </p>
    <div class="shrsl_ShareASale_productShowCaseTarget_51513"></div>

    <HomeDetails />
    <div id="ebayDeals" v-motion-fade-visible >
      <HomeBanners/> 
    </div>

    <!-- <DealsSection :title="recommendedProdTitle" :deals="recommendedProds" :isHome="true" class="mt-10"/>
        <DealsSection :title="hotDealsTitle" :deals="hotDeals" :isHome="true" class="mt-10"/> -->

    <p class="row p-5 bg-[#EBF6FB] text-blue rounded-sm mt-10">
      {{ $t("common.affliateDisclosure") }}
    </p>

    <BlogsCarasoul class="mt-5"/>

    <HomeSlider :key="componentKey"/>
    <FooterTitle :bgBlue="true"/>
  </div>
</template>

<script setup>
import gateways from '@/assets/gateways'
import { Link } from '~/node_modules/nuxt/dist/head/runtime/components';
// import hotDeals from '@/assets/shop/ebayDeals';
// import recommendedProds from '@/assets/shop/recommended';
const store = useStore();
const route = useRoute();
const { selectedCountry, lang } = storeToRefs(store);
const { setSelectedCountry } = store;
definePageMeta({
  middleware: ["auth"],
});

const defaultTitle = "Shipping & Courier Services | Aeropost";
const defaultDescription = "We offer the fastest shipping experience to make your shopping easier. As a global shipping company, we deliver courier services to nearly 38 countries worldwide."

const { t } = useI18n();

const skip = ref(false);

const componentKey = computed(() => {
  return `testimonial${selectedCountry.value.name}`;
});
onMounted(() => {
  const gtw = route.params.gtw;
  if(gtw){
      const gateway = gateways.find(el=> el.gtw === gtw)
      setSelectedCountry(gateway)
  }
});
const gtw = computed(()=> route.params.gtw) 
const config = useRuntimeConfig();
useSeoMeta({
  title: ()=> t(`seo.${gtw.value}.title`),
  ogTitle: ()=> t(`seo.${gtw.value}.title`),
  description:()=> t(`seo.${gtw.value}.description`),
  ogDescription:()=> t(`seo.${gtw.value}.description`),
})
useHead({
  link:[
    {
      rel:"canonical",
      href:()=>`https://courier.aeropost.com/${route.params.gtw}/${lang.value}`
    }
  ]
})

</script>
