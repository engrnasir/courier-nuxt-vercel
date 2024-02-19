<template>
  <div class="min-w-full transition-all duration-1000 bg-[#F5F5F5]">
    <HeaderHeroTitle
      :title="$t('calculator.hero.title')"
      :description="$t('calculator.hero.description')"
    />

    <div
      class="-translate-y-16"
      v-if="selectedCountry.gtw === 'EIS' || products.length === 0"
    >
      <div class="cal-wrapper">
        <iframe
          :src="old_cal_url"
          frameborder="0"
          width="600"
          height="800"
          id="calculator"
        ></iframe>
      </div>
    </div>
    <div class="-translate-y-16" v-else>
      <div v-if="loading" class="cal-wrapper">
        <OtherLoading />
      </div>
      <div class="cal-wrapper" v-else>
        <form class="mb-10" @submit.prevent="calculate()">
          <div class="mb-5" v-if="products.length > 0">
            <p class="cal-label">{{ $t("calculator.form.product") }}</p>
            <select
              name="product"
              id=""
              class="cal-input"
              v-model="calProd"
              required
            >
              <option value="" selected>
                {{ $t("calculator.form.selectProd") }}
              </option>
              <option :value="p" v-for="(p, i) in products" :key="i">
                {{ p.name }}
              </option>
            </select>
          </div>

          <div class="mb-5" v-if="accountTypes && accountTypes.length > 1">
            <p class="cal-label">{{ $t("calculator.form.account") }}</p>
            <select
              name="accountType"
              id=""
              class="cal-input"
              v-model="acctType"
              required
            >
              <option value="" selected class="text-gray">
                {{ $t("calculator.form.selectAcct") }}
              </option>
              <option :value="a" v-for="(a, i) in accountTypes" :key="i">
                {{ a.name }}
              </option>
            </select>
          </div>

          <div class="mb-5">
            <p class="cal-label">{{ $t("calculator.form.weight") }}</p>
            <div class="grid grid-cols-5 gap-2">
              <input
                type="number"
                step="0.0001"
                class="cal-input mr-3 col-span-3"
                v-model="weight_val"
                required
              />
              <select
                name=""
                id=""
                class="cal-input col-span-2"
                v-model="weight_units"
                @change="checkWeight()"
                required
              >
                <option value="lb">Lbs</option>
                <option value="kg">Kgs</option>
              </select>
            </div>
          </div>

          <div class="mb-5">
            <div class="cal-label">
              {{ $t("calculator.form.val")
              }}<span class="text-xs font-normal"
                >({{ $t("calculator.form.include") }})</span
              >
            </div>
            <input type="number" class="cal-input" v-model="prodVal" required />
          </div>

          <div class="flex justify-center">
            <button class="cal-btn" type="submit">
              {{ $t("calculator.form.calculate") }}
            </button>
          </div>
        </form>

        <div
          class="result-wrap bg-[#eeeeee] rounded-lg overflow-hidden"
          v-if="result && !calculating"
        >
          <table
            class="cal-table w-full text-center bg-blue text-white leading-10"
          >
            <tr class="border-b border-[#ffffff50]">
              <th>{{ $t("calculator.result.declare") }}</th>
              <th>{{ $t("calculator.result.cif") }}</th>
            </tr>
            <tr>
              <td>${{ prodVal }}</td>
              <td>
                ${{
                  Math.round((result.cifValue + Number.EPSILON) * 100) / 100
                }}
              </td>
            </tr>
          </table>

          <table class="w-full text-center leading-8" id="mainTable">
            <tr class="bg-[#F6D000] font-semibold">
              <th>{{ $t("calculator.result.charges") }}</th>
              <th>{{ currency }}</th>
            </tr>

            <tr>
              <td>{{ $t("calculator.result.freight") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.freightLocal + Number.EPSILON) *
                      100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.freight + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
            </tr>
            <tr>
              <td>{{ $t("calculator.result.warranty") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.insuranceLocal + Number.EPSILON) *
                      100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.insurance + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
            </tr>
            <tr>
              <td>{{ $t("calculator.result.fuel") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.fuelLocal + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.fuel + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
            </tr>
            <tr>
              <td>{{ $t("calculator.result.custom") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.customsHandlingLocal +
                      Number.EPSILON) *
                      100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.customsHandling + Number.EPSILON) *
                      100
                  ) / 100
                }}
              </td>
            </tr>
            <tr>
              <td>{{ $t("calculator.result.duties") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.dutiesLocal + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.duties + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
            </tr>
            <tr
              v-if="
                result.chargesBreakdown.iva || result.chargesBreakdown.ivaLocal
              "
            >
              <td>{{ $t("calculator.result.iva") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.ivaLocal + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.iva + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
            </tr>
            <tr
              v-if="
                result.chargesBreakdown.salesTax ||
                result.chargesBreakdown.salesTaxLocal
              "
            >
              <td>{{ $t("calculator.result.salesTax") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.salesTaxLocal + Number.EPSILON) *
                      100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.salesTax + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
            </tr>
            <tr
              v-if="
                result.chargesBreakdown.vat || result.chargesBreakdown.vatLocal
              "
            >
              <td>{{ $t("calculator.result.vat") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.chargesBreakdown.vatLocal + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round(
                    (result.chargesBreakdown.vat + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
            </tr>

            <tr class="bg-[#F6D000] font-medium">
              <td>{{ $t("calculator.result.total") }}</td>
              <td v-if="SCL">
                ${{
                  Math.round(
                    (result.totalChargesLocal + Number.EPSILON) * 100
                  ) / 100
                }}
              </td>
              <td v-else>
                ${{
                  Math.round((result.totalCharges + Number.EPSILON) * 100) / 100
                }}
              </td>
            </tr>
            <tr class="bg-[#f6d100ba] font-medium">
              <td>{{ $t("calculator.result.totalVal") }}</td>
              <td>${{ totalChargesIncludingValue }}</td>
            </tr>
          </table>
        </div>
        <OtherLoading v-if="calculating" />
        <div v-else-if="error" class="text-lg text-blue font-bold text-center">
          No Result Found !
        </div>
      </div>
      <p class="w-[96%] max-w-[650px] mx-auto text-center mt-10">
        <i18n-t keypath="calculator.text" tag="p" scope="global">
          <router-link
            :to="`/${selectedCountry.gtw}/${lang}/restricted`"
            class="text-blue"
          >
            {{ $t("calculator.anchor") }}
          </router-link>
        </i18n-t>
      </p>
    </div>

    <FooterTitle :bgBlue="true"></FooterTitle>
  </div>
</template>

<script setup>
    import axios from 'axios';

    const products = ref([]);
    const accountTypes = ref([]);
    const calProd = ref("");
    const acctType = ref("");
    const weight_val = ref("");
    const weight_units = ref("kg");
    const prodVal = ref("");
    const result = ref("");
    const calculating = ref(false);
    const error = ref(false);
    const base_url = ref(useRuntimeConfig().public.VUE_APP_MYACCOUNT_EXTERNAL_URL);

    const store = useStore();
    const { lang, selectedCountry } = storeToRefs(store);

    const SCL = computed(()=>{
        return selectedCountry.value.gtw === 'SCL'
    })

    const currency= computed(()=>{
        return selectedCountry.value.gtw === 'SCL'? 'CLP':'USD'
    })

    const langCode = computed(()=>{
      return lang.value==='en'?'1':'0';
    })
    const old_cal_url=computed(()=>{
        return `https://calculator.aeropost.com/Calculator.aspx?gateway=${selectedCountry.value.gtw}&userlanguage=${langCode.value}`
    })

    const loading= computed(()=>{
        return products.value.length<=0 && accountTypes.value.length<=0
      })

    const totalChargesIncludingValue=computed(()=>{
        const prodVal = parseFloat(prodVal.value)
        const totalChargesIncludingValue = result.value.totalChargesIncludingValue
        const totalChargesIncludingValueLocal = result.value.totalChargesIncludingValueLocal
        const total = selectedCountry.value.gtw === 'SCL'?   totalChargesIncludingValueLocal : totalChargesIncludingValue
        return Math.round((  total + Number.EPSILON) * 100) / 100
      })

    const checkWeight=()=>{
        if(weight_units.value==='kg'){
          this.weight_val /= 2.20462
        }else{
          weight_val.value *= 2.20462
        }
      }



const loadData=()=>{

    const prod_url = `${base_url.value}/api/calculator/products?gateway=${selectedCountry.value.gtw}&language=${lang.value}`;
    const acct_url = `${base_url.value}/api/calculator/accountTypes?gateway=${selectedCountry.value.gtw}&language=${lang.value}`;

    axios.get(prod_url)
    .then(res=>{
        products.value = res.data
        products.value.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
        });
        // console.log('prod  : ',res);
        return res.data;
    })
    .catch(err=>{
        console.log(err);
    })

    axios.get(acct_url)
    .then(res=>{
        this.accountTypes = res.data
        // console.log('acct  : ',res);
        return res.data;
    })
    .catch(err=>{
        console.log(err);
    })
    }
    const calculate = ()=>{

    if (accountTypes.value && accountTypes.value.length === 1) {
        acctType.value = accountTypes.value[0];
    }

    if(calProd.value.id && calProd.value.name && acctType.value.id && acctType.value.name){

        calculating.value=true;
        error.value = false;
        const cal_url = `${base_url.value}/api/calculator`;
        const body = {
        "accountType": {id: acctType.value.id , name: acctType.value.name},
        "gateway": selectedCountry.value.gtw,
        "productValue": prodVal.value.toString(),
        "product": {id: calProd.value.id.toString(), name:calProd.value.name},
        "productWeight":{units: weight_units.value, value:  parseFloat(weight_val.value)}
        }
        axios.post(cal_url, body)
        .then(res=>{
        result.value = res.data
        calculating.value=false
        error.value = result.value? false:true

        })
        .catch(err=>{
        console.log(err);
        })
    }
    }
watch:{
    const lang=()=>{
        location.reload()
    }
}
onMounted(()=>{
    selectedCountry.value.gtw==='EIS'? '':loadData();

})
</script>

<style lang="scss" scoped>
.cal-wrapper {
  @apply w-[96%] max-w-[650px] bg-white 
         shadow-2xl rounded-xl  mx-auto relative z-20 mb-8
         overflow-x-scroll text-gray px-5 py-10;
}
.cal-wrapper::-webkit-scrollbar {
  @apply hidden;
}
.cal-label {
  @apply text-lg text-gray mb-3 font-medium;
}
.cal-input {
  @apply w-full h-12 text-lg border border-gray rounded-lg p-3 focus:outline-gray;
}
.cal-btn {
  @apply w-full text-lg rounded-lg p-3  text-white bg-blue max-w-xs rounded-full;
}

.cal-table {
  td,
  th {
    width: 50%;
    padding: 10px;
    line-height: 1.3;
  }
}
#mainTable {
  td,
  th {
    width: 50%;
    padding: 5px 20px;
    line-height: 1.3;
  }
  tr td:first-child {
    text-align: left;
  }
  tr td:last-child {
    text-align: right;
  }
}
</style>
