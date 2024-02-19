<template>
    <div>
        
        <RatesTable :list="info.packages" :hasHeader="true"/>
        
        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>
        
        <RatesTable :list="info.table1"/>

        <RatesInformation :list="info.list2" />

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
    ['0.50 lb','$6.95'],
    ['1 lb','$9.00'],
    ['Addtional lbs','$4.00'],
],

OtherCharges:[
    ['Other charges'],
    ['Handling Fee (local charge)','$20.00EC'],
    ['Duties & Taxes','Applicable Duties & Taxes'],
    ['Home Delivery (local charge)','Quote with local agent']
],
table1:[
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
    ['SED Shipment','USD $25.00'],
],

list2:[
    'Rate is based on shipments moving Airfreight (Miami-Antigua) and Seafreight via Ferry (Antigua-Montserrat). When the Ferry is not available, shipments will remain in Antigua waiting for reinstatement of Ferry service. Customers can request the Airfreight option at their own expense; Aeropost will support with airfreight rate negotiation and delivery of shipments to the airline.',
    'All documents with a tracking number will be processed as packages.',
    'Shipments that require any special handling, are subject to additional charges. Please quote with local office.',
    'Additional charges apply to shipments measuring over 1 meter on any side. Please quote with the local office.        ',
],
});
const es_info = ref({

packages:[
    ['Paquetes','Tarifas(USD)'], 
    ['0.50 lb','$6.95'], 
    ['1 lb','$9.00'], 
    ['Adicional lbs','$4.00'],
],

OtherCharges:[
    ['Otros cargos'],
    ['Tarifa de manejo (cargo local)','$20.00EC'],
    ['Derechos e impuestos','Derechos e impuestos aplicables'],
    ['Entrega a domicilio (cargo local)','Cotización con agente local']
],
table1:[
    ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
    ['Envío SED','USD $25.00'],
],

list2:[
    'La tarifa se basa en envíos que se mueven por vía aérea (Miami-Antigua) y marítima a través de Ferry (Antigua-Montserrat). Cuando el Ferry no esté disponible, los envíos permanecerán en Antigua a la espera de la reposición del servicio de Ferry. Los clientes pueden solicitar la opción de carga aérea a su cargo; Aeropost apoyará con la negociación de tarifas de flete aéreo y entrega de envíos a la aerolínea.',
    'Todos los documentos con un número de seguimiento se procesarán como paquetes.',
    'Los envíos que requieran algún manejo especial, están sujetos a cargos adicionales. Cotice con la oficina local.',
    'Se aplican cargos adicionales a los envíos que miden más de 1 metro en cualquier lado. Cotice con la oficina local. ',
],
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
