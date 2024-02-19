<template>
    <div>
        

        <RatesTable :list="info.packages" :hasHeader="true" :colspan="2"/>

        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <RatesInformation :list="info.list2" />

        <h2 class="main-heading">{{ lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}</h2>
        <RatesNewWarrantyTable/>
        
        <h2 class="main-heading">{{ info.consolidatedPolicy.title }}</h2>
        <RatesTable :list="info.consolidatedPolicy.table1" :hasHeader="true" :tfoot="info.consolidatedPolicy.table1Footer"/>

        
        <RatesInformation :list="info.list3" />
        
        <RatesInOutFees/>
        
    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
    ['Packages'],
    ['Annual Membership','FREE'],
    ['Monthly Minimum','None'],
    ['Shipping Miami-Panama','USD $3.00 per lb'],
],

OtherCharges:[
    ['Other charges'],
    ['Delivery','USD $3.75 per package'],
    ['Customs Handling','See Custom Handling for details'],
    ['Restricted Shipments','<a href="" class="text-blue">Click here</a>'],
    ['Multiple Shipments (additional piece)','USD $2.00 a piece'],
],

list2:[
    'Rates do not include Customs Handling (duties and storage fees).',
    'All security documents with a tracking number will be treated as packages.'
],

consolidatedPolicy:{
    title:'Consolidated Policy',
    table1:[
        ["Package's CIF Value", 'Rate(USD)'],
        ['Up to USD $99.99','$1.00'],
        ['USD $100.00 - USD $500.00','$2.00'],
        ['USD $500.01 - USD $1000.00','$3.50'],
        ['USD $1,000.00 and above','$5.00'],
    ],
    table1Footer:'* Does not include ITBM',
},
list3:[
    '* All packages with a CIF value of up to USD $2,000 pay the government a fee of USD $100 in addition to import taxes. ',
    '* Packages with a CIF value below USD $100.00, consigned to an individual, are exempt from import taxes. ',
    '* Packages that remain in the customs area (airport warehouse) for more than two weeks will be valued by local custom.'                
],
});
const es_info = ref({
            effectiveDate:'Efectivo a partir del 1 de marzo de 2023.',
            list1:[
                'Cobramos por el peso, NO por el tamaño de su paquete.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com.',
            ],

            packages:[
                ['Paquetes'],
                ['Membresía Anual','GRATIS'],
                ['Mínimo mensual','Ninguno'],
                ['Envío Miami-Panamá','USD $3.00 por lb'],
            ],
            
            OtherCharges:[
                ['Otros cargos'],
                ['Entrega','USD $3.75 por paquete'],
                ['Gestión aduanera','Ver Gestión personalizada para más detalles'],
                ['Envíos restringidos','<a href="" class="text-blue">Haga clic aquí</a>'],
                ['Envíos múltiples (pieza adicional)','USD $2.00 por pieza'],
            ],
            list2:[
                'Las tarifas no incluyen el manejo de aduanas (derechos y tasas de almacenamiento).',
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes'
            ],

            consolidatedPolicy:{
                title:'Política consolidada',
                table1:[
                    ["Valor CIF del paquete", 'Tarifa(USD)'],
                    ['Hasta USD $99.99','$1.00'],
                    ['USD $100.00 - USD $500.00','$2.00'],
                    ['USD $500.01 - USD $1,000.00','$3.50'],
                    ['USD $1,000.00 y superior','$5.00'],
                ],
                table1Footer:'* No incluye ITBM',
            },
            list3:[
                '* Todos los paquetes con un valor CIF de hasta USD $ 2,000 pagan al gobierno una tarifa de USD $ 100 además de los impuestos de importación. ',
                '* Los bultos con valor CIF inferior a USD $100.00, consignados a persona física, están exentos de impuestos de importación. ',
                '* Los bultos que permanezcan en la zona aduanera (bodega aeroportuaria) por más de dos semanas serán valorados por la aduana local.'
            ],
        });

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
