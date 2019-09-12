<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Em 2018, o Peru tinha uma população de cerca de 32 milhões de pessoas e uma renda de 222 bilhões de dólares americanos. Uma renda média per capita de cerca de 6&thinsp;000 dólares americanos e, segundo o Banco Mundial (2017), trata-se de um país com renda média-alta. O Peru ocupa a 89ª posição no ranking do índice de desenvolvimento humano das Nações Unidas (2016). Referente à expectativa de vida, o nível de educação e o padrão de vida, o Peru pertence à categoria dos países com um nível alto de desenvolvimento humano. No entanto, o coeficiente Gini de 43,3% (2017) indica uma desigualdade significativa na distribuição da renda, mesmo que não seja tão marcante como a de outros países da América Latina.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        A taxa peruana de importações e exportações em 2018 alcançou 49,0%, com importações de bens e serviços de 53 bilhões de dólares americanos e exportações de um pouco mais de 56 bilhões. No mesmo ano, no Peru havia 104 bilhões de dólares americanos de investimentos diretos estrangeiros, que representa 6% dos investimentos estrangeiros na América Latina.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      O índice de percepção da corrupção (CPI) da Transparency International (2019) coloca ao Peru na 105ª posição de 180 países, percebido como país com grande vulnerabilidade no setor público. Segundo o Human Rights Watch (2017), durante protestos contra grandes projetos de mineração e de infraestrutura, muitas vezes os agentes das forças de segurança ferem e matam manifestantes. No entanto, observa-se que a violência diminuiu nos últimos tempos. Porém, os jornalistas que pesquisam a corrupção de autoridades públicas e gestores empresariais enfrentam ações de difamação, recebem intimidações e ameaças. A organização Repórteres sem Fronteiras constatou que, em 2018, no Peru um jornalista está preso mas nenhum jornalista foi assassinado no desempenho de sua atividade. Na classificação da liberdade de imprensa, o país ocupa a 85ª posição entre 180 países.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Há coleta de lixo urbano para 75% da população (2012) e 15% dos resíduos é reciclado (2011). Em 2015, 89,9% da população peruana tinha acesso ao abastecimento básico de água potável (2015), sendo que se pode observar uma desigualdade marcada entre as zonas urbanas e rurais (urbano 94,6%; rural 72,4%). Destaca-se que só a metade da população (50,2%) é abastecida por fontes de água potável seguras. Segundo os últimos dados publicados, 81% da população está conectada à rede de esgoto (2009).
    </p>
    <p>
      A emissão de CO<sub>2</sub> per capita peruana alcançou 2 toneladas, abaixo da média mundial de 5 toneladas e da média regional na América Latina de 3,1 toneladas.
    </p>
    <p>
      Nas próximas seções descrevem-se por meio de exemplos os desafios que as empresas no Peru enfrentam nas áreas de direitos humanos/condições trabalhistas, meio ambiente e corrupção. Além disso, mostra-se com exemplos como as empresas implementam concretamente sua gestão responsável.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>