<template>
  <div class="row">
        <div class="title-wrap text-blue">
            <h1 class="title ">{{ hotDealsTitle }}</h1>
            <p class="view-all cursor-pointer" @click="viewAllBanners=!viewAllBanners">
                {{ viewAllBanners? $t('common.viewLess') : $t('common.viewAll') }} 
            </p>
        </div>
        <OtherScrollLeftRight :viewall="viewAllBanners">
          <a :href="b.link" target="_blank" v-for="(b,i) in smallBanners" :key="b+i" class="m-3">
              <NuxtImg quality="80" loading="lazy" :src="b.imgURL" alt="" class="bannerImage"/>
          </a>
        </OtherScrollLeftRight>
    </div>

</template>

<script setup>
import smallBanners from '@/assets/shop/smallBanners';

const viewAllBanners = ref(false);

const store = useStore();
const {lang} = storeToRefs(store);

const hotDealsTitle = computed(()=>{ return lang.value==='en'? 'Hot Deals':'Las mejores ofertas' })

</script>
<style scoped>
.title-wrap{
  @apply flex justify-between  px-5;
}
.title{
    @apply text-lg md:text-2xl font-semibold  mr-5 leading-none;
}
.bannerImage{
  min-width: 200px; 
  min-height: 200px; 
  width: 200px; 
  height: 200px; 
}
</style>