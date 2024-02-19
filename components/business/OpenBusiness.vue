<template>
    <div class="lg:bg-[#EAF8FF99]">
        <div class="container">
            <h2 class="text-blue text-2xl sm:text-3xl  lg:text-4xl font-medium mb-4" v-text="$t('business.open')"></h2>
            <button class="get-btn" v-text="$t('business.get-started')"></button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    @apply w-[96%] max-w-[700px] bg-white shadow-xl rounded-xl py-6 sm:p-10 mx-auto relative z-20   text-center
                  mb-10 lg:mb-20 -translate-y-8 md:-translate-y-20 px-4 md:px-6; 
    .get-btn{
        @apply px-6 sm:px-12 py-2.5 rounded-[40px] text-sm sm:text-xl font-medium bg-yellow text-blue cursor-pointer transition-all duration-200 hover:bg-blue hover:text-white;
      }    
  }
</style>
