<template>
    <div>

        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <RatesWarranty/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table" :hasHeader="false"/>
        <RatesTable :list="[['(*) Rates do not include VAT']]" />

        <RatesInOutFees/>

    </div>
   
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store)

const en_info = ref({

packages:[
    ['Packages','Rates (USD)'],
    ['0.5 lb','$6.95'],
    ['1 lb','$9.00'],
    ['2 lbs','$14.00'],
    ['3 lbs','$19.00'],
    ['Additional lbs','$5.00'],
],

OtherCharges:[
    ['Other charges'],
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
    ['Customs Handling','See Custom Handling for details'],
    ['Counter Storage Fee if package is not collected within the next 5 business days after ‘Ready At Counter’','USD $5.00 per day'],            	
],

customHandling:{
    title:'Customs Handling',
    table:[
        ['Non Dutiables ','$3.00'],
        ['Personal Entries ','$10.00'],
        ['Commercial Entries    ','$20.00'],
        ['Barbados Government Fee per Entry  ','$5.00'],
        // ['Customs Handling Fee on Personal Entries','$10.00'],
        // ['Customs Handling Fee on Commercial Entries','$20.00'],
        // ['Barbados Goverment Fee per Entry','$5.00'],
    ],
    // tableFooter:'Warehouse storage for package not having a proper invoice will apply 5 business days after receiving status alert “In-Customs Needs Documentation” - USD$10.00 + VAT per day'
},
})
const es_info = ref({
packages:[
    ['Paquetes','Tarifas (USD)'],
    ['0.5 lb','$6.95'],
    ['1 lb','$9.00'],
    ['2 lbs','$14.00'],
    ['3 lbs','$19.00'],
    ['libras adicionales','$5.00'],
],

OtherCharges:[
    ['Otros cargos'],
    ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
    ['Gestión aduanera','Ver Gestión personalizada para más detalles'],
    ["Tarifa de almacenamiento en mostrador si el paquete no se recoge dentro de los próximos 5 días hábiles después de 'Listo en mostrador", "USD $5.00 por día"],
],

customHandling:{
    title:'Manejo Aduanal',
    table:[
        ['Non Dutiables ','$3.00'],
        ['Personal Entries ','$10.00'],
        ['Commercial Entries    ','$20.00'],
        ['Barbados Government Fee per Entry  ','$5.00'],
        // ['Tarifa de gestión aduanera sobre entradas personales','USD $10.00'],
        // ['Tarifa de gestión aduanera sobre entradas comerciales','USD $20.00'],
        // ['Tarifa del gobierno de Barbados por entrada','USD $5.00'],
    ],
    // tableFooter:'El almacenamiento en almacén para el paquete que no tenga una factura adecuada se aplicará 5 días hábiles después de recibir la alerta de estado "Documentación de necesidades en aduana" - USD $ 10.00 + IVA por día'
},
})

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
