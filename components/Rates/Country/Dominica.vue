<template>
    <div>
        
        <h2 class="main-heading">AIR</h2>
        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <h2 class="main-heading">{{ info.delivery.title }}</h2>
        <RatesTable :list="info.delivery.table"/>
        
        <RatesWarranty/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table" :hasHeader="true"/>

        
        <p class="text-base mb-4 text-blue ">
            {{ 
                lang==='en'?
                'Millennium Freight staff will clear and process packages through customs and transport items to office location.'
                :'El personal de Millennium Freight despachará y procesará los paquetes a través de la aduana y transportará los artículos a la ubicación de la oficina.' 
            }}
        </p>
        
        <RatesInformation :list="info.list3" />
        
        <RatesInOutFees/>
        
    </div>
  
</template>

<script setup>
const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
    ['Packages','Rates(USD)'],
    ['0.5 lb','$8.50'],
    ['1 lb','$11.00'],
    ['2 lbs','$14.50'],
    ['3 lbs','$19.50'],
    ['Addtional lbs','$3.60'],
],

OtherCharges:[
    ['Other charges'],
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
],
delivery:{
    title:'Delivery Fees (Cash on Delivery)',
    table:[
        ['1 - 3 Packages','ECD 5.00'],
        ['4 - 5 Packages','ECD 10.00'],
        ['6 + Packages','ECD 15.00'],                  		
    ]
},

list3:[
    '(*) Note: Customers will need to provide the invoice for each package on flight days in order to calculate import duties.'
],

customHandling:{
    title:'Customs Handling',
    table:[
        ['DESCRIPTION','RATE*'],
        ['1 - 3 Packages','ECD $25 + applicable duties'],
        ['4 + Packages','ECD $30 + applicable duties'],
    ]
}
});
const es_info = ref({

packages:[
    ['Paquetes','Tarifas(USD)'],
    ['0.5 lb','$8.50'],
    ['1 lb', '$11.00'],
    ['2 lbs', '$14.50'],
    ['3 lbs', '$19.50'],
    ['libras adicionales','$3.60'],
],

OtherCharges:[
    ['Otros cargos'],
    ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
],
delivery:{
    title:'Tarifas de envío (contra reembolso)',
    table:[
        ['1 - 3 Paquetes','ECD 5.00'],
        ['4 - 5 Paquetes','ECD 10.00'],
        ['6 + Paquetes','ECD 15.00'],                  		
    ]
},

list3:[
    '(*) Nota: Los clientes deberán proporcionar la factura de cada paquete en los días de vuelo para calcular los aranceles de importación.'
],

customHandling:{
    title:'Manejo Aduanal',
    table:[
        ['DESCRIPCIÓN','TARIFA*'],
        ['1 - 3 Paquetes','ECD $25 + aranceles aplicables'],
        ['4 + Paquetes','ECD $30 + aranceles aplicables'],
    ]
}
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
