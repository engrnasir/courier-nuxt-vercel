<template>
        <HomeBanners shop class="mb-5" v-if="!noHeader" />

        <HomeFavStores/>
          <p class="row p-5 bg-[#EBF6FB] dark:bg-dark-secondary text-blue dark:text-dark-text rounded-sm"  v-if="!noHeader">
            {{ $t('common.affliateDisclosure') }}
          </p>
          <div class="row flex items-center justify-center my-10"  v-if="!noHeader">
            <!--
            Amazfit banner
            <a target="_blank" href="https://www.tkqlhce.com/click-101000708-15563735" style="box-shadow: 0 0 5px #00000020;">
              <img src="https://www.ftjcfx.com/image-101000708-15563735" border="0" alt="Shop now " />
            </a> 
            <a target="_blank" href="https://shareasale.com/r.cfm?b=305177&u=3838146&m=32599&urllink=www%2Ebanggood%2Ecom%2Fmarketing%2DBanggood%2DGlobal%2DShopping%2DFestival%2Ftid%2D58058%2Ehtml%3Futmid%3D22919%26from%3Dnav&afftrack=CyberMonday">
              <img src="https://static.shareasale.com/image/32599/bg-CyberMonday181126_banner-728x90-liuxi.jpg" border="0" />
            </a>
          -->
              <!-- Anker banner -->
            <a href="https://anker.pxf.io/c/4666008/1879040/18023" target="_top" id="1879040" aria-label="Shop with Anker">
              <img src="//a.impactradius-go.com/display-ad/18023-1879040" border="0" alt="" width="980" height="120"/>
            </a>
          </div>

          <!-- <DealsHotDealsBanners/> -->
          
          <div class="mt-10 row">
            <div>
            <DealsFilters 
                @updateMainSelection="(i)=>selectedIndex=i"
                @updateSubFilters="(newFilter)=> handleSelection(newFilter)"
            />
            <div>
              <HomeDealsSection :key="dealsKey"  :showAll="true" :deals="filteredDeals"/>
            </div>
            <div class="flex items-center justify-center mb-5">
              <button 
                class="min-w-max px-8 py-2 border rounded-full border-blue text-blue bg-white text-base md:text-lg hover:bg-blue hover:text-white transition-all duration-150 flex flex-col items-center justify-center leading-none mx-2"
                @click="viewAllDeals = !viewAllDeals"
                >
                    {{ viewAllDeals?$t('common.viewLess'): $t('common.viewMore') }}
                </button>
            </div>
            </div>
          </div>
        
      
        <BlogsCarasoul class="mt-5" v-if="!noHeader" />
                
      <HomeSlider :key="componentKey"  v-if="!noHeader" />
      <FooterTitle :bgBlue='true'  v-if="!noHeader" />
  </template>
  
<script setup>
import hotDeals from '@/assets/shop/ebayDeals';
import recommendedProds from '@/assets/shop/recommended';

const route = useRoute();

const selectedIndex = ref(0);
const dealsKey = ref(0);
const filters = ref([]);
const appliedFilter = ref(false);
const viewAllDeals = ref(false);

const store = useStore();
const { selectedCountry, lang } = storeToRefs(store);


const componentKey = computed(()=>{
  // return `testimonial${selectedCountry.value.name}`
  return `testimonialDOM`
})
  // hotDealsTitle(){ return lang.value==='en'? 'Hot Deals':'Las mejores ofertas' },
const recommendedProdTitle = computed(()=>{ return lang.value==='en'? 'Recommended Products':'Productos Recomendados' })
      
const getAllDeals = computed(()=>{
  let array = [
    ...hotDeals,
    ...recommendedProds,
  ]
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array.filter((el,i) => i<60); 
})

const filteredDeals = computed(()=>{
  // return !viewAllDeals.value && getAllDeals.value.length>30? getAllDeals.value.filter((el,i) => i<30): getAllDeals.value;
  const maxDeals = 18;
  let result = []
  let filterApplied = filters.value.length>0 && filters.value.find(filter => filter.state===true )
    if(!filterApplied){
      result = getAllDeals.value
    }else{
      result =  getAllDeals.value.filter(deal => {
        return (filters.value[0].state && deal.category.trim().toLowerCase() === filters.value[0].key.trim().toLowerCase()) ||
                (filters.value[1].state && deal.category.trim().toLowerCase() === filters.value[1].key.trim().toLowerCase()) ||
                (filters.value[2].state && deal.category.trim().toLowerCase() === filters.value[2].key.trim().toLowerCase()) ||
                (filters.value[3].state && deal.category.trim().toLowerCase() === filters.value[3].key.trim().toLowerCase()) ||
                (filters.value[4].state && deal.category.trim().toLowerCase() === filters.value[4].key.trim().toLowerCase())
      })
    }

  return !viewAllDeals.value && result.length>maxDeals? result.filter((el,i) => i<maxDeals): result;
})

const noHeader = computed(()=>{
  return route.query.noHeader? true : false;
})

const handleSelection = (newFilters)=>{
  filters.value = newFilters
  dealsKey.value++
}

onMounted(()=>{
  const updateMode = (val) =>{
    let darkmode = val
    localStorage.theme = val?'dark':'light'
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  updateMode(route.query.theme && route.query.theme==='dark')
})

  </script>
