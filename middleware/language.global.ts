
export default defineNuxtRouteMiddleware((to, from) => {
  if(to.fullPath === '/'){
    return navigateTo('/country-picker')
  }
  if(to.params.lg){
    const lg = to.params.lg
    if(lg !== 'en' && lg !== 'es'){
      throw createError({ statusCode: 404, statusMessage: `Invalid Url: ${to.fullPath}`, });
    }
  }
})