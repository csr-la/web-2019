<template>
  <button @click="scrollToTop" :class="[showScrollToTop ? 'invisible sm:visible opacity-1' : 'invisible opacity-0']" type="button" class="scroll-top-button mr-4 mb-4 fixed right-0 bottom-0 h-10 inline-block pl-5 pr-3 py-1 rounded-full bg-white hover:bg-gray-100 avtice:bg-gray-200 shadow-md z-40 focus:outline-none focus:shadow-outline transition-all transition-250 transition-ease-in-out">
      <div class="flex content-center items-center">
        <span class="text-sm">Top</span>
        <span class="text-gray-800">
            <icon-base icon-name="cheveron-up"><icon-cheveron-up /></icon-base>
        </span>
      </div>
    </button>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  data () {
    return {
      showScrollToTop: false
    }
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      this.showScrollToTop = currentScrollPosition > 300
    },
    scrollToTop() {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  },
  mounted() {
    smoothscroll.polyfill();
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>