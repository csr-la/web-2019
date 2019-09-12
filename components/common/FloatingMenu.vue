<template>
  <div class="floating-menu absolute z-30">
    <button :aria-label="$t('common.close')" type="button" :class="[menuOpen ? '' : 'invisible-hidden']" @click="menuOpen = false;" class="bg-black-t-light block fixed inset-0 w-full h-full cursor-default transition-opacity transition-250 transition-ease-in-out"></button>
    <div :class="[menuOpen ? 'max-h-screen' : '']" class="fixed pb-8 ml-4 mt-6 left-0 top-0 select-none flex flex-col">
      <div class="inline-block relative flex-none">
        <div @click="toggleMenu" class="menu-button cursor-pointer hover:bg-gray-100 active:bg-gray-200 shadow-md bg-white rounded-full w-10 transition-all transition-100 transition-ease-in-out">
          <div class="h-10 flex justify-center items-center">
            <span class="text-gray-700">
                <icon-base :twClass="['w-6', 'h-6']" icon-name="menu"><icon-menu /></icon-base>
            </span>
          </div>
        </div>
      </div>
      <div v-if="menuOpen" class="menu-open w-52 mt-4 bg-gray-100 shadow-lg rounded overflow-y-auto flex-shrink transition-all transition-100 transition-ease-in-out">
        <nav>
          <nuxt-link :to="localePath('index')" :class="[active === 'home' ? 'bg-base-blue-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 sm:text-sm">{{ $t('pages.home') }}</nuxt-link>
          <nuxt-link :to="localePath({ name: 'index', hash: '#chapter'})" v-scroll-to="'#chapter'" class="bg-gray-100 hover:bg-gray-300 block px-4 py-2 sm:text-sm border-t border-gray-400">{{ $t('pages.contents') }}</nuxt-link>
          <nuxt-link :to="localePath('int')" :class="[active === 'introduction' ? 'bg-base-blue-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 sm:text-sm border-t border-gray-400">{{ $t('pages.introduction') }}</nuxt-link>
          <div class="bg-white sm:text-sm">
            <nuxt-link :to="localePath('mex')" :class="[active === 'mexico' ? 'bg-mexico-600 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400">{{ $t('pages.mexico') }}</nuxt-link>
          </div>
          <div class="bg-white sm:text-sm">
            <nuxt-link :to="localePath('per')" :class="[active === 'peru' ? 'bg-peru-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400">{{ $t('pages.peru') }}</nuxt-link>
          </div>
          <div class="bg-white sm:text-sm">
            <nuxt-link :to="localePath('col')" :class="[active === 'colombia' ? 'bg-colombia-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400">{{ $t('pages.colombia') }}</nuxt-link>
          </div>
          <div class="bg-white sm:text-sm">
            <nuxt-link :to="localePath('bra')" :class="[active === 'brazil' ? 'bg-brazil-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400">{{ $t('pages.brazil') }}</nuxt-link>
          </div>
          <div class="bg-white sm:text-sm">
            <nuxt-link :to="localePath('arg')" :class="[active === 'argentina' ? 'bg-argentina-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400">{{ $t('pages.argentina') }}</nuxt-link>
          </div>
          <nuxt-link :to="localePath('conc')" :class="[active === 'conclusion' ? 'bg-base-blue-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400 sm:text-sm">{{ $t('pages.conclusion') }}</nuxt-link>
          <nuxt-link :to="localePath('rec')" :class="[active === 'recommendations' ? 'bg-base-blue-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400 sm:text-sm">{{ $t('pages.recommendations') }}</nuxt-link>
          <nuxt-link :to="localePath('dia')" :class="[active === 'journal' ? 'bg-base-blue-500 text-white font-bold' : 'bg-gray-100 hover:bg-gray-300']" class="block px-4 py-2 border-t border-gray-400 sm:text-sm">{{ $t('pages.journal') }}</nuxt-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow'

export default {
  mixins: [smoothReflow],
  props: ['active'],
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  },
  mounted(){
    this.$smoothReflow({
      el: '.menu-open',
      property: ['height', 'transform']
    })
  },
}
</script>

<style>

</style>
