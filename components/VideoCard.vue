<template>
  <div>
    <div v-if="type === 'interview'" @click="toggle" class="max-w-96 xl:w-64 mx-auto xl:ml-14 xl:mr-0 mt-7 relative rounded overflow-hidden cursor-pointer shadow hover:shadow-lg hover:scale-102 transition-transform transition-250 transition-ease-in-out">
      <img v-lazy="imgSrc" :alt="name" class="w-full">
      <div :class="'bg-' + color + '-500'" class="px-4 py-3 antialiased flex justify-between items-center">
        <div>
          <span class="block text-sm leading-tight text-white">{{ $t('common.interviewWith') }}</span>
          <span class="block font-bold leading-tight text-white">{{ name }}</span>
        </div>
        <span class="text-white flex items-center content-center">
          <icon-base icon-name="play"><icon-play /></icon-base>
        </span>
      </div>
    </div>
    <div v-if="type === 'conclusion'" @click="toggle" :class="'bg-' + color + '-500'" class="mt-8 relative shadow hover:shadow-lg rounded overflow-hidden cursor-pointer transition-all transition-250 transition-ease-in-out">
      <div class="flex">
        <div class="relative inline-block flex items-center content-center">
          <img v-lazy="imgSrc" class="w-32 sm:w-52 lg:w-64 xl:w-auto" :alt="name">
          <span class="-mr-6 sm:-mr-8 h-full absolute right-0 top-0 text-white flex items-center content-center">
            <icon-base :twClass="['w-12', 'h-12', 'sm:w-16', 'sm:h-16']" icon-name="play"><icon-play /></icon-base>
          </span>
        </div>
        <div class="px-6 py-2 sm:px-12 sm:py-6 flex flex-col justify-center">
          <span class="block text-sm text-white sm:text-base md:text-lg">{{ $t('common.conclusionVideo') }}</span>
          <span class="block text-sm text-white sm:text-base md:text-2xl font-bold">{{ name }}</span>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? 'block visible opacity-100' : 'hidden invisible opacity-0']" class="fixed z-50 w-full h-full top-0 left-0 transition-opacity transition-250 transition-ease-in-out">
      <button :aria-label="$t('common.close')" @click="toggle" class="absolute cursor-default bg-black-t w-full h-full top-0 left-0"></button>
      <div class="lightbox-container w-11/12 max-w-4xl absolute top-6/12 left-6/12 shadow-lg">
        <div class="h-0 relative" style="padding-bottom: 56.25%">
          <div class="absolute top-0 left-0 w-full h-full">
            <iframe class="mt-2 block overflow-hidden w-full h-full" :src="switchIdPlay" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen title="Interview"></iframe>
          </div>
        </div>
      </div>
      <button @click="toggle" type="button" class="mr-4 mt-4 fixed cursor-pointer right-0 top-0 h-10 inline-block pl-5 pr-3 py-1 rounded-full bg-white hover:bg-gray-100 avtice:bg-gray-200 shadow-md z-40 focus:outline-none focus:shadow-outline transition-all transition-250 transition-ease-in-out">
        <div class="flex content-center items-center">
          <span class="text-sm">{{ $t('common.close') }}</span>
          <span class="text-gray-800">
              <icon-base icon-name="close"><icon-close /></icon-base>
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'imgSrc', 'type', 'switchId', 'color'],
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    switchIdPlay: function () {
      let link = 'https://tube.switch.ch/embed/' + this.switchId
      return link
    }
  },
  mounted() {
    const onEscape = (e) => {
      if (!this.isOpen || e.key !== 'Escape') {
        return
      }
      this.isOpen = false
    }
    document.addEventListener('keydown', onEscape)

    this.$on('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    toggle() {
      if (this.isOpen) {
        const iframe = this.$el.querySelector('iframe');
        if ( iframe !== null ) {
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }
      }
      this.isOpen = !this.isOpen
      const scrollButton = document.querySelector('.scroll-top-button')
      const floatingMenu = document.querySelector('.floating-menu')
      if (this.isOpen) {
        scrollButton.classList.add('invisible')
        scrollButton.classList.add('sm:invisible')
        floatingMenu.classList.add('invisible')
      } else {
        scrollButton.classList.remove('invisible')
        scrollButton.classList.remove('sm:invisible')
        floatingMenu.classList.remove('invisible')
      }
    }
  }
}
</script>

<style>
  .lightbox-container {
    transform: translate(-50%, -50%);
    margin-right: -50%;
  }
</style>
