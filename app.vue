<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
import gateways from '~/assets/gateways';
const route = useRoute()
const store = useStore();
const { setSelectedCountry, setLang } = store
useSeoMeta({
  charset:"utf-8",
  xUaCompatible:"IE=edge",
  viewport:"width=device-width,initial-scale=1.0",
  ogType:"website",
  title: "Shipping & Courier Services | Aeropost",
  ogTitle: "Shipping & Courier Services | Aeropost",
  description: "We offer the fastest shipping experience to make your shopping easier. As a global shipping company, we deliver courier services to nearly 38 countries worldwide.",
  ogDescription: "We offer the fastest shipping experience to make your shopping easier. As a global shipping company, we deliver courier services to nearly 38 countries worldwide.",
  ogImage:"https://aeropost.com/public/default/frontend/aeropost/images/favicon/android-icon-192x192.png",
  googleSiteVerification:"pfzSgU3kmk3qc7YX_4iF4RQb8pBikrKqUEWFOVZp0Bk",
  impactSiteVerification:"303ce383-55f1-4747-a749-fb8fd35d303c",
  foVerify:"88ebe507-3fa5-4176-ad3e-96058d267deb"
})
useHead({
  script: [

    {
        type : "text/javascript",
        async: true,
        src: "https://showcase.shareasale.com/shareASale_liveWidget_loader.js?dt=10232023095625",
        tagPosition:'head'
    },
    {
      type : "text/javascript",
      async: true,
      src: '//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US',
      tagPosition:'bodyClose'
    },
    
    {
      type : "text/javascript",
      defer: 1,
      "data-use-service-core":1,
      src: 'https://app.analyzz.com/pixel/evYE2XvYodP7nnIP',
      tagPosition:'head',
    }
  ],
});

onBeforeMount(()=>{
  const amzn_assoc_tracking_id = "aeropost0d-20";
  const amzn_assoc_ad_mode = "manual";
  const amzn_assoc_ad_type = "smart";
  const amzn_assoc_marketplace = "amazon";
  const amzn_assoc_region = "US";
  const amzn_assoc_design = "enhanced_links";
  const amzn_assoc_asins = "B0CCQMCQ17";
  const amzn_assoc_placement = "adunit";
  const amzn_assoc_linkid = "00ca7d034205148db6dd677ecf5272c9";

  const gtw = route.params.gtw
    const lg = route.params.lg
    if(gtw){
        let gateway = gateways.find(el=> el.gtw === gtw)
        setSelectedCountry(gateway)
    }
    if(lg){
        setLang(lg)
    }
})

</script>