<template>
  <div class="my-8  relative z-30" :class="noHeader?'mt-24':''">
    <div class="title-wrap row">
        <h2 class="title">{{ title }}</h2>
        <!-- <nuxt-link :to="`/${selectedCountry.gtw}/${lang}/shop/all`" v-if="isHome" class="text-blue dark:text-white">{{ lang==='en'?'View All':'Ver Todo' }}</nuxt-link>
        <p class="view-all cursor-pointer " @click="viewAll=!viewAll; skey++" v-else>
            {{ viewAll? lang==='en'?'View Less':'Ver Menos' : lang==='en'?'View All':'Ver Todo' }} 
        </p> -->
    </div>
    <div class="row">
        <div class="flex flex-wrap px-5 mb-10 max-sm:justify-evenly transition-all duration-200">
            <a :href="item?item.link:''" v-for="(item,i) in allStores" :key="i" target="_blank" class="p-2" :class="selectedCountry.gtw === 'BOG' && item.noColombia? 'hidden':''" v-motion-fade-visible>
                <div class="w-min flex flex-col items-center" v-if="item" >
                    <div class=" store-card" :class="item.premium?'bg-[#241816]':'bg-white'">
                        <NuxtImg quality="80" loading="lazy" :src="item.imgURL? item.imgURL : `/images/newHomepage/stores/brands/${item.img}`" alt="image"/> 
                        <p v-if="item.premium"
                        class="absolute bottom-[2px] font-bold text-[10px] sm:text-xs text-[#e43825] w-full text-center" style="text-shadow: 0 0 10px #000;">
                            {{ item.title }}
                        </p>
                    </div> 
                    <!-- <div class="cashback"><span class="text-[#F96302] mr-1.5">10%</span> Cash Back</div> -->
                </div>
            </a>
        </div>
        <div class="flex items-center justify-center" v-if="allStores.length>28">
            <button 
            class="min-w-max px-8 py-2 border rounded-full border-blue text-blue bg-white text-base md:text-lg hover:bg-blue hover:text-white transition-all duration-150 flex items-center justify-center leading-none mx-2"
            @click="viewAll = !viewAll"
            >
                {{ viewAll?$t('common.viewLess'): $t('common.viewAllBrand') }}
            </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import stores from '@/assets/shop/allStores';
import {useStore} from '@/stores';
import {storeToRefs} from 'pinia';
const route = useRoute()
const store = useStore();
const { lang, selectedCountry } = storeToRefs(store);
const props = defineProps({
    isHome: Boolean
})
const viewAll = ref(false);
const skey = ref(0);

const allStores=computed( ()=>{
    return stores.filter((el,i)=> viewAll.value? true : i<28);
})
const title=computed(()=>{
    return lang.value==='en'? 'Buy from your favorite stores':'Compra en tus tiendas favoritas'
})
const noHeader = computed(()=>{
    return route.query.noHeader == 'true' || route.query.noHeader? true : false
})

const initial = ref({
  y: 100,
  opacity: 0,
})

const enter = ref({
  y: 0,
  opacity: 1,
})

</script>

<style lang="scss" scoped>
.title-wrap{
    @apply flex justify-between mb-5 px-5;
}
.title{
    @apply text-lg md:text-2xl font-semibold text-blue dark:text-white mr-5 leading-none
}
.view-all{
    @apply min-w-max text-sm md:text-base font-medium text-blue dark:text-white;
}
.prods-wrapper{
    @apply  gap-x-5 gap-y-10 items-center  overflow-x-scroll p-5 ;
}
.viewAll{
    @apply flex flex-wrap
}
.viewLess{
    @apply grid grid-flow-col;
}
.prods-wrapper::-webkit-scrollbar{
    display: none;   
}
.store-card{
    box-shadow: 0 0 10px #00000020;
    @apply flex flex-col items-center justify-center w-[120px] h-16 md:w-[180px] md:h-20 rounded-xl overflow-hidden   relative;
    img{
        @apply w-[80px];
    }
}
.cashback{
    box-shadow: 0 0 10px #00000020;
    @apply rounded-full px-3 py-1 flex items-center justify-center bg-white -mt-3 text-[12px] text-blue
}
</style>