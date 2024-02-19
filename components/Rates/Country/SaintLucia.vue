<template>
    <div>
        
        <RatesTable :list="info.packages" :hasHeader="true"/>
        
        <RatesTable :list="info.OtherCharges"/>        
 
        <RatesWarranty/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <RatesTable :list="info.customHandling.table"/>

        <RatesInformation :list="info.list" />
        
        <RatesInOutFees/>
    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
    packages:[
        ['Packages','Rates(USD)'],
        ['0.50 lb','$5.95'],
        ['1 lb','$7.95'],
        ['2 lbs','$11.95'],
        ['3 lbs','$15.95'],
        ['Additional lbs','$4.00'],
    ],

    OtherCharges:[
        ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
    ],
    customHandling:{
        title:'Customs Handling',
        table:[
            ['1 lb','	FREE'],
            ['Over 1 lb	','$5.35 / pkg'],
        ]
    },
    list:[
        'Remember that you may calculate package duties using our online calculator or by contacting Customer Service.All packages entering the country are subject to inspection through Customs. To improve your shopping experience, keep in mind that Aeropost offers Package Brokerage Services, for only $30.00 EC per package. You may authorize Aeropost to automatically clear your packages through Customs by contacting Customer Service at <a href="mailto:brokerage.slu@aeropost.com" class="font-bold">brokerage.slu@aeropost.com</a> or calling (758) 452-3647.*',
        "(*) Automatic package clearing requires product invoices.",
    ]
});
const es_info = ref({
    
    packages:[
        ['Paquetes','Tarifas(USD)'],
        ['0.50 lb', '$5.95'],
        ['1 lb', '$7.95'],
        ['2 lbs', '$11.95'],
        ['3 lbs', '$15.95'],
        ['lbs adicionales','$4.00'],
    ],
    
    OtherCharges:[
        ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
    ],
    customHandling:{
        title:'Manejo Aduanal',
        table:[
            ['1 lb','GRATIS'],
            ['Más de 1 lb','$5.35/paquete.'],
        ]
    },
    list:[
        'Todos los paquetes que ingresan al país están sujetos a inspección por parte de Aduanas. Para mejorar tu experiencia de compra, Aeropost ofrece el servicio de Manejo Aduanal, por tan solo $30.00 EC por paquete. Contáctanos para solicitar que Aeropost realice automáticamente el manejo aduanal de tus paquetes, contactando a Servicio al Cliente al correo electrónico <a href="mailto:brokerage.slu@aeropost.com" class="font-bold">brokerage.slu@aeropost.com</a> o llamando al teléfono (758) 452-3647.*<br><br>Recuerda que puedes calcular los aranceles de tus paquetes utilizando nuestra calculadora en línea (poner link a calculadora) o contactando a Servicio al Cliente (poner link al chat).',
        "(*) Es necesario presentar las facturas de los productos para recibir el servicio de manejo aduanal automático.",
    ]
    
});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
