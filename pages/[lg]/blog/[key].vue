<template>
    <div>
        
        <div class="max-w-[1140px] mx-auto my-10 p-5">
    
            <p class="row p-5 bg-[rgb(235,246,251)] dark:bg-dark-secondary text-blue dark:text-dark-text rounded-sm mb-10">
                {{ $t('common.affliateDisclosure') }}
            </p>
            
            <p class="mb-5">
                <nuxt-link :to="backlink" class="text-blue cursor-pointer text-base flex items-center" >
                    <NuxtImg quality="80" loading="lazy" src="/images/backarr.png" alt="back arrow" class="w-4 mr-1.5"/>
                    {{$t('blog.back')}}
                </nuxt-link>
            </p> 
    
            
            <div class="text-center">
                <!-- <a href="" target="_blank"></a> -->
                <h1 class="text-black text-2xl md:text-4xl hover:underline font-bold mb-3" v-html="selectedCountry.gtw==='SJO' && blog.sjotitle? blog.sjotitle : lang==='en'? blog.title : blog.estitle"></h1>
                <p class="flex items-center justify-center mb-2">
                    <span class="text-blue text-sm md:text-base font-semibold">{{$t('blog.updated')}} : {{ blog.onUpdated }}</span>
                    <span class="w-2 h-2 bg-black rounded-full mx-3" v-if="blog.author">.</span>
                    <span class="text-black text-xs md:text-sm font-semibold" v-if="blog.author">{{$t('blog.by')}} {{ blog.author }}</span>
                </p>
            </div>
            <div class="banner" v-if="blog.banner || blog.esbanner" :style="{ backgroundImage:bgImage(selectedCountry && selectedCountry.gtw==='SJO' && blog.sjobanner? blog.sjobanner : lang==='en'? blog.banner:blog.esbanner) }"></div>
            <div class="py-5">
                <NuxtImg quality="80" loading="lazy" :src="`/images/blogs/${blog.img}`" alt="thumbnail" class="thumbnail" align="left" v-if="blog.img"/>
                <span class="text-[#222222] font-light text-sm md:text-lg mb-5" v-html="selectedCountry.gtw==='SJO' && blog.sjotext? blog.sjotext : lang==='en'? blog.text : blog.estext"></span>
            </div>
        </div> 
    
        <div class="max-w-[1140px] mx-auto">
            <p class="text-blue text-center text-3xl font-medium mb-5">{{$t('blog.recent')}}</p>
            <OtherScrollLeftRight>
                <BlogsItem v-for="(blog,index) in recentBlogs" :key="JSON.stringify(blog)" :blog="blog" :index="index" />
            </OtherScrollLeftRight>
        </div>
    </div>
        

</template>

<script setup>
import blogs from '@/assets/blogs'

definePageMeta({
    layout:'blog'
})

const store = useStore();
const {selectedCountry,lang} = storeToRefs(store)
const route = useRoute();

const blog = computed(()=>{
    const key = route.params.key
    return blogs.find(el => el.key === key)
});
const recentBlogs = computed(()=>{
    const allowBlogs=5 
    return blogs.length>allowBlogs? blogs.filter((el,i)=>i<allowBlogs):blogs
});
const backlink = computed(()=>{
    return `/${lang.value}/blog`
})

const bgImage = (img)=>{
    return `url(${'https://ik.imagekit.io/phc7dlrym/courier-aeropost/images/blogs/'+img})` 
}

</script>

<style scoped>

.blogItem{
    box-shadow: 0 0 5px #00000030;
    @apply w-full flex items-center h-[300px] rounded-md overflow-hidden mb-7
}

.banner{
    /* background-image: url('/images/blogs/bg.png'); */
    @apply  w-full h-[200px] md:h-[350px] bg-center bg-no-repeat bg-contain md:mb-10;
}
.thumbnail{
    @apply w-[200px] md:w-[300px] mr-5 mb-5;
}
a{
    @apply font-semibold text-blue
}

</style>