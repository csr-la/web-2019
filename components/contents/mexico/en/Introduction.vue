<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        In 2018, over 126 million people lived in Mexico, generating a gross domestic product of 1,223 billion US dollars. The country belongs to the group of countries with a higher average income per capita and ranks 74th on the human development index (2018). Measured in terms of life expectancy, educational level and standard of living, Mexico is regarded as a country with a high level of development. However, a Gini coefficient of 43.4% (2016) makes it clear that income in Mexico is quite unequally distributed.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Mexico's strong integration into international trade is reflected in its high foreign trade ratio of 80.3% in 2018. In the same year, the country's imports amounted to $503 billion and its exports to $480 billion. In addition, the country is a sought-after destination for foreign direct investment with a stock of around 486 billion US dollars in 2018.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Despite the positive economic development of recent years, Mexico continues to face significant social and environmental challenges. In Transparency International’s Corruption Perceptions Index (2018), Mexico ranked 138 out of 180 countries, making it one of the countries on the American continent where corruption is most widespread.
    </p>
    <p>
      According to Human Rights Watch, massive human rights violations regularly occur in Mexico. These include allegations of excessive use of force, extrajudicial executions and torture by security forces, whereby systematic and continued impunity of the perpetrators can be observed. Journalists who report on organized crime or abuses in state institutions are attacked, harassed and driven to self-censorship. In 2018, five journalists were killed in connection with their activities, according to Reporters Without Borders, and Mexico ranks 144th out of 180 countries in the press freedom rankings.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      According to the UN Environment Statistics Database, 90% of the  population’s municipal waste (2006) is collected and 5% thereof is being recycled (2013). 98.3% of the population have access to basic drinking water services (2015), with a certain urban-rural gap (urban 99.5%; rural 93.7%). What is striking, however, is that only a minority of the population have access to safe drinking water sources (42.6%). 71% of the population are connected to the sewage collection system (2010). In 2014, per capita CO<sub>2</sub> emissions were 3.9 tonnes, below the global average of 5 tonnes per capita, but above the regional average for Latin America of 3.1 tonnes.
    </p>
    <p>
      In the following, challenges from the areas of human rights/working conditions, the environment and corruption are presented at individual company level as examples. In addition, examples are given to illustrate how companies in Mexico are trying to implement responsible management practices in these areas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>