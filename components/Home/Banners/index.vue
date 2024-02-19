<template>
    <div class="row pt-8">
        <div class="px-5" v-if="shop">
            <h3 class="text-lg md:text-2xl font-semibold text-blue dark:text-white mb-2 leading-none">{{ costa.title }}</h3>
            <p class="text-base dark:text-dark-text">{{ costa.text }}</p>
        </div>
        
        
        <OtherScrollLeftRight v-else class="mt-10" :autoscroll="true">
            <HomeBannersItem  v-for="(banner, i) in banners" :index="i" :key="i" :banner="banner"  v-motion-fade-visible/>
        </OtherScrollLeftRight>


    </div>
</template>

<script setup>

import allbanners from '@/assets/amazon/banners';
const props = defineProps({
    shop:{ type:Boolean, default:false }
})
const store = useStore();
const { selectedCountry } = storeToRefs(store);
const {locale} = useI18n()
const costa = computed(()=>{
    return locale.value === 'en'?
        {  
            title: selectedCountry.value && selectedCountry.value.gtw === 'SJO'? 'What is being bought in Costa Rica':'Top Trending products shipped through Aeropost',
            text:"Every week, we will bring you our recommendations for the most purchased products by our customers throughout the Caribbean, Central America, and Latin America. Don't miss them!"
        }:
        {  
            title: selectedCountry.value && selectedCountry.value.gtw === 'SJO'?'Qué se está comprando en Costa Rica':'Productos de mayor tendencia enviados a través de Aeropost',
            text:'Todas las semanas te traeremos nuestras recomendaciones de los productos más comprados por nuestros clientes a lo largo de Caribe, Centro América y Latinoamérica. No te los pierdas'
        }
})

const banners = computed(()=> allbanners)


</script>

<style scoped>

.prods-wrap{
    min-width: 50%;
    @apply px-2;
}
@media screen and (max-width:1080px) {
    .prods-wrap{
        min-width: 100%;
    }
    
}
</style>