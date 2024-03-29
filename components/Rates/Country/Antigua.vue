<template>
    <div>

        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <RatesWarranty/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table" :tfoot="info.customHandling.tfoot" :hasHeader="true"/>
        <RatesTable :list="info.customHandling.formula"/>
        
        
        <h2 class="main-heading">{{ info.customsRates.title }}</h2>
        <RatesTable :list="info.customsRates.table" :hasHeader="true"/>
        
        <RatesInOutFees/>
        
    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$7.95'],
                ['1 lb','$11.00'],
                ['Addtional lbs','$4.00'],
	        ],
            
            OtherCharges:[
                ['Handling Fee'],
                ['$1 - $1,000','$5.00'],
                ['$1,000 - $2,000','$10.00'],
                ['$2,000 and up','$25.00'],
                ['Duties & Taxes:','Applicable duties and taxes'],
                ['Home delivery (local charges)','Please quote with local agent.'],
                ['Restricted Items','<a href="/restricted" class="text-blue">Click here</a>'], 
                ['Consumer Commodity Shipment','Once a month/Add $5.00 per CC Shipment'],
                ['SED Shipment','$25.00'],	
            ],

            customHandling:{
                title:'Customs Handling',
                table:[
                    ["PACKAGE'S DECLARED VALUE",'RATE*'],
                    ['Per package fee with declared value of $1 to $1000','$5.00'],
                    ['Per package fee with declared value of 1001 to $2000','$10.00'],
                    ['Per package fee with declared value of $2001 and up','$25.00'],
                ],
                tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
                formula:[['CIF value = Total invoice of the package + Transport cost + Insurance']]
            },

            customsRates:{
                title:'Customs rate of duty',
                table:[
                    ['Commodity','Duty %'],
                    ['Clothing','49.5%'],
                    ['Shoe','49.5%'],
                    ['Weaves/Hair Extentions','49.5%'],
                    ['Bags','49.5%'],
                    ['Cellphone','49.5%'],
                    ['Cellphone Accessories','49.5%'],
                    ['Cellphone Parts','32.25%'],
                    ['Charger','32.25%'],
                    ['Tents','49.5%'],
                    ['Video Games','49.5%'],
                    ['Game Accessories','49.5%'],
                    ['Make up kit/cosmetics','49.5%'],
                    ['Toys','49.5%'],
                    ['Decorations','49.5%'],
                    ['Baby Seat ','49.5%'],
                    ['Projector Screen','49.5%'],
                    ['Television','49.5%'],
                    ['Router','32.25%'],
                    ['Kindle','32.25%'],
                    ['Decals (stickers)','32.25%'],
                    ['Water Filter','32.25%'],
                    ['Blood Pressure Monitor','32.25%'],
                    ['Ink Cartridge','32.25%'],
                    ['Hard Drive','32.25%'],
                    ['Memory','32.25%'],
                    ['Magic Jack ','32.25%'],
                    ['Watch','55.25%'],
                    ['Camera','55.25%'],
                    ['Auto Parts ','61%'],
                    ['Jewellery','61%'],
                    ['DVD Player','61%'],
                    ['CDs','61%'],
                    ['Game Cartridge','61%'],
                    ['Novels','10%'],
                    ['Text Books ','0%'],
                    ['Full Computer System','15%'],
                    ['Mother Board','43.75%'],
                    ['Computer Accessories','49.50%'],
                    ['Exercise Equipment','38%'],
                    ['Basketball','38%'],
                    ['Seeds','26.52%'],
                    ['Electric Kettle','49.5% + $20'],
                    ['Toaster','49.5% + $20'],
                    ['Coffee Maker ','49.5% + $20'],
                    ['Hot Plate','49.5% + $100'],
                    ['Hair Dryer','49.5% + $20'],
                    ['Iron (Clothing)','49.5% + $20'],
                    ['Stove','49.5% + $20'],
                    ['Microwave ','49.5% + $100'],
                    ['Party Supplies','50%'],
                ]

            }
        });
const es_info = ref({
    packages:[
        ['Paquetes','Tarifas(USD)'],
        ['0.50 lb', '$7.95'],
        ['1 lb','$11.00'],
        ['libras adicionales','$4.00'],
    ],
    
    OtherCharges:[
            ['Tasa de tramitación'],
            ['USD $1 - $1,000','$5.00'],
            ['USD $1,001 - $2,000','$10.00'],
            ['USD $ 2,001 y más', '$25.00'],
            ['Aranceles e impuestos:','Aranceles e impuestos aplicables'],
            ['Envío a domicilio (cargos locales)','Cotiza con el agente local.'],
            ['Artículos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
            ['Envío de productos de consumo','Una vez al mes/Agregar USD $5.00 por envío de CC'],
            ['Envío SED','$25.00'],
        ],

    customHandling:{
        title:'Manejo Aduanal',
        table:[
            ["VALOR DECLARADO DEL PAQUETE",'TARIFA*'],
            ['Tarifa por paquete con valor declarado de $1 a $1,000','$5.00'],
            ['Tarifa por paquete con valor declarado de $1001 a $2,000','$10.00'],
            ['Tarifa por paquete con un valor declarado de $2001 y más', '$25.00'],
        ],
        tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
        formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
    },

    customsRates:{
        title:'Tasa de derechos de aduana',
        table:[
                ['Producto','% de impuestos'],
                ['Ropa','49.5%'],
                ['Zapato','49.5%'],
                ['Tejidos/Extensiones de cabello','49.5%'],
                ['Bolsas','49.5%'],
                ['Teléfono móvil','49.5%'],
                ['Accesorios para móviles','49.5%'],
                ['Repuestos de celular','32.25%'],
                ['Cargador','32.25%'],
                ['Tiendas','49.5%'],
                ['Videojuegos','49.5%'],
                ['Accesorios del juego','49.5%'],
                ['Kit de maquillaje/cosméticos','49.5%'],
                ['Juguetes','49.5%'],
                ['Decoraciones','49.5%'],
                ['Asiento de bebé','49.5%'],
                ['Pantalla del proyector','49.5%'],
                ['Televisión','49.5%'],
                ['Enrutador','32.25%'],
                ['Kindle','32.25%'],
                ['Calcomanías (pegatinas)','32.25%'],
                ['Filtro de agua','32.25%'],
                ['Monitor de presión arterial','32.25%'],
                ['Cartucho de tinta','32.25%'],
                ['Disco Duro','32.25%'],
                ['Memoria','32.25%'],
                ['Jack Mágico','32.25%'],
                ['Observar','55.25%'],
                ['Cámara','55.25%'],
                ['Autopartes ','61%'],
                ['Joyería','61%'],
                ['Reproductor de DVD','61%'],
                ['CD','61%'],
                ['Cartucho de juego','61%'],
                ['Novelas','10%'],
                ['Libros de Texto ','0%'],
                ['Sistema informático completo','15%'],
                ['Placa Madre','43.75%'],
                ['Accesorios informáticos','49.50%'],
                ['Equipo de ejercicio','38%'],
                ['Baloncesto','38%'],
                ['Semillas','26.52%'],
                ['Hervidor eléctrico','49.5% + $20'],
                ['Tostadora','49.5% + $20'],
                ['Cafetera', '49.5% + $20'],
                ['Placa Caliente','49.5% + $100'],
                ['Secador de cabello','49.5% + $20'],
                ['Hierro (Ropa)','49.5% + $20'],
                ['Estufa','49.5% + $20'],
                ['Microondas','49.5% + $100'],
                ['Artículos para fiestas','50%'],
            ]

    }
})

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
