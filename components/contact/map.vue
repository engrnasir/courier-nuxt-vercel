<template>
<div>
  <div class="mb-3 relative min-h-[50vh]"> 
    <div :class="selectedCountry.mapClass" id="wrapper" data-elfsight-app-lazy></div>
  </div>
</div>
</template>
<script setup>
const store = useStore();
const { selectedCountry } = storeToRefs(store);
</script>

<style scoped>
#wrapper{
  max-height: 700px;
}
.eapps-google-maps-bar-content{
  max-height: 300px !important; /* Set the desired height of the search panel */
}
</style>




