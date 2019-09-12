<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        No ano 2017, a Argentina tinha uma população total de quase 44.5 milhões e um produto interno bruto de cerca de 518 bilhões de dólares americanos. Segundo a classificação do Banco Mundial, Argentina é um país com renda média alta e ocupa a 47ª posição no ranking de índice de desenvolvimento humano (2017). Assim, em relação à expectativa de vida, o nível de educação e o padrão de vida, a Argentina pertence á categoria dos países com um nível muito alto de desenvolvimento humano. Um coeficiente Gini de 40.6% (2017) indica que a distribuição da renda na Argentina apresenta uma maior concentração que na Europa Central. Comparado com outros países da América Latina, a Argentina tem uma das menores concentrações de renda.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        A taxa de 19,7% de importações e exportações em 2017 demonstra a deficiente integração da Argentina no comércio internacional. Em 2017, o país importou cerca de 85 bilhões de dólares americanos em bens e serviços e exportou aproximadamente 75 bilhões. O interesse reduzido dos investidores estrangeiros na Argentina nos últimos anos se reflete no total dos investimentos diretos, que chega a apenas 73 bilhões de dólares americanos em 2018, o que equivale a 4% dos investimentos estrangeiros na América Latina.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Nos 12 anos de governo do casal Néstor e Cristina Kirchner, a Argentina se isolou internacionalmente. O presidente Macri, que assumiu em dezembro de 2015, procura uma reabertura gradual do país, economicamente fechado. Além da implementação da agenda de reformas da política econômica, o país enfrenta grandes desafios sociais e ambientais. O índice de percepção da corrupção (CPI) da Transparency International (2019) coloca a Argentina na 85ª posição, o que significa que a corrupção – também em comparação com outros países da América Latina – é percebida como um fenômeno amplamente generalizado.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      As violações massivas dos direitos humanos durante a última ditadura militar na Argentina e suas consequências ainda preocupam muito à sociedade. Além disso, a Human Rights Watch (2019) aponta também que a Argentina atual enfrenta problemas de direitos humanos como, por exemplo, abusos de autoridade policial, condições precárias da população carcerária, e o aumento dos casos de violência contra as mulheres. Ademais, acusa-se ao país de não garantir à população indígena suficiente acesso à justiça, terra, educação, saúde e outros serviços públicos básicos e, além disso, de não lhes fornecer de forma suficiente as oportunidades previstas de participação na exploração econômica do país. Segundo os Repórteres sem Fronteiras, em 2019, na Argentina não houve homicídios de jornalistas relacionados com sua atividade profissional e o país atualmente ocupa a 57ª posição no ranking de liberdade de imprensa.
    </p>
    <p>
      Cerca de 90% da população recebe um serviço de coleta lixo urbano (2010), mas não há informação sobre quanto se recicla. Aproximadamente 99,6% da população tem acesso ao abastecimento básico de água potável (2015). Apesar da pouca diferença entre os setores urbanos e rurais, é nas cidades onde menos pessoas têm acesso ao abastecimento básico de água. A maior parte da população conta com abastecimento de água potável classificado como seguro (98,5%). No entanto, só 50% da população está conectada à rede de esgoto (2010). Em 2014, as emissões per capita de CO<sub>2</sub> alcançaram 4,7 toneladas, um pouco menos da média das emissões mundiais de CO<sub>2</sub> de 5 toneladas, mas claramente acima de média da América Latina, de 3,1 toneladas.
    </p>
    <p>
      Nas próximas seções, apresentam-se exemplos de desafios de empresas argentinas no que diz respeito aos direitos humanos e condições trabalhistas, meio ambiente e corrupção. Além disso, demonstra-se, a título de exemplo, como as empresas cumprem com sua responsabilidade social nas áreas descritas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>