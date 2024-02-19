<template>
  <div class="absolute top-0 left z-[1000] min-h-screen w-full overflow-y-scroll py-5">
      <div class="relative flex flex-col items-center">
        <div class="absolute  mx-auto translate-x-36 sm:translate-x-48 top-5 w-10 h-10 z-[2001] text-2xl flex items-center justify-center rounded-full bg-white shadow-lg cursor-pointer"
         @click="$emit('close')"
         >x</div>
        
         <div v-if="lang==='es'">
          <div v-show="selectedCountry.gtw === 'POS'" class="klaviyo-form-VwwjEA"></div>
          <!-- <div v-show="selectedCountry.gtw === 'BHS'" class="klaviyo-form-VU99yv"></div> -->
          <div v-show="selectedCountry.gtw === 'BOG'" class="klaviyo-form-W53qgT"></div>
          <div v-show="selectedCountry.gtw === 'SJO'" class="klaviyo-form-SV6SNS"></div>
          <div v-show="selectedCountry.gtw === 'SAL'" class="klaviyo-form-V8j43q"></div>
          <div v-show="selectedCountry.gtw === 'SCL'" class="klaviyo-form-RZGiZb"></div>
          <div v-show="selectedCountry.gtw === 'GUA'" class="klaviyo-form-TWyd8D"></div>
        </div>
        
        <div v-else>
           <div v-show="selectedCountry.gtw === 'POS'" class="klaviyo-form-XJVeVj"></div>
          <div v-show="selectedCountry.gtw === 'BOG'" class="klaviyo-form-XjUB2g"></div>
          <div v-show="selectedCountry.gtw === 'SJO'" class="klaviyo-form-WZvbQe"></div>
          <div v-show="selectedCountry.gtw === 'SAL'" class="klaviyo-form-Xs5dFm"></div>
          <div v-show="selectedCountry.gtw === 'SCL'" class="klaviyo-form-WL5UQW"></div>
          <div v-show="selectedCountry.gtw === 'GUA'" class="klaviyo-form-RjWL7b"></div>
         </div>
        
      </div>
    </div>
</template>

<script setup>
const store = useStore();
const { lang, selectedCountry } = storeToRefs(store);

const kaliyoScript = ref('')

onBeforeMount(()=>{
  kaliyoScript.value = document.createElement('script')
  kaliyoScript.value.type="text/javascript"
  kaliyoScript.value.id = "kaliyoScript"
  kaliyoScript.value.async = 1;
  kaliyoScript.value.setAttribute('src', 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=W4AgGN')
  document.body.appendChild(kaliyoScript.value)
  console.log('script added');
})
onBeforeUnmount(()=>{
  document.body.removeChild(document.getElementById('kaliyoScript'))
  console.log('script removed');
})
</script>