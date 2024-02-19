<template>
    <div class="card ">
      <div class="w-full mb-10 flex flex-col items-center text-center p-5 pb-0">
        <div class="w-full h-28 flex items-center justify-center">
            <NuxtImg quality="80" loading="lazy" :src="info.thumbnail?`/images/newHomepage/hotDeals/${info.thumbnail}`:info.bannerURL" alt="logo" class="w-auto max-h-24"/>
        </div>
          <p class="text-blue font-semibold text-lg mb-2">{{ info.title }}</p>
          <p class="text-sm leading-none text-gray">{{ info.text.length>60?info.text.substring(-1,60)+'...':info.text}}</p>
      </div>
      <div class="">
        <p class="text-base font-semibold text-black px-5" v-if="info.price">{{ info.price }}</p>
        <div class="text-blue border-t border-blue  flex items-center justify-between  p-2.5 bg-yellow">
            <p>{{ lang==='en'? 'Shop Now':'Compra ahora'}}</p>
            <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/arrow-right.png" alt="right arrow" class="w-4" />
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
  const store = useStore();
  const {lang} = storeToRefs(store);
  </script>
  
  <style scoped>
  
  .card{
   

      box-shadow: 0 0 5px #00000020;
      /*  w-[210px] h-[350px] */
      @apply w-[160px] sm:w-[200px] h-[350px] flex flex-col justify-between  pt-3 rounded-lg transition-all duration-150 border-b border-transparent hover:border-yellow overflow-hidden bg-white;
    }
  </style>