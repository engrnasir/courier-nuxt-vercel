<template>
    <div class="min-w-full">
    <HeaderHeroTitle 
        :title="$t('how-it-works.hero.title')" 
        :description="$t('how-it-works.hero.description')"
    ></HeaderHeroTitle>

    <div class="w-[1020px] mx-auto pb-24 max-[1100px]:w-[780px] max-[880px]:w-full">
        <!-- Item 1 -->
        <div class="item max-[1100px]:mb-5" >
            <NuxtImg quality="80" loading="lazy" src="/images/line1.png" alt="line1" class="line1" />
            <div class="details mr-5"> 
                <p class="number">1</p>
                <h3 class="title">{{ $t('how-it-works.steps.1.title') }}</h3>
                <p class="description">{{ $t('how-it-works.steps.1.description') }}</p>
            </div>
            <NuxtImg quality="80" loading="lazy" src="/images/img1.png" alt="img1" class="w-[454.56px] max-[1100px]:w-[350px] max-[880px]:m-0"/>
        </div>
        <!-- Item 2 -->
        <div class="item flex-row-reverse mb-28">
            <NuxtImg quality="80" loading="lazy" src="/images/line2.png" alt="line2" class="line2"/>
            <!-- v-motion-slide-visible-once-right  :delay="200" -->
            <div class="details"> 
                <p class="number">2</p>
                <h3 class="title">{{ $t('how-it-works.steps.2.title') }}</h3>
                <p class="description">{{ $t('how-it-works.steps.2.description') }}</p>
            </div>
            <NuxtImg quality="80" loading="lazy" src="/images/img2.png" alt="img2" class="w-[360px] mr-24 max-[1100px]:w-[280px] max-[880px]:m-0" v-motion-slide-visible-once-left  :delay="200"/>
        </div>

        <!-- Item 3 -->
        <div class="item mb-28">
            <NuxtImg quality="80" loading="lazy" src="/images/line3.png" alt="line3" class="line3"/>
            <!-- v-motion-slide-visible-once-left  :delay="200" -->
            <div class="details" > 
                <p class="number">3</p>
                <h3 class="title">{{ $t('how-it-works.steps.3.title') }}</h3>
                <p class="description">{{ $t('how-it-works.steps.3.description') }}</p>
            </div>
            <NuxtImg quality="80" loading="lazy" src="/images/img3.png" alt="img3" class="w-[360px] ml-12 max-[1100px]:w-[280px] max-[880px]:m-0" v-motion-slide-visible-once-right  :delay="200"/>
        </div>

        <!-- Item 4 -->
        <div class=" item flex-row-reverse relative">
            <!-- v-motion-slide-visible-once-right :delay="200" -->
            <div class="details" > 
                <p class="number">4</p>
                <h3 class="title">{{ $t('how-it-works.steps.4.title') }}</h3>
                <p class="description" v-if="selectedCountry.gtw === 'BHS'">{{ $t('how-it-works.steps.4.bhs-description') }}</p>
                <p class="description" v-else>{{ $t(selectedCountry.lockers ? 'how-it-works.steps.4.description-lockers' : 'how-it-works.steps.4.description') }}</p>
            </div>
            <NuxtImg quality="80" loading="lazy" src="/images/img4.png" alt="img4" class="w-[360px] mr-16 max-[1100px]:w-[280px] max-[880px]:m-0" v-motion-slide-visible-once-left  :delay="200"/>
        </div>
    </div>
    <FooterTitle :bgBlue='true'></FooterTitle>
    </div>
</template>
    
<script setup>
const store = useStore();
const { selectedCountry } = storeToRefs(store);
</script>
    
  <style lang="scss" scoped>
  .item{
    @apply flex  items-center justify-center relative max-[880px]:flex-col max-[880px]:mb-7;
    .details{
        @apply max-w-[420px] max-[1100px]:max-w-[350px] flex flex-col 
                max-[880px]:items-center max-[880px]:text-center max-[880px]:m-5 max-[880px]:max-w-[720px];
    }
    .number{
        @apply font-extrabold text-[130px] text-yellow leading-none max-[880px]:text-[80px];
    }
    .title{
        @apply font-semibold text-blue text-[30px] mb-5 leading-none
          max-[880px]:mb-3;
    }
    .description{
        @apply text-[#333333] text-xl;
    }
  }
  .line1{
    @apply h-[360px] w-[560px] absolute -left-6 top-[180px] 
    max-xl:-left-12 max-xl:top-[147px] max-xl:h-[282px] max-xl:w-[454px]
    max-[880px]:hidden
    ;
  }
  .line2{
    @apply w-[430px] h-[210px] absolute -bottom-[188px] left-[170px]
    max-xl:left-[150px]  max-xl:-bottom-[138px]  max-xl:h-[134px] max-xl:w-[337px]
    max-[880px]:hidden;
  }
  .line3{
    @apply w-[520px] h-[356px] absolute left-0 top-[137px]
            max-xl:-left-[11px] max-xl:top-[88px] max-xl:w-[400px]
            max-[880px]:hidden;
  }
  
  </style>
  