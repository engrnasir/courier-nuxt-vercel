<template>
  <div class="row">
    <div class="mt-10 hidden">
        <h1 class="title text-blue pl-5">{{ lang==='en'? 'Choose Your Favourite Deals':'Elija sus ofertas favoritas' }}</h1>
        <div class="flex items-center  overflow-x-scroll rounded-full py-5 px-3">
            <div class="filterItem" :class=" i===selectedIndex? 'selectedItem':''" v-for="(deal, i) in deals" :key="i" @click="handleSelection(i, deal.title.toLowerCase())">
                {{ lang==='en'? deal.title : deal.estitle }}
            </div>
        </div>
    </div>

    <div class="subfilter-wrapper">
        <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/hotDeals/filter.png" v-if="filterApplied" @click="cleanSubFilter();" alt="filter" class="filterIcon"/>
        <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/hotDeals/filter-trans.png" v-else alt="filter no bg" class="filterIcon"/>
        
        <p  class="subfilterItem" 
            :class="f.state?'selected-subfilterItem':''" 
            v-for="(f, i) in subfilters" :key="JSON.stringify(f)"
            @click="handleClick(i)">
            {{ lang==='en'? f.text:f.estext }}
        </p>
    </div>

  </div>
</template>

<script setup>
const store = useStore();
const { selectedCountry, lang } = storeToRefs(store);
const deals = ref([
    { title:'All', estitle:'Todo' },
    { title:'Ebay' , estitle:'Ebay' },
    // { title:'Amazon', estitle:'Amazon' },
    { title:'Others', estitle:'Otras' } 
])
const selectedIndex = ref(0);
const filterApplied = ref(false);
const subfilters = ref([
    { key:'electronics', text:'Electronics', estext:'Electrónica', state:false },
    { key:'home-garden', text:'Home and Garden', estext:'Casa y Jardín', state:false },
    { key:'clothing-accesories', text:'Clothing and Accesories', estext:'Ropa y accesorios', state:false },
    { key:'sports', text:'Sporting Goods', estext:'Artículos deportivos', state:false },
    { key:'', text:'Others', estext:'Otras', state:false },
])
const route = useRoute();
const router = useRouter();
const emit = defineEmits([
    'updateMainSelection',
    'updateSubFilters'
])

const handleSelection = (i,text)=>{
    cleanSubFilter()
    selectedIndex.value = i;
    emit('updateMainSelection',selectedIndex.value)
    const productType =  route.params.products
    if(selectedCountry.value && productType && productType !== text){
        router.push(`/${selectedCountry.value.gtw}/${lang.value}/shop/${text?text:'all'}`)
    } 
}
const cleanSubFilter = ()=>{
    subfilters.value.forEach(f => f.state = false)
    emit('updateSubFilters',subfilters.value)
    filterApplied.value=false
}
const handleClick = (i)=>{
    cleanSubFilter()
    subfilters.value[i].state = !subfilters.value[i].state
    dealsKey.value++
    filterApplied.value=true
    emit('updateSubFilters',subfilters.value)
}

onMounted(()=>{
    // const temp = ['all','ebay','amazon','others']
    const temp = ['all','ebay','others']
    const products = route.params.products
    let index = products? temp.findIndex(el => el===products) : 0
    cleanSubFilter()
    selectedIndex.value = index? index:0;
    emit('updateMainSelection',selectedIndex.value)
})
</script>

<style scoped>
.title{
  @apply text-lg md:text-2xl font-semibold  mr-5 leading-none;
}
  .filterItem{
      min-width: 110px; 
      min-height: 110px;
      width: 110px; 
      height: 110px;
      box-shadow: 0 0 5px #00000020; 
      @apply relative overflow-hidden rounded-full mr-3 flex items-center justify-center text-center text-blue font-bold text-lg border-2 border-blue cursor-pointer leading-none hover:shadow-md transition-all duration-150;
  }
  .filterItem:active{
    @apply scale-[.9]
  }
  .selectedItem{
      @apply bg-blue text-white
  }
  @media only screen and (max-width: 840px) {
      .filterItem{
          min-width: 80px; 
          min-height: 80px;
          width: 80px; 
          height: 80px;
          box-shadow: 0 0 5px #00000020; 
          @apply text-sm mr-3
      }
  }
  .filterBg{
      @apply absolute left-0 top-0 w-full h-full hidden;
  }
  .filterIcon{
      @apply w-6 mr-5 cursor-pointer
  }
  .subfilter-wrapper{
      @apply pl-5 mb-5 text-blue flex items-center overflow-x-scroll;
  }
  .subfilter-wrapper::-webkit-scrollbar{
      @apply hidden
  }
  .subfilterItem{
      @apply min-w-max text-sm md:text-base flex items-center px-3  py-1 cursor-pointer border rounded-full mr-2.5 bg-white;
  }
  .selected-subfilterItem{
      @apply bg-blue text-white;
  }

</style>