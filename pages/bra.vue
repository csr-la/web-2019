<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :iconData="iconData">
    <template v-slot:prev-btn>
      <PageNavBtn link="col" icon="prev" color="colombia"/>
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
    <template v-slot:environment>
      <EnvironmentDE v-if="$i18n.locale === 'de'"/>
      <EnvironmentEN v-if="$i18n.locale === 'en'"/>
      <EnvironmentES v-if="$i18n.locale === 'es'"/>
      <EnvironmentPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:environment-video>
      <VideoCard type="interview" name="Rafael Sittoni Goelzer" imgSrc="/images/brazil/videos/rafael_sittoni_goelzer.jpg" switchId="40afe2b6" :color="color"/>
    </template>
    <template v-slot:corruption>
      <CorruptionDE v-if="$i18n.locale === 'de'"/>
      <CorruptionEN v-if="$i18n.locale === 'en'"/>
      <CorruptionES v-if="$i18n.locale === 'es'"/>
      <CorruptionPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:corruption-video>
      <VideoCard type="interview" name="Roberta Codignoto" imgSrc="/images/brazil/videos/roberta_codignoto.jpg" switchId="33fdc6d5" :color="color"/>
      <VideoCard type="interview" name="Marina Ferro" imgSrc="/images/brazil/videos/marina_ferro.jpg" switchId="cd74e3c7" :color="color"/>
    </template>
    <template v-slot:conclusion-video>
      <VideoCard type="conclusion" name="Dr. Christian Hauser" imgSrc="/images/brazil/videos/conclusion.jpg" switchId="7c64427f" :color="color"/>
    </template>
    <template v-slot:map-iframe>
      <iframe class="w-full h-104" src="https://www.google.com/maps/d/embed?mid=1LRy6dIIM9vbMIrVtpWvfn6p1j5YvbnSz" title="Interviews"></iframe>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="arg" icon="next" color="argentina"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import gdp from '~/assets/data/gdp/brazil.json'
import exports from '~/assets/data/exports/brazil.json'
import ContentBaseLayout from '@/components/ContentBaseLayout'

import IntroductionDE from '@/components/contents/brazil/de/Introduction'
import HumanRightsDE from '@/components/contents/brazil/de/HumanRights'
import EnvironmentDE from '@/components/contents/brazil/de/Environment'
import CorruptionDE from '@/components/contents/brazil/de/Corruption'

import IntroductionEN from '@/components/contents/brazil/en/Introduction'
import HumanRightsEN from '@/components/contents/brazil/en/HumanRights'
import EnvironmentEN from '@/components/contents/brazil/en/Environment'
import CorruptionEN from '@/components/contents/brazil/en/Corruption'

import IntroductionES from '@/components/contents/brazil/es/Introduction'
import HumanRightsES from '@/components/contents/brazil/es/HumanRights'
import EnvironmentES from '@/components/contents/brazil/es/Environment'
import CorruptionES from '@/components/contents/brazil/es/Corruption'

import IntroductionPT from '@/components/contents/brazil/pt/Introduction'
import HumanRightsPT from '@/components/contents/brazil/pt/HumanRights'
import EnvironmentPT from '@/components/contents/brazil/pt/Environment'
import CorruptionPT from '@/components/contents/brazil/pt/Corruption'

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
      page: "brazil",
      color: "brazil",
      gdpData: gdp,
      exportsData: exports,
      headerImg: "/images/brazil/header.jpg",
      bgPosition: "bg-top",
      iconData: {
        elevation: "1'172",
        gdp: "8'650",
        inhabitants: "207'652'865",
        area: "8'515'770"
      },
      sliderImages: [
        "/images/brazil/gallery/brazil_1.jpeg",
        "/images/brazil/gallery/brazil_2.jpeg",
        "/images/brazil/gallery/brazil_3.jpeg",
        "/images/brazil/gallery/brazil_4.jpeg",
        "/images/brazil/gallery/brazil_5.jpeg",
        "/images/brazil/gallery/brazil_6.jpeg"
      ],
    }
  }
}
</script>

<style>
  .page-brazil .secondary {
    fill: #BFE6CE;
  }

  .page-brazil .tertiary {
    fill: #009C3B;
  }
</style>
