<template>
    <div class="my-16">
      <div class="title-wrap row">
          <h1 class="title">Get 2x Cash Back</h1>
          <p class="view-all">View All</p>
      </div>
      <div class="prods-wrapper">
          <a :href="item.link" v-for="(item,i) in stores" :key="i">
             
              <div class="w-min flex flex-col items-center">
                  <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/stores/${item.img}`" alt="image" class="store-card"/>
                  <div class="cashback"><span class="text-[#F96302] mr-1.5">Upto 5%</span> Cash Back</div>
              </div>
          </a>
      </div>
    </div>
  </template>
  
<script setup>
    const stores = ref([
        { link:'https://www.amazon.com/', img:'amazon-2x.png'},
        { link:'https://www.amazon.com/', img:'ebay-2x.png' },
        { link:'https://www.amazon.com/', img:'shein-2x.png' },
        { link:'https://www.amazon.com/', img:'rockauto-2x.png' },
        { link:'https://www.amazon.com/', img:'apple-2x.png' },
        { link:'https://www.amazon.com/', img:'aliexpress-2x.png' },
        { link:'https://www.amazon.com/', img:'wallmart-2x.png' },
        { link:'https://www.amazon.com/', img:'dell-2x.png' },
        { link:'https://www.amazon.com/', img:'fashion-2x.png' },
        { link:'https://www.amazon.com/', img:'newegg-2x.png' },
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
      @apply grid grid-rows-2 grid-flow-col gap-x-5 gap-y-10 items-center  overflow-x-scroll p-5  3xl:px-20;
  }
  .prods-wrapper::-webkit-scrollbar{
      display: none;   
  }
  .store-card{
      box-shadow: 0 0 10px #00000020;
      min-width: 180px;
      min-height: 80px;
      @apply flex items-center justify-center rounded-xl;
  }
  .cashback{
      box-shadow: 0 0 10px #00000020;
      @apply  rounded-full px-3 py-1 flex items-center justify-center bg-white -mt-3 text-[12px] text-blue
  }
  </style>