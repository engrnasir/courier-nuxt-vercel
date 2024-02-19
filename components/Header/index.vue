<template>
    <div class="px-8 py-4 relative z-50">
        <HeaderNavigation v-if="!noHeader && !blog"/>
        <div class="row" v-if="shop">
            <OtherScrollLeftRight class="mt-5 hidden md:inline-block" :autoscroll="true">
                <HomeBannersItem  v-for="(banner, i) in banners" :index="i" :key="i" :banner="banner"/>
            </OtherScrollLeftRight>
        </div>
    </div>
</template>

<script setup>
import allbanners from '@/assets/amazon/banners'

const banners = computed(()=> allbanners)
const route = useRoute(); 
const props = defineProps({
    blog:Boolean,
    shop:Boolean
})

const noHeader = computed(()=>{
    return route.query.noHeader? true : false;
})
</script>
