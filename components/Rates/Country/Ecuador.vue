<template>
    <div>
        
        <RatesTable :list="info.basics" :hasHeader="true"/>
        
        <RatesTable :list="info.packages" :hasHeader="true"/>
        
        <RatesTable :list="info.otherChanges" :hasHeader="true" :colspan="2"/>

        <RatesWarranty/>
        
        <h2 class="main-heading">{{ info.rule.title }}</h2>
        <p class="text-blue mb-4" v-html="info.rule.description"></p>
        <RatesInformation :list="info.rule.list"/>

        <p class="text-sm text-blue mb-4">
            <a href="http://www.aduana.gob.ec/pro/courier.action">http://www.aduana.gob.ec/pro/courier.action</a>
        </p>
        <p class="text-sm text-blue mb-6">
            <b>
                {{lang==='en'?'Attention by e-mail from Customs':'Atención por e-mail de Aduanas'}}
            </b>
        </p> 
        <p class="text-sm text-blue mb-4">
            <a href="mailto:mesadeservicios@aduana.gob.ec">mesadeservicios@aduana.gob.ec</a>
        </p>
        <p class="text-sm text-blue mb-6" v-html="info.customProcedure"></p>
        <p class="text-sm text-blue mb-4"><b>{{ lang==='en'?'Considerations':'Consideraciones'}}</b>:</p>
        <p class="text-sm text-blue mb-4" v-html="info.considerations"></p>
        
        <RatesInOutFees/>

    </div>
  
</template>

<script setup>
const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
basics:[
  ['','Guayaquil and Quito','Rest of the country'],
  ['Annual Membership','N/A','N/A'],
  ['Monthly Minimum','N/A','N/A'],
],
packages:[
    ['Packages (includes international freight, customs procedures and destination delivery*)','',''],
    ['1 lb','USD $12.00','USD $15.50'],
    ['2 lbs','USD $16.50','USD $19.75'],
    ['3 lbs','USD $20.00','USD $23.00'],
    ['4 lbs','USD $23.50','USD $26.25'],
    ['5 lbs','USD $31.50','USD $34.00'],
    ['6 lbs','USD $35.00','USD $37.25'],
    ['7 lbs','USD $38.50','USD $40.50'],
    ['8 lbs','USD $42.00','USD $43.75'],
    ['9 lbs','USD $46.35','USD $47.85'],
    ['10 lbs','USD $50.70','USD $51.95'],
    ['lb. Additional up to 10 lbs','USD $5.00','USD $5.25'],
],
otherChanges:[
    ['Other charges'],
    ['Consolidation cost (per package)','USD $3.00'],
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
],     

rule:{
    title:'4x4 RULE',
    description:'The 4x4 rule refers to packages that have any of the following characteristics:',
    list:[
        'They are all packages that weigh  <b>up to 4 kilograms and up to USD$400</b>, which can only be used by  <b>natural persons</b>.  The value and weight of the imported items must be submitted simultaneously.',
        'The Foreign Trade Committee (Comex) resolved that migrants who appear in the  <b>consular registry</b>  may make unlimited imports.',
        'The consular registry will be interconnected with the National Customs Service (SENAE) system, and migrants will be able to register online through the virtual consulate.',
    ]
},
customProcedure:'Customs procedures, claims, congratulations, suggestions, consultations on customs regulations, <b>CONSULTATION OF IMPORT QUOTAS. </b>',
considerations:'Any package that exceeds the 4x4 rule will be subject to the payment of the corresponding taxes, depending on the type of merchandise.<br>The 4x4 rule also applies to split shipments. Split shipments are those shipments of different packages that belong to the same consignee, within the same flight.'

})
const es_info = ref({
            basics:[
                ['','Guayaquil y Quito','Resto del país'],
               ['Membresía anual','N/A','N/A'],
               ['Mínimo mensual','N/A','N/A'],
            ],
            packages:[
                ['Paquetes (incluye flete internacional, trámites aduaneros y entrega en destino*)','',''],
                 ['1 lb','USD$12.00','USD$15.50'],
                 ['2 lbs','USD$16.50','USD$19.75'],
                 ['3 lbs','USD$20.00','USD$23.00'],
                 ['4 lbs','USD$23.50','USD$26.25'],
                 ['5 lbs','USD$31.50','USD$34.00'],
                 ['6 lbs','USD$35.00','USD$37.25'],
                 ['7 lbs','USD$38.50','USD$40.50'],
                 ['8 lbs','USD$42.00','USD$43.75'],
                 ['9 lbs','USD$46.35','USD$47.85'],
                 ['10 lbs','USD$50.70','USD$51.95'],
                 ['lb. Adicional hasta 10 lbs','USD$5.00 ','USD$5.25'],
            ],
            otherChanges:[
                ['Otros cargos'],
                 ['Costo de consolidación (por paquete)','USD $3.00'],
                 ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
            ],     
            
            rule:{
                title:'REGLA 4x4',
                description:'La regla 4x4 se refiere a paquetes que tienen alguna de las siguientes características:',
                list:[
                    'Son todos bultos que pesan <b>hasta 4 kilogramos y hasta USD$400</b>, los cuales solo pueden ser utilizados por <b>personas físicas</b>. El valor y el peso de los artículos importados deben presentarse simultáneamente.',
                     'El Comité de Comercio Exterior (Comex) resolvió que los migrantes que figuren en el <b>registro consular</b> podrán realizar importaciones ilimitadas.',
                     'El registro consular estará interconectado con el sistema del Servicio Nacional de Aduanas (SENAE) y los migrantes podrán registrarse en línea a través del consulado virtual',
                ]
            },
            customProcedure:'Trámites aduaneros, reclamos, felicitaciones, sugerencias, consultas sobre normativa aduanera, <b>CONSULTA DE CUOTAS DE IMPORTACIÓN. </b>',
            considerations:'Cualquier paquete que exceda la regla 4x4 estará sujeto al pago de los impuestos correspondientes, dependiendo del tipo de mercancía.<br>La regla 4x4 también aplica para envíos fraccionados. Los envíos fraccionados son aquellos envíos de diferentes bultos que pertenecen a un mismo destinatario, dentro de un mismo vuelo.'

        })

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
