<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :iconData="iconData">
    <template v-slot:prev-btn>
      <PageNavBtn link="bra" icon="prev" color="brazil"/>
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
      <VideoCard type="interview" name="Conrado Laigle" imgSrc="/images/argentina/videos/conrado_laigle.jpg" switchId="8ddf7e3f" :color="color"/>
    </template>
    <template v-slot:environment>
      <EnvironmentDE v-if="$i18n.locale === 'de'"/>
      <EnvironmentEN v-if="$i18n.locale === 'en'"/>
      <EnvironmentES v-if="$i18n.locale === 'es'"/>
      <EnvironmentPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:environment-video>
      <VideoCard type="interview" name="Roberto Murchison" imgSrc="/images/argentina/videos/roberto_murchison.jpg" switchId="71d61804" :color="color"/>
    </template>
    <template v-slot:corruption>
      <CorruptionDE v-if="$i18n.locale === 'de'"/>
      <CorruptionEN v-if="$i18n.locale === 'en'"/>
      <CorruptionES v-if="$i18n.locale === 'es'"/>
      <CorruptionPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:corruption-video>
      <VideoCard type="interview" name="Ignacio A. Salguero" imgSrc="/images/argentina/videos/ignacio_a_salguero.jpg" switchId="496aab0f" :color="color"/>
    </template>
    <template v-slot:conclusion-video>
      <VideoCard type="conclusion" name="Dr. Christian Hauser" imgSrc="/images/argentina/videos/conclusion.jpg" switchId="8982d711" :color="color"/>
    </template>
    <template v-slot:map-iframe>
      <iframe class="w-full h-104" src="https://www.google.com/maps/d/embed?mid=1SsRFH4qRpZ4A0mC48lxibB5q3eYe-FWe" title="Interviews"></iframe>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="conc" icon="next" color="base-blue"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import gdp from '~/assets/data/gdp/argentina.json'
import exports from '~/assets/data/exports/argentina.json'
import ContentBaseLayout from '@/components/ContentBaseLayout'

import IntroductionDE from '@/components/contents/argentina/de/Introduction'
import HumanRightsDE from '@/components/contents/argentina/de/HumanRights'
import EnvironmentDE from '@/components/contents/argentina/de/Environment'
import CorruptionDE from '@/components/contents/argentina/de/Corruption'

import IntroductionEN from '@/components/contents/argentina/en/Introduction'
import HumanRightsEN from '@/components/contents/argentina/en/HumanRights'
import EnvironmentEN from '@/components/contents/argentina/en/Environment'
import CorruptionEN from '@/components/contents/argentina/en/Corruption'

import IntroductionES from '@/components/contents/argentina/es/Introduction'
import HumanRightsES from '@/components/contents/argentina/es/HumanRights'
import EnvironmentES from '@/components/contents/argentina/es/Environment'
import CorruptionES from '@/components/contents/argentina/es/Corruption'

import IntroductionPT from '@/components/contents/argentina/pt/Introduction'
import HumanRightsPT from '@/components/contents/argentina/pt/HumanRights'
import EnvironmentPT from '@/components/contents/argentina/pt/Environment'
import CorruptionPT from '@/components/contents/argentina/pt/Corruption'

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
      page: "argentina",
      color: "argentina",
      gdpData: gdp,
      exportsData: exports,
      headerImg: "/images/argentina/header.jpg",
      bgPosition: "bg-center",
      iconData: {
        elevation: "25",
        gdp: "12'449",
        inhabitants: "43'847'430",
        area: "2'780'400"
      },
      sliderImages: [
        "/images/argentina/gallery/argentina_1.jpeg",
        "/images/argentina/gallery/argentina_2.jpeg",
        "/images/argentina/gallery/argentina_3.jpeg",
        "/images/argentina/gallery/argentina_4.jpeg",
        "/images/argentina/gallery/argentina_5.jpeg",
        "/images/argentina/gallery/argentina_6.jpeg",
        "/images/argentina/gallery/argentina_7.jpeg"
      ],
    }
  }
}
</script>

<style>
  .page-argentina .secondary {
    fill: #DCEAF7;
  }

  .page-argentina .tertiary {
    fill: #74ACDF;
  }
</style>
