<template>
  <div
    class="my-8 h-0 bg-gray-400 overflow-hidden rounded select-none shadow-lg relative"
    style="padding-bottom: 56.1333%"
  >
    
    <transition-group name="fade" tag="div">
      <div v-for="number in [currentNumber]" :key="number" class="absolute top-0 left-0">
        <img class="max-w-full h-auto rounded" v-lazy="currentImage" :alt="'Slideshow image ' + (currentNumber + 1)" />
      </div>
    </transition-group>

    <span class="px-2 absolute h-full left-0 flex items-center content-center">
      <button @click="prev" type="button" aria-label="Previous Image" :class="['text-' + color + '-500', 'hover:text-' + color + '-400']" class="cursor-pointer focus:outline-none transition-all transition-100 transition-ease-in-out">
        <icon-base :twClass="['w-12', 'h-12']" icon-name="cheveron-left">
          <icon-cheveron-left />
        </icon-base>
      </button>
    </span>
    <span class="px-2 absolute h-full right-0 flex items-center content-center">
      <button @click="next" type="button" aria-label="Next Image" :class="['text-' + color + '-500', 'hover:text-' + color + '-400']" class="cursor-pointer focus:outline-none transition-all transition-100 transition-ease-in-out">
        <icon-base :twClass="['w-12', 'h-12']" icon-name="cheveron-right">
          <icon-cheveron-right />
        </icon-base>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentNumber: 0
    };
  },
  props: ['sliderImages', 'color'],
  computed: {
    currentImage: function() {
      return this.sliderImages[Math.abs(this.currentNumber) % this.sliderImages.length];
    }
  },
  methods: {
    next: function() {
      this.currentNumber += 1;
    },
    prev: function() {
      this.currentNumber -= 1;
    }
  }
};
</script>

<style>
</style>
