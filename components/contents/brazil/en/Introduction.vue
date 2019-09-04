<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        With around 209.5 million inhabitants and a gross domestic product of 1,869 billion US dollars, Brazil is by far the largest economy in Latin America and the only Portuguese-speaking country in the region. In terms of average income per capita, the World Bank (2018) classifies Brazil as a country in the upper middle income bracket and in the United Nations Prosperity Indicator HDI (2018), the country ranks 79th worldwide. Brazil thus belongs to the group of countries with a high level of development in terms of life expectancy, educational level and standard of living. However, a Gini coefficient of 53.3% (2017) makes it clear that the income gap between rich and poor in Brazil is larger than in only a few other countries worldwide.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Brazil is a country with a large domestic economy in which a large part of the division of labor takes place domestically. This is evident in the fact that the foreign trade ratio in 2018 is only 29.1%. In the same year, imports of goods and services amounted to almost 267 billion US dollars and exports to 277billion US dollars. Foreign direct investment in Brazil amounted to 684 billion US dollars. Over one third of all foreign investments in Latin America (36%) were thus made in Brazil.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Since 2014, Brazil has been shaken by a profound political and economic crisis triggered by the corruption scandal surrounding the parastatal oil company Petrobrás. According to data from Transparency International (2019), corruption is perceived as widespread in Brazil. In the organization's corruption index, Brazil ranks 105th out of 180 worldwide.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      According to Human Rights Watch (2017), chronic human rights problems characterize the Brazilian security apparatus, including extrajudicial killings by policemen, overcrowding of prisons, and torture and ill-treatment of prisoners. There are also repeated cases of human rights violations documented by the business community. These include cases of forced labor and abusive working conditions under conditions similar to slavery. In addition, activists who stand up for the rights of the landless and indigenous population face massive attacks, threats and intimidation. In 2018, according to Reporters Without Borders, no journalist was killed and one journalist is imprisoned in Brazil in connection with his activities. The country ranks 105th in the press freedom rankings.
    </p>
    <p>
      In Brazil, 91% of the population’s municipal waste (2012) is collected and 1% thereof is being recycled (2000). 97.5% of the population have access to basic drinking water services (2015), with a marked gap between urban areas (99.3%) and rural areas (86.6%). No statistics are available on the proportion of the population with access to safe drinking water sources. 45% of the population is connected to a sewage collection system (1993).
    </p>
    <p>
      Brazil's CO<sub>2</sub> emissions per capita in 2014 were 2.6 tonnes, below both the global average (5.0 tonnes) and the Latin American average of 3.1 tonnes.
    </p>
    <p>
      Using selected examples, the next sections describe the challenges Brazilian companies face in the areas of human rights/working conditions, the environment and corruption. In addition, it is exemplarily presented which measures companies take to meet their social responsibility.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>