<template>
    <div>
                        
        <h3 class="heading" v-if="lang==='en'">Rates for all packages received at the Venezuelan Customs.</h3>
        <h3 class="heading" v-else>Tarifas para todos los paquetes recibidos en la Aduana de Venezuela.</h3>

        <RatesTable :list="info.packages" :hasHeader="true" :colspan="3"/>
        
        <RatesInformation :list="info.list2" />
        
        <RatesInOutFees/>
        
    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
   ['International Costs (USA)'],
   ['','1 lb','additional lbs'],
   ['Freight','$4.00','$3.00'],
   ['PakProtect*','$2.00 for each $100 of declared value',''],
   ['Customs Handling','$1.50 for each lb',''],
],
list2:[
    "Costs through MyAero for International Freight and Pakprotect are received and processed by: Aeropost International Services Inc. (Company registered in the United States of America).",
    "The client assumes that by not pre-alerting and not declaring the value of the merchandise, he wishes a maximum insurance coverage of USD $100.",
    "The user accepts and declares to be aware that they are contracting the cargo reception and handling services of Aeropost International Services Inc, a company that operates in the territory of the United States of America, whose services are charged in its official currency, which is the American dollar.",
    "Aeropost International Services Inc, a US company, has contracted the services of Aeropost de Venezuela Adv SA as a logistics operator in the territory of the Bolivarian Republic of Venezuela.",
    "The packages whose contracted Pakprotect service has been paid in Bs, will enjoy coverage in Bs at the Dicom rate in force at the time of the accident.    ",
],

});
const es_info = ref({

packages:[
    ['Costos internacionales (EE. UU.)'],
    ['','1 libra','libras adicionales'],
    ['Flete','USD $4.00','USD $3.00'],
    ['PakProtect*','USD $2.00 por cada USD $100 de valor declarado',''],
    ['Manejo de Aduana','USD $1.50 por cada libra',''],
],
list2:[
    "Los costos a través de MyAero para International Freight y Pakprotect son recibidos y procesados por: Aeropost International Services Inc. (Empresa registrada en los Estados Unidos de América)",
    "El cliente asume que al no prealertar y no declarar el valor de la mercancía, desea una cobertura de seguro máxima de USD $100.",
    "El usuario acepta y declara estar en conocimiento de que está contratando los servicios de recepción y manejo de carga de Aeropost International Services Inc, empresa que opera en el territorio de los Estados Unidos de América, cuyos servicios son cobrados en su moneda oficial, la cual es el dólar americano.",
    "Aeropost International Services Inc, empresa estadounidense, ha contratado los servicios de Aeropost de Venezuela Adv SA como operador logístico en el territorio de la República Bolivariana de Venezuela.",
    "Los bultos cuyo servicio Pakprotect contratado haya sido pagado en Bs, gozarán de cobertura en Bs a la tarifa Dicom vigente al momento del siniestro.",
],
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })


</script>
