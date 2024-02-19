<template>
  <div class=" flex flex-col items-center p-5 bg-[#EFF4FF]">

    <!-- <h2 class="font-bold text-4xl text-center text-blue mb-5 md:mb-10">{{ lang==='en'? 'How it Works':'¿Cómo Funciona?' }}</h2> -->

    <div class="row grid grid-cols-1 md:grid-cols-3 gap-5 p-5"> 
        
        <div class="item-wrap">
            <div class="image-wrapper">
                <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/htw1.png" alt="htw1" class="w-20 mb-5"/>
                <p class="font-semibold text-sm text-blue w-44 text-center">{{ $t('newHome.howItWorks.signup.text') }}</p>
            </div>
            <div class="text-wrap">
                <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/blue-tag.png" alt="blue-tag"/>
                <p class="text pb-2">{{ $t('newHome.howItWorks.signup.title') }}</p>
            </div>
        </div>

        <div class="item-wrap">
            <div class="image-wrapper">
                <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/htw2.png" alt="htw1" class="w-28 mb-5"/>
                <p class="font-semibold text-sm text-blue w-44 text-center">{{ $t('newHome.howItWorks.deals.text') }}</p>
            </div>
            <div class="text-wrap">
                <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/blue-tag2.png" alt="blue-tag"/>
                <p class="text pb-1">{{ $t('newHome.howItWorks.deals.title') }}</p>
            </div>
        </div>

        <div class="item-wrap">
            <div class="image-wrapper">
                <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/htw3.png" alt="htw2" class="w-20 mb-5"/>
                <p class="font-semibold text-sm text-blue w-44 text-center">{{ $t('newHome.howItWorks.order.text') }}</p>
            </div>
            <div class="text-wrap">
                <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/stores/blue-tag.png" alt="blue-tag"/>
                <p class="text pb-2">{{ $t('newHome.howItWorks.order.title') }}</p>
            </div>
        </div>


    </div>
    


  </div>
</template>

<script setup>
import {useStore} from '@/stores'
import {storeToRefs} from 'pinia'

const { lang } = storeToRefs(useStore())

</script>

<style lang="scss" scoped>
.item-wrap{
    @apply flex flex-col items-center;
    .image-wrapper{
        @apply w-[240px] h-[240px] xl:w-[320px] xl:h-[320px] rounded-full bg-white flex flex-col items-center justify-center;
    }
    .text-wrap{
        @apply flex items-center justify-center -mt-5;
        img{
            @apply h-9 xl:h-12
        }
        .text{
            @apply text-yellow font-bold text-base xl:text-xl absolute leading-none;
        }
    }
}

</style>