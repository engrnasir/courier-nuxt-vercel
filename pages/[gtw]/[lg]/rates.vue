<template>
    <div class="min-w-full">
    <HeaderHeroTitle 
        :title="selectedCountry.gtw==='BHS'?'Rates': $t('rates.hero.title')" 
        :description="$t(selectedCountry.gtw==='BHS'?'rates.hero.bhs-description' : selectedCountry.lockers ? 'rates.hero.description-lockers' : 'rates.hero.description')"
    />

    <div class="container">
        <component :is="components[route.params.gtw]" />
    </div>

    <FooterTitle :bgBlue='true'></FooterTitle>
    </div>
</template>

<script setup>
import gateways from '@/assets/gateways'
const store = useStore();
const { selectedCountry, lang } = storeToRefs(store);
const { setSelectedCountry } = store;
const route = useRoute();
const components = {
    AXA : resolveComponent('RatesCountryAnguilla'),
    ANU : resolveComponent('RatesCountryAntigua'),
    AUA : resolveComponent('RatesCountryAruba'),
    BHS : resolveComponent('RatesCountryBahamas'),
    BGI : resolveComponent('RatesCountryBarbados'),
    BZE : resolveComponent('RatesCountryBelize'),
    EIS : resolveComponent('RatesCountryBritishVirgin'),
    GCM : resolveComponent('RatesCountryCaymanIsland'),
    SCL : resolveComponent('RatesCountryChile'),
    BOG : resolveComponent('RatesCountryColombia'),
    SJO : resolveComponent('RatesCountryCosta'),
    CUR : resolveComponent('RatesCountryCuracao'),
    DOM : resolveComponent('RatesCountryDominica'),
    ECU : resolveComponent('RatesCountryEcuador'),
    SAL : resolveComponent('RatesCountryElSavador'),
    GND : resolveComponent('RatesCountryGrenada'),
    PTP : resolveComponent('RatesCountryGuadeloupe'),
    GUA : resolveComponent('RatesCountryGuatemala'),
    GEO : resolveComponent('RatesCountryGuyana'),
    PAP : resolveComponent('RatesCountryHaiti'),
    SAP : resolveComponent('RatesCountryHonduras'),
    TEG : resolveComponent('RatesCountryHonduras'),
    KIN : resolveComponent('RatesCountryJamaica'),
    FDF : resolveComponent('RatesCountryMartinique'),
    MNI : resolveComponent('RatesCountryMontserrat'),
    MGA : resolveComponent('RatesCountryNicaragua'),
    PTY : resolveComponent('RatesCountryPanama'),
    LIM : resolveComponent('RatesCountryPeru'),
    SLU : resolveComponent('RatesCountrySaintLucia'),
    SXM : resolveComponent('RatesCountrySaintMartin'),
    SVD : resolveComponent('RatesCountrySaintVincent'),
    POS : resolveComponent('RatesCountryTrinidad'),
    TCA : resolveComponent('RatesCountryTurksCaicos'),

}
definePageMeta({
    middleware:[ 'auth' ]
})
// onBeforeMount(()=>{
//     const gtw = route.params.gtw
//     if(gtw){
//         let gateway = gateways.find(el=> el.gtw === gtw)
//         setSelectedCountry(gateway)
//     }
// })
</script>
<style lang="scss" scoped>
.container{
    @apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-20 
                    mb-40 max-md:-translate-y-12 max-md:px-4;     
}

    
</style>
