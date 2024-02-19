<template>
  <button class="arrow-btn" :class="header?'header-btn':''" @click="$emit('click')">
        <NuxtImg quality="80" loading="lazy" src="/images/left-arrow.png" alt="left arrow" v-if="left" class="arrow"/>
        <NuxtImg quality="80" loading="lazy" src="/images/right-arrow.png" alt="right arrow" v-else class="arrow"/>
  </button>
</template>

<script setup>
const props = defineProps({
    left : {type:Boolean, default:false},
    header : {type:Boolean, default:false},
})
</script>

<style scoped>
.arrow-btn{
    box-shadow: 0 0 5px #00000030;
    @apply w-10 h-10 flex items-center justify-center bg-white rounded-full;
}
.arrow-btn .arrow{
    @apply w-2.5
}
.header-btn{
    @apply max-md:w-6 max-md:h-6
}
.header-btn .arrow{
    @apply w-1.5
}
</style>