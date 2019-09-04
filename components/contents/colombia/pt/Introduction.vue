<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Em 2018, a Colômbia tinha cerca de 50 milhões de pessoas e uma renda de 330 bilhões de dólares americanos. Segundo a classificação do Banco Mundial (2018), a Colômbia é um dos países com rendimento médio-alto e no índice de desenvolvimento humano das Nações Unidas o país está na 90ª posição mundial. Portanto, a Colômbia forma parte do grupo dos países com um alto nível de desenvolvimento em termos da expectativa de vida, do nível educacional e do padrão de vida. Porém, esses indicadores baseados em valores médios não consideram a desigualdade de renda na Colômbia, que se expressam num coeficiente Gini de 49,7% (2017).
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        A taxa de importações e exportações da Colômbia em 2018 alcançou 36,8%, com importações de bens e serviços de 69 bilhões de dólares americanos e exportações de cerca de 52 bilhões. No mesmo ano, os investimentos estrangeiros totalizaram 189 bilhões de dólares americanos. Portanto, 10% dos investimentos estrangeiros diretos na América Latina foram feitos na Colômbia.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Em 2016, o governo e a guerrilha das Forças Armadas Revolucionárias da Colômbia (FARC) chegaram a um acordo para finalizar o conflito armado. O sucesso do processo de paz iniciado com o acordo dependerá, entre outros fatos, da capacidade da Colômbia de enfrentar de forma eficaz os desafios sociais e ambientais urgentes do país. O índice de percepção da corrupção da Transparency International (2019) coloca a Colômbia na 99ª posição de 180 países, o que significa que o nível da corrupção no setor público é percebido como alto.
    </p>
    <p>
      Nos 52 anos da guerra civil, as guerrilhas, os paramilitares e as forças da segurança perpetraram repetidas e maciças violações dos direitos humanos. Agora, o acordo de paz de 2016 oferece uma oportunidade para reduzi-las significativamente. No entanto, o Human Rights Watch (2019) observa que, após os primeiros declínios relacionados com o cessar-fogo de 2015 das FARC, a violência começou a aumentar novamente em 2018 e afirma com preocupação que os defensores dos direitos humanos, sindicalistas e jornalistas ainda sofrem ameaças e ataques, e estão impedidos de exercer suas atividades. Além disso, constata-se que as possibilidades de desenvolvimento social e econômico da população indígena do país são muito limitadas. As consequências disso são a desnutrição, as doenças e o alto nível de mortalidade infantil. Em 2019, a organização Repórteres sem Fronteiras constatou que na Colômbia um jornalista foi assassinado devido à sua atividade. Na classificação da liberdade de imprensa, o país ocupa a 129ª posição entre 180 países.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Segundo estatísticas oficiais, há coleta de lixo urbano para 81% da população (2012) e cerca de 1% dos resíduos é reciclado (2011). 96,5% da população tem acesso ao abastecimento básico de água potável (2015), sendo que existe uma desigualdade marcada entre 99,8% nas cidades e 86,0% nos setores rurais. Chama a atenção também que apenas 71,1% da população tenha acesso a fontes de água potável seguras. 77% da população está conectada a uma rede de esgoto (2010).
    </p>
    <p>
      A emissão per capita de CO<sub>2</sub> alcançou 1,8 toneladas, claramente abaixo da média mundial (5 toneladas) e latino-americana (3,1 toneladas).
    </p>
    <p>
      À continuação apresentam-se desafios individuais das empresas e mostra-se o que elas fazem para cumprir com suas responsabilidades nos diferentes âmbitos.
    </p>
    <p>
      As empresas colombianas enfrentam vários desafios referentes aos direitos humanos e condições trabalhistas, meio ambiente e corrupção, que se descrevem com exemplos nas seções seguintes. Além disso, descreve-se como as empresas tentam cumprir com sua responsabilidade empresarial nessas três áreas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>