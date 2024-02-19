<template>
    <div>
        <h2 class="heading">{{ title }}</h2>
        <RatesTable :list="info" :hasHeader="true"/>
    </div>

</template>

<script setup>
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia'
const store = useStore()
const {selectedCountry, lang} = storeToRefs(store)

const title = computed(()=>{
    const entitle =  'In & Out fee' 
    const estitle =  'Tarifa de entrada y salida'
    return selectedCountry.value.gtw==='BHS'? entitle : lang.value === 'en'? entitle : estitle
})

const info = computed(()=>{
    const entitle = ['Package weight','Rates (USD)']
    const estitle = ['Paquetes','Tarifas (USD)']
    return [
        selectedCountry.value.gtw==='BHS'? entitle : lang.value==='en'? entitle : estitle,
        ['1kg','$10.00'],
        ['Add. kg','$0.50 per kg'],
        ['150 kg+','$100.00'],
    ];
})
</script>