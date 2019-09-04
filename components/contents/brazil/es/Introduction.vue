<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Con alrededor de 209,5 millones de habitantes y un producto interno bruto de 1,869 mil millones de dólares, Brasil es lejos la economía más grande de América Latina y el único país de habla portuguesa en la región. En términos de ingreso per cápita promedio, el Banco Mundial (2018) clasifica a Brasil como país de ingresos medianos altos, ocupando, según el indicador de bienestar de las Naciones Unidas HDI (2018), el puesto 79 en el mundo. Esto coloca a Brasil en el grupo de países con un alto grado de desarrollo en términos de esperanza de vida, educación y nivel de vida. Sin embargo, un coeficiente de Gini del 53,3% (2017) deja en claro que la brecha de ingresos entre ricos y pobres en Brasil es de las más altas del mundo.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Brasil es un país con una importante economía doméstica, donde gran parte de la división del trabajo se lleva a cabo en el interior. Esto queda reflejado en una cuota de comercio exterior de solo 29,1% en 2018. En el mismo año, las importaciones de bienes y servicios sumaron poco menos de US$ 267 mil millones y las exportaciones poco más de US$ 277 mil millones. En el mismo año, el stock de inversión extranjera directa en Brasil ascendió a 684 mil millones de dólares. Más de un tercio de toda la inversión extranjera en América Latina (36%) se realizó en Brasil.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Desde 2014, Brasil se ha visto sacudido por una profunda crisis política y económica provocada por el escándalo de corrupción de la petrolera semiestatal Petrobrás. Según Transparency International (2019), la corrupción es percibida como generalizada en Brasil. En el índice de corrupción de la organización, el país ocupa el puesto 105 de 180 en el mundo.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Según Human Rights Watch (2017), el aparato de seguridad brasileño está caracterizado por problemas crónicos en materia de derechos humanos, incluidas ejecuciones extrajudiciales por parte de la policía, el hacinamiento carcelario, así como la tortura y abusos a los detenidos. También la economía ha documentado reiteradamente casos de violaciones de derechos humanos. Estos incluyen casos de trabajo forzado y trabajo abusivo en condiciones de esclavitud. Además, activistas comprometidos en favor de los derechos de los pueblos sin tierra e indígenas se ven a menudo expuestos a ataques masivos, amenazas e intimidaciones. Según Reporteros sin Fronteras, en Brasil ningún periodista fue asesinado y un periodista fue encarcelado en relación con sus actividades en 2018. El país ocupa el puesto 105 en el ranking de libertad de prensa.
    </p>
    <p>
      En Brasil, al 91% de la población se le recogen los residuos domésticos (2010), y alrededor del 1% de estos desechos son reciclados (2000). El 99,6% de la población tiene acceso a servicios básicos de agua potable (2015), con una clara brecha entre áreas urbanas (99,3%) y áreas rurales (86,6%). No hay datos estadísticos sobre la proporción de la población que tiene acceso a fuentes seguras de agua potable. El 45% de la población está conectado a un sistema de alcantarillado (1993). 
    </p>
    <p>
      Las emisiones brasileñas de CO<sub>2</sub> per cápita ascendieron a 2,6 toneladas en 2014, por debajo del promedio mundial (5,0 toneladas) y también por debajo del promedio latinoamericano de 3,1 toneladas.
    </p>
    <p>
      En los próximos capítulos se presentarán ejemplos de los desafíos que enfrentan las empresas en Brasil en relación a los derechos humanos / condiciones de trabajo, el medio ambiente y la corrupción. Además, se demostrará a modo de ejemplo cómo las empresas cumplen con su responsabilidad social.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>