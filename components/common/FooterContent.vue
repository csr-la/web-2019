<template>
  <div>
    <footer class="pt-10 bg-gray-200 relative z-10 flex flex-col items-center">
      <div class="mt-8 pb-4 flex justify-center">
        <span>
          <img v-lazy="img.htw" alt="HTW Chur" width="158" height="35">
        </span>
        <span class="ml-5">
          <img v-lazy="img.kas" alt="Konrad Adenauer Stiftung" width="115" height="35">
        </span>
      </div>
      <p class="mt-4 text-center text-green-gray-500 leading-loose text-sm">
        <nuxt-link :to="localePath('fue')" class="hover:text-green-gray-700 transition-all transition-100 transition-ease-in-out">{{ $t('pages.sources') }}</nuxt-link> · 
        <nuxt-link :to="localePath('cre')" class="hover:text-green-gray-700 transition-all transition-100 transition-ease-in-out">{{ $t('pages.imprint') }}</nuxt-link><br/>
        &copy; Christian Hauser, {{ currentYear }}</p>
      <div class="mt-8 px-8 py-6 w-full bg-green-gray-500 relative z-10">
        <div class="text-green-gray-100 text-sm flex flex-col sm:flex-row items-center justify-center">
          <span class="block font-bold text-center text-white">{{ $t('common.language') }}</span>
          <nuxt-link :to="switchLocalePath('de')" class="mt-2 sm:mt-0 sm:ml-2 inline-block bg-green-gray-700 rounded-full px-3 py-1 hover:bg-green-gray-800 hover:text-green-gray-300 transition-all transition-100 transition-ease-in-out">Deutsch</nuxt-link>
          <nuxt-link :to="switchLocalePath('en')" class="mt-2 sm:mt-0 sm:ml-2 inline-block bg-green-gray-700 rounded-full px-3 py-1 hover:bg-green-gray-800 hover:text-green-gray-300 transition-all transition-100 transition-ease-in-out">English</nuxt-link>
          <nuxt-link :to="switchLocalePath('es')" class="mt-2 sm:mt-0 sm:ml-2 inline-block bg-green-gray-700 rounded-full px-3 py-1 hover:bg-green-gray-800 hover:text-green-gray-300 transition-all transition-100 transition-ease-in-out">Español</nuxt-link>
          <nuxt-link :to="switchLocalePath('pt')" class="mt-2 sm:mt-0 sm:ml-2 inline-block bg-green-gray-700 rounded-full px-3 py-1 hover:bg-green-gray-800 hover:text-green-gray-300 transition-all transition-100 transition-ease-in-out">Português</nuxt-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: {
        htw: "/logos/htwchur.svg",
        kas: "/logos/konradadenauer.svg"
      }
    }
  },
  computed: {
    currentYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>

