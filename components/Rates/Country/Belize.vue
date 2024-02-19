<template>
    <div>

        <RatesTable :list="info.table1" :hasHeader="false"/>
                
        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesWarranty/>

        <RatesInOutFees/>
        
    </div>
  </template>

<script setup>
const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
    table1:[
        ['Annual Membership', 'FREE'],
        ['Monthly Minimum', 'None'],
        ['Documents', 'USD$2.75 (minimum 4 oz.)']
    ],
    packages:[
        ['Packages','Rates(USD)'],
        ['1 lb','$8.00'],
        ['2 lbs','$11.50'],
        ['3 lbs','$14.00'],
        ['Addisional','$3.00'],
        ['Other Charges (USD)','']
    ],
});
const es_info = ref({
    table1:[
        ['Membresía Anual', 'GRATIS'],
        ['Mínimo mensual', 'Ninguno'],
        ['Documentos', 'USD$2.75 (mínimo 4 oz.)']
    ],
    packages:[
        ['Paquetes','Tarifas(USD)'],
        ['1 lb', '$8.00'],
        ['2 lbs', '$11.50'],
        ['3 lbs','$14.00'],
        ['Adicional','$3.00'],
        ['Otros cargos (USD)','']
    ],         
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })


  </script>
