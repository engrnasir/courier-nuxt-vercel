<template>
  <div class="mb-8 relative z-30" >
      <div class="row title-wrap">
          <h1 class="title text-blue" v-if="title">{{ title }}</h1>
          <div  class="text-blue ">
            <nuxt-link :to="`/${selectedCountry.gtw}/${lang}/deals`" v-if="isHome" class="text-blue">
              {{ lang==='en'?'View All':'Ver Todo' }}
            </nuxt-link>
            <!-- <p class="view-all cursor-pointer" @click="viewAll=!viewAll" v-else>
              {{ viewAll? lang==='en'?'View Less':'Ver Menos' : lang==='en'?'View All':'Ver Todo' }} 
            </p> -->
          </div>
      </div>
      <div class="row " v-if="deals.length>0">
        <OtherScrollLeftRight :viewall="viewAll" :key="sKey">
          <div v-for="(item, i) in deals" :key="i" class="mx-1 px-1 sm:px-2.5 py-2.5" >
            <div class="w-[160px] sm:w-[210px] h-[350px] flex items-center justify-center rounded-md" v-if="item.amazon">
              <div  v-html="item.script" class="scale-[140%] sm:scale-[143%] rounded-md overflow-hidden"></div>
            </div>
            <a :href="item.link" class="h-full" target="_blank" v-else>
              <CardTextDealItem :info="item" v-if="item.textdeal"/>
              <CardProductLinkItem :info="item" v-else/>
            </a>
          </div>
        </OtherScrollLeftRight>
      </div>
      <OtherNotFound v-else/>
    </div>
  </template>
  
  <script setup>

const props = defineProps({
  showAll:{ type:Boolean, default:false },
  title:{ type:String },
  deals:{ type:Array },
  isHome:{ type:Boolean, default:false },
})

  const viewAll = ref(false)
  const sKey = ref(0)

  const store = useStore();
  const { selectedCountry, lang } = storeToRefs(store);
 
onMounted(()=>{
  viewAll.value = props.showAll;
})

  </script>
  
  
<style lang="scss" scoped>
.title-wrap{
  @apply flex justify-between  px-5;
}
.title{
    @apply text-lg md:text-2xl font-semibold  mr-5 leading-none;
}
.view-all{
    @apply min-w-max text-sm md:text-base font-medium text-blue;
}
  .prods-wrapper{
      @apply  gap-x-5 gap-y-10 items-center  overflow-x-scroll p-5 md:py-8;
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
.amazon{
  @apply scale-125;
}

  </style>

