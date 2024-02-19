<template>
    <div>
                        
        <RatesTable :list="info.packages" :hasHeader="true"/>
        
        <RatesTable :list="info.otherChanges" :hasHeader="true" :colspan="2"/>

        <RatesTable :list="info.homeDelivery" :hasHeader="true"/>

        <RatesWarranty/>
        
        <RatesInOutFees/>


    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
   ['Packages','Rates (USD)'],
   ['0.50 lb','$7.00'],
   ['1 lb','$9.00'],
   ['2 lbs','$12.00'],
   ['3 lbs','$15.00'],
   ['Additional lb','$3.30'],
   ['Additional lb (exceeding 200 lbs)','$2.50'],
],
otherChanges:[
    ['Other charges'],
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
],     
homeDelivery:[
    ['Home delivery','Rates (USD)'],
    ['1 - 3 lbs','$2.00'],
    ['3 - 6 lbs','$3.00'],
    ['6 - 10 lbs','$4.50'],
    ['10 - 25 lbs','$5.50'],
    ['Lb Additional lb (up to 100 lbs)','$0.50'],
    ['Additional pieces (per piece)','$1.00'],
    ['Outside of 10-25 Mile Radius','$5.00'],
    ['Deliveries (+Standard Delivery Fees)','$10.00'],
],
 
});
const es_info = ref({

packages:[
    ['Paquetes','Tarifas (USD)'],
    ['0,50 libras', '$7.00'],
    ['1 lb','$9.00'],
    ['2 lbs', '$12.00'],
    ['3 lbs', '$15.00'],
    ['libras adicionales','$3.30'],
    ['lb adicional - más de 200 lbs', '$2.50'],
],
otherChanges:[
    ['Otros cargos'],
    ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
],     
homeDelivery:[
    ['Entrega a domicilio','Tarifas (USD)'],
    ['1 - 3 lbs', '$2.00'],
    ['3 - 6 lbs', '$3.00'],
    ['6 - 10 lbs', '$4.50'],
    ['10 - 25 lbs', '$5.50'],
    ['Lb Libras adicionales (hasta 100 libras)','$0.50'],
    ['Piezas adicionales (por pieza)','$1.00'],
    ['Fuera del área metropolitana (10-25 millas)','$5.00'],
    ['Entregas (+Tarifas de envío estándar)','$10.00'],
],
      
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
