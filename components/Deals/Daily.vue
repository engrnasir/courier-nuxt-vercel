<template>
    <div class="bg-blue dark:bg-dark-header text-white py-10">
      <div class="row title-wrap">
          <h1 class="title">{{ lang==='en'?'Daily Deals':'Ofertas diarias'}}</h1>
      </div>
      <div class="row prods-wrapper" :class="viewAll?'viewAll':'viewLess'">
          <a :href="item.link" v-for="(item, i) in dailydeals" :key="i" class="h-full" target="_blank">
              <div class="card text-white">
                <div class="w-full mb-10">
                    <div class="w-full relative mb-2">
                        <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/stores/thumbnails/${item.thumbnail}`" alt="image" class="w-full h-[114px] rounded-xl"/>
                        <div class="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md absolute right-4 -bottom-3 overflow-hidden">
                          <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/stores/logo/${item.logo}`" alt="logo" class="w-7"/>
                        </div>
                    </div>
                    <p class="t font-semibold text-lg">{{ item.title }}</p>
                    <p class="text-sm">{{ lang==='en'? item.text : item.estext }}</p>
                </div>
                <div class=" border-t-[.5px] flex items-center justify-between py-2 text-white border-[#ffffff40]">
                  <p>{{ lang==='en'? 'Shop Now':'Compra ahora'}}</p>
                  <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/arrow-right-white.png" alt="right arrow" class="w-4"/>
  
                </div>
              </div>
          </a>
      </div>
    </div>
  </template>
  
<script setup>
import topNewDeals from '@/assets/shop/topNewDeals';
const store = useStore()
const { selectedCountry, lang } = storeToRefs(store);

const viewAll = ref(false);
const dailydeals = ref([
  { thumbnail:'ebay-dd.png', logo:'ebay.png', title:'Ebay', estitle:'Ebay', text:'Save money on the best Daily online with eBay Deals', estext:'Ahorre dinero en el mejor diario en línea con las ofertas de eBay', link:'https://www.ebay.com/globaldeals' },
  { thumbnail:'amazon-dd.png', logo:'amazon.png', title:'Amazon ',  estitle:'Amazonas', text:'Deals for Today', estext:'Ofertas para hoy', link:'https://www.amazon.com/deals' },
  { thumbnail:'temu-dd.png', logo:'temu.png', title:'Temu', estitle:'Temu', text:'Explore the latest deals', estext:'Explora las últimas ofertas', link:'https://www.temu.com/' },
])

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
      @apply  gap-x-5 gap-y-10 items-center  overflow-x-scroll px-5 py-1.5;
  }
.viewAll{
    @apply flex flex-wrap
}
.viewLess{
    @apply grid grid-rows-1 grid-flow-col;
}
  .prods-wrapper::-webkit-scrollbar{
      display: none;   
  }
  .card{
    @apply w-[310px] h-[320px]  flex flex-col justify-between p-5 rounded-lg;
  }
  .custom-shadow{
    box-shadow: 0 0 5px #00000020;
  }
  </style>
