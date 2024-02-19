<template>
    <div class="row mwrapper flex-col md:flex-row mb-20">
          <NuxtImg quality="80" loading="lazy" src="/images/business/business1.png" alt="business1" class="image"/>
          <div class="details-wrapper">
              <p class="text-blue mb-4 leading-none text-3xl" v-text="$t('business.import.title')"></p>
              <h3 class="main-heading" v-text="$t('business.import.heading')"></h3>
              <p class="snippet" v-text="$t('business.import.description')"></p>
          </div>
      </div>
</template>

<style lang="scss" scoped>
.mwrapper{
    @apply flex justify-center items-center px-5  relative
        py-6 md:py-0 mb-8 md:mb-10
            ;
  }
  .main-heading{
    @apply font-bold text-3xl md:text-[44px] leading-[44px] text-blue mb-6 md:max-w-[550px];
  }
  .snippet{
    @apply text-[#737373] text-[22px] leading-8 md:max-w-[550px];
  }
  .image{
    @apply w-[300px] lg:w-[410px]  relative z-10
      mr-0 md:mr-16 lg:mr-[90px] mb-10 md:mb-0;
  }
  .image1{
    @apply relative z-10 w-[300px] lg:w-auto
      ml-0 md:ml-16 lg:ml-[90px] mb-10 md:m-0;
  }

</style>
