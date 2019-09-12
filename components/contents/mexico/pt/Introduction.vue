<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Em 2018, o México tinha uma população de 126 milhões e um produto interno bruto de 1&thinsp;223 trilhões de dólares americanos. O México forma parte dos países de renda média-alta e no índice do desenvolvimento humano das Nações Unidas (2018), o país está na 74ª posição em nível mundial. Portanto, o México é considerado um país com um alto grau de desenvolvimento em termos da expectativa de vida, nível educacional e padrão de vida. No entanto, um coeficiente de Gini de 43,3% (2016) põe em evidência a grande desigualdade de renda.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        A taxa mexicana de importações e exportações de 80,3% em 2018 destaca a forte integração do país no comércio internacional. No mesmo ano, as importações somaram cerca de 503 bilhões de dólares americanos e as exportações alcançaram 480 bilhões. Além disso, com um total de 486 bilhões de dólares americanos em 2018, o país é um destino atrativo para os investimentos estrangeiros diretos.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Apesar do desenvolvimento econômico positivo nos últimos anos, o México ainda enfrenta grandes desafios sociais e ambientais. O índice de percepção da corrupção (CPI) da Transparency International (2018) coloca ao México na 138ª posição de 180 países, percebido como um dos países americanos mais corruptos.
    </p>
    <p>
      Segundo o Human Rights Watch, no México com frequência ocorrem violações maciças dos direitos humanos. Tratam-se de acusações de uso excessivo da violência, execuções extrajudiciais e torturas realizadas pelas forças de segurança, e observa-se uma impunidade sistemática e contínua dos agressores. Jornalistas que investigam o crime organizado ou problemas graves em instituições estatais são atacados, assediados e forçados à autocensura. O Repórteres sem Fronteiras informa que, em 2018, cinco jornalistas foram assassinados no desempenho da sua atividade profissional e, no que diz respeito à liberdade de imprensa, o México está na 144ª posição de 180 países.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Segundo estatísticas da UN Environment Statistics Database, há coleta de lixo urbano para 90% da população (2006) e cerca de 5% dos resíduos é reciclado (2013); 98,3% da população tem acesso à água potável (2015), observa-se certa desigualdade entre as zonas urbanas e rurais (urbana 99,5%; rural 93,7%). Porém, chama a atenção que a minoria da população (42,6%) tem acesso a fontes de água potável seguras. 71% da população está conectada a uma rede de esgoto (2010). A emissão de CO<sub>2</sub> per capita mexicana em 2014 chegou a 3,9 toneladas, número abaixo da média mundial de 5 toneladas, mas acima do valor médio na América Latina de 3,1 toneladas.
    </p>
    <p>
      A seguir, apresentam-se exemplos de desafios de diferentes empresas nas áreas de direitos humanos/condições trabalhistas, meio ambiente e corrupção. Além disso, descreve-se como as empresas mexicanas tentam cumprir com sua responsabilidade empresarial nessas áreas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>