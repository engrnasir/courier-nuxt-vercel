<template>
    <div>
        <div :class="fullWidth?'blogItem':'recent-blogItem'" @click="viewDetails()">
            <div :class="fullWidth?'thumbnail':'recent-thumbnail'" :style="{ backgroundImage:`url(${'https://ik.imagekit.io/phc7dlrym/courier-aeropost/images/blogs/'+blog.img})` }">
            </div>
            <div class="p-5 h-full flex flex-col justify-between">
                <div>
                    <h2 :class="fullWidth?'title':'recent-title'" v-html="blogTitle"></h2>
                    <p :class="fullWidth?'updated':'recent-updated'">{{$t('blog.updated')}} : {{ blog.onUpdated }}</p>
                    <p :class="fullWidth?'author':'recent-author'" v-if="blog.author">{{$t('blog.by')}} {{ blog.author }}</p>
                    <p :class="fullWidth?'text-details':'recent-text-details'" v-html="blogText"></p>
                </div>
                <p :class="fullWidth?'view-more':'recent-view-more'">{{$t('blog.viewMore')}}</p>
            </div>
        </div> 
    </div>
</template>

<script setup>
const store = useStore();
const { selectedCountry, lang } = storeToRefs(store)
const router = useRouter();
const props = defineProps({
    blog:{
        type:Object,
    },
    thumbnail:{
        type:String,
    },
    index:Number,
    fullWidth:{
        type:Boolean,
        default:false
    }
})

const blogText=computed(()=>{
    let text =selectedCountry.value.gtw ==='SJO' && props.blog.sjotext? props.blog.sjotext : lang.value === 'en'? props.blog.text : props.blog.estext
    return !props.fullWidth? text.length>100?text.substring(-1,100)+'...':text  : text.length>150?text.substring(-1,150)+'...':text 
})
const blogTitle=computed(()=>{
    let title = selectedCountry.value.gtw ==='SJO' && props.blog.sjotitle? props.blog.sjotitle : lang.value==='en'? props.blog.title : props.blog.estitle
    return !props.fullWidth? title.substring(-1,20): title
})
const bgImage =(img)=>{
    return `url(${getImageSrc('blogs/'+img)})` 
}
const viewDetails=()=>{
    navigateTo( selectedCountry.value? `/${lang.value}/blog/${props.blog.key}`:`/${lang.value}/blog/${props.blog.key}`)
}

</script>

<style scoped>

.blogItem{
    box-shadow: 0 0 5px #00000020;
    @apply min-w-full w-full flex flex-col sm:flex-row items-center md:h-[300px] md:rounded-md overflow-hidden mb-7 border-b-2 border-transparent hover:border-yellow cursor-pointer
}
.thumbnail{
    @apply w-full h-[150px] md:max-w-[30%]  md:h-full bg-center bg-no-repeat bg-contain  mt-5 md:m-0;
}
.title{
    @apply text-black text-base lg:text-3xl font-bold
}
.updated{
    @apply text-blue text-xs lg:text-base font-semibold mb-2 lg:mb-5
}
.author{
    @apply text-black text-xs lg:text-sm font-semibold mb-3
}
.text-details{
    @apply text-[#222222] font-light text-sm lg:text-base mb-5
}
.view-more{
    @apply text-blue cursor-pointer text-base hover:underline
}


.recent-blogItem{
    box-shadow: 0 0 5px #00000020;
    @apply w-[260px] h-[390px] mx-3 flex flex-col items-center overflow-hidden mb-7 border-b-2 border-transparent hover:border-yellow cursor-pointer
}
.recent-thumbnail{
    @apply w-full h-[260px] bg-center bg-no-repeat bg-contain mt-5;
}
.recent-title{
    @apply text-black text-xl font-bold
}
.recent-updated{
    @apply text-blue text-xs font-semibold mb-2 
}
.recent-author{
    @apply text-black text-xs font-semibold mb-3
}
.recent-text-details{
    @apply text-[#222222] font-light text-sm mb-5
}
.recent-view-more{
    @apply text-blue cursor-pointer text-base hover:underline
}

</style>