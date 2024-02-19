<template>
    <div>
        
        <RatesTable :list="info.packages" :hasHeader="true" :colspan="2"/>
        
        <RatesTable :list="info.otherChanges" :hasHeader="true" :colspan="2"/>

        <h2 class="main-heading">{{ lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}</h2>
        <RatesNewWarrantyTable/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table" :tfoot="info.customHandling.tfoot" :hasHeader="true"/>
        <RatesTable :list="info.customHandling.formula"/>

        <RatesInOutFees/>
    </div>
  
</template>

<script setup>
const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
    ['Packages'],
    ['0.5 lb.','$6.00'],
    ['1 lb','$7.00'],
    ['2 lbs','$13.00'],
    ['3 lbs','$17.50'],
    ['Additional lbs up to 20 lbs','$4.50'],
    ['More than 20 lbs','$4.00'],
],
otherChanges:[
    ['Other charges'],
    ['Home Delivery (Bogota Metropolitan Area)','FREE'],
    ['Home Delivery (Municipios and remote Areas)','USD$1.00 per lb (mini USD$3.50)'],
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
    ['Multiple shipments (additional piece)','USD$2.00 per piece.'],	
],  

customHandling:{
    title:'Customs Handling',
    table:[
        ["PACKAGE'S VALUE IN USD$","RATE IN USD$*"],
        ["$0 - $50","$2.00"],
        ["$50 - $100","$5.00"],
        ["$100 - $500","$10.00"],
        ["$500 - $2,000","$15.00"],
        ["More than $2,000","	Contact Customer Service"],
    ],
    tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
    formula:[['CIF value = Total invoice of the package + Transport cost + Insurance']]
},

});
const es_info = ref({

packages:[
    ['Paquetes'],
    ['0.5 lb','$6.00'],
    ['1 lb','$7.00'],
    ['2 lbs','$13.00'],
    ['3 lbs', '$17.50'],
    ['Lbs adicional hasta 20 lbs', '$4.50'],
    ['Más de 20 lbs','$4.00'],
],
otherChanges:[
    ['Otros cargos'],
    ['Envío a domicilio (Área Metropolitana de Bogotá)','GRATIS'],
    ['Envío a Domicilio (Municipios y Áreas Remotas)','USD$1.00 por libra (mini USD$3.50)'],
    ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
    ['Envíos múltiples (pieza adicional)','USD$2.00 por pieza.'],	
], 
customHandling:{
    title:'Manejo Aduanal',
    table1:[
        ["Valor del paquete en USD$","Tarifa en USD$*"],
        ["$0 - $50","$2.00"],
        ["$50 - $100","$5.00"],
        ["$100 - $500","$10.00"],
        ["$500 - $2,000","$15.00"],
        ["Más de $2,000","Contactar a servicio al cliente"],
    ],
    tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
    formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
},         

});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
