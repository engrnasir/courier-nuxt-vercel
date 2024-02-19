<template>
 <div class="card custom-shadow text-blue">
    <div class="w-full p-5 pb-0">
        <div class="w-full relative mb-4">
            <div class="w-full h-[114px] rounded-xl" :class="info.recommended?'shadow-md':''" ref="thumbnail">
                <NuxtImg quality="80" loading="lazy" :src="info.externalThumb? info.thumbnail:`/images/newHomepage/stores/${info.thumbnail}`" alt="image" class="h-full mx-auto" />
            </div>
            <div class="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md absolute right-4 -bottom-3 overflow-hidden">
                <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/stores/brands/${info.logo}`" alt="logo" class="w-7" />
            </div>
        </div>
        <p class="font-semibold text-lg" v-if="!info.recommended">{{ info.store }}</p>
        <p class="text-sm mb-6 text-black">{{ title }}</p>
    </div>
    <div>
        <p class="text-base font-semibold text-black px-5" v-if="info.price">$ {{ info.price }}</p>
        <div class=" bg-yellow flex items-center justify-between p-2.5 text-blue border-t border-blue" >
            <p class=" rounded-sm">{{ lang==='en'? 'Shop Now':'Compra ahora'}}</p>
            <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/arrow-right.png" alt="right arrow" class="w-4"/>
        </div>
    </div>
    </div>
</template>

<script setup>
const props = defineProps({
    info:{
        type:Object
    }
})
const store= useStore();
const {lang} = storeToRefs(store)

const title = computed(()=>{
    let text = lang.value==='en'? props.info?.text : props.info?.estext
    return text.length<=70? text : text.substring(0,70)+'...'
})
const thumbnail = ref(null)
onMounted(()=>{
    if(thumbnail.value){
        thumbnail.value.style.background = props.info.thumbBg? props.info.info.thumbBg : 'transparent'
    }
})

</script>

<style scoped>
  
  .card{
    @apply w-[160px] sm:w-[200px] h-[350px]  flex flex-col justify-between  rounded-lg cursor-pointer transition-all duration-100 border-b border-transparent hover:border-yellow overflow-hidden bg-white;
  }
  .custom-shadow{
    box-shadow: 0 0 5px #00000020;
  }

</style>