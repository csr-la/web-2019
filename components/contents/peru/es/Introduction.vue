<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        En el año 2018, cerca de 32 millones de personas vivían en Perú, generando un producto interno bruto de 222 mil millones de dólares. Un ingreso promedio per cápita de poco más de US$ 6.000, según el Banco Mundial (2017), clasifica a Perú como un país de ingreso medio en el rango superior. Perú ocupa el puesto 89 en el Índice de Desarrollo Humano de las Naciones Unidas. Respecto de la esperanza de vida, el nivel de educación y el nivel de vida, el país está evaluado con un alto desarrollo humano. Sin embargo, el coeficiente de Gini de 43,3% (2017) deja en claro que existen diferencias de ingreso significativas en el Perú, aunque no tan pronunciadas como en otros países de América Latina.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        En 2018, la tasa de comercio exterior fue de 49,0%. Las importaciones de productos y servicios  sumaron poco menos de 53 mil millones de dólares y las exportaciones algo más de 56 mil millones de dólares. En el mismo año, la inversión extranjera directa en Perú ascendió a US $ 104 mil millones, lo que representa el 6% de la inversión en América Latina.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Perú ocupa el puesto 105 de entre 180 países en el Índice de Percepción de la Corrupción de Transparency International (2019), convirtiéndolo en un país con alta presencia de corrupción en el sector público. Según Human Rights Watch (2017), en los últimos años las fuerzas de seguridad han herido y asesinado repetidamente a civiles durante protestas contra grandes proyectos mineros y de infraestructura. Cabe señalar que la violencia ha disminuido recientemente. Sin embargo, los periodistas que investigan casos de corrupción por parte de funcionarios públicos y empresarios serían abrumados, intimidados y amenazados con demandas por difamación. Reporteros sin Fronteras destaca que en 2017 ningún periodista fue asesinado y uno fue arrestado en relación con su trabajo. En el ranking de libertad de prensa, Perú ocupa el lugar 85 entre 180 países.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      En Perú, en el 75% de la población se recogen los residuos domésticos (2001), y alrededor del 15% de estos desechos son reciclados (2011). En 2015, el 89,9% de la población peruana tenía acceso a servicios básicos de agua potable, con una clara brecha entre áreas urbanas (94,6%) y rurales (72,4%). También debe tenerse en cuenta que solamente la mitad de las personas tienen acceso a fuentes seguras de agua dulce (50,2%). De acuerdo a los últimos números disponibles, el 81% de la población está conectado a un sistema de alcantarillado (2009).
    </p>
    <p>
      Las emisiones peruanas de 2,0 toneladas de CO<sub>2</sub> per cápita, se ubican por debajo del promedio mundial de 5,0 toneladas y del promedio latinoamericano de 3,1 toneladas per cápita.
    </p>
    <p>
      Los desafíos de las empresas peruanas en relación a los derechos humanos / condiciones de trabajo, medio ambiente y corrupción se describirán en los siguientes capítulos. Además, se demostrará a modo de ejemplo cómo las empresas cumplen con sus responsabilidades corporativas en las tres áreas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>