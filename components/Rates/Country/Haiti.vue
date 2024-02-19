<template>
    <div>
            
        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

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
    ['0.50 lb','$7.50'],
    ['1 lb','$9.50'],
    ['2 lbs','$14.00'],
    ['3 lbs','$17.00'],
    ['Addtional lb','$3.30'],
],

OtherCharges:[
    ['Other charges'],
    ['Home Delivery','$5.00 por lb'],
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
    ['Documents','$4.00 por lb minimun $1.00'],
],

});
const es_info = ref({

packages:[
    ['Paquetes','Tarifas(USD)'],
    ['0.50 libras', '$7.50'],
    ['1 lb','$9.50'],
    ['2 lbs', '$14.00'],
    ['3 lbs', '$17.00'],
    ['libras adicionales','$3.30'],
],

OtherCharges:[
    ['Otros cargos'],
    ['Entrega a domicilio','$5.00 por lb'],
    ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
    ['Documentos','$4.00 por lb mínimo $1.00'],
],

});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })




</script>
