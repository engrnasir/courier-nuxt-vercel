<template>
  <div>
    <div
      class="py-8 flex flex-col items-center"
      :class="bgBlue === true ? 'bg-blue' : 'bg-[#F2FBFF]'"
    >
      <router-link :to="`/${locale}/${selectedCountry.gtw}`">
        <FooterLogo :colorVal="colorVal" />
      </router-link>
      <ul class="items">
        <li
          class="item"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          @click="setRoute('rates')"
          v-if="selectedCountry && !selectedCountry.hideRates"
        >
          {{ $t("rates.title") }}
        </li>
        <li
          class="item"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          @click="setRoute('calculator')"
        >
          {{ $t("calculator.title") }}
        </li>
        <li
          class="item"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          @click="setRoute('restricted')"
        >
          {{ $t("restricted.title") }}
        </li>
        <li class="item" :class="bgBlue ? 'item-white' : 'item-blue'">
          <a
            :href="faqsUrl"
            v-if="selectedCountry && selectedCountry.gtw === 'SCL'"
          >
            {{ $t("faqs.title") }}
          </a>
          <p v-else @click="setRoute('faqs')">{{ $t("faqs.title") }}</p>
        </li>
        <li
          class="item"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          @click="setRoute('aboutus')"
        >
          {{ $t("about.aboutus.title") }}
        </li>
        <li
          class="item"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          @click="setRoute('contactus')"
        >
          {{ $t("contact.title") }}
        </li>
        <li
          class="item mr-0"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          @click="setRoute('terms')"
        >
          {{ $t("terms.title") }}
        </li>
        <li
          class="item mr-0"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          @click="navigateTo('/'+lang+'/blog')"
        >
          {{ $t("blog.title") }}
        </li>
        <li
          class="item mr-0"
          :class="bgBlue ? 'item-white' : 'item-blue'"
          v-if="selectedCountry && selectedCountry.gtw === 'LIM'"
        >
          <a href="https://aeropo.st/reclamacionesperu" target="_blank">
            {{ LIM_Submit }}
          </a>
        </li>
        <li class="item mr-0" :class="bgBlue ? 'item-white' : 'item-blue'">
          <a href="https://aeropoints.aeropost.com/" target="_blank">
            AeroPoints
          </a>
        </li>

        <!-- <li class="item" :class="bgBlue?'item-white':'item-blue'" v-if="selectedCountry.business">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/business`">
                        {{ $t('business.title') }}
                    </router-link>
                </li> -->
      </ul>
      <p class="text-sm" :class="bgBlue ? 'text-white' : 'text-[#33333]'">
        {{ $t("footer.copyright", { year: currentYear }) }}
      </p>
    </div>
  </div>
</template>

<script setup>
const store = useStore();
const {locale} = useI18n();
const { lang, selectedCountry } = storeToRefs(store);
const props = defineProps({
  bgBlue: Boolean
});
const colorVal = ref("#0B3E9D");

const invalidRate = computed(() => {
  return selectedCountry.value && selectedCountry.value.gtw === "BHS";
});
const currentYear = computed(() => {
  return new Date().getFullYear();
});
const LIM_Submit = computed(() => {
  return lang.value === "en" ? "Complaints Book" : "Libro De Reclamaciones ";
});
const faqsUrl = computed(() => {
  return selectedCountry.value
    ? `/${selectedCountry.value.gtw}/${lang.value}/faqs`
    : `/country-picker`;
});

const setRoute = (url) => {
  if (selectedCountry.value) {
    navigateTo(`/${selectedCountry.value.gtw}/${lang.value}/${url}`);
  } else {
    navigateTo(`/country-picker`);
  }
};

</script>

<style lang="scss" scoped>
.items {
  @apply flex justify-center items-center flex-wrap mb-6 max-sm:flex-col;
}
.item {
  @apply mr-12 text-base  font-medium transition-all duration-300  hover:font-bold cursor-pointer
          max-md:mr-6 max-sm:mr-0 max-sm:mb-4;
}
.item-blue {
  @apply text-blue hover:text-[#333333];
}
.item-white {
  @apply text-white hover:text-yellow;
}
</style>
