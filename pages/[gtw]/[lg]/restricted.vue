<template>
    <div class="min-w-full">
        <HeaderHeroTitle :title="$t('restricted.hero.title')" />

        <div class="container">
            <component :is="components[route.params.gtw]" />
        </div>

        <FooterTitle :bgBlue='true'></FooterTitle>
    </div>
</template>
  
<script setup>
const route = useRoute();
const store = useStore();
const { setCountryFromURL } = store;
const {locale} =useI18n()
const components = {
    AXA : resolveComponent('RestrictedCountryAnguilla'),
    ANU : resolveComponent('RestrictedCountryAntigua'),
    AUA : resolveComponent('RestrictedCountryAruba'),
    BHS : resolveComponent('RestrictedCountryBahamas'),
    BGI : resolveComponent('RestrictedCountryBarbados'),
    BZE : resolveComponent('RestrictedCountryBelize'),
    EIS : resolveComponent('RestrictedCountryBritishVirgin'),
    GCM : resolveComponent('RestrictedCountryCaymanIsland'),
    SCL : resolveComponent('RestrictedCountryChile'),
    BOG : resolveComponent('RestrictedCountryColombia'),
    SJO : resolveComponent('RestrictedCountryCosta'),
    CUR : resolveComponent('RestrictedCountryCuracao'),
    DOM : resolveComponent('RestrictedCountryDominica'),
    ECU : resolveComponent('RestrictedCountryEcuador'),
    SAL : resolveComponent('RestrictedCountryElSalvador'),
    GND : resolveComponent('RestrictedCountryGrenada'),
    PTP : resolveComponent('RestrictedCountryGuadeloupe'),
    GUA : resolveComponent('RestrictedCountryGuatemala'),
    GEO : resolveComponent('RestrictedCountryGuyana'),
    PAP : resolveComponent('RestrictedCountryHaiti'),
    SAP : resolveComponent('RestrictedCountryHonduras'),
    TEG : resolveComponent('RestrictedCountryHonduras'),
    KIN : resolveComponent('RestrictedCountryJamaica'),
    FDF : resolveComponent('RestrictedCountryMartinique'),
    MNI : resolveComponent('RestrictedCountryMartinique'),
    MGA : resolveComponent('RestrictedCountryNicaragua'),
    PTY : resolveComponent('RestrictedCountryPanama'),
    LIM : resolveComponent('RestrictedCountryPeru'),
    SLU : resolveComponent('RestrictedCountrySaintLucia'),
    SXM : resolveComponent('RestrictedCountrySaintMartin'),
    SVD : resolveComponent('RestrictedCountrySaintVincent'),
    POS : resolveComponent('RestrictedCountryTrinidad'),
    TCA : resolveComponent('RestrictedCountryTurksCaicos'),
}

onBeforeMount(()=>{
    setCountryFromURL({
        curr_gtw : route.params.gtw,
        lg : locale.value
    })
})
</script>
<style lang="scss" scoped>
.container{
@apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-20 
                mb-40 max-md:-translate-y-12 max-md:px-4;     
}


</style>
    