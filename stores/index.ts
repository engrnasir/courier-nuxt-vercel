
import maps from '~/assets/maps'
import gateways from '~/assets/gateways'
import { defineStore } from 'pinia'


const setGatewayCookie = (gtw:string, language:string) => {
  const cookieValue = new URLSearchParams({gtw, language})
  const cookieString = `gatewayInfo=${cookieValue}; domain=.aeropost.com; path=/; max-age=${60 * 60 * 24 * 365}`

  console.log('set cookie',cookieString)

  document.cookie = cookieString
}

export const useStore = defineStore('store', () => { 
  const { setLocale } = useI18n();
    const lang = ref('en');
    const showthankyou = ref(false);
    const showCountries = ref(false);
    const selectedMapIndex = ref(0);
    const selectedCountry = ref('');
    const showMenu = ref(false);
    const src = ref("");

    const selectedMap = computed(()=> {
      return maps[selectedMapIndex.value]
    })
    

    const setLang = (val: string)=>{
      let lg = 'en';
      if(val && ( val==='en' || val==='es')){
        lg = val;
      }
      
        window.scrollTo(0,0)
        lang.value = lg;
        setLocale(lg)
        if(selectedCountry.value){
          setGatewayCookie(selectedCountry.value?.gtw, lang.value)
        }
      }
  
      const setSelectedCountry =(val:object)=>{
        if(process.client){
          window.scrollTo(0,0)
        }
        showMenu.value = false,
        selectedCountry.value = val
        if(selectedCountry.value){
          setGatewayCookie(selectedCountry.value.gtw, lang.value)
        }
        if (process.client) {
          const params = new URLSearchParams(window.location.search)
          src.value = params.get('src')
        }
      }
      const setSelectedMapIndex=(val:number)=>{
        selectedMapIndex.value=val;
      }
      const setShowMenu = (val: boolean)=>{
        if(val===false){
          window.scrollTo(0,0)
        }
        showMenu.value = val
      }
      const setThankyou=(val: boolean)=>{
        showthankyou.value = val
      }
      const setCountryFromURL = (info: object)=>{
        if(info){
          const curr_country = gateways.find(el => el.gtw === info?.curr_gtw)
          selectedCountry.value = curr_country
          if(curr_country.region === 'central-america'){ selectedMapIndex.value = 0 }
          else if(curr_country.region === 'caribbean'){ selectedMapIndex.value = 1 }
          else if(curr_country.region === 'south-america'){ selectedMapIndex.value = 2 }
          lang.value = info.lg
          setLocale(info.lg);
    
          setGatewayCookie(selectedCountry.value.gtw, lang.value)
        }
      }
    const setLanguageFromQueryParam=()=>{
        const params = new URLSearchParams(window.location.search)
        const lg = params.get('lang') || params.get('lg')
        if(lg != null && (lg == 'en' || lg == 'es')){
          lang.value = lg
          setLocale(lg)
        }
      }
 

    return { 
        lang,
        showthankyou,
        showCountries,
        selectedMapIndex,
        selectedCountry,
        showMenu,
        src,

        selectedMap,

        setLang,
        setSelectedCountry,
        setSelectedMapIndex,
        setShowMenu,
        setThankyou,
        setLanguageFromQueryParam,
        setCountryFromURL

     }
  })

  if(import.meta.hot){
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
  }