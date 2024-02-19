import gateways from '~/assets/gateways'
import { geolocation } from '@vercel/edge';

export default defineNuxtRouteMiddleware((to, from) => {
  const gtw = to.params.gtw;
  const gateway = gateways.find(el => el.gtw === gtw)  
  if(!gateway){
    return navigateTo(`/en/country-picker`)
  }
})
  