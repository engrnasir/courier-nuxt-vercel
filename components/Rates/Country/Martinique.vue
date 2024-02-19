<template>
    <div>
        
        <RatesTable :list="info.packages" :hasHeader="true"/>
        
        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>
        
        <RatesTable :list="info.table1"/>
        
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
    ['Handling Fee (local charge)','Quote with local agent'],
    ['Duties & Taxes','Applicable Duties & Taxes'],
    ['Home Delivery (local charge)','Quote with local agent'],	
],

table1:[
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
    ['SED Shipment','USD $25.00'],
    ['Local clearance fees (for shipment brokerage with applied duties and taxes fees)','USD $30.00 (approx.)'],
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
    ['Tarifa de manejo (cargo local)','Cotización con agente local'],
    ['Derechos e impuestos','Derechos e impuestos aplicables'],
    ['Entrega a domicilio (cargo local)','Cotización con agente local'],	
],
table1:[
    ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
    ['Envío SED','USD $25.00'],
    ['Tarifas de despacho local (para el corretaje de envíos con aranceles e impuestos aplicados)','USD $30.00 (aprox.)'],
],

});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
