<template>
  <div>
    <FloatingMenu active="home"/>
    <ImageHomeHeader :imgUrl="imgUrl" bgPosition="bg-center"/>
    <div id="main" class="bg-gray-200 relative z-20">
      <div class="relative container px-2 mx-auto">
        <div class="sm:w-10/12 mx-auto">
          <HomeInfo/>
          <div id="chapter">
            <div class="-mt-5 text-right mr-6 sm:mr-10 md:mr-20">
              <button type="button" @click="toggleContents" class="inline-block h-10 bg-base-blue-500 hover:bg-base-blue-400 active:bg-base-blue-600 pl-6 pr-3 py-1 rounded-full hover:shadow-md focus:outline-none transition-all transition-100 transition-ease-in-out">
                <div class="flex content-center items-center">
                  <span class="text-white">
                    <strong>{{ $t('pages.contents') }}</strong>
                  </span>
                  <span class="text-white">
                      <icon-base v-if="!contentsOpen" icon-name="cheveron-down"><icon-cheveron-down /></icon-base>
                      <icon-base v-if="contentsOpen" icon-name="cheveron-up"><icon-cheveron-up /></icon-base>
                  </span>
                </div>
              </button>
            </div>
            <nav v-show="contentsOpen" class="mt-6 lg:mx-0 rounded overflow-hidden shadow-md bg-white">
              <div class="contents-filter transition-all transition-250 transition-ease-in-out">
                <div>
                  <div class="px-6 sm:px-10 md:px-20 pt-20 pb-8 antialiased">
                    <span>{{ $t('home.filterPrompt') }}</span>
                    <div class="mt-4">
                      <span class="mb-2 md:mb-0 flex-none font-bold w-full md:w-24">{{ $t('home.topics') }}</span>
                      <div class="-ml-1 flex flex-wrap items-center">
                        <button type="button" @click="addTopicFilter('humanrights')" :class="[topicFilter.humanrights && topicsFiltered ? 'bg-base-blue-500 border-base-blue-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-base-blue-400 hover:border-base-blue-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-base-blue-700 active:border-base-blue-700 focus:outline-none transition-all">{{ $t('sections.humanrights') }}</button>
                        <button type="button" @click="addTopicFilter('environment')" :class="[topicFilter.environment && topicsFiltered ? 'bg-base-blue-500 border-base-blue-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-base-blue-400 hover:border-base-blue-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-base-blue-700 active:border-base-blue-700 focus:outline-none transition-all">{{ $t('sections.environment') }}</button>
                        <button type="button" @click="addTopicFilter('corruption')" :class="[topicFilter.corruption && topicsFiltered ? 'bg-base-blue-500 border-base-blue-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-base-blue-400 hover:border-base-blue-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-base-blue-700 active:border-base-blue-700 focus:outline-none transition-all">{{ $t('sections.corruption') }}</button>
                        <button type="reset" @click="resetTopicFilter" :class="[topicsFiltered ? 'text-gray-600 border-gray-300 bg-gray-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white active:bg-gray-800 active:border-gray-800' : 'cursor-not-allowed text-gray-400 border-gray-200 bg-gray-200']" class="m-1 pl-1 pr-3 py-1 border rounded-full text-sm font-bold uppercase focus:outline-none transition-all">
                          <div class="flex items-center">
                            <span><icon-base :twClass="['w-5', 'h-5']" icon-name="close"><icon-close /></icon-base></span>
                            <span class="tracking-wide"> Reset</span>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div class="mt-4">
                      <span class="mb-2 md:mb-0 flex-none font-bold w-full md:w-24">{{ $t('home.countries') }}</span>
                      <div class="-ml-1 flex flex-wrap items-center">
                        <button type="button" @click="addCountryFilter('mexico')" :class="[countryFilter.mexico && countriesFiltered ? 'bg-mexico-500 border-mexico-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-mexico-400 hover:border-mexico-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-mexico-700 active:border-mexico-700 focus:outline-none transition-all">{{ $t('pages.mexico') }}</button>
                        <button type="button" @click="addCountryFilter('peru')" :class="[countryFilter.peru && countriesFiltered ? 'bg-peru-500 border-peru-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-peru-400 hover:border-peru-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-peru-700 active:border-peru-700 focus:outline-none transition-all">{{ $t('pages.peru') }}</button>
                        <button type="button" @click="addCountryFilter('colombia')" :class="[countryFilter.colombia && countriesFiltered ? 'bg-colombia-500 border-colombia-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-colombia-400 hover:border-colombia-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-colombia-700 active:border-colombia-700 focus:outline-none transition-all">{{ $t('pages.colombia') }}</button>
                        <button type="button" @click="addCountryFilter('brazil')" :class="[countryFilter.brazil && countriesFiltered ? 'bg-brazil-500 border-brazil-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-brazil-400 hover:border-brazil-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-brazil-700 active:border-brazil-700 focus:outline-none transition-all">{{ $t('pages.brazil') }}</button>
                        <button type="button" @click="addCountryFilter('argentina')" :class="[countryFilter.argentina && countriesFiltered ? 'bg-argentina-500 border-argentina-500 text-white' : 'text-gray-600 border-gray-400 hover:bg-argentina-400 hover:border-argentina-400']" class="m-1 px-3 py-1 inline-block border rounded-full text-sm font-bold hover:text-white active:bg-argentina-700 active:border-argentina-700 focus:outline-none transition-all">{{ $t('pages.argentina') }}</button>
                        <button type="reset" @click="resetCountryFilter" :class="[countriesFiltered ? 'text-gray-600 border-gray-300 bg-gray-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white active:bg-gray-800 active:border-gray-800' : 'cursor-not-allowed text-gray-400 border-gray-200 bg-gray-200']" class="m-1 pl-1 pr-3 py-1 border rounded-full text-sm font-bold uppercase focus:outline-none transition-all">
                          <div class="flex items-center">
                            <span><icon-base :twClass="['w-5', 'h-5']" icon-name="close"><icon-close /></icon-base></span>
                            <span class="tracking-wide"> Reset</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <transition-group name="contents" tag="div" class="-mx-4 px-6 sm:px-10 md:px-20 pb-20 sm:flex sm:flex-wrap">
                    <div v-for="item in contentsData.contents" :key="item.title.en" v-show="countryFilter[item.country] && topicFilter[item.topic]" class="contents-item max-w-full lg:w-1/2 xl:w-1/3 p-4">
                      <nuxt-link :to="localePath({name: item.countryUrl, hash: '#' + item.topic})" class="block h-full bg-gray-200 rounded overflow-hidden block sm:flex sm:flex-col shadow hover:shadow-lg hover:scale-102 transition-all transition-100 transition-ease-in-out antialiased">
                        <img v-lazy="item.imgPath" class="sm:flex-shrink-0">
                        <div class="sm:flex sm:flex-col sm:h-full sm:justify-between">
                          <span class="px-6 pt-6 block font-bold text-lg">{{ item.title[$i18n.locale] }}</span>
                          <div class="mt-3 px-6 pb-6 flex items-center flex-wrap">
                            <span class="mt-1 mr-2 uppercase tracking-wide inline-block font-bold text-xs leading-none px-2 py-1 rounded-full bg-base-blue-500 text-white whitespace-no-wrap">{{ $t('sections.' + item.topic) }}</span>
                            <span :class="['bg-' + item.country + '-500']" class="mt-1 text-white uppercase tracking-wide inline-block font-bold text-xs leading-none px-2 py-1 rounded-full">{{ $t('pages.' + item.country) }}</span>
                          </div>
                        </div>
                      </nuxt-link>
                    </div>
                  </transition-group>
                </div>
              </div>
            </nav>
            <PageNavBtn v-show="contentsOpen" link="int" icon="next" color="base-blue"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageHomeHeader from '@/components/home/ImageHomeHeader'
import HomeInfo from '@/components/home/HomeInfo'
import contents from '~/assets/data/contents.json'

export default {
  components: {
    ImageHomeHeader,
    HomeInfo
  },
  data() {
    return {
      imgUrl: "/images/home/index.jpg",
      contentsOpen: false,
      contentsData: contents,
      topicsFiltered: false,
      countriesFiltered: false,
      topicFilter: {
        humanrights: true,
        environment: true,
        corruption: true
      },
      countryFilter: {
        mexico: true,
        peru: true,
        colombia: true,
        brazil: true,
        argentina: true
      }
    }
  },
  methods: {
    addTopicFilter(selectedTopic) {
      // Check if topics are already filtered
      if (!this.topicsFiltered) {
        this.topicsFiltered = true
        for (let i in this.topicFilter) this.topicFilter[i] = false
      }
      // Toggle selected topic
      this.topicFilter[selectedTopic] = !this.topicFilter[selectedTopic]
      // Reset if all topics unchecked
      let anyChecked = true;
      for (let i in this.topicFilter) {
        if (this.topicFilter[i] === true) {
          anyChecked = false
          break
        }
      }
      if (anyChecked) this.resetTopicFilter()

    },
    addCountryFilter(selectedCountry) {
      // Check if countries are already filtered
      if (!this.countriesFiltered) {
        this.countriesFiltered = true
        for (let i in this.countryFilter) this.countryFilter[i] = false
      }
      // Toggle selected country
      this.countryFilter[selectedCountry] = !this.countryFilter[selectedCountry]
      // Reset if all countries unchecked
      let anyChecked = true;
      for (let i in this.countryFilter) {
        if (this.countryFilter[i] === true) {
          anyChecked = false
          break
        }
      }
      if (anyChecked) this.resetCountryFilter()
    },
    resetTopicFilter() {
      this.topicsFiltered = false
      for (let i in this.topicFilter) this.topicFilter[i] = true
    },
    resetCountryFilter() {
      this.countriesFiltered = false
      for (let i in this.countryFilter) this.countryFilter[i] = true
    },
    toggleContents() {
      this.contentsOpen = !this.contentsOpen
    }
  },
  mounted(){
    if (this.$route.hash === '#chapter') {
      this.contentsOpen = true
      this.$scrollTo(this.$route.hash, 300)
    }
  }
};
</script>

<style lang="postcss">
  .contents-enter {
    transform: scale(0.5);
    opacity:0;
  }

  .contents-leave-to{
    transform: translatey(10px);
    opacity:0;
  }

  .contents-leave-active {
    position: absolute;
  }

  .contents-item {
    transition: all .35s ease-in-out;
  }
</style>
