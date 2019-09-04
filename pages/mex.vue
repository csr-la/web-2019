<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :iconData="iconData">
    <template v-slot:prev-btn>
      <PageNavBtn link="int" icon="prev" color="base-blue"/>
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
      <VideoCard type="interview" name="Karen Hudlet" imgSrc="/images/mexico/videos/karen_hudlet.jpg" switchId="606ae622" :color="color"/>
    </template>
    <template v-slot:environment>
      <EnvironmentDE v-if="$i18n.locale === 'de'"/>
      <EnvironmentEN v-if="$i18n.locale === 'en'"/>
      <EnvironmentES v-if="$i18n.locale === 'es'"/>
      <EnvironmentPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:environment-video>
      <VideoCard type="interview" name="Arturo Alonso" imgSrc="/images/mexico/videos/arturo_alonso.jpg" switchId="7084b69b" :color="color"/>
    </template>
    <template v-slot:corruption>
      <CorruptionDE v-if="$i18n.locale === 'de'"/>
      <CorruptionEN v-if="$i18n.locale === 'en'"/>
      <CorruptionES v-if="$i18n.locale === 'es'"/>
      <CorruptionPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:corruption-video>
      <VideoCard type="interview" name="Augusto Martínez" imgSrc="/images/mexico/videos/augusto_martinez.jpg" switchId="26425459" :color="color"/>
    </template>
    <template v-slot:conclusion-video>
      <VideoCard type="conclusion" name="Dr. Christian Hauser" imgSrc="/images/mexico/videos/conclusion.jpg" switchId="49eaca50" :color="color"/>
    </template>
    <template v-slot:map-iframe>
      <iframe class="w-full h-104" src="https://www.google.com/maps/d/embed?mid=1aFTS5SJRsprcW8pM8LJTpaCUHfO9wUNO" title="Interviews"></iframe>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="per" icon="next" color="peru"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import gdp from '~/assets/data/gdp/mexico.json'
import exports from '~/assets/data/exports/mexico.json'
import ContentBaseLayout from '@/components/ContentBaseLayout'

import IntroductionDE from '@/components/contents/mexico/de/Introduction'
import HumanRightsDE from '@/components/contents/mexico/de/HumanRights'
import EnvironmentDE from '@/components/contents/mexico/de/Environment'
import CorruptionDE from '@/components/contents/mexico/de/Corruption'

import IntroductionEN from '@/components/contents/mexico/en/Introduction'
import HumanRightsEN from '@/components/contents/mexico/en/HumanRights'
import EnvironmentEN from '@/components/contents/mexico/en/Environment'
import CorruptionEN from '@/components/contents/mexico/en/Corruption'

import IntroductionES from '@/components/contents/mexico/es/Introduction'
import HumanRightsES from '@/components/contents/mexico/es/HumanRights'
import EnvironmentES from '@/components/contents/mexico/es/Environment'
import CorruptionES from '@/components/contents/mexico/es/Corruption'

import IntroductionPT from '@/components/contents/mexico/pt/Introduction'
import HumanRightsPT from '@/components/contents/mexico/pt/HumanRights'
import EnvironmentPT from '@/components/contents/mexico/pt/Environment'
import CorruptionPT from '@/components/contents/mexico/pt/Corruption'

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
      page: "mexico",
      color: "mexico",
      gdpData: gdp,
      exportsData: exports,
      headerImg: "/images/mexico/header.jpg",
      bgPosition: "bg-center",
      iconData: {
        elevation: "2'250",
        gdp: "8'201",
        inhabitants: "127'540'423",
        area: "1'964'375"
      },
      sliderImages: [
        "/images/mexico/gallery/mexico_1.jpeg",
        "/images/mexico/gallery/mexico_2.jpeg",
        "/images/mexico/gallery/mexico_3.jpeg",
        "/images/mexico/gallery/mexico_4.jpeg",
        "/images/mexico/gallery/mexico_5.jpeg",
        "/images/mexico/gallery/mexico_6.jpeg"
      ],
    }
  }
}
</script>

<style>
  .page-mexico .secondary {
    fill: #BFD9D1;
  }

  .page-mexico .tertiary {
    fill: #006847;
  }
</style>
