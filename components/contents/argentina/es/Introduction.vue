<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        En 2017, la población total de Argentina ascende  en torno a 44,5 millones y su producto interno bruto llegó a alrededor de US$ 518 mil millones. Según la clasificación del Banco Mundial, Argentina es un país de ingresos medios del rango mayor y ocupa el puesto 47 en el Índice de Desarrollo Humano (2017), convirtiendo a Argentina en uno de los países con un desarrollo humano muy alto en términos de esperanza de vida, educación y nivel de vida. Un coeficiente de Gini del 40,6% (2017) indica que la distribución del ingreso en Argentina está más concentrada que en Europa Central. Sin embargo, en comparación con otros países de América Latina, Argentina es uno de los países con la más moderada concentración de ingresos.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Una cuota de comercio exterior del 19,7% en 2017 indica una participación de Argentina en el comercio internacional inferior al promedio. En 2018, el país importó bienes y servicios por un valor de US$ 85 mil millones y exportó alrededor de US$ 75 mil millones. El que Argentina haya despertado menor interés al promedio entre los inversionistas extranjeros en los últimos años se manifiesta en el hecho de que el stock de inversión directa asciende a solo 73 mil millones de dólares. Esto representa el 4% de la inversión extranjera en América Latina.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Durante los doce años del gobierno de Néstor y Cristina Kirchner, Argentina mostró un creciente aislamiento a nivel internacional. El presidente Mauricio Macri, en el cargo desde diciembre de 2015, está intentando abrir gradualmente al país económicamente excluido. Además de implementar una agenda de reforma económica, el país también enfrenta importantes desafíos sociales y ambientales. El Índice de Percepción de la Corrupción (IPC) de Transparency International (2019) coloca a Argentina en el puesto 85. Esto significa que la corrupción es percibida como generalizada, incluso en comparación con otros países de América Latina.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Hubo violaciones masivas de derechos humanos en Argentina durante la época de la última dictadura militar, cuyas consecuencias continúan afectando enormemente a la sociedad en la actualidad. Además, Human Rights Watch (2019) señala que también la Argentina actual enfrenta problemas de derechos humanos, como el abuso de la fuerza policial, las malas condiciones en las cárceles y la frecuente violencia contra las mujeres. Además, el país es acusado de proporcionar un acceso insuficiente a la justicia, la tierra, la educación, la atención médica y otros beneficios estatales a su población indígena, así como no concederle suficientes formas de participación en el desarrollo económico del interior del país. Según Reporteros sin Fronteras, en 2019 ningún periodista fue asesinado en relación con su trabajo en Argentina. El país ocupa el puesto 57 en el ranking de libertad de prensa.
    </p>
    <p>
      En el 90% de la población, se recogen los residuos domésticos (2010), pero no hay información sobre su reciclaje. El 99,6% de la población tiene acceso a servicios básicos de agua potable (2015). Aunque solo existen diferencias marginales entre las áreas urbanas y rurales, una parte levemente menor de la población urbana tiene acceso a los servicios básicos respecto del agua. La gran mayoría de la población (98,5%) tiene asegurado el suministro de agua potable. Al mismo tiempo, solo el 50% de la población está conectada al sistema de alcantarillado (2010). En 2014, las emisiones de CO<sub>2</sub> per cápita fueron de 4,7 toneladas, justo debajo de las 5 toneladas per cápita del promedio mundial, pero muy por encima del promedio latinoamericano de 3,1 toneladas.
    </p>
    <p>
      En los próximos capítulos se presentarán ejemplos de los desafíos que enfrentan las empresas en Argentina en relación a los derechos humanos / condiciones de trabajo, el medio ambiente y la corrupción. Además, se demostrará a modo de ejemplo cómo las empresas cumplen con su responsabilidad social en las áreas mencionadas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>