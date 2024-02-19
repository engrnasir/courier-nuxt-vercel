<template>
    <div class="w-full h-screen bg-white flex items-center justify-center p-5 relative">
        <NuxtImg quality="80" loading="lazy" src="/images/logo.svg" alt="logo" class="h-9 md:h-14 z-50 absolute top-10"/>
        <div class="h-1/2 bg-blue absolute top-0 left-0 w-full">
            <NuxtImg quality="80" loading="lazy" src="/images/map.png" alt="map"/>
        </div>
        <div class="wrapper-box">
            <h3 class="text-blue leading-tight text-2xl">{{ content.heading }}</h3>
            <p class="text-gray text-xs mb-5">{{ content.text }}</p>

            <div class="bg-white text-gray p-5 rounded-lg text-left w-full flex items-start justify-between text-sm">
                <div class="mr-5" v-if="!isLoading && !noData">
                    <p><b>{{ content.fullname }}:</b>  {{ info.fullname }} </p>
                    <p><b>{{ content.address }}:</b>  {{ info.address }} </p>
                    <p><b>{{ content.city }}:</b>  {{ info.city }} </p>
                    <p><b>{{ content.state }}:</b>  {{ info.state }} </p>
                    <p><b>{{ content.zipcode }}:</b>  {{ info.zipcode }} </p>
                    <p><b>{{ content.phnumber }}:</b>  {{ info.phnumber }} </p>
                </div>
                <div class="mr-5" v-if="isLoading">
                    <p>{{lang==='en'?'Loading...':'Cargando...'}}</p>
                </div>
                <div class="mr-5" v-if="!isLoading && noData">
                    <p>{{lang==='en'?'No data':'No hay datos'}}</p>
                </div>
                <button class="copy-btn" :class="copied?'bg-blue text-white':'bg-white text-blue '" @click="copyAddress" v-if="!noData">{{ copied? content.copied:content.copy }}</button>
            </div>

            <a :href="loginUrl" class="btn loginBtn" v-if="!noData">{{lang==='en'?'Login now':'Iniciar Sesión'}}</a>
            <nuxt-link to="/" class="text-blue cursor-pointer text-sm mt-3 block hover:underline">{{lang==='en'?'Back to Home':'Volver a Inicio'}}</nuxt-link>
        </div>
    </div>
</template>

<script setup>

const store = useStore();
const {lang, selectedCountry} = storeToRefs(store);
const {} = store;

const copied = ref(false);
const info = ref({
    fullname:'',
    address:'',
    city:'',
    state:'',
    zipcode:'',
    phnumber:''
})
const isLoading = ref(false);
const noData = ref(false);

const loginUrl = computed(()=>{
    return `${useRuntimeConfig().public.VUE_APP_MYACCOUNT_URL}/${lang.value}?gtw=${selectedCountry.value.gtw}`
})

const content = computed(()=>{
    const enContent = {
        heading:"Thank you for registering with us",
        text:"Your account has been activated and here is your free US address",
        fullname:'Full Name',
        address:'Address Line',
        city:'City',
        state:'State',
        zipcode:'Zip Code',
        phnumber:'Phone Number',
        copy:'Copy Address',
        copied:'Address Copied'
    };
    const esContent = {
        heading:"Gracias por registrarse con nosotros",
        text:"Su cuenta ha sido activada y aquí está su dirección gratuita de EE. UU.",
        fullname:'Nombre completo',
        address:'Dirección',
        city:'Ciudad',
        state:'Estado',
        zipcode:'Código postal',
        phnumber:'Número de teléfono',
        copy:'Copiar dirección',
        copied:'Dirección copiada'
    }
    return lang.value==='en'? enContent : esContent;
})

const copyAddress=()=>{
    const address = info.value.fullname + ', ' + info.value.address + ', ' + info.value.city + ' ' + info.value.state +', ' + info.value.zipcode + ', '+ info.value.phnumber;
    navigator.clipboard.writeText(address);
    copied.value = true
}

onBeforeMount(()=>{
    const stk = localStorage.getItem("stk");
    if (stk && process.client) {
        const url = useRuntimeConfig().public.VUE_APP_SIGNUP_PACKAGES_ADDRESS_URL;
        const body = {
            "srv": `${window.location.origin}/${selectedCountry.value.gtw}/${lang.value}/auth`,
            "stk": stk,
        }
        isLoading.value = true;
        axios.post(url, body)
            .then(response => {
                console.log(response);
                if (response.data.Address) {
                    info.value.fullname = response.data.Address.FullName;
                    info.value.address = response.data.Address.Line1;
                    info.value.city = response.data.Address.City;
                    info.value.state = response.data.Address.State;
                    info.value.zipcode = response.data.Address.ZipCode;
                    info.value.phnumber = response.data.Address.Phone;
                    
                    noData.value = false;
                }else{
                    noData.value = true
                }
                isLoading.value = false;
                
            })
            .catch(err => {
                console.log(err);
                isLoading.value = false;
                noData.value = true;
            })
        localStorage.removeItem("stk");
    }else{
        isLoading.value = false;
        noData.value = true
        navigateTo(`/${selectedCountry.value.gtw}/${lang.value}`)
    }
})

</script>

<style scoped>
.wrapper-box{
    background: #F6D000;
    @apply relative z-50 p-6 md:p-10 text-center  rounded-2xl shadow-xl;
}
.copy-btn{
    @apply border border-solid border-blue px-3 py-0 md:py-1 text-ss md:text-xs rounded-full min-w-max hidden md:inline-block;
}

.btn{
  @apply mt-5 px-6 py-2 rounded-[40px] text-base  font-medium bg-blue text-white hover:bg-white hover:text-blue cursor-pointer transition-all duration-200 capitalize; 
}
.loginBtn{
    @apply px-9 py-2 inline-block  max-md:px-5  max-md:text-sm   max-md:py-1 ;
}

</style>