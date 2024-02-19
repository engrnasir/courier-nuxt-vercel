<template>
    <div class="w-full min-w-full cursor-pointer " @click="goto(banner.link)" :class="banner.techLess?'bg-black h-[90px] sm:h-[200px] md:h-[360px] flex items-center justify-center rounded-md px-0':'px-5'">
        <NuxtImg quality="80" loading="lazy"
            :src="banner.imgURL? lang==='es' && banner.esIMG? `/images/newHomepage/banners/${banner.esIMG}`: banner.imgURL: `/images/newHomepage/banners/${lang==='en'?banner.enIMG:banner.esIMG}`" 
            alt="banner" 
            class="w-full max-h-[400px] mx-auto rounded-lg shadow-lg" style="box-shadow: 0 0 5px #00000020;"
            />
    </div>
</template>

<script setup>
const store = useStore();
const { lang } = storeToRefs(store);
const props = defineProps({
    banner:Object,
    index:Number
})
const goto=(url)=>{
    window.open(url, '_blank')
}
</script>

<style>

</style>