<template>
    <div>
        <RatesInformation title="You can track your packages on our site at www.aeropost.com." />

        <RatesTable :list="info.table1"/>

        <RatesTable :list="info.packages" :hasHeader="true" :colspan="2"/>
        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <h2 class="main-heading">{{ lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}</h2>
        <RatesNewWarrantyTable :vat="true"/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table1" :tfoot="info.customHandling.tfoot" :hasHeader="true"/>
        <RatesTable :list="info.customHandling.formula"/>

        
        <RatesInformation :list="info.list2" />
        
        <RatesInOutFees/>

    </div>
  
</template>

<script setup>
const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
            table1:[
                ['Annual Membership', '<b>FREE</b>'],
                ['Monthly Minimum', '<b>None</b>']
            ],
            packages:[
                ['Packages'],
                ['Packages up to 1 lb (USD $4.75 minimum)', 'USD $3.65 + IVA'],
                ['Packages froms 2 lbs to 35 lbs', 'USD $3.65 per lb + IVA'],
                ['more than 35 lbs', 'USD $2.95 per lb + IVA']
            ],
            OtherCharges:[
                ['Other charges'],
                ['Fuel Surcharge', 'USD $0.85 per lb + IVA'],
                ['Home Delivery','USD $2.65 + IVA each package (up to 25 pounds)'],
                ['Customs Handling', 'See Custom Handling for details'],
                ['Restricted Shipments', '<a href="" class="text-blue">Click here</a>']
            ],
            customHandling:{
                title:'Customs Handling',
                table1:[
                    ["Package's CIF Value", 'Rate (USD) + VAT'],
                    ['USD $0 - USD $25', '$2.99 + VAT'],
                    ['USD $26 - USD $100','$5.99 + VAT'],
                    ['USD $101 - USD $300','$12.50 + VAT'],
                    ['USD $301 - USD $500','$17.99 + VAT'],
                    ['USD $501 - USD $1,000','$34.99 + VAT'],
                    ["More than USD$1,000 (Individual Custom's Policy)",'$54.99 + VAT'],
                    ['Sanitary Permit Paperwork','$49.99+ VAT'],
                    ['Chemicals and Pharmaceuticals Board Permit Paperwork','$49.99+ VAT'],
                    ['Package Inspection','$25.00 + VAT'],
                ],
                tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
                formula:[['CIF value = Total invoice of the package + Transport cost + Insurance']]
            },
            list2:[
                'Aerocasillas automatically clears all your retained packages up to USD $1,000 CIF value. Taxes and customs handling costs will be charged to the package.',
                'Packages with CIF value over USD $1,000.00 will require an individual customs policy.'
            ]
        });
const es_info = ref({
            table1:[
                ['Membresía anual', '<b>GRATIS</b>'],
                ['Mínimo mensual', '<b>Ninguno</b>']
            ],
            packages:[
                ['Paquetes'],
                ['Paquetes hasta 1 lb (mínimo USD $4.75)', 'USD $3.65 + IVA'],
                ['Paquetes desde 2 lbs hasta 35lb.', 'USD $3.65 por lb + IVA'],
                ['más de 35 lbs', 'USD $2.95 por lb + IVA']
            ],
            OtherCharges:[
                ['Otros cargos'],
                ['Recargo por combustible', 'USD $0.85 por libra + IVA'],
                ['Entrega a domicilio',' USD $2.65 + IVA por paquete (hasta 25 libras)'],
                ['Gestión aduanera', 'Ver Gestión personalizada para más detalles'],
                ['Envíos restringidos', '<a href="" class="text-blue">Haga clic aquí</a>']
            ],
            customHandling:{
                title:'Manejo Aduanal',
                table1:[
                    ["Valor CIF del Paquete", 'Tarifa (USD) + IVA'],
                    ['$0 - $25', '$2.99 + IVA'],
                    ['$26 - $100','$5.99 + IVA'],
                    ['$101 - $300','$12.50 + IVA'],
                    ['$301 - $500','$17.99 + IVA'],
                    ['$501 - $1,000','$34.99 + IVA'],
                    ["Más de $1,000 (Política de Aduana Individual)", '$54.99 + IVA'],
                    ['Trámites Permiso Sanitario','$49.99+ IVA'],
                    ['Trámites de permisos de la Junta de Productos Químicos y Farmacéuticos', '$49.99+ IVA'],
                    ['Inspección de Paquete','$25.00 + IVA'],
                ],
                tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
                formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
            },
            list2:[
                'Aerocasillas limpia automáticamente todos sus paquetes retenidos hasta un valor CIF de USD $ 1,000. Los impuestos y los gastos de tramitación aduanera se cargarán al paquete.',
                'Paquetes con valor CIF superior a USD $1,000.00 requerirán póliza de aduana individual.'
            ]
        });

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
