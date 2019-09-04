<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        In 2018, Peru had a population of almost 32 million and an economic output of 222 billion US dollars. According to the World Bank (2017), an average income per capita of just over USD 6,000 corresponds to the country's classification as a middle-income country in the upper range. Peru ranks 89th in the United Nations Human Development Index. Measured in terms of life expectancy, educational level and standard of living, the country is thus attested to a high level of human development. However, the Gini coefficient of 43.3% (2017) makes it clear that Peru has considerable income disparities, even if these are not quite as pronounced as in other Latin American countries.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        In 2018, Peru's foreign trade ratio was 49,0%, with the country importing just under $53 billion in goods and services and exporting  $56 billion. In the same year, foreign direct investment in Peru amounted to USD 104 billion, accounting for 6% of the country's investment in Latin America.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      On Transparency International’s corruption perception index (2019), Peru ranks 105th of 180 countries, and is thus considered a country with a high susceptibility to corruption in the public sector. According to Human Rights Watch (2017), civilians have been repeatedly injured and killed by security forces in protests against mining projects and major infrastructure measures in recent years. It should be noted, however, that violence has declined recently. Journalists investigating corruption by public officials and businessmen, however, are covered up, intimidated and threatened with libel charges. Reporters Without Borders notes, however, that in 2018, no journalists were killed and one was arrested in connection with their activities. In the press freedom ranking, Peru ranks 85 out of 180 countries.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      75% of the population’s municipal waste (2001) is collected and 15% therof are being recycled (2001). In 2015, 89.9% of Peru's population had access to basic drinking water services, with a significant gap between urban (94.6%) and rural (72.4%) areas. It should also be noted that only half of the population was supplied from safe drinking water sources (50.2%). According to the latest figures available, 81% of the population is connected to the sewage collection system (2009).
    </p>
    <p>
      With per capita emissions of 2.0 tonnes, Peruvian CO<sub>2</sub> emissions are below both the high average level of 5 tonnes and the regional average for Latin America of 3.1 tonnes per capita.
    </p>
    <p>
      The following sections provide examples of the challenges facing companies in Peru in the areas of human rights/working conditions, the environment and corruption. In addition, examples are given of how companies can shape their responsible corporate management in concrete terms.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>