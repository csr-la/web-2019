<template>
  <ContentBaseLayout :page="page" :color="color" :headerImg="headerImg" :bgPosition="bgPosition" :country="false" :contentTitles="false">
    <template v-slot:prev-btn>
      <PageNavBtn link="fue" icon="prev" color="base-blue"/>
    </template>
    <template v-slot:intro>
      <div>
        <span class="block font-bold text-xl sm:text-2xl leading-tight">{{ $t('imprint.author') }}</span>
        <p class="mt-1">
          Christian Hauser<br>
          Schweizerisches Institut für Entrepreneurship (SIFE)<br>
          Hochschule für Technik und Wirtschaft HTW Chur<br>
          Comercialstrasse 22<br>
          CH-7000 Chur<br>
        </p>
        <span class="mt-5 block font-bold text-xl sm:text-2xl leading-tight">{{ $t('imprint.interviews') }}</span>
        <p class="mt-1">Christian Hauser, Carolin Deiner</p>
        <span class="mt-5 block font-bold text-xl sm:text-2xl leading-tight">{{ $t('imprint.editing') }}</span>
        <p class="mt-1">Mary Leidescher</p>
        <span class="mt-5 block font-bold text-xl sm:text-2xl leading-tight">{{ $t('imprint.concept') }}</span>
        <p class="mt-1">Myriam Frisano, Pascal Hanimann, Olivia Kasper, Ramon Kratzer, Jeremy Marugan, Damian Schurtenberger, Giada Zacheo</p>
        <span class="mt-5 block font-bold text-xl sm:text-2xl leading-tight">{{ $t('imprint.partner') }}</span>
        <div class="mt-4 clearfix">
          <img class="md:mr-4 w-64 md:float-left" src="/images/imprint/konrad-adenauer-stiftung.png">
          <p class="mt-2 md:mt-0">{{ $t('imprint.sopla') }}</p>
        </div>
      </div>
      <hr class="mt-10 border-t border-gray-300">
      <p class="mt-10">{{ $t('imprint.copyright') }}</p>
      <hr class="mt-10 border-t border-gray-300">
      <p class="mt-10">
        <a :href="$t('imprint.dataProtectionLink')" target="_blank">{{ $t('imprint.dataProtectionTitle') }}</a>
      </p>
    </template>
  </ContentBaseLayout>
</template>

<script>
import ContentBaseLayout from '@/components/ContentBaseLayout'

export default {
  components: {
    ContentBaseLayout
  },
  data() {
    return {
      page: "imprint",
      color: "base-blue",
      headerImg: "/images/imprint/header.jpg",
      bgPosition: "bg-center",
    }
  }
}
</script>

<style>

</style>
