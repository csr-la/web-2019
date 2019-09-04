<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        In 2017, Argentina’s total population was around  44.5 million and its gross domestic product around 518 billion US dollars. According to the World Bank’s classification, Argentina is a middle-income country in the upper echelons and ranks 47th in the Human Development Index (2017). In terms of life expectancy, educational attainment and standard of living, Argentina thus ranks among the countries with very high levels of human development. A Gini coefficient of 40.6% (2017) indicates that income distribution in Argentina is more concentrated than in Central Europe. Compared with other Latin American countries, however, Argentina is one of the countries with the most moderate income concentration.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        A foreign trade ratio of 19.7% in 2017 indicates Argentina’s below-average integration into international trade. In 2018, the country imported goods and services worth a good 85 billion US dollars and exported around 75 billion US dollars. The fact that Argentina has aroused below-average interest among foreign investors in recent years is illustrated by the fact that the stock of direct investments amounts to only 73 billion US dollars in 2018. This corresponds to 4% of foreign investment in Latin America.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      During the twelve years of government of Néstor and Cristina Kirchner, Argentina had become increasingly isolated internationally. President Mauricio Macri, who has been in office since December 2015, is gradually trying to open up the country, which is largely economically isolated. In addition to implementing the economic reform agenda, the country also faces considerable social and ecological challenges. The Corruption Perceptions Index (CPI) of Transparency International (2019) ranks Argentina 85th. This means that corruption is perceived as widespread – also compared with other Latin American countries.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Massive human rights violations occurred in Argentina during the last military dictatorship, the consequences of which still have a strong impact on society today. In addition, Human Rights Watch (2019) points out that today’s Argentina is also confronted with human rights problems, including the abuse of police violence as well as poor prison conditions and the increasing violence against women. Furthermore, the country is accused of providing its indigenous population with inadequate access to justice, land, education, health care and other basic government services, and of failing to provide this population group with sufficient opportunities to participate in the economic development of the hinterland.  According to Reporters without Borders, no journalists were killed in connection with their activities in Argentina in 2019 and the country ranks 57th out of 180 in the press freedom rankings.
    </p>
    <p>
      90% of the population collect municipal waste (2010), but no information is available on what proportion of this waste is recycled. 99.6% of the population have access to basic drinking water services (2015). Although there are only insignificant differences between urban and rural areas in this respect, a slightly smaller proportion of the population has access to basic services in the water sector in urban areas. A large proportion of the population (98.5%) have access to a safe drinking water supply. At the same time, however, only 50% of the population is connected to the sewage collection system (2010). In 2014, CO<sub>2</sub> emissions per capita were 4.7 tones, just below the average global per capita CO<sub>2</sub> emissions of 5 tones, but well above the Latin American average of 3.1 tones.
    </p>
    <p>
      In the next sections, the challenges faced by companies in Argentina in relation to human rights/working conditions, the environment and corruption are presented as examples. In addition, examples are given of how companies meet their social responsibilities in the areas described.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>