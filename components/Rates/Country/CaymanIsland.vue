<template>
    <div>

        <RatesTable :list="info.packages" :hasHeader="true"/>

        <RatesTable :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <RatesInformation :title="info.title2" :list="info.list2" />
        
        <RatesWarranty/>
        
        <RatesInOutFees/>
        
    </div>
  
</template>

<script setup>
const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({

packages:[
    ['Packages','Rates(USD)'],
    ['0.50 lb','$7.25'],
    ['1 lb','$8.95'],
    ['2 lbs','$13.50'],
    ['3 lbs','$18.30'],
    ['Addtional lbs up to 30 lbs','$4.95'],
    ['Addtional lbs after 30 lbs','$3.85'],
],

OtherCharges:[
    ['Other charges'],
    ['Handling Fee and processing fee','$7.00'],
    ['Pkg Tax / Customs handling, per pkg','$12.20'],
    ['',''],
    ['Consolidation requests',''],
    ['2nd package and up','$3.50'],
    ['Pkg Tax / Customs handling, per pkg','$7.32'],
    ['',''],
    ['Restricted Shipments','<a href="/restricted" class="text-blue">Click here</a>'],
    ['',''],
    ['Seafreight (CID)',''],
    ['Seafreight Minimum charge: 1 CuFt','$10'],
    ['Seafreight Minimum charge: 2-3 CuFt','$25'],
    ['4 CuFt and higher, Per CuFt','$7.50'],
    ['',''],
    ['Handling & processing fee 1 - 50 CuFt','$10'],
    ['Handling & processing fee 51 - 100 CuF','$25'],
    ['Handling & processing fee 101 - 250 CuFt','$50'],
    ['Handling & processing fee 251 - 500 CuFt','$100'],
    ['Higher than 500 CuFt','Quote'],
    ['',''],
    ['Pkg Tax / Customs handling, per pkg','$6'],
    ['Consolidation, 2nd pkg and up','$3.50'],
    ['Single Bill of Lading','$75'],
    ['SED','$25'],
    ['Customs Brokerage, greater than 500 CuFt','$150'],
    ['Delivery','Quote'],
],

title2:'Other important information:',
list2:[
    'Cayman Islands applies Government packaging tax of $5.00CI and Government warehousing fee of $5.00CI per shipment.',
    'Duties applies to all imports.',
    'Home/Office Delivery: $5.00CI per package, Charge On Delivery (within Georgetown, Industrial Park and Seven Mile Beach). Other areas, please quote with Local Provider.',
    'Shipments that require any special handling, are subject to additional charges.',
    'We charge on weight NOT on size of your package. Limit 31 inches by any of its sides.',
    'You can return your junk mail and we will credit your account.',
    'You can track your packages on our site at <a href="https://aeropost.com/" class="text-blue">www.aeropost.com</a>',
    'We are always available through our email <a href="mailto:serviceGCM@aeropost.com" class="text-blue">serviceGCM@aeropost.com</a>, Chatlive at our website, or calling us free at <span class="text-blue">1 (866) 297-1191</span>',
],

});
const es_info = ref({

packages:[
    ['Paquetes','Tarifas(USD)'],
    ['0,50 lb', '$7.25'],
    ['1 lb', '$8.95'],
    ['2 lbs', '$13.50'],
    ['3 lbs', '$18.30'],
    ['lbs adicional hasta 30 lbs', '$4.95'],
    ['lbs adicional después de 30 lbs', '$3.85'],
],

OtherCharges:[
     ['Otros cargos'],
     ['Tarifa de manejo y tarifa de procesamiento','$7.00'],
     ['Impuestos por paquete/Manejo de aduanas, por paquete','$12.20'],
     ['',''],
     ['Solicitudes de consolidación',''],
     ['Segundo paquete en adelante','$3.50'],
     ['Impuestos por paquete/Manejo de aduanas, por paquete','$7.32'],
     ['',''],
     ['Envíos restringidos','<a href="/restricted" class="text-blue">Haga clic aquí</a>'],
     ['',''],
     ['Transporte marítimo (CID)',''],
     ['Cargo mínimo de flete marítimo: 1 CuFt','$10'],
     ['Cargo mínimo de flete marítimo: 2-3 CuFt','$25'],
     ['4 pies cúbicos y más, por pie cúbico', '$7.50'],
     ['',''],
     ['Tarifa de manejo y procesamiento 1 - 50 CuFt','$10'],
     ['Tarifa de manejo y procesamiento 51 - 100 CuF','$25'],
     ['Tarifa de manejo y procesamiento 101 - 250 CuFt','$50'],
     ['Tarifa de manejo y procesamiento 251 - 500 CuFt','$100'],
     ['Más de 500 pies cúbicos','Cotización'],
     ['',''],
     ['Impuestos por paquete / Manejo de aduanas, por paquete','$6'],
     ['Consolidación, segundo paquete en adelante','$3.50'],
     ['Conocimiento de Embarque Único','$75'],
     ['SED','$25'],
     ['Agencia aduanal, mayor a 500 CuFt','$150'],
     ['Entrega','Cotización'],
 ],

title2:'Otra información importante:',
list2:[
    'Islas Caimán aplica un impuesto de embalaje del gobierno de $5.00 CI y una tarifa de almacenamiento del gobierno de $5.00 CI por envío.',
    'Los aranceles se aplican a todas las importaciones.',
    'Entrega en casa/oficina: $5.00 CI por paquete, cargo contra entrega (dentro de Georgetown, Industrial Park y Seven Mile Beach). Otras áreas, favor cotizar con Proveedor Local.',
    'Los envíos que requieren algún manejo especial están sujetos a cargos adicionales.',
    'Cobramos por el peso, NO por el tamaño de su paquete. Límite de 31 pulgadas por cualquiera de sus lados.',
    'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
    'Puede rastrear sus paquetes en nuestro sitio en <a href="https://aeropost.com/" class="text-blue">www.aeropost.com</a>',
    'Siempre estamos disponibles a través de nuestro correo electrónico <a href="mailto:serviceGCM@aeropost.com" class="text-blue">serviceGCM@aeropost.com</a>, chat en vivo en nuestro sitio web o llamándonos gratis a <span class="text-blue">1 (866) 297-1191</span>',
],

});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>
