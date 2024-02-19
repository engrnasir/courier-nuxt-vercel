
<template>
    <div class="min-w-full">
    <HeaderHeroTitle :title="$t('terms.hero.title')" />

        <TermsEN v-if="lang==='en'"/>
        <TermsES v-else/>

    <FooterTitle :bgBlue='true'></FooterTitle>
    </div>
</template>
  
<script setup>

const store = useStore();
const { lang} = storeToRefs(store)
</script>
<style lang="scss" scoped>

.snippet{
    @apply text-blue text-base font-light mb-4
}

    
</style>
  