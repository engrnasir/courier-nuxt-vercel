<template>
    <div class="w-full max-w-[450px] flex items-start p-4 sm:p-6 bg-white mx-auto shadow-2xl rounded-lg ">
        <div class="mr-4">
            <div class="flex items-start mb-4">
                <NuxtImg quality="80" loading="lazy" src="/images/whatsapp.png" alt="whatsapp icon" class="w-9 mr-4"/>
                <p class="text-base text-[#333333] max-[480px]:text-sm" v-if="lang=='en'">
                    You can also contact us through WhatsApp!
                   <br> Click here or scan the following QR code using your cell phone camera.
                </p>
                <p class="text-base text-[#333333] max-[480px]:text-sm" v-else>
                    ¡También puedes contactarnos a través de WhatsApp!
                   <br> Haz clic aquí o escanea el siguiente código QR con la cámara de tu celular.
                </p>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=+19295202376&text=Hi" target="_blank" class="text-base text-blue">
                {{ lang=='en'?'Open WhatsApp':'Abre WhatsApp' }} 
            </a>
        </div>
        <NuxtImg quality="80" loading="lazy" src="/images/wa-qr.png" alt="wa-qr" class="w-[150px] max-[480px]:w-[120px]"/>
    </div>
</template>
<script setup>
const store = useStore();
const {lang} = storeToRefs(store);
</script>
