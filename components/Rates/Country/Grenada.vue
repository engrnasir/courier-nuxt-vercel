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
        ['0.5 lb','USD $6.95'],
        ['1 lb','USD $9.00'],
        ['Addtional lb','$4.00'],
    ],

    OtherCharges:[
        ['Other charges'],
        ['Handling Fee','USD $5.00'],
        ['Duties and taxes','Applicable duties and taxes'],
        ['Customs warehousing (local charge at customs)','$3.00ECD'],
        ['Home Delivery (local charge)','Quote with local agent'],
    ],
    table1:[
        ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
        ['SED','USD $25.00'],
    ],

});
const es_info = ref({
    packages:[
        ['Paquetes','Tarifas(USD)'],
        ['0.5 lb','USD $6.95'],
        ['1 lb','USD $9.00'],
        ['libras adicionales','$4.00'],
    ],
    
    OtherCharges:[
        ['Otros cargos'],
        ['Tarifa de manejo','USD $5.00'],
        ['Derechos e impuestos','Derechos e impuestos aplicables'],
        ['Almacenamiento aduanero (cargo local en la aduana)','$3.00ECD'],
        ['Entrega a domicilio (cargo local)','Cotización con agente local'],
    ],
    table1:[
        ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
        ['SED','USD $25.00'],
    ],
    
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
