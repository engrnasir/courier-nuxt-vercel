<template>
  <div class="min-w-full relative" @click="$emit('click')">
    <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/banners/primeDay.png" alt="prime day banner" class="desktop-banner" v-if="lang==='en'"/>
    <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/banners/esprimeDay.png" alt="prime day banner" class="desktop-banner" v-else/>
    <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/banners/enMobPrime.png" alt="prime day banner" class="mobile-banner" v-if="lang==='en'"/>
    <NuxtImg quality="80" loading="lazy" src="/images/newHomepage/banners/esMobPrime.png" alt="prime day banner" class="mobile-banner" v-else/>


    <div class="timer" v-if="days>0 || hours>0 || minutes>0 || seconds>0">
        <h2 class="font-bold text-lg md:text-2xl text-gray leading-none"> {{ lang==='en'? 'Remaining':'Tiempo Restante' }} </h2>
        <div class="flex items-center justify-center">
            <div class="time-block" v-if="days>0">
                <span> {{ days<10?'0'+days:days }} </span>
                <span class="time-label"> {{ lang==='en'? 'Days':'Días' }}  </span>
            </div>
            <div class="time-block" v-if="hours>=0">
                <span> {{ hours<10?'0'+hours:hours }} </span>
                <span class="time-label"> {{ lang==='en'? 'Hours':'Horas' }}  </span>
            </div>
            <div class="time-block" v-if="minutes>=0">
                <span> {{ minutes<10?'0'+minutes:minutes }} </span>
                <span class="time-label"> Min  </span>
            </div>
            <div class="time-block" v-if="seconds>=0">
                <span> {{ seconds<10?'0'+seconds:seconds }} </span>
                <span class="time-label"> Sec </span>
            </div>
        </div>
    </div>
   </div>
</template>

<script setup>

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const store = useStore();
const { lang } = storeToRefs(store);

const endingDate = computed(()=>{
    var year = 2023;
    var month = 9; // Note: Months are zero-based, so 9 represents October.
    var day = 12;
    var hours = 2;
    var minutes = 0;
    var seconds = 0;

    // Create a new Date object and set it to the specified date and time
    var etDate = new Date(Date.UTC(year, month, day, hours, minutes, seconds));

    // Adjust for Eastern Time (ET) offset (UTC-5)
    etDate.setHours(etDate.getHours() - 5);

    return etDate
})

onMounted(()=>{
    setInterval(()=>{
        const endingDate = new Date('October 12, 2023, 2:00:00') 

        const date = new Date()
        // console.log('-'+startingDate.getTime() - date.getTime());

        let totalMillisec = endingDate - date
        let totalSecond = totalMillisec /1000
        this.seconds = Math.round(totalSecond % 60)
        let totalMinutes = totalSecond / 60
        this.minutes = Math.round(totalMinutes % 60)
        let totalHours = totalMinutes /60
        this.hours =  Math.round(totalHours % 24)
        let totalDays = totalHours / 24
        this.days = Math.floor(totalDays)
    }, 1000)
})

</script>

<style scoped>
.desktop-banner{
    @apply w-full min-h-[270px]  rounded-lg hidden sm:block;
}
.mobile-banner{
    @apply w-full min-h-[270px]  rounded-lg sm:hidden;
}
.timer{
    @apply flex flex-col items-center justify-center z-50 absolute bottom-10 md:bottom-[15%] left-2 sm:left-[27%];
}
.time-block{
    @apply w-10 h-10 md:w-16 md:h-16 xl:w-24 xl:h-24 rounded-md bg-blue text-white font-bold text-xs md:text-xl lg:text-2xl m-1 flex flex-col items-center justify-center shadow-xl leading-none;
}
.time-label{
    @apply text-xs md:text-lg lg:text-xl
}

</style>