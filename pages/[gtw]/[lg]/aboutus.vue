<template>
    <div class="min-w-full">
    <HeaderHeroTitle 
        :description="$t('about.hero.description')"
        :aboutus="true"
    />

    <div class="mcontainer">

        <div class="row mwrapper max-md:flex-col">
        <div class="aboutus-content-block max-md:mb-5 md:mr-10">
            <h2 class="aboutus-heading">{{ $t('about.aboutus.title') }}</h2>
            <p class="text-lg md:text-2xl text-[#333333] font-normal">{{ $t('about.aboutus.description') }}</p>
        </div>
        <div class="aboutus-image relative md:pl-3 md:pb-3">
            <NuxtImg quality="80" loading="lazy" src="/images/aboutus3.webp" alt="aboutus1" class="w-full min-w-full  relative z-10"/>
            <div class="bg-blue rounded-xl w-[335px] h-[348px] absolute left-0 bottom-0 hidden md:block"></div>
        </div>
        </div>

        
        <div class="w-full py-10 relative max-md:bg-[#FFCD3E]">
        <NuxtImg quality="80" loading="lazy" src="/images/yellow-bg.png" alt="yellow-bg" class="yellowBG hidden md:inline-block"/>
        <div class="row mwrapper flex-col-reverse md:flex-row">
            <NuxtImg quality="80" loading="lazy" src="/images/aboutus1.webp" alt="aboutus1" class="aboutus-image mr-5"/>
            <div class="aboutus-content-block max-md:mb-5">
            <h2 class="aboutus-heading">{{ $t('about.ourRoots.title') }}</h2>
            <p class="aboutus-description">{{ $t('about.ourRoots.description') }}</p>
            </div>
        </div>
        </div>

        <div class="w-full bg-[#D3F2FF] py-10 md:-mt-10">
        <div class="row mwrapper max-md:flex-col ">
            <div class="aboutus-content-block mb-5 md:mr-10">
            <h2 class="aboutus-heading">{{ $t('about.deep.title') }}</h2>
            <p class="aboutus-description">{{ $t('about.deep.description') }}</p>
            </div>
            <NuxtImg quality="80" loading="lazy" src="/images/aboutus4.webp" alt="aboutus4" class="aboutus-image"/>
        </div>
        </div>

        <div class="row mwrapper flex-col-reverse md:flex-row">
        <NuxtImg quality="80" loading="lazy" src="/images/aboutus2.webp" alt="aboutus2" class="aboutus-image md:mr-10"/>
        <div class="aboutus-content-block max-md:mb-5 ">
            <h2 class="aboutus-heading">{{ $t('about.central.title') }}</h2>
            <p class="aboutus-description">{{ $t('about.central.description') }}</p>
        </div>
        </div>

        <div class="w-full bg-blue p-12 text-center min-h-[480px] relative overflow-hidden">
        <NuxtImg quality="80" loading="lazy" src="/images/about-map.png" alt="about map" class="absolute top-24 w-full mx-auto z-0"/>
            <div class="w-full max-w-[1200px] mx-auto relative z-10">
            <h2 class="text-3xl md:text-5xl leading-none font-bold mb-5 text-white">{{ $t('about.services.title') }}</h2>
            <p class="text-base md:text-xl text-white font-normal">{{ $t('about.services.description') }}</p>
            </div>
        </div>

        <div class="w-full max-w-[1200px] px-0 sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 -mt-10 sm:-mt-40 md:-mt-56 mb-10 relative">
        <div class="service-card">
            <NuxtImg quality="80" loading="lazy" src="/images/laptop1.webp" alt="laptop" class="w-[280px] mb-3"/>
            <h2 class="text-2xl font-bold text-blue mb-5">{{ $t('about.courier.title') }}</h2>
            <p class="text-text-base font-normal text-gray">{{ $t('about.courier.description') }}</p>
        </div>
        <div class="service-card">
            <NuxtImg quality="80" loading="lazy" src="/images/laptop2.webp" alt="laptop" class="w-[280px] mb-3"/>
            <h2 class="text-2xl font-bold text-blue mb-5">{{ $t('about.marketplace.title') }}</h2>
            <p class="text-text-base font-normal text-gray">{{ $t('about.marketplace.description') }}</p>
        </div>
        <div class="service-card">
            <NuxtImg quality="80" loading="lazy" src="/images/laptop3.webp" alt="laptop" class="w-[280px] mb-3"/>
            <h2 class="text-2xl font-bold text-blue mb-5">{{ $t('about.smartlocker.title') }}</h2>
            <p class="text-text-base font-normal text-gray">{{ $t('about.smartlocker.description') }}</p>
        </div>
        </div>

        <div class="w-full bg-[#FFCD3E] py-10">

        <div class="row mwrapper max-md:flex-col-reverse">
            <div class="w-full sm:w-[410px] sm:min-w-[410px] h-[292px] rounded-xl bg-[#D3F2FF] md:mr-10">
            <NuxtImg quality="80" loading="lazy" src="/images/latin-map.png" alt="aboutus5" class="w-full h-full"/>
            </div>
            <div class="aboutus-content-block max-md:mb-5">
            <h2 class="aboutus-heading">{{ $t('about.expansion.title') }}</h2>
            <p class="text-xl text-[#333333] font-normal">{{ $t('about.expansion.description') }}</p>
            </div>
        </div>

        <div class="row mwrapper max-md:flex-col-reverse">
            <NuxtImg quality="80" loading="lazy" src="/images/aboutus5.webp" alt="aboutus5" class="w-full sm:w-[410px] sm:min-w-[410px] md:mr-10"/>
            <div class="aboutus-content-block max-md:mb-5">
            <h2 class="aboutus-heading">{{ $t('about.artificial.title') }}</h2>
            <p class="text-xl text-[#333333] font-normal">{{ $t('about.artificial.description') }}</p>
            </div>
        </div>

        </div>

        <div class="w-full bg-[#D3F2FF] py-10">
        
        <h2 class="aboutus-heading text-center">{{ $t('about.founders.heading') }}</h2>
        <div class="w-full max-w-[1200px] px-5 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 mb-10">

            <div class="flex flex-col items-center text-center">
            <NuxtImg quality="80" loading="lazy" src="/images/co1.webp" alt="person"/>
            <h3 class="co-title ">Adam Arviv</h3>
            <p class="co-description">{{ $t('about.founders.co1') }}</p>
            </div>
            <div class="flex flex-col items-center text-center">
            <NuxtImg quality="80" loading="lazy" src="/images/co2.webp" alt="person"/>
            <h3 class="co-title">Sebastian Bastian</h3>
            <p class="co-description">{{ $t('about.founders.co2') }}</p>
            </div>
            <div class="flex flex-col items-center text-center">
            <NuxtImg quality="80" loading="lazy" src="/images/ceo.webp" alt="person"/>
            <h3 class="co-title">Camilo Rueda</h3>
            <p class="co-description">{{ $t('about.founders.ceo') }}</p>
            </div>

        </div>

        </div>

    </div>
        

    <FooterTitle :bgBlue='true'></FooterTitle>
    </div>
</template>
<style lang="scss" scoped>
  
  .mwrapper{
    @apply w-full max-w-[1200px] mx-auto flex justify-between items-center px-5 pt-12  relative mb-20
      max-md:py-6 max-md:mb-8;
  }
  .title-wrapper{
    @apply w-full bg-blue px-5 pt-[80px] pb-[140px] text-center text-white flex flex-col items-center
        max-md:pt-8 max-md:pb-20 relative z-10;
  }
  .description{
    @apply text-2xl font-light max-w-[740px]  max-md:w-10/12 max-md:text-xl;
  }
  .mcontainer{
    @apply w-full pt-10;     
  }
  
  
  .aboutus-image{
    @apply w-[96%] sm:w-[410px] sm:min-w-[410px] max-sm:mx-auto;
  }
  .aboutus-heading{
    @apply text-3xl md:text-5xl leading-none font-bold text-blue mb-7;
  }
  .aboutus-description{
    @apply text-base md:text-xl text-[#333333] font-normal;
  }
  .aboutus-content-block{
    @apply w-full max-w-2xl;
  }
  
  .service-card{
    @apply flex flex-col items-center p-10 rounded-xl  bg-white border-b-8 border-blue shadow-md text-center;
  }
    .yellowBG{
      @apply absolute top-0 left-0 w-full h-full;
    }
  
    .co-title{
      @apply font-semibold text-lg md:text-2xl text-blue my-2  leading-none;
    }
    .co-description{
      @apply  w-full max-w-xs mx-auto text-sm md:text-lg leading-none;
    }
  
  </style>
    