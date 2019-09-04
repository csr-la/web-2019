<template>
  <div class="mt-8 mx-auto xl:mt-6 mb-5 xl:mx-0 max-w-78 xl:max-w-64 z-10 shadow-lg xl:float-right xl:-mr-78 clear-right rounded-b">
    <!-- Table Header -->
    <div :class="'bg-' + color + '-500'" class="px-4 py-3 rounded-t overflow-hidden">
      <span class="font-bold text-white leading-tight" >{{ tableData.info[$i18n.locale].header }}</span>
    </div>

    <!-- Table Data -->
    <div v-for="item in tableData.data" :key="item.title.en" class="bg-white px-4 py-2 border-b border-gray-400 flex items-center justify-between">
        <div class="text-xs font-bold mr-2">{{ $t(tableType + '.' + item.title) }}</div>
        <div class="text-xs flex-shrink-0">{{ item.percentage }} %</div>
    </div>

    <!-- Table Source -->
    <div class="relative">
      <div :class="[!showSource ? 'rounded-b' : '']" class="text-xxs w-full px-4 py-2 bg-gray-300 overflow-hidden">{{ tableData.info.source }}</div>
      <button type="button" @click="toggleSource" class="absolute bottom-0 right-0 mr-3 -mb-4 z-20 focus:outline-none">
          <span :class="['text-' + color + '-500', 'hover:text-' + color + '-400']" class="transition-all transition-100 transition-ease-in-out">
            <icon-base v-if="!showSource" :twClass="['w-8', 'h-8']" icon-name="add-circle"><icon-add-circle /></icon-base>
            <icon-base v-if="showSource" :twClass="['w-8', 'h-8']" icon-name="remove-circle"><icon-remove-circle /></icon-base>
          </span>
      </button>
      <div :class="[!showSource ? 'invisible-hidden' : '']" class="source-copy px-6 py-4 bg-gray-200 text-xs hyphens-auto text-justify overflow-hidden transition-all transition-250 transition-linear">
        {{ tableData.info[$i18n.locale].sourceCopy }}
      </div>
    </div>
  </div>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow'

export default {
  mixins: [smoothReflow],
  data() {
    return {
      showSource: false
    }
  },
  methods: {
    toggleSource() {
      this.showSource = !this.showSource
    }
  },
  mounted(){
    this.$smoothReflow({
      el: '.source-copy',
      property: ['height']
    })
  },
  props: ['tableData', 'color', 'tableType']
}
</script>

<style>

</style>
