<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :iconData="iconData">
    <template v-slot:prev-btn>
      <PageNavBtn link="per" icon="prev" color="peru"/>
    </template>
    <template v-slot:intro>
      <IntroductionDE v-if="$i18n.locale === 'de'" :color="color" :sliderImages="sliderImages" :gdpData="gdpData" :exportsData="exportsData"/>
      <IntroductionEN v-if="$i18n.locale === 'en'" :color="color" :sliderImages="sliderImages" :gdpData="gdpData" :exportsData="exportsData"/>
      <IntroductionES v-if="$i18n.locale === 'es'" :color="color" :sliderImages="sliderImages" :gdpData="gdpData" :exportsData="exportsData"/>
      <IntroductionPT v-if="$i18n.locale === 'pt'" :color="color" :sliderImages="sliderImages" :gdpData="gdpData" :exportsData="exportsData"/>
    </template>
    <template v-slot:humanrights>
      <HumanRightsDE v-if="$i18n.locale === 'de'"/>
      <HumanRightsEN v-if="$i18n.locale === 'en'"/>
      <HumanRightsES v-if="$i18n.locale === 'es'"/>
      <HumanRightsPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:humanrights-video>
      <VideoCard type="interview" name="Ana María Guerrero" imgSrc="/images/colombia/videos/ana_maria_guerrero.jpg" switchId="8af9d2ac" :color="color"/>
      <VideoCard type="interview" name="Claudia Hernandez" imgSrc="/images/colombia/videos/claudia_hernandez.jpg" switchId="e704c3a7" :color="color"/>
    </template>
    <template v-slot:environment>
      <EnvironmentDE v-if="$i18n.locale === 'de'"/>
      <EnvironmentEN v-if="$i18n.locale === 'en'"/>
      <EnvironmentES v-if="$i18n.locale === 'es'"/>
      <EnvironmentPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:environment-video>
      <VideoCard type="interview" name="Giovanni Pabon" imgSrc="/images/colombia/videos/giovanni_pabon.jpg" switchId="fbc5e561" :color="color"/>
    </template>
    <template v-slot:corruption>
      <CorruptionDE v-if="$i18n.locale === 'de'"/>
      <CorruptionEN v-if="$i18n.locale === 'en'"/>
      <CorruptionES v-if="$i18n.locale === 'es'"/>
      <CorruptionPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:conclusion-video>
      <VideoCard type="conclusion" name="Dr. Christian Hauser" imgSrc="/images/colombia/videos/conclusion.jpg" switchId="529a2960" :color="color"/>
    </template>
    <template v-slot:map-iframe>
      <iframe class="w-full h-104" src="https://www.google.com/maps/d/embed?mid=1B-OcaIxtzYuNNEP3lKJhoDkQOT02MLfI" title="Interviews"></iframe>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="bra" icon="next" color="brazil"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import gdp from '~/assets/data/gdp/colombia.json'
import exports from '~/assets/data/exports/colombia.json'
import ContentBaseLayout from '@/components/ContentBaseLayout'

import IntroductionDE from '@/components/contents/colombia/de/Introduction'
import HumanRightsDE from '@/components/contents/colombia/de/HumanRights'
import EnvironmentDE from '@/components/contents/colombia/de/Environment'
import CorruptionDE from '@/components/contents/colombia/de/Corruption'

import IntroductionEN from '@/components/contents/colombia/en/Introduction'
import HumanRightsEN from '@/components/contents/colombia/en/HumanRights'
import EnvironmentEN from '@/components/contents/colombia/en/Environment'
import CorruptionEN from '@/components/contents/colombia/en/Corruption'

import IntroductionES from '@/components/contents/colombia/es/Introduction'
import HumanRightsES from '@/components/contents/colombia/es/HumanRights'
import EnvironmentES from '@/components/contents/colombia/es/Environment'
import CorruptionES from '@/components/contents/colombia/es/Corruption'

import IntroductionPT from '@/components/contents/colombia/pt/Introduction'
import HumanRightsPT from '@/components/contents/colombia/pt/HumanRights'
import EnvironmentPT from '@/components/contents/colombia/pt/Environment'
import CorruptionPT from '@/components/contents/colombia/pt/Corruption'

export default {
  components: {
    ContentBaseLayout,
    IntroductionDE, HumanRightsDE, EnvironmentDE, CorruptionDE,
    IntroductionEN, HumanRightsEN, EnvironmentEN, CorruptionEN,
    IntroductionES, HumanRightsES, EnvironmentES, CorruptionES,
    IntroductionPT, HumanRightsPT, EnvironmentPT, CorruptionPT
  },
  data() {
    return {
      page: "colombia",
      color: "colombia",
      gdpData: gdp,
      exportsData: exports,
      headerImg: "/images/colombia/header.jpg",
      bgPosition: "bg-center",
      iconData: {
        elevation: "2&thinsp;640",
        gdp: "5&thinsp;806",
        inhabitants: "48&thinsp;653&thinsp;419",
        area: "1&thinsp;138&thinsp;910"
      },
      sliderImages: [
        "/images/colombia/gallery/colombia_1.jpeg",
        "/images/colombia/gallery/colombia_2.jpeg",
        "/images/colombia/gallery/colombia_3.jpeg",
        "/images/colombia/gallery/colombia_4.jpeg",
        "/images/colombia/gallery/colombia_5.jpeg"
      ],
    }
  }
}
</script>

<style>
  .page-colombia .secondary {
    fill: #FEF4C5;
  }

  .page-colombia .tertiary {
    fill: #FCD116;
  }
</style>
