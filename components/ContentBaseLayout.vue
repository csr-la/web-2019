<template>
  <div :class="'page-' + page">
    <FloatingMenu :active="page"/>
    <ImageHeader :imgUrl="headerImg" :bgPosition="bgPosition"/>
    <div class="bg-gray-200 relative">
      <div class="lg:pt-px relative mt-4 md:mt-8 lg:mt-0 z-20">
        <div class="container mx-auto">
          <main class="main-content lg:-mt-24-25 mx-2 lg:w-10/12 lg:mx-auto z-10">
            <div :class="'bg-' + color + '-500'" class="h-24 px-6 sm:px-10 md:px-20 py-3 rounded-t flex items-center">
              <h1 class="text-white uppercase font-bold text-3xl sm:text-5xl">
                {{ $t('pages.' + page) }}
              </h1>
            </div>
            <div class="copytext px-6 sm:px-10 md:px-20 py-10 sm:py-20 rounded-b bg-white shadow-md">
              <HeaderIcons v-if="country" :color="color" :page="page" :iconData="iconData"/>
              <div :class="[{ 'mx-auto': !country }]" class="xl:w-148">
                <h2 v-if="country" class="uppercase tracking-wider text-lg" id="introduction">{{ $t('sections.introduction') }}</h2>
                <span v-if="country" class="mt-2 inline-block font-bold text-2xl sm:text-3xl leading-tight md:w-128" v-html="$t('contentTitles.' + page)"></span>
                <slot name="intro"></slot>
              </div>
              <div v-if="country" id="humanrights" class="relative bg-gray-400 mt-16 mb-12 -mx-6 sm:-mx-10 md:-mx-20" style="padding-bottom: 40%">
                <img v-lazy="humanRightsImg" :alt="$t('sections.humanrights')" class="absolute h-full w-full object-cover">
              </div>
              <div v-if="country" class="xl:w-148">
                <h2 class="uppercase tracking-wider text-lg">{{ $t('sections.humanrights') }}</h2>
                <span class="mt-2 inline-block font-bold text-2xl sm:text-3xl leading-tight md:w-128" v-html="humanRightsTitle"></span>
                <div class="xl:flex">
                  <div class="xl:w-148 xl:flex-none">
                    <slot name="humanrights"></slot>
                  </div>
                  <div>
                    <slot name="humanrights-video"></slot>
                  </div>
                </div>
              </div>
              <div v-if="country" id="environment" class="relative bg-gray-400 mt-16 mb-12 -mx-6 sm:-mx-10 md:-mx-20" style="padding-bottom: 40%">
                <img v-lazy="environmentImg" :alt="$t('sections.environment')" class="absolute h-full w-full object-cover">
              </div>
              <div v-if="country" class="xl:w-148">
                <h2 class="uppercase tracking-wider text-lg">{{ $t('sections.environment') }}</h2>
                <span class="mt-2 inline-block font-bold text-2xl sm:text-3xl leading-tight md:w-128" v-html="environmentTitle"></span>
                <div class="xl:flex">
                  <div class="xl:w-148 xl:flex-none">
                    <slot name="environment"></slot>
                  </div>
                  <div>
                    <slot name="environment-video"></slot>
                  </div>
                </div>
              </div>
              <div v-if="country" id="corruption" class="relative bg-gray-400 mt-16 mb-12 -mx-6 sm:-mx-10 md:-mx-20" style="padding-bottom: 40%">
                <img v-lazy="corruptionImg" :alt="$t('sections.corruption')" class="absolute h-full w-full object-cover">
              </div>
              <div v-if="country" class="xl:w-148">
                <h2 class="uppercase tracking-wider text-lg">{{ $t('sections.corruption') }}</h2>
                <span class="mt-2 inline-block font-bold text-2xl sm:text-3xl leading-tight md:w-128" v-html="corruptionTitle"></span>
                <div class="xl:flex">
                  <div class="xl:w-148 xl:flex-none">
                    <slot name="corruption"></slot>
                  </div>
                  <div>
                    <slot name="corruption-video"></slot>
                  </div>
                </div>
              </div>
              <div v-if="country" class="mt-16">
                <h2 class="xl:mt-0 uppercase tracking-wider text-lg" id="conclusion">{{ $t('sections.conclusion') }}</h2>
                <slot name="conclusion-video"></slot>
              </div>
              <h2 v-if="country" class="mt-16 uppercase tracking-wider text-lg">{{ $t('sections.map') }}</h2>
              <span v-if="country" class="mt-2 inline-block font-bold text-2xl sm:text-3xl leading-tight md:w-128">{{ $t('sections.interviewsConducted') }}</span>
              <div v-if="country" class="mt-8 relative -mx-6 sm:-mx-10 md:-mx-20">
                <slot name="map-iframe"></slot>
              </div>
            </div>
            <div class="flex justify-between flex-col sm:flex-row items-center">
              <slot name="prev-btn"></slot>
              <slot name="next-btn"></slot>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageHeader from '@/components/ImageHeader'
import HeaderIcons from '@/components/HeaderIcons'
import contents from '~/assets/data/contents.json'

export default {
  components: {
    ImageHeader,
    HeaderIcons
  },
  props: {
    page: {},
    headerImg: {},
    color: {},
    bgPosition: {},
    country: {
      default: true
    },
    iconData: {}
  },
  data () {
    return {
      contentsData: contents
    }
  },
  computed: {
    humanRightsImg: function() {
      return "/images/" + this.page + "/humanrights.jpg"
    },
    environmentImg: function() {
      return "/images/" + this.page + "/environment.jpg"
    },
    corruptionImg: function() {
      return "/images/" + this.page + "/corruption.jpg"
    },
    introductionTitle: function () {

    },
    humanRightsTitle: function () {
      return this.contentsData.contents.filter(obj => {
        return obj.country === this.page && obj.topic === 'humanrights'
      })[0].title[this.$i18n.locale]
    },
    environmentTitle: function () {
      return this.contentsData.contents.filter(obj => {
        return obj.country === this.page && obj.topic === 'environment'
      })[0].title[this.$i18n.locale]
    },
    corruptionTitle: function () {
      return this.contentsData.contents.filter(obj => {
        return obj.country === this.page && obj.topic === 'corruption'
      })[0].title[this.$i18n.locale]
    }
  },
  mounted() {
    if(this.$route.hash) {
      this.$scrollTo(this.$route.hash, 300)
    }
  }
}
</script>

<style lang="postcss">
  .page-introduction {
    counter-reset: paragraph 0 sidestory 0;
  }

  .page-mexico {
    counter-reset: paragraph 5 sidestory 0;
  }

  .page-peru {
    counter-reset: paragraph 17 sidestory 2;
  }

  .page-colombia {
    counter-reset: paragraph 32 sidestory 4;
  }

  .page-brazil {
    counter-reset: paragraph 48 sidestory 6;
  }

  .page-argentina {
    counter-reset: paragraph 63 sidestory 8;
  }

  .page-conclusion {
    counter-reset: paragraph 77 sidestory 8;
  }

  .page-recommendations {
    counter-reset: paragraph 84 sidestory 8;
  }

  .page-journal {
    counter-reset: paragraph 93 sidestory 8;
  }

  .main-content p::before {
    content: counter(paragraph);
    counter-increment: paragraph;
    transform: translateX(-100%);
    @apply -ml-2 absolute font-sans text-xxs text-right text-gray-500 leading-looser;
  }

  .page-sources .main-content p::before {
    content: none;
  }

  .page-imprint .main-content p::before {
    content: none;
  }

  .source-copy::before {
    content: counter(sidestory,upper-roman);
    counter-increment: sidestory;
    transform: translateX(-100%);
    @apply -ml-1 absolute text-xs text-right text-gray-500;
  }
</style>
