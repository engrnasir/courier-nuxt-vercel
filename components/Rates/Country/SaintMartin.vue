<template>
    <div>
        
        <RatesTable :list="info.packages" :hasHeader="true"/>
        
        <RatesTable :list="info.otherCharges" :hasHeader="true" :colspan="2"/>

        <RatesTable :list="info.maritime" :hasHeader="true" :colspan="2"/>     
        
        <p class=" text-blue mb-4" v-if="lang==='en'"><u>Local documentation charges</u> from vessel company landing agent may apply.</p>        
        <p class=" text-blue mb-4" v-else>Se pueden aplicar <u>cargos por documentación local</u> del agente de desembarque de la compañía naviera.</p>        

        <RatesWarranty/>

        <RatesInOutFees/>

    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
    ['Packages','Rates(USD)'],
    ['0.50 lb','$6.45'],
    ['1 lb','$8.00'],
    ['2 lbs','$11.00'],
    ['3 lbs','$14.50'],
    ['Addtional lb','$3.50'],
],

otherCharges:[
    ['Other charges'],
    ['Restricted Shipments','See Custom Handling for details'],
    ['Customs Handling','<a href="/restricted" class="text-blue">Click here</a>'],
    ['Home delivery at the Metropolitan area','USD $5.00'],
],


maritime:[
    ['MARITIME'],
    ['<b>Individuals and Corporations</b>',''],
    ['Freight','USD $6.45 per cubic ft.'],
    ['Minimum charge:','USD $25.00'],
    ['Handling Fee',''],
    ['From 1 to 40 cubic ft.','USD $10.00'],
    ['From 41 cubic ft. and up','USD $25.00'],

    ['<b>Corporate - 40 Cubic Ft. and Up</b>',''],
    ['This rate discount is applied upon request, minimum invoice charge per month',''],
    ['Freight','USD $5.81 per cubic ft.'],
    ['Minimum charge - 40 cubic ft.','USD $230.00'],
    ['Handling Fee',''],
    ['From 1 to 40 cubic ft.','USD $25.00'],
    ['From 40 cubic ft. and up','USD $50.00'],

    ['<b>Corporate - 80 Cubit Ft. and Up</b>',''],
    ['This rate discount is upon request, minimum invoice charge per month',''],
    ['Freight','USD $5.16 per cubic ft.'],
    ['Minimum charge - 80 cubic ft.','USD $410.00'],
    ['Handling Fee',''],
    ['80 cubic ft. and up','USD $50.00'],

    ['<b>Other Charges</b>',''],
    ["Insurance",''],
    ["For every USD $100 of declared value",'USD $1.50'],
    ["USD $5.00 min. when there is no declared value. Covers a max. of USD $350.00",''],
    ["SED (for declared value of USD $2500 and up)",'	USD $25.00'],
    ["HAZ",'USD $100.00 per UN'],
    ["Delivery",''],
    ["For small cargo to client's location",'USD $65.00'],
    ["For large cargo to client's location",'USD $200.00'],
    ["Other type of cargo",'Request quote'],
]
});
const es_info = ref({

packages:[
    ['Paquetes','Tarifas(USD)'],
    ['0.50 lb', '$6.45'],
    ['1 lb', '$8.00'],
    ['2 lbs', '$11.00'],
    ['3 lbs', '$14.50'],
    ['libras adicionales','$3.50'],
],

otherCharges:[
    ['Otros cargos'],
    ['Envíos restringidos','Ver Manejo personalizado para más detalles'],
    ['Tramitación de aduanas','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
    ['Envío a domicilio en el área Metropolitana','USD $5.00'],
],

maritime:[
     ['MARÍTIMO'],
     ['<b>Personas físicas y jurídicas</b>',''],
     ['Flete','USD $6.45 por pie cúbico'],
     ['Cargo mínimo:','USD $25.00'],
     ['Tasa de tramitación',''],
     ['De 1 a 40 pies cúbicos','USD $10.00'],
     ['Desde 41 pies cúbicos en adelante','USD $25.00'],

     ['<b>Corporativo - 40 pies cúbicos. y arriba</b>',''],
     ['Este descuento de tarifa se aplica bajo pedido, cargo mínimo en factura por mes',''],
     ['Flete','USD $5.81 por pie cúbico'],
     ['Cargo mínimo - 40 pies cúbicos','USD $230.00'],
     ['Tasa de tramitación',''],
     ['De 1 a 40 pies cúbicos','USD $25.00'],
     ['Desde 40 pies cúbicos en adelante','USD $50.00'],

     ['<b>Corporativo - 80 pies cúbicos. y arriba</b>',''],
     ['Este descuento de tarifa es a pedido, cargo mínimo de factura por mes',''],
     ['Flete','USD $5.16 por pie cúbico'],
     ['Cargo mínimo - 80 pies cúbicos','USD $410.00'],
     ['Tasa de tramitación',''],
     ['80 pies cúbicos y más', 'USD $50.00'],

     ['<b>Otros cargos</b>',''],
     ["Seguro",''],
     ["Por cada USD $100 de valor declarado", 'USD $1.50'],
     ["USD $5.00 min. cuando no hay valor declarado. Cubre un máximo de USD $350.00",''],
     ["SED (por valor declarado de USD $ 2500 y más)", 'USD $ 25.00'],
     ["HAZ",'USD $100.00 por ONU'],
     ["Entrega",''],
     ["Para carga pequeña a domicilio del cliente",'USD $65.00'],
     ["Para carga grande a la ubicación del cliente", 'USD $ 200.00'],
     ["Otro tipo de carga",'Solicitar cotización'],
 ]
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
