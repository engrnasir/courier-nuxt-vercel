<template>
    <div class="row p-20 flex flex-col items-center justify-center">
        <NuxtImg quality="80" loading="lazy" src="/images/nothing.png" alt="nothing" class="w-20 animate-bounce mb-3"/>
        <p class="text-lg text-center font-bold text-blue">{{ message }}</p>
    </div>
  
</template>

<script setup>

const store = useStore();
const { lang } = storeToRefs(store);

const message = computed(()=> lang.value==='en'?'No Item Avaiable!':'¡Ningún artículo disponible!')

</script>

<style>

</style>