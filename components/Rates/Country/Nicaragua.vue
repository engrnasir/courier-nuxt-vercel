<template>
    <div>
        <p class="text-base mb-4 text-blue ">
            {{lang==='en'?'Effective January 12, 2022.':'Efectivo el 12 de enero de 2022'}}
        </p>

        <RatesTable :list="info.table1"/>

        <RatesTable :list="info.packages" :hasHeader="true" :colspan="2"/>

        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <RatesInformation :list="info.list2" />

        <RatesWarranty/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table1" :hasHeader="true" :tfoot="info.customHandling.tfoot"/>
        <RatesTable :list="info.customHandling.formula"/>

        <RatesInformation :list="info.list3" />
        
        <RatesInOutFees/>

    </div>
  
</template>

<script setup>


const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

table1:[            
    ['Monthly Minimum','<b>None</b>'],
],
packages:[
    ['Packages'],
    ['0.50','$5.00'],
    ['1 lb','$6.00'],
    ['2 lbs','$10.50'],
    ['3 lbs','$15.00'],
    ['4 lbs','$19.50'],
    ['5 lbs','$24.00'],
    ['Additional','$4.00'],
    ['More than 20 lbs','$2.50'],
],
OtherCharges:[
    ['Other charges'],
    ['Home Delivery in the Metropolitan Area (Managua)','$3.00 per package'],
    ['Customs Handling','See Custom Handling for details'],
    ['Restricted Shipments','<a href="" class="text-blue">Click here</a>'],
    ['Documents','FREE'],
],
list2:[
    'Rates do not include Customs Handling (duties and storage fees).',
    'All security documents with a tracking number will be treated as packages.'
],


customHandling:{
    title:'Customs Handling',
    table1:[
        ["Package's CIF Value", 'Rate'],
        ['Books','$1.00'],
        ['$0-$50.00','$3.00'],
        ['$50.00 - $100.00','$6.00'],
        ['$100.01 - $500.00','$11.00'],
        ['$501.00-$1,000.00','$60.00 +'],
        ['Permits','FREE'],

    ],
    tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
    formula:[['CIF Value	=	Total package invoice	+	Transportation cost	+	Insurance']]
},
list3:[
    'Aeropost automatically clears all your retained packages up to USD $1,000 CIF value. Taxes and customs handling costs will be charged to the package.',
    'Packages with CIF value over USD $1,000.00 will require an individual customs policy. Documents will be handed to the customer for him to do the procedure with the Customs Agency of his choice.',
],
});
const es_info = ref({

table1:[            
    ['Mínimo mensual','<b>Ninguno</b>'],
],
packages:[
    ['Paquetes'],
    ['0.50 lb','$5.00'],
    ['1 lb', '$6.00'],
    ['2 lbs', '$10.50'],
    ['3 lbs', '$15.00'],
    ['4 lbs', '$19.50'],
    ['5 lbs', '$24.00'],
    ['Adicional','$4.00'],
    ['Más de 20 lbs','$2.50'],
],
OtherCharges:[
    ['Otros cargos'],
    ['Envío a domicilio en el Área Metropolitana (Managua)','$3.00 por paquete'],
    ['Gestión aduanera','Ver Gestión personalizada para más detalles'],
    ['Envíos restringidos','<a href="" class="text-blue">Haga clic aquí</a>'],
    ['Documentos','GRATIS'],
],
list2:[
    'Las tarifas no incluyen el manejo de aduanas (derechos y tasas de almacenamiento).',
    'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes'
],

customHandling:{
    title:'Manejo Aduanal',
    table1:[
        ["Valor CIF del paquete", 'Tarifa'],
        ['Libros','$1.00'],
        ['$0-$50.00','$3.00'],
        ['$50.00 - $100.00','$6.00'],
        ['$100.01 - $500.00','$11.00'],
        ['$501.00-$1,000.00','$60.00 +'],
        ['Permisos','GRATIS'],
    ],
    tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
    formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
},
list3:[
    'Aeropost desalmacena automáticamente todos sus paquetes retenidos hasta un valor CIF de USD $1,000. Los impuestos y los gastos de tramitación aduanera se cargarán al paquete.',
    'Paquetes con valor CIF superior a USD $1,000.00 requerirán una póliza de aduana individual. Se entregarán los documentos al cliente para que realice el trámite ante la Agencia de Aduanas de su elección.',
],
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
