<template>
    <div>
        <h2 class="main-heading">{{ warrantyTable.title }}</h2>
        <RatesTable :list="warrantyTable.rateList" :hasHeader="true"/>
    </div>
  
</template>

<script setup>
import { useStore } from '@/stores';
import { storeToRefs } from 'pinia';
const store = useStore();
const { lang } = storeToRefs(store);

const en_warrantyTable = ref({
    title:'Warranty Program and Return Service',
    rateList:[
        ['Rate Break (Declared Value in USD)','Rate (USD)'],
        ['$1 - $99.99','$2.15'],
        ['$100 - $159.99','$3.90'],
        ['$160 - $199.99','$3.95'],
        ['$200 - $299.99','$5.95'],
        ['$300 - $399.99','$7.95'],
        ['$400 - $499.99','$9.75'],
        ['$500 - $599.99','$11.50'],
        ['$600 - $699.99','$13.25'],
        ['$700 - $799.99','$14.95'],
        ['$800 - $899.99','$16.75'],
        ['$900 - $999.99','$18.50'],
        ['$1,000 - $1,099.99','$20.25'],
        ['$1,100 - $1,199.99','$21.95'],
        ['$1,200 - $1,299.99','$23.75'],
        ['$1,300 - $1,399.99','$25.50'],
        ['$1,400 - $1,499.99','$27.25'],
        ['Equal or greater than $1,500','2.5% of the Declared Value']
    ]
})
const es_warrantyTable = ref({
    title:'Programa de Garantía y Retornos',
    rateList:[
        ['Ruptura de Tasa (Valor Declarado en USD)','Tarifa (USD)'],
        ['$1 - 99.99','$2.15'],
        ['$100 - 159,99','$3.90'],
        ['$160 - 199,99','$3.95'],
        ['$200 - 299,99','$5.95'],
        ['$300 - 399,99','$7.95'],
        ['$400 - 499,99','$9.75'],
        ['$500 - 599,99','$11.50'],
        ['$600 - 699,99','$13.25'],
        ['$700 - 799,99','$14.95'],
        ['$800 - 899,99','$16.75'],
        ['$900 - 999,99','$18.50'],
        ['$1,000 - 1,099.99','$20.25'],
        ['$1,100 - 1,199.99','$21.95'],
        ['$1,200 - 1,299.99','$23.75'],
        ['$1,300 - 1,399.99','$25.50'],
        ['$1,400 - 1,499.99','$27.25'],
        ['Igual o mayor a $1,500','2.5% del Valor Declarado'],
    ]
})
const warrantyTable = computed(()=>{
    return lang.value==='en'?en_warrantyTable.value:es_warrantyTable.value
})
</script>
