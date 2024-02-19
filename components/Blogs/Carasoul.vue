<template>
   <div class="row px-5" v-motion-fade-visible>
    <div class="flex items-center justify-between">
        <h3 class="blog-heading">Blogs</h3>
        <nuxt-link class="text-blue" :to="`/${lang}/blog`">{{ lang==='en'?'View all':'ver todo' }}</nuxt-link>
    </div>
        <OtherScrollLeftRight>
            <BlogsItem v-for="(blog,index) in blogs" :key="index" :blog="blog" :thumbnail="blog.img" :index="index" class="mr-2"/>
        </OtherScrollLeftRight>
    </div>
</template>

<script setup>
import blogs from '@/assets/blogs';
const store = useStore();
const { selectedCountry, lang } = storeToRefs(store)
</script>

<style scoped>
.blog-heading{
    @apply text-blue text-center text-3xl font-medium mb-5;
}

</style>