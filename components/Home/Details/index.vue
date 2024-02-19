<template>
  <div class="bg-[#EFF4FF] px-5 pt-10 pb-20"  v-motion-fade-visible>
    <div class="flex flex-col sm:flex-row items-center justify-center mb-5">
      <button class="mb-5 sm:mb-0 sm:mr-5" :class="selected===1?'btn-blue':'btn'" @click="selected=1">{{ $t('home.benefits.more-reasons') }}</button>
      <button :class="selected===2?'btn-blue':'btn'" @click="selected=2">{{ $t('how-it-works.title') }}</button>
    </div>

    <HomeDetailsMoreReasonToShip v-if="selected===1"/>
    <HomeDetailsHowItWorks v-else/>
  </div>
  </template>
  
<script setup>

const selected = ref(1);

</script>
  
<style lang="scss" scoped>

button{
  @apply border border-blue w-full sm:w-max
}

</style>
