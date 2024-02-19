<template>
  <div class="bg-[#EFF4FF]">
    <div class="row mwrapper flex-col md:flex-row">
          <div class="aboutus-content-block mb-5 md:mr-10">
          <h2 class="aboutus-heading">{{ $t('b2b.about.title') }}</h2>
          <p class="text-sm md:text-lg font-light">{{ $t('b2b.about.text') }}</p>
          </div>
          <NuxtImg quality="80" loading="lazy" src="/images/b2b/aboutus.png" alt="aboutus" class="aboutus-image"/>
      </div>
  </div>
</template>

<style scoped>

.mwrapper{
  @apply w-full max-w-[1200px] mx-auto flex justify-between items-center px-5 relative text-blue
    py-6 md:py-12 mb-8 md:mb-20 text-center md:text-left;
}
.aboutus-content-block{
  @apply w-full max-w-2xl;
}
.aboutus-heading{
  @apply text-xl md:text-3xl leading-none font-medium text-blue mb-5;
}
.aboutus-image{
  @apply w-[96%] sm:w-[410px] sm:min-w-[410px] max-sm:mx-auto;
}
</style>