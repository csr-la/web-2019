<template>
  <ContentBaseLayout :page="page" :headerImg="headerImg" :bgPosition="bgPosition" :color="color" :iconData="iconData">
    <template v-slot:prev-btn>
      <PageNavBtn link="mex" icon="prev" color="mexico"/>
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
      <VideoCard type="interview" name="Marco Váscones" imgSrc="/images/peru/videos/marco_vascones.jpg" switchId="b2e0a807" :color="color"/>
    </template>
    <template v-slot:environment>
      <EnvironmentDE v-if="$i18n.locale === 'de'"/>
      <EnvironmentEN v-if="$i18n.locale === 'en'"/>
      <EnvironmentES v-if="$i18n.locale === 'es'"/>
      <EnvironmentPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:environment-video>
      <VideoCard type="interview" name="Felipe Custer" imgSrc="/images/peru/videos/felipe_custer.jpg" switchId="593fd3b5" :color="color"/>
    </template>
    <template v-slot:corruption>
      <CorruptionDE v-if="$i18n.locale === 'de'"/>
      <CorruptionEN v-if="$i18n.locale === 'en'"/>
      <CorruptionES v-if="$i18n.locale === 'es'"/>
      <CorruptionPT v-if="$i18n.locale === 'pt'"/>
    </template>
    <template v-slot:corruption-video>
      <VideoCard type="interview" name="Roxana Cornejo" imgSrc="/images/peru/videos/roxana_cornejo.jpg" switchId="851f4623" :color="color"/>
    </template>
    <template v-slot:conclusion-video>
      <VideoCard type="conclusion" name="Dr. Christian Hauser" imgSrc="/images/peru/videos/conclusion.jpg" switchId="2985c960" :color="color"/>
    </template>
    <template v-slot:map-iframe>
      <iframe class="w-full h-104" src="https://www.google.com/maps/d/embed?mid=1mCjZ8yJvqELbT9mE6H7Ze7IgnqaJP-5Z" title="Interviews"></iframe>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="col" icon="next" color="colombia"/>
    </template>
  </ContentBaseLayout>
</template>

<script>
import gdp from '~/assets/data/gdp/peru.json'
import exports from '~/assets/data/exports/peru.json'
import ContentBaseLayout from '@/components/ContentBaseLayout'

import IntroductionDE from '@/components/contents/peru/de/Introduction'
import HumanRightsDE from '@/components/contents/peru/de/HumanRights'
import EnvironmentDE from '@/components/contents/peru/de/Environment'
import CorruptionDE from '@/components/contents/peru/de/Corruption'

import IntroductionEN from '@/components/contents/peru/en/Introduction'
import HumanRightsEN from '@/components/contents/peru/en/HumanRights'
import EnvironmentEN from '@/components/contents/peru/en/Environment'
import CorruptionEN from '@/components/contents/peru/en/Corruption'

import IntroductionES from '@/components/contents/peru/es/Introduction'
import HumanRightsES from '@/components/contents/peru/es/HumanRights'
import EnvironmentES from '@/components/contents/peru/es/Environment'
import CorruptionES from '@/components/contents/peru/es/Corruption'

import IntroductionPT from '@/components/contents/peru/pt/Introduction'
import HumanRightsPT from '@/components/contents/peru/pt/HumanRights'
import EnvironmentPT from '@/components/contents/peru/pt/Environment'
import CorruptionPT from '@/components/contents/peru/pt/Corruption'

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
      page: "peru",
      color: "peru",
      gdpData: gdp,
      exportsData: exports,
      headerImg: "/images/peru/header.jpg",
      bgPosition: "bg-top",
      iconData: {
        elevation: "161",
        gdp: "6'046",
        inhabitants: "31'773'839",
        area: "1'285'216"
      },
      sliderImages: [
        "/images/peru/gallery/peru_1.jpeg",
        "/images/peru/gallery/peru_2.jpeg",
        "/images/peru/gallery/peru_3.jpeg",
        "/images/peru/gallery/peru_4.jpeg",
        "/images/peru/gallery/peru_5.jpeg",
        "/images/peru/gallery/peru_6.jpeg"
      ],
    }
  }
}
</script>

<style>
  .page-peru .secondary {
    fill: #F6C3C8;
  }

  .page-peru .tertiary {
    fill: #D91023;
  }
</style>
