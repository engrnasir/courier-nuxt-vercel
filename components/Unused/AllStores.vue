<template>
  <div class="mb-10">
    <div class="row px-5">
        <h3 class="text-lg md:text-2xl font-semibold  mr-5 leading-none text-blue mb-3">{{ lang==='en'?' All Stores':'Todas las tiendas' }}</h3>
    </div>
    <div class="row categories">
        <div class="category" 
            :class="selectedType===i?'bg-blue text-white':'text-blue bg-white'"
            @click="selectedType = i"
        v-for="(item, i) in categories" :key="i">{{ lang==='en'? item.type : item.estype }}</div>
    </div>
    <div class="row prods-wrapper">
        <a :href="store.link" v-for="(store, i) in selectedStores" :key="i" target="_blank">
            <div class="flex w-[180px] h-[160px] flex-col items-center justify-between" >
                <div class=" w-[88px] h-[88px] flex items-center justify-center rounded-full border border-[#D1D1D1] mb-5">
                    <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/stores/categories/${store.img}`" alt="amazon" class="w-16 max-h-12"/>
                </div>
                <p class="text-lg font-medium text-blue text-center capitalize leading-none">{{ store.title }}</p>
                <!-- <div class="cashback"><span class="text-[#F96302] mr-1.5">Upto 5%</span> Cash Back</div> -->
            </div>
        </a>

    </div>
  </div>
</template>

<script setup>
import categories from '@/assets/shop/categories';

const selectedType = ref(0);
const storeTypes = ref(['Clothing','Electronics','Travel & Vacations','Shoes','Accessories','Auto & Tires','Baby & Toddler','Digital Services & Streaming','Events & Entertainment','Food, Drinks & Restaurants','Gifts, Flowers & Parties','Health & Beauty','Home & Garden','Office Supplies' ])

const store = useStore();
const { lang } = storeToRefs(store)

const selectedStores = computed(()=>{
    return categories[selectedType.value]?.list
})
</script>

<style lang="scss" scoped>
 .prods-wrapper{
      @apply grid grid-rows-2 grid-flow-col gap-x-5 gap-y-10 items-center  overflow-x-scroll p-5;
  }
  .prods-wrapper::-webkit-scrollbar{
      display: none;   
  }
  .cashback{
      box-shadow: 0 0 10px #00000020;
      @apply w-36 mb-5 rounded-full px-3 py-1 flex items-center justify-center bg-white text-[12px] text-blue
  }
  .categories{
    @apply p-5 flex items-center overflow-x-scroll; 
  }
  
  .categories:-webkit-scrollbar{
    @apply hidden;
  }
  .category{
    @apply capitalize text-base font-semibold border border-blue px-3 mr-5 rounded-full min-w-fit cursor-pointer;
  }


</style>