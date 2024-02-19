<template>
    <div>
        <p class="snippet">
            Here are the rates for Bahamas Courier.
        </p>

        <RatesInformation :list="info.list2" />

        <RatesTable :list="info.packages" :hasHeader="true"/>

        <!-- <RatesTable :list="info.otherCharges" :hasHeader="true" :colspan="2"/> -->
       
        <h2 class="main-heading">
            Brokerage Fees
        </h2>
        <RatesTable :list="info.brokerageList" :hasHeader="true"/>
    
        
        <h2 class="main-heading">
            Warranty Program and Return Service
        </h2>
        <RatesNewWarrantyTable />
        
        <RatesInOutFees/>

    </div>
</template>

<script setup>
import { useStore } from '@/stores';
import { storeToRefs } from 'pinia';
const store = useStore();
const { lang } = storeToRefs(store);

const info = ref({

    packages:[
        ['Packages',' Rates(USD)'],
        ['0 - 5 lbs','$9.99'],
        ['5.01 - 30 lbs','$1.99 per pound'],
        ['30.01 lbs and up','$1.05 per pound']
    ],

    brokerageList:[
        ['PACKAGE CIF VALUE','RATE*'],
        ['0 - 5 lbs','USD $4.99'],
        ['5.01 - 10 lbs','USD $10.00'],
        ['10.01 - 30 lbs','USD $15.00'],
        ['30 lbs and up','USD $25.00'],
    ],

    list2:[ "Rates do not include VAT." ],
})

</script>

<style scoped>
.snippet{
    @apply text-blue mb-4;
}
</style>
