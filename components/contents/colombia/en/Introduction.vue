<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Colombia had a population of just under 50 million in 2018 and achieved an economic output of 330 billion US dollars. According to the World Bank's classification (2018), Colombia ranks among the countries with upper middle incomes and ranks 90th in the United Nations Human Development Index. Colombia is thus classified as a highly developed country in terms of life expectancy, educational level and standard of living. However, these means-based indicators largely ignore the large income disparities that prevail in Colombia, which are reflected in a Gini coefficient of 49.7% (2017).
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Colombia's foreign trade ratio was 36.8% in 2018, with the country importing goods and services worth over 69 billion US dollars and exporting over 52 billion US dollars. In the same year, foreign investment stocks amounted to 189 billion US dollars. Colombia thus accounted for 10% of direct investment in Latin America.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      In 2016, the government and the guerrilla group Fuerzas Armadas Revolucionarias de Colombia (FARC) reached an agreement to end their armed conflict. The success of the peace process will also depend on whether Colombia effectively addresses the pressing social and environmental challenges facing the country. Colombia ranks 99th out of 180 in Transparency International's Corruption Perceptions Index (2019), which means that the level of corruption in the public sector is perceived as high.
    </p>
    <p>
      In the 52 years of the civil war, guerrillas, paramilitaries and security forces repeatedly committed massive human rights violations. The 2016 peace agreement offered an opportunity to significantly curb these violations. However, Human Rights Watch (2019) notes that after initial declines related to the 2015 FARC ceasefire, violence started to rise again in 2018. Human rights defenders, trade union representatives and journalists continue to be threatened, attacked and prevented from carrying out their activities. In addition, the social and economic development opportunities of the country's indigenous population are severely limited. Malnutrition, disease and infant mortality arise as consequences. In 2019, Reporters Without Borders reported that one journalist had been killed in Colombia in connection with his activities. The country ranks 129th out of 180 countries in the Freedom of the Press ranking.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      According to official statistics, 81% of the population’s municipal waste (2012) is collected and 1% thereof is being recycled (2011). 96.5% of the population have access to basic drinking water services (2015), with a significant urban-rural gap between urban areas (99.8%) and rural areas (86.0%). It is also striking that only 71.1% of the population has access to safe drinking water sources. 77% of the population are connected to the wastewater collection system (2010).
    </p>
    <p>
      At 1.8 metric tons, CO<sub>2</sub> emissions per capita are well below both the global average (5.0 metric tons) and the Latin American average (3.1 metric tons).
    </p>
    <p>
      In the following, a challenge at individual company level in each area is presented, and it is described how companies are trying to implement responsible management practices in these areas.
    </p>
    <p>
      Companies in Colombia face different challenges in terms of human rights/working conditions, the environment and corruption, which will be discussed in more detail in the following sections. In addition, examples are given of how companies fulfil their corporate responsibility in the following three areas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>