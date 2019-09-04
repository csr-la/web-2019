<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :country="false">
    <template v-slot:prev-btn>
      <PageNavBtn link="index" icon="prev" color="base-blue"/>
    </template>
    <template v-slot:intro>
      <IntroductionDE v-if="$i18n.locale === 'de'"/>
      <IntroductionEN v-if="$i18n.locale === 'en'"/>
      <IntroductionES v-if="$i18n.locale === 'es'"/>
      <IntroductionPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="mex" icon="next" color="mexico"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import ContentBaseLayout from '@/components/ContentBaseLayout'

import IntroductionDE from '@/components/contents/introduction/de/Introduction'
import IntroductionEN from '@/components/contents/introduction/en/Introduction'
import IntroductionES from '@/components/contents/introduction/es/Introduction'
import IntroductionPT from '@/components/contents/introduction/pt/Introduction'

export default {
  components: {
    ContentBaseLayout,
    IntroductionDE, IntroductionEN, IntroductionES, IntroductionPT
  },
  data() {
    return {
      page: "introduction",
      color: "base-blue",
      headerImg: "/images/introduction/header.jpg",
      bgPosition: "bg-center"
    }
  }
}
</script>

<style>

</style>
