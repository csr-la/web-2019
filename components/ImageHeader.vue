<template>
  <div>
    <div class="mx-auto pt-4 lg:pt-0 sm:max-w-160 md:max-w-3xl lg:mx-0 lg:max-w-full lg:w-auto lg:h-93vh z-10">
      <div v-lazy:background-image="imgUrl" :class="bgPosition" class="bg-gray-400 mx-2 lg:mx-0 flex flex-col justify-between rounded h-64 md:h-88 bg-no-repeat lg:h-93vh bg-cover py-10 px-6 sm:px-10 md:px-20 lg:p-0 overflow-hidden lg:fixed lg:h-full lg:w-full lg:rounded-none lg:overflow-auto transition-all transition-250 transition-ease-in-out">
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

<style>

</style>
