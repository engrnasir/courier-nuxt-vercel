<template>
  <div>
    <p class="row p-5 bg-[#EBF6FB] dark:bg-dark-secondary text-blue dark:text-dark-text rounded-sm mt-10">
      {{ $t('common.affliateDisclosure') }}
    </p>
      <div class="row flex items-center justify-between my-10 px-5">
          <h3 class="text-3xl font-semibold">{{$t('blog.title')}}</h3>

          <div class="relative w-[220px] h-8 md:w-[400px] md:h-12 rounded-full overflow-hidden flex items-center p-1 border-2" style="box-shadow: 0 0 5px #00000030;" :class="focused?'border-blue':'border-transparent'">
              <input type="text" :placeholder="`${$t('blog.search')}...`" class="w-full h-full p-5 outline-none" v-model="key" @focusin="focused=true" @focusout="focused=false">
              <button class=" absolute right-1 flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full bg-blue transition-all duration-100 hover:scale-105">
                  <NuxtImg quality="80" loading="lazy" src="/images/search.png" alt="search" class="w-3 h-3 md:w-5 md:h-5"/>
              </button>
          </div>
          
      </div>
      
      <div class="row my-10 px-5 mb-24" v-if="filteredBlogs.length>0">

          <BlogsItem v-for="(blog, index) in filteredBlogs" :key="JSON.stringify(blog)" :blog="blog" :index="index" :fullWidth="true"/>

      </div>
      <div class="row my-20  mb-40 flex flex-col items-center justify-center text-center" v-else>
          <p class="font-bold text-2xl mb-3">{{ lang==='en'?'No Blog found !':'No se encontró ningún blog !' }}</p>
          <button class="text-base text-blue hover:underline" @click="key=''">{{ $t('blog.back') }}</button>
      </div>
              
      <FooterTitle :bgBlue='true'></FooterTitle>
  </div>
  </template>
  
<script setup>
import blogs from '@/assets/blogs';

definePageMeta({
  layout:'blog'
})

const key = ref("");
const focused = ref(false);

const store = useStore();
const {selectedCountry, lang} = storeToRefs(store);

const filteredBlogs = computed(()=>{
  return blogs.filter(el => el.title.toLowerCase().includes(key.value.toLowerCase()) || el.estitle.toLowerCase().includes(key.value.toLowerCase()))
})
</script>
 