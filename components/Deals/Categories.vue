<template>
    <div class="my-16">
      <div class="title-wrap row">
          <h1 class="title">Featured Categories</h1>
          <p class="view-all">View All</p>
      </div>
      <div class="prods-wrapper">

        <div class="category" v-for="(c,i) in categories" :key="i">
            <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/stores/${c.img}`" alt="amazon" class="w-16"/>
            <p>{{ c.title }}</p>
        </div>
        
      </div>
    </div>
  </template>
  
  <script setup>
  const categories = ref([
        { img:'appliances.png', title:'Appliances' },
        { img:'art.png', title:'Arts, Crafts & Sewing' },
        { img:'car.png', title:'Automotive' },
        { img:'baby.png', title:'Baby' },
        { img:'makeup.png', title:'Beauty & Personal Care' },
    ])
  </script>
  
  <style lang="scss" scoped>
  .title-wrap{
      @apply flex justify-between mb-5 px-5;
  }
  .title{
      @apply text-lg md:text-2xl font-semibold text-blue mr-5 leading-none
  }
  .view-all{
      @apply min-w-max text-sm md:text-base font-medium text-blue;
  }
  .prods-wrapper{
      @apply grid grid-rows-1 grid-flow-col gap-x-5 gap-y-10 items-center  overflow-x-scroll p-5  3xl:px-20;
  }
  .prods-wrapper::-webkit-scrollbar{
      display: none;   
  }
  
  .category{
    box-shadow: 0 0 10px #00000020;
    @apply bg-[#E3F4FF]  w-56 h-24 rounded-xl flex items-center justify-between pr-10 overflow-hidden;
    img{
        @apply w-24 bg-transparent; 
    }
    p{
        @apply w-20 text-base text-blue font-semibold text-center leading-none
    }
  }
  </style>