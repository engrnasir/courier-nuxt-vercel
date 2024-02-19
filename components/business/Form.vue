<template>
    <div class="w-[96%] max-w-[1080px] bg-white shadow-xl rounded-xl p-5 sm:p-10 mx-auto relative z-20 -mb-10">
        <form @submit.prevent="sendForm" class="form">

            <div class="flex flex-col items-center justify-between text-center font-medium text-blue mb-10">
                <h2 class="text-xl sm:text-3xl mb-4 leading-6 sm:leading-9" v-text="$t('business.form.title')"></h2>
                <p class="text-sm sm:text-lg " v-text="$t('business.form.description')"></p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-5">

                <div class="w-full">
                    <p class="label" v-text="$t('business.form.name')"></p>
                    <input v-model="form.name" type="text" name="name" required>
                </div>

                <div class="w-full">
                    <p class="label" v-text="$t('business.form.company')"></p>
                    <input v-model="form.company" type="text" name="companyName" required>
                </div>

                <div class="w-full">
                    <p class="label" v-text="$t('business.form.phone')"></p>
                    <input v-model="form.phone" type="text" name="phone" placeholder="xx xxx xx xx" required>
                </div>

                <div class="w-full">
                    <p class="label" v-text="$t('business.form.email')"></p>
                    <input v-model="form.email" type="email" name="email">
                </div>

                <div class="w-full">
                    <p class="label" v-text="$t('business.form.quantity')"></p>
                    <input v-model="form.quantity" type="number" name="quantity" step="1" min="0">
                </div>
                
                <div class="w-full">
                    <p class="label" v-text="$t('business.form.weight')"></p>
                    <div class="select-wrapper bg-white flex items-center md:mb-2 mr-2 md:mr-0 ">
                        <select v-model="form.weight" name="weight" id="" >
                            <option value="" selected disabled></option>
                            <option v-for="(option,i) in weightOptions" :value="option.value" :key="i">
                                {{ $t(`business.form.weight-options.${option.text}`) }}
                            </option>
                        </select>
                        <NuxtImg quality="80" loading="lazy" src="/images/dropdown.png" alt="dropdown" class="w-2.5"/>
                    </div>
                </div>  
                
                <!-- <div class="w-full">
                    <p class="label">{{ lang==='en'? 'Headings':'Encabezados' }}</p>
                    <div class="select-wrapper bg-white flex items-center md:mb-2 max-md:mr-2 ">
                        <select name="headings1" id="" >
                            <option value="">option1</option>
                            <option value="">option2</option>
                            <option value="">option3</option>
                        </select>
                        <NuxtImg quality="80" loading="lazy" src="/images/dropdown.png" alt="dropdown" class="w-2.5"/>
                    </div>
                </div>   -->
                
                <div class="w-full">
                    <p class="label" v-text="$t('business.form.reference')"></p>
                    <div class="select-wrapper bg-white flex items-center md:mb-2 mr-2 md:mr-0 ">
                        <select v-model="form.reference" name="reference" id="" >
                            <option value="" selected disabled></option>
                            <option v-for="(option,i) in referenceOptions" :value="option.value" :key="i">
                                {{ $t(`business.form.reference-options.${option.text}`) }}
                            </option>
                        </select>
                        <NuxtImg quality="80" loading="lazy" src="/images/dropdown.png" alt="dropdown" class="w-2.5"/>
                    </div>
                </div>  
                
                <div class="w-full md:col-span-2">  
                    <p class="label" v-text="$t('business.form.message')"></p>
                    <textarea v-model="form.message" name="message" id="" cols="30" rows="3"></textarea>
                </div>
                

            </div>

            <div class="flex items-center justify-center">
                <button type="submit" class="button button-active" v-text="$t('business.form.send')"></button>
            </div>
        
        </form>
    </div>
</template>

<script setup>
const form = ref({
    name: null,
    company: null,
    phone: null,
    email: null,
    quantity: null,
    weight: null,
    reference: null,
    message: null
});
const referenceOptions = ref([
    {
        text: 'option1',
        value: '',
    },
    {
        text: 'option2',
        value: '',
    },
    {
        text: 'option3',
        value: '',
    },
]);
const weightOptions = ref([
    {
        text: 'option1',
        value: '',
    },
    {
        text: 'option2',
        value: '',
    },
    {
        text: 'option3',
        value: '',
    },
]);

function sendForm(){
    console.log(this.form)
}
</script>

<style lang="scss" scoped>
.form{
  @apply w-full bg-white py-6 ;
  .label{
  @apply text-base leading-4 mb-2.5 text-[#1f1f1f]
  }
  select{
    @apply cursor-pointer w-full bg-white font-bold text-sm outline-none;
  }
  .select-wrapper,
  input,
  textarea{
      @apply outline-none w-full bg-transparent font-sofiaPro font-normal   text-base p-3 text-black border border-[#CBCBCB] rounded-md mb-2.5;
  }
  select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      @apply pr-3;
  } 
  .button{
      @apply w-full max-w-min mx-auto rounded-[35px] border border-[#808080] py-2.5 px-6 text-[#808080] cursor-pointer transition-all duration-200;
  }
  .button:hover,
  .button-active{
      @apply bg-blue text-white;
  }
}
  
</style>
