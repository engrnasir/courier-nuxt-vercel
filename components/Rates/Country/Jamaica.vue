<template>
    <div>
        <p class="snippet">
            {{ 
                lang==='en'?
                'Our Miami Address service allow you to shop your favorite USA websites and receive your purchases at your home, work or our local store.'
                :'Nuestro servicio de dirección de Miami le permite comprar en sus sitios web favoritos de EE. UU. y recibir sus compras en su hogar, trabajo o nuestra tienda local.' 
            }}
        </p>
        

        <p class="snippet">
            {{ 
                lang==='en'?
                'Please note: freight and mail rates are subject to change without prior notice. Mailpac is not responsible for the client not reading or overlooking this advisory.':
                'Tenga en cuenta: las tarifas de flete y correo están sujetas a cambios sin previo aviso. Mailpac no es responsable de que el cliente no lea o pase por alto este aviso.'
            }}
        </p>

        <RatesTable :list="info.rates" :hasHeader="true" :colspan="2"/>

        <RatesTable :list="info.otherCharges" :hasHeader="true" :colspan="2"/>
        
        <RatesTable :list="info.packages" :hasHeader="true" :colspan="2"/>
        
        <RatesTable :list="info.table1"/>
        
        <RatesInformation :list="info.list3" />
        
        <RatesInOutFees/>
    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const en_info = ref({
            
            rates:[
                ['RATES'],
                ['Annual Membership.','	FREE'],
                ['Monthly Minimum','None'],
                ['Mail per lb.','USD$5.50 (4 oz. minimum)'],
                ['Mail with bad address per lb	','USD$8.00'],
                ['Security documents','	USD$2.00'],
            ],
            otherCharges:[
                ['Other Charges'],
                ['Fuel Surcharge per package','USD$1.50'],
                ['Restricted Shipments ','<a href="/restricted" class="text-blue"> Click here</a>']
            ],

            packages:[
                ['Packages'],
                ['0.5 lb.','USD$5.00'],
                ['1 lb','USD$8.00'],
                ['2 lbs','USD$10.50'],
                ['3 lbs','USD$14.50'],
                ['4 lbs','USD $17.50'],
                ['5 lbs','USD $20.50'],
                ['6 lbs','USD $23.50'],
                ['7 lbs','USD $26.50'],
                ['8 lbs','USD $29.50'],
                ['9 lbs','USD $32.50'],
                ['10 lbs','USD $35.00'],
                ['11 lbs','USD $38.50'],
                ['12 lbs','USD $42.00'],
                ['13 lbs','USD $45.50'],
                ['14 lbs','USD $49.00'],
                ['15 lbs','USD $52.50'],
                ['16 lbs','USD $56.00'],
                ['17 lbs','USD $59.50'],
                ['18 lbs','USD $63.00'],
                ['19 lbs','USD $66.50'],
                ['20 lbs','USD $70.00'],
                ['21 lbs','USD $72.50'],
                ['22 lbs','USD $75.00'],
                ['23 lbs','USD $77.50'],
                ['24 lbs','USD $80.00'],
                ['25 lbs','USD $82.50'],
                ['Above 25 lbs','Plus USD $3.00 per lb'],
            ],

            table1:[
                ['width + height exceeds 60 inches, a US $15.00 oversize handling fee per piece may apply.']
            ],
            
            list3:[
                "If the dimensional weight exceeds the actual weight, then the dimensional weight will be used to determine the package's charges.",
            ],
        });
const es_info = ref({
            
            rates:[
                ['TARIFAS'],
                ['Membresía Anual.','GRATIS'],
                ['Mínimo mensual','Ninguno'],
                ['Correo por libra','USD$5.50 (4 oz. mínimo)'],
                ['Correo con mala dirección por lb','USD$8.00'],
                ['Documentos de seguridad', 'USD$2.00'],
            ],
            otherCharges:[
                ['Otros cargos'],
                ['Recargo por combustible por paquete','USD$1.50'],
                ['Envíos restringidos', '<a href="/restricted" class="text-blue">Haga clic aquí</a> ']
            ],

            packages:[
                ['Paquetes'],
                ['0.5 lb','USD$5.00'],
                 ['1 lbs','USD$8.00'],
                 ['2 lbs', 'USD$10.50'],
                 ['3 lbs', 'USD $ 14.50'],
                 ['4 lbs', 'USD $17.50'],
                 ['5 lbs', 'USD $20.50'],
                 ['6 lbs','USD $23.50'],
                 ['7 lbs', 'USD $26.50'],
                 ['8 lbs', 'USD $29.50'],
                 ['9 lbs', 'USD $32.50'],
                 ['10 lbs','USD $35.00'],
                 ['11 lbs', 'USD $38.50'],
                 ['12 lbs','USD $42.00'],
                 ['13 lbs', 'USD $45.50'],
                 ['14 lbs','USD $49.00'],
                 ['15 lbs', '52.50 dólares estadounidenses'],
                 ['16 lbs','USD $56.00'],
                 ['17 lbs', 'USD $59.50'],
                 ['18 lbs','USD $63.00'],
                 ['19 lbs', 'USD $66.50'],
                 ['20 lbs','USD $70.00'],
                 ['21 lbs', 'USD $72.50'],
                 ['22 lbs', 'USD $75.00'],
                 ['23 lbs', 'USD $77.50'],
                 ['24 lbs', 'USD $80.00'],
                 ['25 lbs', 'USD $82.50'],
                 ['Más de 25 lbs', 'Más USD $ 3.00 por lb'],
            ],

            table1:[
                ['el ancho + la altura superan las 60 pulgadas, se puede aplicar una tarifa de manejo de tamaño grande de US $ 15.00 por pieza.']
            ],
            
            list3:[
                "Si el peso dimensional supera el peso real, se utilizará el peso dimensional para determinar los cargos del paquete",
            ],
        });

const info = computed(()=>{ return lang.value==='en'? en_info.value:es_info.value })

</script>

<style scoped>
.snippet{
    @apply text-blue mb-4;
}
</style>
