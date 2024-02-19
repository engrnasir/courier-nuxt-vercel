<template>
    <div class="w-full relative px-3">
        <div class="w-full flex items-center justify-between  z-30"> 
          <OtherRoundBtn :header="header" left class="absolute left-1.5 z-40" @click="leftHandler()" v-if="!viewall"/>
          <div class="items-wrapper" ref="content" :class="[(rows2?'grid grid-rows-2 grid-flow-col':'flex items-center'),(viewall?'viewAll':'')]">
              <slot/>
          </div>
          <OtherRoundBtn :header="header" class="absolute right-1.5 z-40" @click="rightHandler()" v-if="!viewall" />
      </div>
    </div>
</template>

<script setup>

const props = defineProps({
    viewall:Boolean,
    header:Boolean, 
    rows2:Boolean,
    autoscroll:Boolean
})

const maxScroll = ref(4);
const leftbtn = ref(false);
const showScrollBtn= ref(true);

const maxScrollVal = computed(()=>{
    return window.innerWidth>800? 4 : 3
})
const content = ref(null)

const rightHandler = ()=>{
    if(content.value){
        let contentScollLeft =  content.value.scrollLeft 
        contentScollLeft += content.value.offsetWidth
        content.value.scrollLeft = contentScollLeft;
    }
}
const leftHandler =() =>{
    if(content.value){
        let contentScollLeft =  content.value.scrollLeft
        contentScollLeft = contentScollLeft - content.value.offsetWidth;
        content.value.scrollLeft = contentScollLeft;
    }
}

onBeforeMount(()=>{
    if(content.value){
        showScrollBtn.value = content.value.scrollWidth > content.value.offsetWidth
            content.value.addEventListener('scroll',()=>{
                leftbtn.value = content.value.scrollLeft>30
            })
            window.addEventListener('resize',()=>{
                showScrollBtn.value = content.value.scrollWidth > content.value.offsetWidth
            })
            if(this.autoscroll){
                setInterval(()=>{
                    this.rightHandler()
                    maxScroll.value = maxScroll.value>0? maxScroll.value-1 : maxScrollVal.value
        
                    if(maxScroll.value===0){
                        content.value.scrollLeft = 0
                    }
        
                },7000)
            }
    }
})
</script>

<style scoped>
.items-wrapper{
    scroll-behavior: smooth;
    height: min-content;
    @apply w-full  overflow-x-scroll py-1
}
.items-wrapper::-webkit-scrollbar{
    display: none;
}
.viewAll{
    @apply flex flex-wrap justify-center items-start sm:justify-start;
}
</style>