<template>
  <div>
    <div class="px-8 py-10 flex flex-no-wrap items-center justify-between flex-col-reverse xl:flex-row bg-white rounded-b shadow-md">
      <div class="info-card mt-8 mb-8 xl:mt-0 xl:mb-0 rounded mx-2 self-stretch sm:self-auto sm:mx-0 sm:w-4/5 lg:w-120 overflow-hidden flex-none z-10 shadow-md lg:shadow-lg transition-all transition-250 transition-ease-in-out">
        <div class="bg-base-blue-500 px-5 py-3">
          <span class="block text-2xl font-bold text-white">{{ $t('home.latinAmerica') }}</span>
          <p class="mt-0 text-white">{{ $t('home.clickCountry') }}</p>
        </div>
        <div class="flex bg-gray-100 px-5 pt-2 pb-3 sm:py-4 flex-col">
          <div class="text-lg font-bold w-48">{{ $t('home.corruptionIndex') }}</div>
          <div class="mt-1 sm:mt-4 xl:mt-0">
            <div class="flex flex-col md:flex-row md:items-center">
              <p class="w-24">{{ $t('home.world') }}</p>
              <div class="w-40 sm:w-60 h-5 bg-gray-600 text-right px-1 flex items-center sm:justify-end">
                <span class="text-white text-xs font-bold text-shadow-info">{{ index.world.corruption }}/100</span>
              </div>
            </div>
            <div v-if="selectedCountry" class="mt-1 flex flex-col md:flex-row md:items-center">
              <p class="w-24">{{ $t('pages.' + index[selectedCountry].name) }}</p>
              <div class="w-40 sm:w-60 sm:min-w-60">
                <div :style="calcWidth(selectedCountry, 'corruption')" :class="index[selectedCountry].fill" class="h-5 text-right px-1 flex items-center sm:justify-end transition-all transition-250 transition-ease-in-out">
                  <span class="whitespace-no-wrap text-white text-xs font-bold text-shadow-info">{{ index[selectedCountry].corruption }}/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex bg-gray-100 px-5 pt-2 pb-3 sm:py-4 border-t border-gray-400 flex-col">
          <div class="text-lg font-bold w-48" v-html="$t('home.co2Emission')"></div>
          <div class="mt-1 sm:mt-4 xl:mt-0">
            <div class="flex flex-col md:flex-row md:items-center">
              <p class="w-24">{{ $t('home.world') }}</p>
              <div class="w-40 sm:w-60 h-5 bg-gray-600 text-right px-1 flex items-center sm:justify-end">
                <span class="text-white text-xs font-bold text-shadow-info">{{ index.world.co2 }}t / {{ $t('home.person') }}</span>
              </div>
            </div>
            <div v-if="selectedCountry" class="mt-1 flex flex-col md:flex-row md:items-center">
              <p class="w-24">{{ $t('pages.' + index[selectedCountry].name) }}</p>
              <div class="w-40 sm:w-60 sm:min-w-60">
                <div :style="calcWidth(selectedCountry, 'co2')" :class="index[selectedCountry].fill" class="h-5 text-right px-1 flex items-center sm:justify-end transition-all transition-250 transition-ease-in-out">
                  <span class="whitespace-no-wrap text-white text-xs font-bold text-shadow-info">{{ index[selectedCountry].co2 }}t / {{ $t('home.person') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex bg-gray-100 px-5 pt-2 pb-3 sm:py-4 border-t border-gray-400 flex-col">
          <div class="text-lg font-bold w-48">{{ $t('home.lifeExpectancy') }}</div>
          <div class="mt-1 sm:mt-4 xl:mt-0">
            <div class="flex flex-col md:flex-row md:items-center">
              <p class="w-24">{{ $t('home.world') }}</p>
              <div class="w-40 sm:w-60 h-5 bg-gray-600 text-right px-1 flex items-center sm:justify-end">
                <span class="text-white text-xs font-bold text-shadow-info">{{ index.world.age }} {{ $t('home.years') }}</span>
              </div>
            </div>
            <div v-if="selectedCountry" class="mt-1 flex flex-col md:flex-row md:items-center">
              <p class="w-24">{{ $t('pages.' + index[selectedCountry].name) }}</p>
              <div class="w-40 sm:w-60 sm:min-w-60">
                <div :style="calcWidth(selectedCountry, 'age')" :class="index[selectedCountry].fill" class="h-5 text-right px-1 flex items-center sm:justify-end transition-all transition-250 transition-ease-in-out">
                  <span class="whitespace-no-wrap text-white text-xs font-bold text-shadow-info">{{ index[selectedCountry].age }} {{ $t('home.years') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 lg:mt-0 bg-white mx-2 self-stretch sm:self-auto sm:mx-0 sm:w-4/5 lg:w-1/2 overflow-hidden text-gray-300 flex-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 758.2 834.1" class="min-h-72">
          <path class="fill-current" d="M351.2 225l7.4-8.3-13.4-13.7-12-1-15 8-15-6-10-11 4-39-9-9-47 1 11-22 2-15 9-10v-6h-23l-12 8-1 8-14 13-24 5-15-6-14-23 1-26 7-16-18-5-3-10-8-12-6-8-11 1-5 7-13-5-1-7-12-12-16 1-1 4-24 1-30-10-19 1 6 27 11 12-1 6h-10l11 10 5-3 7 9-1 12 14 11v4l4 1 4-3-4-9-5-1-6-15 1-5-10-10 1-9-12-13 2-16 13 3 2 15 10 15 4 1 2 6 8 7-4 6 13 7 2 5 15 16 1 7 4 3-1 9h-4v6l10 8 13 9h10l10 7 9 2 32 9 16-6 9 2 16 14 19 5 10-7 1 9 11 3 4-2 3 3-3 2 17 16v10l28 17 9-1 13 6 13-12 4-1 8 7-1 4z"/>
          <path class="fill-current" d="M430.2 824l-18-22 1-21 24-24-11-12 7-12 8-1 4-15 4-24 17 4 7-18 32-3 16-16-12-27 26 14 16-12 26-29 2 6 24-27 5-24 40-16 20 3 28-31 20-64 41-37v-35l-16-5-25-27h-16l-16-8-13 3 3-10-29-17-9 6 1-12-15-3 3-15-16-27-23-17-31-5-30-27h-14l8-8-26-15-18 7-9-7-23 2v-9l-30 2 5 14-8 4-2-21 8-6-3-4-17 10-16 1-8 14-21 24 5 34-5 8-9 2-2 12-13 5v9l-9 8 1 13 7 6 6-5-3 9-13 8 4 20 13 10 37 73 49 36 2 29-15 74-1 37-19 42 3 22-9 35 4 1 3-16 3 1-1 22-4 18-4 6-5-8-6 10 8 3-3 9-6 4 2 34 21 27 23 10z"/>
          <path @click="changeCountry('brazil')" :class="[selectedCountry === 'brazil' ? 'text-brazil-500' : 'text-gray-500']" class="country brazil hover:text-brazil-500 cursor-pointer fill-current transition-all transition-100 transition-ease-in-out" d="M609.2 266l-12 17-63 5-10-38-25 12-20-6 12 21-25 12-13-12-23 2-4 16 7 13-6 25-28 10-11 23 18 25 14-5 2 14 19 3 28-13 1 19 44 25 1 24 17 3 6 18-7 16-1 21 19 6 2 19 10 1-5 12 6 2-2 14-39 28h8l24 25-2 12 26-29 2 6 24-27 5-24 40-16 20 3 28-31 20-64 41-37v-35l-16-5-25-27h-16l-16-8-13 3 3-10-29-17-9 6 1-12-15-3 3-15z"/>
          <path @click="changeCountry('colombia')" :class="[selectedCountry === 'colombia' ? 'text-colombia-500' : 'text-gray-500']" class="country colombia text-gray-500 hover:text-colombia-500 cursor-pointer fill-current transition-all transition-100 transition-ease-in-out" d="M408.2 186l8-6-3-4-17 10-16 1-8 14-21 24 5 34-5 8-9 2-2 12 13 9h12l23 14 8 13 13-1 16 4-4 12 6 1 6-25-7-13 4-16 23-2-4-9 5-5-5-18 4-9-20 1-9-10h-17l-12-21 3-15z"/>
          <path @click="changeCountry('peru')" :class="[selectedCountry === 'peru' ? 'text-peru-500' : 'text-gray-500']" class="country peru text-gray-500 hover:text-peru-500 cursor-pointer fill-current transition-all transition-100 transition-ease-in-out" d="M316.2 334l4 20 13 10 37 73 49 36 5-3 9-14-1-19 5-21-7.7-15-7.3-1-2-14-14 5-18-25 11-23 28-10-6-1 4-12-16-4-13 1-8-13-12.7-8.2-1.3 9.2-10 13-17 8-8 16-8-4-8-2 6-10z"/>
          <path @click="changeCountry('argentina')" :class="[selectedCountry === 'argentina' ? 'text-argentina-500' : 'text-gray-500']" class="country argentina text-gray-500 hover:text-argentina-500 cursor-pointer fill-current transition-all transition-100 transition-ease-in-out" d="M430.2 824l-18-22 1-21 24-24-11-12 7-12 8-1 8-39 17 4 7-18 32-3 16-16-12-27 12-35 39-28 2-14-6-2-3 10-9 7-10 1-15-4 12-20-20-14-10-2-13-19-12-1-3 8-3-8-13-3-10 7 2 6-4 7-11 5 1 24-5 1-9 14-2 16-6 11 6 20-1 8-5 6-1 11-6 5 1 19-7 12-2 19v24h2l-3 13-6 19-1 8-8 7 2 12h6v10l3 4 16 2 1 24 11.8 5.9z"/>
          <path @click="changeCountry('mexico')" :class="[selectedCountry === 'mexico' ? 'text-mexico-500' : 'text-gray-500']" class="country mexico text-gray-500 hover:text-mexico-500 cursor-pointer fill-current transition-all transition-100 transition-ease-in-out" d="M226.2 145l-8-11 4-6h17l14-4 1-15 9-10v-6h-23l-12 8-1 8-14 13-24 5-15-6-14-23 1-26 7-16-18-5-3-10-8-12-6-8-11 1-5 7-13-5-1-7-12-12-16 1-1 4-24 1-30-10-19 1 6 27 11 12-1 6h-10l11 10 5-3 7 9-1 12 14 11v4l4 1 4-3-4-9-5-1-6-15 1-5-10-10 1-9-12-13 2-16 13 3 2 15 10 15 4 1 2 6 8 7-4 6 13 7 2 5 15 16 1 7 4 3-1 9h-4v6l10 8 13 9h10l10 7 9 2 32 9 16-6 9 2 16 14 5-16z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow'

export default {
  data() {
    return {
      selectedCountry: null,
      index: {
        world: {
          corruption: 43,
          co2: 5,
          age: 72.2
        },
        mexico: {
          name: 'mexico',
          fill: 'bg-mexico-500',
          corruption: 28,
          co2: 3.9,
          age: 77.3
        },
        peru: {
          name: 'peru',
          fill: 'bg-peru-500',
          corruption: 35,
          co2: 2.0,
          age: 75.2
        },
        colombia: {
          name: 'colombia',
          fill: 'bg-colombia-500',
          corruption: 36,
          co2: 1.8,
          age: 74.6
        },
        brazil: {
          name: 'brazil',
          fill: 'bg-brazil-500',
          corruption: 35,
          co2: 2.6,
          age: 75.7
        },
        argentina: {
          name: 'argentina',
          fill: 'bg-argentina-500',
          corruption: 40,
          co2: 4.7,
          age: 76.7
        }
      }
    }
  },
  methods: {
    calcWidth(country, index) {
      const val = this.index[country][index];
      const percentage = val / this.index.world[index] * 100;
      const percentageRounded = percentage.toFixed(2);
      return {
        width: percentageRounded + '%'
      }
    },
    changeCountry(selected) {
      this.selectedCountry = selected
    }
  },
  mixins: [smoothReflow],
  mounted(){
    this.$smoothReflow({
      el: '.info-card',
      property: ['height']
    })
  }
}
</script>

<style lang="postcss">
  .country {
    stroke: #ffffff;
    stroke-width: 2;
    stroke-miterlimit: 10;
  }
  .text-shadow-info {
    text-shadow: 1px 1px 4px grey;
  }
  @screen sm {
    .text-shadow-info {
      text-shadow: none;
    }
  }
</style>
