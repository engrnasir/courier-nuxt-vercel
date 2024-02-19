<template>
    <div>

        <h2 class="main-heading">
            {{lang==='en'?'CALCULATE your shipment':'CALCULA tu envío'}}
        </h2>
        <RatesTable :list="info.packages" :hasHeader="true" :colspan="2"/>
        <RatesTable :list="info.otherCharges" :hasHeader="true" :colspan="2"/>

        <p class="text-base text-blue mb-5">
            {{ lang==='en'?'Valid for customers that register their BAC credit or debit card as payment method.':'Válido para clientes que registren su tarjeta de crédito o débito BAC como medio de pago.' }}
        </p>
        <p class="text-base text-blue mb-5">
            {{ lang==='en'?'**The package weight results of the next whole superior unit in kg, includes the contents and package material when weighted. E.g. 2000g will be 3kg.':'**El peso del bulto resulta de la siguiente unidad entera superior en kg, incluye el contenido y material del bulto al pesarlo. P.ej. 2000g serán 3kg.' }}
        </p>

        <h2 class="main-heading">{{ lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}</h2>
        <RatesNewWarrantyTable/>
        

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table1" :tfoot="info.customHandling.table1footer" :hasHeader="true"/>

        
        <h2 class="main-heading">{{ info.individualCustoms.title }}</h2>
        <RatesTable :list="info.individualCustoms.table1" :tfoot="info.individualCustoms.table1Footer" :hasHeader="true"/>
        
        <h2 class="main-heading">{{ info.storage.title }}</h2>
        <RatesStorageTable :list="info.storage.table1"/>
        <RatesStorageTable :list="info.storage.table2"/>
        <RatesStorageTable :list="info.storage.table3"/>
        
        <RatesInOutFees/>

    </div>
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
        title1:'Compare Account Types and Find the One Is Best for You:',
        packages:[
            ['Packages****'],
            ['0.5 KG', 'US$6.75'],
            ['1 KG', 'US$10.85'],
            ['2 KG', 'US$17.05'],
            ['3 KG', 'US$23.25'],
            ['4 KG', 'US$28.90'],
            ['5 KG', 'US$35.05'],
            ['6 KG','US$40.70'],
            ['7 KG','US$46.90'],
            ['8 KG','US$53.05'],
            ['9 KG','US$59.30'],
            ['10 KG','US$65.00'],
            ['Additional kg in packages of 100 kg or more', 'US$5.80']
        ],
        otherCharges:[
            ['Other charges'],
            ['Fuel Surcharge', '22%'],
            ['Delivery in Metropolitan Area', 'US$2.00'],
            ['Delivery (Outside the Metropolitan Area) from up to 1 Kg', 'US$4.00 minimum'],
            ['Delivery (Outside the Metropolitan Area) additional kilograms over 1 Kg', 'US$2.00'],
            ['Restricted Shipments', '<a @click="apa" href="" class="text-blue">Click here</a>'],
            ['Multiple shipments (Additional piece)', 'US$2.00 per piece']
        ],
        customHandling:{
            title:'Customs Handling',
            table1:[
                ["Package's CIF Value", 'Rate* + IVA'],
                ["Books**", "US$4.50"],
                ['Up to US$30.00 CIF', 'US$4.95'],
                ['US$30.01 - US$50', 'US$5.95'],
                ['US$50.01 - US$100', 'US$9.95'],
                ['US$100.01 - US$250', 'US$17.95'],
                ['US$251 - US$500', 'US$23.60'],
                ['US$501 - US$1,000', 'US$55.25'],
                ['US$1,001 - US$2,500', 'US$89.15'],
                ['US$2,501 - US$5,000', 'US$102.25'],
                ['US$5,001 - US$10,000', 'US$116.50'],
                ['US$10,001 - US$15,000', 'US$129.80'],
                ['+US$15,000.01', 'US$0.67% CIF'],
                ['Permits', 'US$14.00 + IVA'],
            ],
            table1footer:'Restricted Shipments <br> *Rate does not include sales tax. Applicable until abandonment declaration is effective according to Customs procedures.'
        },
        individualCustoms:{
            title:'Individual Customs Policy',
            table1:[
                ["Package's CIF Value", "Rate*"],
                ['US$1,001 - US$2,500','US$65.00'],
                ['US$2,501 - US$5,000', 'US$75.00'],
                ['US$5,001 - US$10,000', 'US$85.00'],
                ['US$10,001 - US$15,000', 'US$95.00'],
                ['Más de US$15,000', '0.5% CIF value'],
            ],
            table1Footer:'Restricted Shipments\n*Rate does not include sales tax. Applicable until abandonment declaration is effective according to Customs procedures.'
        },
        storage:{
            title:'Storage',
            table1:[
                ['Storage Rates for (Courier) Packages Processed by Aerocasillas (Agency)'],
                ['Weight','1 to 30 days','31 to 365 days'],
                ['Under 100 kg','FREE', 'US$55.00 + IV'],
                ['Over 100 Kg', 'US$95.00 + IV', 'US$95.00 + IV'],
            ],
            table2:[
                ['Storage Rates for (Courier) Packages Processed by a Customs Inspector'],
                ['Weight','1 to 30 days','31 to 365 days'],
                ['Under 100 kg', 'US$10.00 + IV', 'US$60.00 + IV'],
                ['Over 100 Kg', 'US$95.00 + IV', 'US$95.00 + IV']
            ],
            table3:[
                ['Storage Rates for (Courier) Packages Processed by External Customs Brokerage Agencies'],
                ['Weight','1 to 30 days','31 to 365 days'],
                ['Under 100 kg','US$20.00 + IV','US$70.00 + IV'],
                ['Over 100 Kg', 'US$105.00 + IV', 'US$105.00 + IV']
            ]
        }
     })
const es_info = ref({
        title1:'Compare los tipos de cuenta y encuentre la mejor para usted:',
        packages:[
            ['Paquetes****'],
            ['0.5 KG', 'US$6.75'],
            ['1 KG', 'USD 10.85'],
            ['2 KG', 'USD 17.05'],
            ['3 KG', 'USD 23.25'],
            ['4 KG', 'USD 28.90'],
            ['5 KG', 'USD 35.05'],
            ['6 KG', 'US$40.70'],
            ['7 KG', 'US$ 46.90'],
            ['8 KG','US$53.05'],
            ['9 KG','US$59.30'],
            ['10 KG','US$65.00'],
            ['KG adicionales en paquetes de 100 kg o más', 'US$5.80']
        ],
        otherCharges:[
            ['Otros cargos'],
            ['Recargo por combustible', '22%'],
            ['Entrega en Área Metropolitana', 'US$2.00'],
            ['Envío (Fuera del Área Metropolitana) desde hasta 1 Kg', 'Mínimo US$4.00'],
            ['Entrega (Fuera del Área Metropolitana) kilogramos adicionales sobre 1 Kg', 'US$2.00'],
            ['Envíos restringidos', '<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
            ['Envíos múltiples (pieza adicional)', 'US$2.00 por pieza']
        ],
        customHandling:{
            title:'Manejo Aduanal',
            table1:[
                ["Valor CIF del Paquete", 'Tarifa* + IVA'],
                ["Libros**", "$4,50"],
                ['$30.00 CIF', '$4.95'],
                ['$30.01 - $50.00', '$5.95'],
                ['$50.01 - $100.00', '$9.95'],
                ['$100.01 - $250.00', '$17.95'],
                ['$251 - $500.00', '$23.60'],
                ['$501 - $1,000.00', '$55.25'],
                ['$1,001 - $2,500.00', '$89.15'],
                ['$2,501 - $5,000.00', '$102.25'],
                ['$5,001 - $10,000.00', '$116.50'],
                ['$10,001 - $15,000.00', '129.80'],
                ['+$15,000', '$0.67% CIF'],
                ['Permisos', '$14.00 + IVA'],
            ],
            table1footer:'Envíos Restringidos <br> *La tarifa no incluye IVA. Aplicable hasta que se haga efectiva la declaración de abandono según los procedimientos aduaneros.'
        },
        individualCustoms:{
            title:'Póliza Aduanera Individual',
            table1:[
                ["Valor CIF del Paquete", "Tarifa*"],
                ['$1,001 - $2,500','$65.00'],
                ['$2,501 - $5,000', '$75.00'],
                ['$5,001 - $10,000', '$85.00'],
                ['$10,001 - $15,000', '$95.00'],
                ['Más de $15.00', '0.5% valor CIF'],
            ],
            table1Footer:'Envíos restringidos\n*La tarifa no incluye impuesto sobre las ventas. Aplicable hasta que se haga efectiva la declaración de abandono según los procedimientos aduaneros.'
        },
        storage:{
            title:'Almacenamiento',
            table1:[
                ['Tarifas de Almacenamiento de Paquetes (Courier) Tramitados por Aerocasillas (Agencia)'],
                ['Peso','1 a 30 días','31 a 365 días'],
                ['Menos de 100 kg','GRATIS', 'US$55.00 + IV'],
                ['Más de 100 Kg', 'US$95.00 + IV', 'US$95.00 + IV'],
            ],
            table2:[
                ['Tarifas de almacenamiento para paquetes (de mensajería) procesados por un inspector de aduanas'],
                ['Peso','1 a 30 días','31 a 365 días'],
                ['Menos de 100 kg', 'US$10.00 + IV', 'US$60.00 + IV'],
                ['Más de 100 Kg', 'US$95.00 + IV', 'US$95.00 + IV']
            ],
            table3:[
                ['Tarifas de almacenamiento para paquetes (de mensajería) procesados por agencias de aduanas externas'],
                ['Peso','1 a 30 días','31 a 365 días'],
                ['Menos de 100 kg','US$20.00 + IV','US$70.00 + IV'],
                ['Más de 100 Kg', 'US$105.00 + IV', 'US$105.00 + IV']
            ]
        }
     })

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>

