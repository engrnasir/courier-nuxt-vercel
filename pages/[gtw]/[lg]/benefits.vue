<template>
    <div class="container min-w-full bg-[#F5F5F5]">
        <HeaderHeroTitle 
            :title="$t('benefits.hero.title')" 
            :description="$t('benefits.hero.description')" 
            :showSignUp="false"
        />

        <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto -translate-y-12 grid grid-cols-2 max-sm:grid-cols-1 gap-[80px] gap-y-10">
            <div v-for="(item, i) in items" :key="i">
                <NuxtImg quality="80" loading="lazy" :src="`/images/${item}.png`" :alt="$t(`benefits.items.${item}.title`)" class="h-10 mb-4"/>
                <h3 class="font-bold text-2xl text-blue mb-4">{{ $t(`benefits.items.${item}.title`) }}</h3>
                <p class="text-sm text-[#333333]" >{{ $t(`benefits.items.${item}.description`) }}</p>
            </div>
        </div>
        <FooterTitle :bgBlue='true'></FooterTitle>
    </div>
</template>
    
<script setup>
const store = useStore();
const {selectedCountry} = storeToRefs(store)
const items = computed(()=>{
    return[
        'save',
        'secure',
        'return',
        'track',
        selectedCountry.value.lockers ? 'locker' : 'hub',
        'credit-card',
        'hand',
        'fast',
        ]
})
</script>

    