<template>
     <div class="bg-[#EAF8FF99] mb-20">
        <div class="allinOne-wrapper">
            
            <div class="max-lg:mb-10 lg:mr-8 ">
                <p class="text-blue mb-4 leading-none font-semibold text-2xl capitalize mb-4" v-text="$t('business.all-in-one.title')"></p>
                <h3 class="text-blue text-4xl leading-10 font-bold capitalize mb-4" v-text="$t('business.all-in-one.heading')"></h3>
                <p class="text-[#737373] text-xl " v-text="$t('business.all-in-one.description')"></p>
            </div>
    
            <div class="grid sm:grid-cols-2 gap-5">
                <div class="bg-white w-full rounded-xl p-4 shadow-md" v-for="(card, key) in $t('business.all-in-one.cards')" :key="key">
                    <p class="text-base font-bold font-sofiaPro text-[#333333] mb-4" v-text="card.title"></p>
                    <div class="flex">
                        <NuxtImg quality="80" loading="lazy" :src="`/images/business/${key}.png`" alt="parcel" class="w-[70px] h-[70px] mr-4"/>
                        <ul class="list-disc leading-5 text-sm">
                            <li class="mb-1" v-for="(l,j) in card.list" :key="j" v-html="l"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>
</template>

<style lang="scss" scoped>
.allinOne-wrapper{
    @apply flex max-lg:flex-col lg:items-center w-full max-w-[1080px] mx-auto py-16 px-5
}
</style>
