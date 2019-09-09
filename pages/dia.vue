<template>
  <div :class="'page-' + page">
    <FloatingMenu :active="page"/>
    <ImageHeader :imgUrl="headerImg" :bgPosition="bgPosition"/>
    <div class="bg-gray-200 relative">
      <div class="relative mt-4 md:mt-8 lg:mt-0 lg:pt-px z-20">
        <div class="container mx-auto">
          <main class="main-content mx-2 lg:w-10/12 lg:mx-auto lg:-mt-24-25 z-10">
            <div :class="'bg-' + color + '-500'" class="h-24 px-6 sm:px-10 md:px-20 py-3 rounded-t flex items-center">
              <h1 class="text-white uppercase font-bold text-3xl sm:text-5xl">{{ $t('pages.' + page) }}</h1>
            </div>
            <HeaderIcons :color="color" :country="false"/>
            <JournalDE v-if="$i18n.locale === 'de'"/>
            <JournalEN v-if="$i18n.locale === 'en'"/>
            <JournalES v-if="$i18n.locale === 'es'"/>
            <JournalPT v-if="$i18n.locale === 'pt'"/>
            <div class="flex justify-between flex-col sm:flex-row items-center sm:mt-12">
              <PageNavBtn link="rec" icon="prev" color="base-blue"/>
              <PageNavBtn link="fue" icon="next" color="base-blue"/>
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

import JournalDE from '@/components/contents/journal/de/Journal'
import JournalEN from '@/components/contents/journal/en/Journal'
import JournalES from '@/components/contents/journal/es/Journal'
import JournalPT from '@/components/contents/journal/pt/Journal'

export default {
  components: {
    ImageHeader,
    HeaderIcons,
    JournalDE, JournalEN, JournalES, JournalPT
  },
  data () {
    return {
      page: "journal",
      color: "base-blue",
      headerImg: "/images/journal/header.jpg",
      bgPosition: "bg-top",
    }
  },
  head () {
    return { 
      title: this.$t('siteTitleTemplate') + this.$t('pages.' + this.page),
    }
  }
}
</script>

<style lang="postcss">
  .page-journal p {
    @apply mt-0;
  }
  .page-journal .video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
  }
  .page-journal .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
