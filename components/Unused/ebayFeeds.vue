<template>
  
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            baseUrl:'https://api.linksynergy.com​'
        }
    },
    mounted(){
        axios.get('https://api.ebay.com/buy/feed/v1/access')
        .then(data=>{
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })
    }

}
</script>

<style>

</style>