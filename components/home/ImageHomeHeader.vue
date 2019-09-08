<template>
  <div>
    <div class="w-full h-screen z-10 relative overflow-hidden">
      <div v-lazy:background-image="imgUrl" :class="bgPosition" class="bg-gray-400 bg-no-repeat h-screen bg-cover bg-center xl:bg-right overflow-hidden lg:fixed h-full w-full transition-all transition-250 transition-ease-in-out">
        <div class="w-full h-full bg-black-t-30 md:bg-black-t-20"></div>
      </div>
      <div class="absolute bottom-20p sm:bottom-14p right-0 mx-4 lg:ml-0 lg:mr-20 antialiased">
        <h1 class="site-title leading-tight text-right text-white font-bold text-2xl sm:text-4xl lg:text-5xl" v-html="$t('siteTitle')"></h1>
        <p class="mt-3 text-right text-white font-bold text-sm sm:text-base uppercase tracking-widest" v-html="$t('siteSubTitle')"></p>
      </div>
      <div class="fixed bottom-0 mb-2 w-10 rounded-full mx-auto left-0 right-0 text-white">
        <a href="#main" v-scroll-to="'#main'">
          <span class="block">
            <icon-base :twClass="['w-10', 'h-10']" icon-name="cheveron-down-circle"><icon-cheveron-down-circle /></icon-base>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'bgPosition'],
  data() {
    return {
      
    }
  }
}
</script>

<style lang="postcss" scoped>
  @media (min-width: 1500px) { 
    .site-title {
      @apply text-6xl;
    }
  }
</style>
