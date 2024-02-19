<template>
  <div class="row grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
      <div class="card-wrapper" >
        <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/details1.png" alt="pre alert" class="detail-img"/>
        <h2 class="heading1">{{ $t('home.details.prealert.title') }}</h2>
        <h3 class="heading2">{{ $t('home.details.prealert.description') }}</h3>
        <i18n-t keypath="home.details.prealert.text" tag="p" class="snippet"  scope="global">
          <a href="https://myaccount.aeropost.com/" target="_blank" class="text-blue cursor-pointer font-semibold">
            {{ $t('home.details.prealert.anchor') }}
          </a>
        </i18n-t>
      </div>
    
      <div class="card-wrapper" >
        <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/details2.png" alt="pre alert" class="detail-img"/>
        <h2 class="heading1">{{ $t('home.details.autopay.title') }}</h2>
        <h3 class="heading2">{{ $t('home.details.autopay.description') }}</h3>
        <i18n-t keypath="home.details.autopay.text" tag="p" class="snippet" scope="global">
          <a href="https://myaccount.aeropost.com/en/Payments" target="_blank" class="text-blue cursor-pointer font-semibold">
            {{ $t('home.details.autopay.anchor') }}
          </a>
        </i18n-t>
      </div> 
    
      <div class="card-wrapper" >
        <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/details3.png" alt="pre alert" class="detail-img"/>
        <h2 class="heading1">{{ $t('newHome.details.us-address.title') }}</h2>
        <h3 class="heading2">{{ $t('newHome.details.us-address.description') }}</h3>
        <p class="snippet">{{ $t('newHome.details.us-address.text') }}</p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.card-wrapper{
  @apply flex flex-col items-center max-w-lg md:max-w-sm text-center mx-auto;

  .detail-img{
    @apply h-[240px] xl:h-[300px]
  }
  .heading1{
    @apply text-blue text-lg my-5;
  }
  .heading2{
    @apply text-blue text-2xl font-bold mb-5;
  }
  .snippet{
  }
}
</style>