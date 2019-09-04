<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :class="twClass"  
    viewBox="0 0 24 24" 
    :aria-label="iconName" 
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    twClass: {
      type: Array,
      default: () => ['w-8', 'h-8']
    },
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
/* svg {
  display: inline-block;
  vertical-align: baseline;
} */
</style>