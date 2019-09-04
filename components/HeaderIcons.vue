<template>
  <div :class="[!country ? 'px-6 sm:px-10 md:px-20 pt-10 lg:pt-20' : '']" class="mb-10 lg:absolute lg:w-full lg:-mt-104 lg:left-0 lg:right-0">
    <div v-if="country" class="mb-4 flex flex-row flex-wrap items-center">
      <div class="pulse-parent group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-gray-300 lg:bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base :twClass="['w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12']" icon-name="altitude"><icon-altitude /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-gray-300 lg:bg-white rounded-full shadow-md">{{ $t('header.elevationCapital') }} <strong>{{ iconData.elevation }} m</strong></span>
      </div>
      <div class="pulse-parent mt-4 sm:mt-0 group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-gray-300 lg:bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14']" icon-name="money"><icon-money /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-gray-300 lg:bg-white rounded-full shadow-md">{{ $t('header.gdp') }} <strong>{{ iconData.gdp }} USD</strong></span>
      </div>
      <div class="pulse-parent mt-4 lg:mt-0 group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-gray-300 lg:bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14']" icon-name="user-group"><icon-user-group /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-gray-300 lg:bg-white rounded-full shadow-md">{{ $t('header.population') }} <strong>{{ iconData.inhabitants }}</strong></span>
      </div>
      <div class="pulse-parent mt-4 lg:mt-0 group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-gray-300 lg:bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base v-if="page === 'mexico'" :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14']" icon-name="mexico"><icon-mexico /></icon-base>
          <icon-base v-if="page === 'peru'" :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14']" icon-name="peru"><icon-peru /></icon-base>
          <icon-base v-if="page === 'colombia'" :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14']" icon-name="colombia"><icon-colombia /></icon-base>
          <icon-base v-if="page === 'brazil'" :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14']" icon-name="brazil"><icon-brazil /></icon-base>
          <icon-base v-if="page === 'argentina'" :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14']" icon-name="argentina"><icon-argentina /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-gray-300 lg:bg-white rounded-full shadow-md">{{ $t('header.area') }} <strong>{{ iconData.area }} km<sup>2</sup></strong></span>
      </div>
    </div>
    <div v-if="!country" class="mb-4 flex flex-row flex-wrap items-center">
      <div class="pulse-parent sm:mt-0 group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:h-14 lg:w-14']" icon-name="plane"><icon-plane /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-white rounded-full shadow-md">{{ $t('header.flightRoute') }} <strong>35'500 km</strong></span>
      </div>
      <div class="pulse-parent mt-4 lg:mt-0 group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:h-14 lg:w-14']" icon-name="taxi"><icon-taxi /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-white rounded-full shadow-md">{{ $t('header.taxiRides') }} <strong>96</strong></span>
      </div>
      <div class="pulse-parent mt-4 lg:mt-0 group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base :twClass="['w-8 h-8 sm:w-12 sm:h-12 lg:h-14 lg:w-14']" icon-name="interview"><icon-interview /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-white rounded-full shadow-md">{{ $t('header.interviewMins') }} <strong>5'754</strong></span>
      </div>
      <div class="pulse-parent mt-4 group flex sm:flex-col items-center w-full sm:w-1/2 lg:w-1/4">
        <div :class="'text-' + color + '-500'" class="pulse-child bg-white h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center content-center justify-center shadow-md">
          <icon-base :twClass="['w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12']" icon-name="altitude"><icon-altitude /></icon-base>
        </div>
        <span class="group-hover:scale-100 lg:scale-0 transition-all transition-100 ml-2 text-sm sm:ml-0 sm:mt-2 px-6 py-2 bg-white rounded-full shadow-md">{{ $t('header.metersAltitude') }} <strong>11'434</strong></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {},
    country: {
      default: true
    },
    iconData: {},
    page: {}
  }
}
</script>

<style scoped>
  .pulse-parent:nth-child(1) .pulse-child {
    animation: pulse 2s ease-in-out 1.2s 2, bwFilter 0.5s forwards ease-in-out 3.2s;
    filter: grayscale(100%);
  }
  .pulse-parent:nth-child(2) .pulse-child {
    animation: pulse 2s ease-in-out 1.4s 2, bwFilter 0.5s forwards ease-in-out 3.4s;
    filter: grayscale(100%);
  }
  .pulse-parent:nth-child(3) .pulse-child {
    animation: pulse 2s ease-in-out 1.6s 2, bwFilter 0.5s forwards ease-in-out 3.6s;
    filter: grayscale(100%);
  }
  .pulse-parent:nth-child(4) .pulse-child {
    animation: pulse 2s ease-in-out 1.8s 2, bwFilter 0.5s forwards ease-in-out 3.8s;
    filter: grayscale(100%);
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.08);
    }
    50% {
      transform: scale(1);
    }
  }

  @keyframes bwFilter {
    0% {
      filter: grayscale(100%);
    }
    100% {
      filter: grayscale(0%);
    }
  }
</style>
