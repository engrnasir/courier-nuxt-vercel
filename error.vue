<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
const handleError = () => clearError({ redirect: '/en/country-picker' })
</script>

<template>
    <div class="w-full h-screen flex flex-col items-center justify-center bg-blue" v-if="error">
        <h1 class="text-8xl font-bold text-white">{{ error.statusCode }}</h1>
        <p class="text-xl text-white">{{ error.message }}</p>
        <button @click="handleError" class="text-lg bg-white text-blue mt-5 px-3 py-1 rounded">Go back</button>
    </div>
</template>
