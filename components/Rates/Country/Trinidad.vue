<template>
    <div>
        <p class="snippet">
            {{ 
                lang==='en'?
                'Our Miami Address service allow you to shop your favorite U.S. websites and receive your purchases at your home, work or our local store.'
                :'Nuestro servicio de dirección de Miami le permite comprar en sus sitios web favoritos de EE. UU. y recibir sus compras en su hogar, trabajo o nuestra tienda local.' 
            }}
        </p>

        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesTable :list="info.otherCharges" :hasHeader="true" :colspan="2"/>
       

        <h2 class="main-heading">
            {{ lang==='en'? 'Brokerage Fees':'Honorarios de corretaje' }}
        </h2>
        <p class="snippet">
            {{ 
                lang==='en'?'Brokerage fees are only applicable to commercial shipments that require a formal entry.':'Las tarifas de corretaje solo se aplican a los envíos comerciales que requieren una entrada formal.'
            }}
        </p>
        <RatesTable :list="info.brokerageList" :hasHeader="true"/>
        
        <RatesInformation :list="info.list2" />
        
        <RatesTable :list="info.table1"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}
        </h2>
        <RatesNewWarrantyTable />
        
        <RatesInOutFees/>

    </div>
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
    ['Packages',' Rates(USD)'],
    ['0.5 lb','USD $5.65'],
    ['1lb','USD $6.20'],
    ['2 lbs','USD $10.90'],
    ['3 lbs','USD $13.60'],
    ['Additional lbs','USD $3.50'],
    ['Packages over 35 lbs (US$ per lb)','USD $3.15'],
],


otherCharges:[
    ['Other Charges'],
    ['Local Delivery','FREE (some exceptions apply)'],
    ['Service Charge','$2.50 USD + VAT per shipment'],
    ['Restricted Shipments','<a href="/POS/en/restricted" class="text-blue">Click here</a>']
],

brokerageList:[
    ['PACKAGE CIF VALUE','RATE*'],
    ['USD $0.01 to USD $1,000.00','USD$22.50'],
    ['USD $1,001.00 to USD $3,000.00','USD$42.50'],
    ['More than USD $3,000.00','Contact Customer Service'],
    ['*VAT Included',''],
],

list2:[
    'All packages entering the country are subject to inspection through Customs.',
    'You may authorize Aeropost to automatically clear packages through Customs with a C.I.F. value of up to US $3,000.',
    'To calculate duties for a package use our Online Calculator or ask Customer Service for help.',
    'All security documents with a tracking number will be treated as packages.',
],

table1:[
    ['CIF Value	=	Total package invoice	+	Transportation cost	+	Insurance']
],

});
const es_info = ref({

packages:[
    ['Paquetes ','Tarifas(USD)'],
    ['0.5 lb', 'USD $5,65'],
    ['1 lb','USD $6.20'],
    ['2 lbs', 'USD $10.90'],
    ['3 lbs', 'USD $13.60'],
    ['lbs adicionales', 'USD $3.50'],
    ['Paquetes de más de 35 lbs (US$ por libra)','USD $3.15'],
],


otherCharges:[
    ['Otros cargos'],
    ['Entrega local','GRATIS (se aplican algunas excepciones)'],
    ['Cargo por servicio','$2.50 USD + IVA por envío'],
    ['Envíos restringidos',`<a href="/POS/es/restricted" class="text-blue">Haga clic aquí</a>`]
],

brokerageList:[
    ['VALOR CIF DEL PAQUETE','TARIFA*'],
    ['USD $0.01 a USD $1,000.00','USD$22.50'],
    ['USD $ 1,001.00 a USD $ 3,000.00', 'USD $ 42.50'],
    ['Más de USD $3,000.00','Comuníquese con Servicio al Cliente'],
    ['*VAT incluido',''],
 ],

list2:[
    'Todos los paquetes que ingresan al país están sujetos a inspección a través de la Aduana.',
    'Usted podrá autorizar a Aeropost a despachar automáticamente paquetes por Aduana con C.I.F. valor de hasta US $3,000.',
    'Para calcular los aranceles de un paquete, use nuestra Calculadora en línea o solicite ayuda al Servicio de atención al cliente.',
    'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
],

table1:[
    ['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']
],

});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })


</script>

<style scoped>
.snippet{
    @apply text-blue mb-4;
}
</style>
