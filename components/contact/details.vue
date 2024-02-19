<template>
    <div class="bg-white shadow-2xl rounded-lg p-4 sm:p-6 w-full max-w-[450px] mx-auto ">
        <div class="flex items-start">
            <NuxtImg quality="80" loading="lazy" src="/images/map-pin.png" alt="location" class="w-10 mr-5"/>
            <div>
                <p class="mb-5 text-sm md:text-base">
                    {{ lang==='en'?'To track an order or package log in to your account':'Para rastrear un pedido o paquete, inicia sesión en tu cuenta' }}            
                </p>
                <a :href="loginUrl" target="_blank" class="px-7 py-4 border border-blue w-max text-sm md:text-base rounded-[40px] text-blue hover:bg-blue hover:text-white">
                    {{ lang==='en'?'Click here to Login':'Haga clic aquí para ingresar' }}
                </a>
            </div>
        </div>
        <div class="font-semi-bold mb-2 leading-1 pt-5 mt-5" v-if="selectedCountry.gtw === 'SAL'">
            <p class="font-bold">Aerocasillas El Salvador S.A de C.V </p>
            <p><b>NIT:</b>  0614-011007-102-5</p>
            <p><b>{{ lang==='en'?'Administrative offices address':'Dirección de las oficinas administrativas' }}:</b> Boulevard El Hipódromo, OPPEN Plaza shopping center, local # 14, Zona Rosa, San Salvador.</p>
            <p><b>{{ lang==='en'?'Email':'Correo electrónico' }}:</b> <a href="mailto:servicio.sal@aeropost.com" class="text-blue">servicio.sal@aeropost.com</a></p>
            <p><b>{{ lang==='en'?'Tel':'Teléfono' }}:</b> +(503) 2113-0377</p>
            <!-- <p><b>{{ lang==='en'?'Hours:':'Horario:' }}</b></p>
            <div v-for="t in SAL_Operation" :key="t">
                <p class="font-bold">{{ t.title }}</p>
                <p v-html="lang==='en'? t.timing : t.estiming"></p>
            </div> -->



        </div>
        <div class="mt-5" v-else>
            <div v-if="contact && contact?.tel">
                <p>{{ lang==='en'?'Have a question? Call us at: ':'¿Tengo una pregunta? Llamenos al: ' }} </p>
                <p class="ml-5">{{ contact.tel }}</p>
            </div>
            <div v-if="workingHours && workingHours.length>0">
                <p>{{ lang==='en'?'Hours:':'Horario:' }}</p>
                <div>
                    <p class="ml-5" v-for="(h,i) in workingHours" :key="i">{{ h }}</p>
                </div>
            </div>
        </div>
        <div class="mt-5" v-if="contact && contact.gtw === 'POS'">
            {{ lang==='en'? contact.enNote : contact.esNote }}
        </div>
    </div>
</template>
<script setup>
import contacts from '@/assets/contacts';

const store = useStore();
const { lang, selectedCountry } = storeToRefs(store)
const  SAL_Operation = ref([
    {
        title:'Aeropost Locker - El Encuentro Lourde:',
        timing:'Monday - Sunday 7:00 AM - 10:00 PM',
        estiming:'Lunes - Domingo 7:00 AM - 10:00 PM'
    },
    {
        title:'Aeropost Locker - El Encuento San Marcos',
        timing:'Monday - Sunday 8:00 AM - 10:00 PM',
        estiming:'Lunes - Domingo 8:00 AM - 10:00 PM'
    },
    {
        title:'Aeropost Lockers - Paseo Venecia',
        timing:'Monday - Sunday 6:00 AM - 10:00 PM',
        estiming:'Lunes - Domingo 6:00 AM - 10:00 PM'
    },
    {
        title:'Aeropost Locker - Plaza Merliot',
        timing:'Monday - Sunday 7:00 AM - 9:00 PM',
        estiming:'Lunes - Domingo 7:00 AM - 9:00 PM'
    },
    {
        title:'Aeropost Locker Plaza Mundo Soyapango',
        timing:'Monday - Saturday 9:00 - AM - 8:00 PM <br> Sunday 10:00 AM - 8:00 PM',
        estiming:'Lunes - Sábado 9:00 - AM - 8:00 PM <br> Domingo 10:00 AM - 8:00 PM'
    },
    {
        title:'Aeropost Locker - Santa Elena',
        timing:'Monday - Saturday 6:00 AM - 10:00 PM <br> Sunday 6:00 AM - 9:00 PM',
        estiming:'Lunes - Sábado 6:00 AM - 10:00 PM <br> Domingo 6:00 AM - 9:00 PM'
    },
    {
        title:'Aeropost Locker - Soma',
        timing:'Sunday -  Wednesday 5:00 AM - 10:00 PM <br> Wednesday -  Saturday 5:00 AM - 11:00 PM',
        estiming:'Domingo -  Miércoles  5:00 AM - 10:00 PM <br> Miércoles -  Sábado  5:00 AM - 11:00 PM'
    },
    {
        title:'Zona Rosa',
        timing:'Monday - 6:00 AM - 12:00 PM <br> Tuesday - Sunday 6:00 AM - 2:00 AM',
        estiming:'Lunes - 6:00 AM - 12:00 PM <br> Martes - Domingo 6:00 AM - 2:00 AM'
    },
])

const contact = computed(()=>{
    return contacts.find(el=>el.gtw === selectedCountry.value?.gtw)
})
const workingHours = computed(()=>{
    return lang.value==='en'? contact.value?.enWorkingHours : contact.value?.esWorkingHours
})
const loginUrl = computed(()=>{
    return `${useRuntimeConfig().public.VUE_APP_MYACCOUNT_URL}/${lang.value}?gtw=${selectedCountry.value.gtw}`
})

</script>
