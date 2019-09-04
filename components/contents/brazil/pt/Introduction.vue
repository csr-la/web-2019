<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Com cerca de 209,5 milhões de habitantes e um produto interno bruto de 1,869 trilhões de dólares americanos, o Brasil é de longe a maior economia da América Latina e o único país de língua portuguesa da região. Em relação à renda per capita média, o Banco Mundial (2018) classifica o Brasil como um país de renda média-alta e no índice do desenvolvimento humano das Nações Unidas (2018), o país está na 79ª posição em nível mundial. Portanto, o Brasil forma parte do grupo dos países com um alto grau de desenvolvimento em termos da expectativa de vida, nível educacional e nível de vida. No entanto, um coeficiente de Gini de 53,3% (2017) põe em evidência que a desigualdade da renda entre os pobres e os ricos no Brasil é maior que em quase todos os países do mundo.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        O Brasil é um país com uma economia nacional forte, em que a maior parte da cadeia produtiva é desenvolvida internamente. Este fato reflete-se numa taxa de comércio internacional de somente 29,1%. Em 2018, as importações de bens e serviços somaram cerca de 267 bilhões de dólares americanos e as exportações alcançaram 277 bilhões. No mesmo ano, o estoque de investimentos diretos estrangeiros no Brasil era de 684 bilhões de dólares americanos. Assim, quase um terço de todos os investimentos diretos estrangeiros na América Latina (36%) foi realizado no Brasil.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Desde 2014, o Brasil se vê atingido por uma profunda crise política e econômica, causada pelo escândalo de corrupção no grupo petrolífero semiestatal Petrobrás. Segundo os dados da Transparency International (2019), a corrupção é vista como algo amplamente difundido no país. No índice de corrupção, o Brasil ocupa a 105ª posição de 180 países.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Segundo a Human Rights Watch (2017), problemas crônicos de direitos humanos marcam o sistema de segurança brasileiro, incluindo execuções extrajudiciais perpetradas por agentes da polícia, a superpopulação carcerária, a tortura e os maus-tratos dos presos. No setor privado também existem vários casos documentados de violações dos direitos humanos, incluindo casos de trabalho forçado e condições de trabalho abusivas, sob condições semelhantes à escravidão. Além disso, os ativistas que defendem os direitos dos sem-terra e da população indígena estão expostos a ataques violentos, ameaças e intimidações. Segundo os Repórteres sem Fronteiras, em 2018, no Brasil, um jornalista está preso mas nenhum jornalista foi assassinado no devido a sua atividade profissional e o país ocupa a 105ª posição no ranking de liberdade de imprensa.
    </p>
    <p>
      No Brasil há coleta de lixo urbano para 91% da população (2012) e cerca de 1% dos resíduos é reciclado (2000). Aproximadamente 97,5% da população tem acesso ao abastecimento básico de água potável (2015), mas há uma disparidade acentuada entre as áreas urbanas (99,3%) e rurais (86,6%). Não há dados estatísticos sobre a porcentagem da população com acesso a fontes seguras de água potável. 45% da população está conectada a uma rede de esgoto (1993).
    </p>
    <p>
      A emissão per capita brasileira de CO<sub>2</sub> em 2014 alcançou 2,6 toneladas, ficando abaixo da média mundial (5 toneladas) e do valor médio na América Latina de 3,1 toneladas.
    </p>
    <p>
      Nas próximas seções, descrevem-se com base em exemplos selecionados os desafios que as empresas brasileiras enfrentam nos âmbitos dos direitos humanos e condições trabalhistas, meio ambiente e corrupção. Além disso, apresentam-se exemplos de medidas tomadas pelas empresas para cumprir com suas responsabilidades sociais.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>