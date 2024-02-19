<template>
  <div class="my-16" :class="newoffer?'bg-blue text-white py-10':''">
    <div class="row title-wrap">
        <h1 class="title"></h1>
        <p class="view-all" >View All</p>
    </div> d
    <div class="prods-wrapper">
        <a href="" v-for="i in 20" :key="i">   
          <div class="card">
            <div class="w-full mb-10">
                <div class="w-full relative mb-2">
                    <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/nike-shoes.png" alt="image" class="w-full h-[114px] rounded-xl"/>
                </div>
                <div class="cashback"><span class="text-[#F96302] mr-1.5">Upto 5%</span> Cash Back</div>
                <p class="pr-5">30% off everything, including nearly 700 new arrivals!</p>
            </div>
            <div class=" border-t-[.5px] flex items-center justify-between py-2 'text-blue border-blue'" >
              <p>Shop Now</p>
              <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/arrow-right.png" alt="right arrow" class="w-4"/>
            </div>
          </div>
        </a>
    </div>
  </div>
</template>
  
<script setup>
  const props = defineProps({
    newoffer:Boolean
  })
</script>
  
  <style lang="scss" scoped>
.title-wrap{
    @apply flex justify-between mb-5 px-5;
}
.title{
    @apply text-lg md:text-2xl font-semibold  mr-5 leading-none;
}
.view-all{
    @apply min-w-max text-sm md:text-base font-medium ;
}
  .prods-wrapper{
      @apply grid grid-rows-1 grid-flow-col gap-x-5 gap-y-10 items-center  overflow-x-scroll  3xl:px-20;
  }
  .prods-wrapper::-webkit-scrollbar{
      display: none;   
  }
  .card{
    @apply w-[260px]  flex flex-col justify-between rounded-lg;
  }
  .custom-shadow{
    box-shadow: 0 0 5px #00000020;
  }
  .cashback{
      box-shadow: 0 0 10px #00000020;
      @apply w-36 mb-5 rounded-full px-3 py-1 flex items-center justify-center bg-white text-[12px] text-blue
  }
  </style>
