<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :country="false">
    <template v-slot:prev-btn>
      <PageNavBtn link="arg" icon="prev" color="argentina"/>
    </template>
    <template v-slot:intro>
      <ConclusionDE v-if="$i18n.locale === 'de'"/>
      <ConclusionEN v-if="$i18n.locale === 'en'"/>
      <ConclusionES v-if="$i18n.locale === 'es'"/>
      <ConclusionPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="rec" icon="next" color="base-blue"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import ContentBaseLayout from '@/components/ContentBaseLayout'

import ConclusionDE from '@/components/contents/conclusion/de/Conclusion'
import ConclusionEN from '@/components/contents/conclusion/en/Conclusion'
import ConclusionES from '@/components/contents/conclusion/es/Conclusion'
import ConclusionPT from '@/components/contents/conclusion/pt/Conclusion'

export default {
  components: {
    ContentBaseLayout,
    ConclusionDE, ConclusionEN, ConclusionES, ConclusionPT
  },
  data() {
    return {
      page: "conclusion",
      color: "base-blue",
      headerImg: "/images/conclusion/header.jpg",
      bgPosition: "bg-center"
    }
  }
}
</script>

<style>

</style>
