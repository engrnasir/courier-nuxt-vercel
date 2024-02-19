<template>
    <div>

        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesWarranty/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table" :tfoot="info.customHandling.tfoot" :hasHeader="true"/>
        <RatesTable :list="info.customHandling.formula"/>

        <RatesInOutFees/>

    </div>
  
</template>

<script setup>
import { useStore } from '@/stores';
import { storeToRefs } from 'pinia';
const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
    ['Packages','Rates(USD)'],
    ['0.5 lb','$6.50'],
    ['1 lb','$7.50'],
    ['2 lbs','$10.50'],
    ['3 lbs','$13.50'],
    ['Addtional lbs','$3.75'],       	
],

customHandling:{
    title:'Customs Handling',
    table:[
        ['','AWG'],
        ['$0 - $50','AWG 15.00'],
        ['$50 - $150','AWG 25.00'],
        ['$150 - $200','AWG 30.00'],
        ['$201 - $250','AWG 32.00'],
        ['$250 - $300','AWG 34.00'],
        ['$300 - $350','AWG 36.00'],
        ['$350 - $400','AWG 38.00'],
        ['$401 - $500','AWG 40.00'],
        ['$500+','AWG 45.00'],
        ['Special Permit','AWG 16.00'],
        ['Bislijst','AWG 16.00'],
        ['OpenBox to verify','AWG 39.00'],
        ['To Receive Package Next Day','AWG 39.00'],              
    ],
    tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
    formula:[['CIF value = Total invoice of the package + Transport cost + Insurance']]
},
})
const es_info = ref({

    packages:[
        ['Paquetes','Tarifas(USD)'],
        ['0.5 lb', '$6.50'],
        ['1 lb', '$7.50'],
        ['2 lbs', '$10.50'],
        ['3 lbs', '$13.50'],
        ['libras adicionales', '$3.75'],   	
    ],


    customHandling:{
        title:'Manejo Aduanal',
        table:[
            ['','AWG'],
            ['$0 - $50','AWG 15.00'],
            ['$50 - $150','AWG 25.00'],
            ['$150 - $200','AWG 30.00'],
            ['$201 - $250','AWG 32.00'],
            ['$250 - $300','AWG 34.00'],
            ['$300 - $350','AWG 36.00'],
            ['$350 - $400','AWG 38.00'],
            ['$401 - $500','AWG 40.00'],
            ['$500+','AWG 45.00'],
            ['Permiso especial','AWG 16.00'],
            ['Bislijst','AWG 16.00'],
            ['OpenBox para verificar','AWG 39.00'],
            ['Para recibir el paquete al día siguiente','AWG 39.00'],
        ],
        tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
        formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
    },
    })

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
