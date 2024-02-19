<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        
        <RatesTable :list="info.products" :hasHeader="true" :colspan="2"/>

    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
    desc1:`
    <b>These include any items with alcohol listed as their first ingredient as well as any quantity of FLAMMABLE, EXPLOSIVE or CORROSIVE material.</b><br><br>
    PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS AS THEY CANNOT BE SHIPPED TO YOUR COUNTRY AND YOU WILL NEED TO PAY FOR THEIR DESTRUCTION OR THE COST OF RETURNING THEM TO THE SHIPPER.<br><br>
    `,
    products:[
        ['Products'],
        ['Ammunition, firearms and firearm parts','	Lighters'],
        ['Any item with alcohol listed as its first ingredient','    	Matches'],
        ['Cleaning solutions','	Pressure containers'],
        ['Fireworks','	 Tear gas or pepper spray'],
        ['Gas, poisons','  Manuscripts'],
        ['Gas - powered tools','	 Academic, property and other titles'],
        ['Value certificates and stock of any kind','	 Credit or debit cards'],
        ['Checks	',' Gift cards'],
        ['Passports and identification documents	',' Gemstones '],
        ['Cash and coins	','    Toxic & Chemical substances'],
        ['Stamps or transportation tickets of any kind	',' Live animals'],
        ['Hoverboards	    ','    Animal products or animal fur'],
        ['Aerosols    ','    Airbags'],
        ['Perishable items      ','  Airsoft Guns*'],
        ['Yohimbe/Yohimbine',''],
                        
    ],

});
const es_info = ref({
    desc1:`
        <b>Estos incluyen cualquier artículo que tenga alcohol como primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.</b><br><br>
        NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLVERLOS AL REMITENTE.<br><br>
    `,
    products:[
        ['Productos'],
        ['Municiones, armas de fuego y piezas de armas de fuego', 'Encendedores'],
        ['Cualquier artículo con alcohol incluido como primer ingrediente', 'Fósforos'],
        ['Soluciones de limpieza', 'Recipientes a presión'],
        ['Fuegos artificiales', 'Gas lacrimógeno o gas pimienta'],
        ['Gases, venenos', 'Manuscritos'],
        ['Herramientas a gas', 'Títulos académicos, de propiedad y otros'],
        ['Valores certificados y acciones de cualquier clase', 'Tarjetas de crédito o débito'],
        ['Cheques', 'Tarjetas regalo'],
        ['Pasaportes y documentos de identidad', 'Piedras preciosas'],
        ['Efectivo y monedas', 'Sustancias tóxicas y químicas'],
        ['Sellos o títulos de transporte de cualquier clase', 'Animales vivos'],
        ['Hoverboards', 'Productos animales o pieles de animales'],
        ['Aerosoles', 'Airbags'],
        ['Artículos perecederos',' Armas de Airsoft*'],
        ['Yohimbe/Yohimbina',''],
                        
    ],            

});

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>

<style scoped>
.snippet{
    @apply text-blue mb-4 text-[15px] leading-5;
}
</style>
