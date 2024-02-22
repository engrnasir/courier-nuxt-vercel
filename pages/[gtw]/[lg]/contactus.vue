<template>
    <div class="min-w-full">
        <HeaderHeroTitle :title="$t('contact.hero.title')" />

        <div class="contact-container">
        <ContactDetails/>
        <ContactWhatsapp/>
        </div>

        <ContactMap/>

        <ChatGladly v-if="useGladlyChat" :gateway="selectedCountry.gtw" />
        <ChatAda v-else/>

        <FooterTitle :bgBlue='true'></FooterTitle>
    </div>
</template>

<script setup>
import gateways from '~/assets/gateways';
const route = useRoute()
const store = useStore();
const { selectedCountry, lang } = storeToRefs(store)
const { setSelectedCountry } = store
const marketplaceLink = computed(()=>{
    const { gtw, locale, legacy } = selectedCountry.value
    return legacy ? `https://aeropost.com/site/${locale}?gtw=${gtw}` : `${useRuntimeConfig().public.VUE_APP_MTK_SITE_URL}/${gtw}_${locale}/`
})
const useGladlyChat = computed(()=>{            
    return selectedCountry.value.gtw === 'BHS'
})
onBeforeMount(()=>{
  useHead({
    script:[
    {
      type : "text/javascript",
      defer: true,
      "data-use-service-core":true,
      src: 'https://static.elfsight.com/platform/platform.js',
      tagPosition:'bodyClose',
    },
    ]
  })
    const gtw = route.params.gtw;
    if(gtw){
      const gateway = gateways.find(el=> el.gtw === gtw)
      setSelectedCountry(gateway)
  }
})
</script>
<style lang="scss">
  .contact-container{
    @apply w-[98%] max-w-[1020px] pt-10 mx-auto relative z-20 -translate-y-20 md:-translate-y-32 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8;     
  }
</style>
  