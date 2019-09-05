<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :country="false">
    <template v-slot:prev-btn>
      <PageNavBtn link="conc" icon="prev" color="base-blue"/>
    </template>
    <template v-slot:intro>
      <RecommendationsDE v-if="$i18n.locale === 'de'"/>
      <RecommendationsEN v-if="$i18n.locale === 'en'"/>
      <RecommendationsES v-if="$i18n.locale === 'es'"/>
      <RecommendationsPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="dia" icon="next" color="base-blue"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import ContentBaseLayout from '@/components/ContentBaseLayout'

import RecommendationsDE from '@/components/contents/recommendations/de/Recommendations'
import RecommendationsEN from '@/components/contents/recommendations/en/Recommendations'
import RecommendationsES from '@/components/contents/recommendations/es/Recommendations'
import RecommendationsPT from '@/components/contents/recommendations/pt/Recommendations'

export default {
  components: {
    ContentBaseLayout,
    RecommendationsDE, RecommendationsEN, RecommendationsES, RecommendationsPT
  },
  data() {
    return {
      page: "recommendations",
      color: "base-blue",
      headerImg: "/images/recommendations/header.jpg",
      bgPosition: "bg-bottom"
    }
  }
}
</script>

<style lang="postcss">
  .subtitle {
    @apply block font-sans font-bold text-xl mt-10;
  }

  @screen sm {
    .subtitle {
      @apply text-2xl;
    }
  }

  .subitem {
    @apply font-sans font-bold text-base mt-5;
  }
</style>
