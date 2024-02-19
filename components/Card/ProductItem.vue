<template>
    <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/ebayBanners/${lang==='en'? product.enIMG : product.esIMG}`" alt="" class="productWrapper" @click="goto(product.link)"/>
        <!-- <div class="hidden w-full h-80 bg-contain bg-center bg-no-repeat" @click="goto(product.link)" :style="{backgroundImage:'url('+imgURL()+')'}"> -->
            <!-- <div class="thumbnail">
                <NuxtImg quality="80" loading="lazy" :src="`/images/newHomepage/products/${product.thumbnail}`" alt="tv" class="max-h-[80px] sm:max-h-[200px]"/>
            </div>
            <div class="details">
                <div class="">
                    <h3 class="title"
                        @mouseenter="alltitle=true" 
                        @mouseleave="alltitle=false"
                        >{{ title}}</h3>
                    <p class="description " 
                        @mouseenter="alldescription=true" 
                        @mouseleave="alldescription=false"
                        v-html="description"
                    ></p>
                </div>
                <div class="shop-footer ">
                    <p class="px-2 py-1 rounded-sm bg-yellow text-base">Shop <span v-if="product.store==='ebay'" class="font-bold">50% off</span></p>
                    <NuxtImg  quality="80" loading="lazy" src="/images/newHomepage/stores/arrow-right.png" alt="blue arrow" class="w-6"/>
                </div> 
            </div> -->

        <!-- </div> -->
</template>

<script setup>
const props = defineProps({
    product:Object
})
const store = useStore()
const {lang} = storeToRefs(store);
const imgURL=()=>{
        return getImageSrc(`newHomepage/ebayBanners/${product.value?.enIMG}`)
    }
const goto=(url)=>{
    if(process.client){
        window.open(url, '_blank');
    }
}

</script>

<style scoped lang="scss">
.productWrapper{
    box-shadow: 0 0 5px #00000030;
    min-height: 300px;
    height: 330px;
    @apply inline-block w-full flex items-center rounded-md max-sm:flex-col max-sm:min-h-[200px] max-sm:h-[200px] max-sm:text-center cursor-pointer transition-all duration-150 border-b-2 border-transparent hover:border-yellow bg-white;
}
.thumbnail{
    @apply  h-[100px] w-full sm:h-auto sm:max-w-[40%] py-5 flex items-center justify-center 
}
.details{
    @apply h-full sm:w-[60%] flex flex-col justify-evenly  md:ml-5

}
.title{
    line-height: none;
    @apply max-h-16 text-blue text-base md:text-lg font-semibold mb-2 overflow-y-scroll;
}
.title::-webkit-scrollbar{
    @apply hidden;
}
.description{ 
    @apply max-h-20 text-base font-light pb-5 overflow-y-scroll
}
.description::-webkit-scrollbar{
    @apply hidden;
}
.shop-footer{
    @apply flex items-center justify-between text-blue border-t-2 border-[#eeeeee] pt-2;
}

</style>