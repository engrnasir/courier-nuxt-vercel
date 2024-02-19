<template>
  <div class="grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 mb-10">
    <div class="flex flex-col items-center p-3 border border-gray" v-for="(item, i) in list" :key="i">
        <NuxtImg quality="80" loading="lazy" :src="`/images/bhsResProds/${item.img}`" :alt="item.title" class="mb-3 h-[50px]"/>
        <p class="text-[12px] text-blue text-center capitalize">{{ item.title }}</p>
    </div>
</div>
</template>

<script setup>
const props = defineProps({
    list:Array
})
</script>