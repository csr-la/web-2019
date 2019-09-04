<template>
  <div class="hidden lg:block">
    <button type="button" v-if="switcherOpen" @click="toggleSwitcher" class="z-20 block fixed opacity-0 inset-0 w-full h-full cursor-default"></button>
    <div class="language-button lg:mr-4 lg:mt-4 lg:fixed lg:top-0 lg:right-0 flex flex-col items-end z-30">
      <div class="flex items-center group">
        <div :class="[switcherOpen ? 'hidden' : '']" class="group-hover:scale-100 lg:scale-0 transition-all transition-100 transition-ease-in-out h-10 px-6 bg-white rounded-full flex items-center">
          <span class="cursor-default">Language</span>
        </div>
        <div @click="toggleSwitcher" :class="[switcherOpen ? 'h-43' : 'h-10 cursor-pointer hover:bg-gray-100 actice:bg-gray-200']" class="ml-2 shadow-md bg-white rounded-full w-10 transition-all transition-100 transition-ease-in-out">
          <div class="h-10 flex justify-center items-center">
            <span class="text-gray-700">
                <icon-base :twClass="['w-6', 'h-6']" icon-name="globe"><icon-globe /></icon-base>
            </span>
          </div>
          <div :class="[switcherOpen ? 'visible opacity-1' : 'invisible opacity-0']" class="transition-all transition-100 transition-ease-in-out">
            <div class="w-10 h-8 mx-auto flex justify-center items-center">
              <div class="w-8 h-8 rounded-full hover:bg-gray-300 uppercase tracking-wider text-xs cursor-pointer flex justify-center items-center"><span>DE</span></div>
            </div>
            <div class="w-10 h-8 mx-auto flex justify-center items-center">
              <div class="w-8 h-8 rounded-full hover:bg-gray-300 uppercase tracking-wider text-xs cursor-pointer flex justify-center items-center"><span>EN</span></div>
            </div>
            <div class="w-10 h-8 mx-auto flex justify-center items-center">
              <div class="w-8 h-8 rounded-full hover:bg-gray-300 uppercase tracking-wider text-xs cursor-pointer flex justify-center items-center"><span>ES</span></div>
            </div>
            <div class="w-10 h-8 mx-auto flex justify-center items-center">
              <div class="w-8 h-8 rounded-full hover:bg-gray-300 uppercase tracking-wider text-xs cursor-pointer flex justify-center items-center"><span>PT</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switcherOpen: false
    }
  },
  methods: {
    toggleSwitcher() {
      this.switcherOpen = !this.switcherOpen
    }
  }
}
</script>

<style>

</style>
