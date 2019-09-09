<template>
  <ContentBaseLayout :page="page" :color="color" :headerImg="headerImg" :bgPosition="bgPosition" :country="false" :contentTitles="false">
    <template v-slot:prev-btn>
      <PageNavBtn link="dia" icon="prev" color="base-blue"/>
    </template>
    <template v-slot:intro>
      <p>Germany Trade & Invest (2019): Wirtschaftsdaten kompakt, Juni 2019. <a href="http://www.gtai.de/GTAI/Navigation/DE/Trade/Maerkte/Wirtschaftsklima/wirtschaftsdaten-kompakt.html" target="_blank">http://www.gtai.de/GTAI/Navigation/DE/Trade/Maerkte/Wirtschaftsklima/wirtschaftsdaten-kompakt.html</a></p>
      <p>Human Rights Watch (2019): World Report 2019. <a href="https://www.hrw.org/world-report/2019" target="_blank">https://www.hrw.org/world-report/2019</a></p>
      <p>Kamminga, Menno T. ‎(2015): Company Responses to Human Rights Reports: An Empirical Analysis. Business and Human Rights Journal, Vol. 1, Issue 1, pp. 95-110.</p>
      <p>Reporter ohne Grenzen (2019a): Barometer der Pressefreiheit 2019: Journalisten getötet. <a href="https://www.reporter-ohne-grenzen.de/barometer/2019/journalisten-getoetet/" target="_blank">https://www.reporter-ohne-grenzen.de/barometer/2019/journalisten-getoetet/</a></p>
      <p>Reporter ohne Grenzen (2019b): Rangliste der Pressefreiheit 2019. <a href="https://www.reporter-ohne-grenzen.de/fileadmin/Redaktion/Presse/Downloads/Ranglisten/Rangliste_2019/Rangliste_der_Pressefreiheit_2019.pdf" target="_blank">https://www.reporter-ohne-grenzen.de/fileadmin/Redaktion/Presse/Downloads/Ranglisten/Rangliste_2019/Rangliste_der_Pressefreiheit_2019.pdf</a></p>
      <p>Transparency International (2019): Corruption Perceptions Index 2018. <a href="https://www.transparency.org/whatwedo/publication/corruption_perceptions_index_2018" target="_blank">https://www.transparency.org/whatwedo/publication/corruption_perceptions_index_2018</a></p>
      <p>United Nations Conference on Trade and Development (2019): FDI Statistics. <a href="https://www.unctad.org/fdistatistics" target="_blank">https://www.unctad.org/fdistatistics</a></p>
      <p>United Nations Development Programme (2019): Global Human Development Indicators: <a href="http://hdr.undp.org/en/countries/profiles/" target="_blank">http://hdr.undp.org/en/countries/profiles/</a></p>
      <p>United Nations Statistics Division (2019a): National Accounts Main Aggregates Database. <a href="https://unstats.un.org/unsd/snaama/dnlList.asp" target="_blank">https://unstats.un.org/unsd/snaama/dnlList.asp</a></p>
      <p>United Nations Statistics Division (2019b): UNSD Environmental Indicators. <a href="https://unstats.un.org/unsd/environment/Time%20series.htm#GHGs" target="_blank">https://unstats.un.org/unsd/environment/Time%20series.htm#GHGs</a></p>
      <p>World Bank (2019a): World Bank list of economies, June 2018. <a href="http://databank.worldbank.org/data/download/site-content/CLASS.xls" target="_blank">http://databank.worldbank.org/data/download/site-content/CLASS.xls</a></p>
      <p>World Bank (2019b): World Development Indicators. <a href="https://data.worldbank.org/data-catalog/world-development-indicators" target="_blank">https://data.worldbank.org/data-catalog/world-development-indicators</a></p>
      <p>World Bank (2019): Gini index (World Bank estimate) <a href="https://data.worldbank.org/indicator/SI.POV.GINI?end=2017&locations=AR&name_desc=false&start=1980&view=chart" target="_blank">https://data.worldbank.org/indicator/SI.POV.GINI?end=2017&locations=AR&name_desc=false&start=1980&view=chart</a></p>
    </template>
    <template v-slot:next-btn>
      <PageNavBtn link="cre" icon="next" color="base-blue"/>
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
      page: "sources",
      color: "base-blue",
      headerImg: "/images/sources/header.jpg",
      bgPosition: "bg-center",
    }
  }
}
</script>

<style scoped>
  .main-content p {
    text-indent: -30px;
    margin-left: 30px;
  }

  .main-content a {
    word-break: break-all;
  }
</style>
