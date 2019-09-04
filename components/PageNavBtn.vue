<template>
  <div :class="[icon === 'prev' ? 'prev text-left' : 'next text-right']" class="mt-5 sm:-mt-5">
    <nuxt-link :to="localePath(link)" :class="[icon === 'prev' ? 'pl-3 pr-6 sm:ml-10 md:ml-20' : 'pr-3 pl-6 sm:mr-10 md:mr-20', bgColor, bgColorHover, bgColorActive]" class="nav-button h-10 inline-block py-1 rounded-full hover:shadow-md focus:outline-none transition-all transition-100 transition-ease-in-out">
      <div class="flex content-center items-center">
        <span v-if="icon === 'prev'" class="text-white">
            <icon-base icon-name="arrow-left"><icon-arrow-left /></icon-base>
        </span>
        <span class="text-white">
          <strong>{{ $t('pages.' + link) }}</strong>
        </span>
        <span v-if="icon === 'next'" class="text-white">
            <icon-base icon-name="arrow-right"><icon-arrow-right /></icon-base>
        </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['link', 'icon', 'color'],
  computed: {
    bgColor: function () {
      return 'bg-' + this.color + '-500'
    },
    bgColorHover: function () {
      return 'hover:bg-' + this.color + '-400'
    },
    bgColorActive: function () {
      return 'active:bg-' + this.color + '-700'
    }
  }
}
</script>

<style>

</style>
