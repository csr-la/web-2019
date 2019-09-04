<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Con casi 50 millones de habitantes en 2018, Colombia logró un rendimiento económico de más de 330 mil millones de dólares. Según la clasificación del Banco Mundial (2018), Colombia es uno de los países de ingresos medianos más altos y ocupa el lugar 90 en el Índice de Desarrollo Humano de las Naciones Unidas. Por lo tanto, Colombia clasifica como un país de alto desarrollo en términos de esperanza de vida, educación y nivel de vida. Sin embargo, estos indicadores basados en promedios ignoran en gran medida las grandes diferencias de ingresos que existen en Colombia, lo que se refleja en un coeficiente de Gini del 49,7% (2017).
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        En 2018, la tasa del comercio exterior colombiano fue del 36,8%. El país importó bienes y servicios por un valor de US$ 69 mil millones y exportó por casi US$ 52 mil millones. Ese mismo año, las inversiones extranjeras ascendieron a US$ 189 mil millones, 10% de las inversiones directas realizadas en América Latina.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      En 2016, el gobierno y el grupo guerrillero Fuerzas Armadas Revolucionarias de Colombia (FARC) llegaron a un acuerdo para poner fin a su conflicto armado. Que el proceso de paz iniciado sea exitoso dependerá también de que Colombia enfrente de manera efectiva sus apremiantes desafíos sociales y ambientales. En el Índice de Percepción de la Corrupción de Transparencia Internacional (2019), Colombia ocupa el lugar 99 de entre 180 países, lo que significa que los niveles de corrupción en el sector público se perciben como altos.
    </p>
    <p>
      En los 52 años de la guerra civil, las guerrillas, los paramilitares y las fuerzas de seguridad cometieron reiteradas violaciones masivas de derechos humanos. El acuerdo de paz de 2016 viene a representar una oportunidad para combatir esto de manera significativa. Sin embargo, Human Rights Watch (2019) señala que después de los descensos iniciales relacionados con el alto el fuego de las FARC en 2015, la violencia comenzó a aumentar de nuevo en 2018 y observa con preocupación que los defensores de los derechos humanos, los representantes sindicales y los periodistas siguen siendo amenazados, atacados e impedidos de realizar sus labores. Señala también, que las oportunidades de desarrollo social y económico de los pueblos indígenas del país son muy limitadas, lo que conlleva problemas de desnutrición, enfermedades y alta mortalidad infantil. En 2019, Reporteros sin Fronteras informó que un periodista había sido asesinado en Colombia en relación con su trabajo. En el ranking de la libertad de prensa, el país ocupa el puesto 129 de entre 180 países.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Según estadísticas oficiales, en el 81% de la población se recogen los residuos domésticos (2012), y alrededor del 1% de estos desechos son reciclados (2011). El 96,5% de la población tiene acceso a servicios básicos de agua potable (2015), con una clara brecha entre áreas urbanas (99.8%) y áreas rurales (86,0%). Llama la atención que solo el 71,1%  de la población tiene acceso a fuentes de agua dulce catalogadas como seguras. El 77% de la población está conectado a un sistema de alcantarillado (2010).
    </p>
    <p>
      Las emisiones colombianas de CO<sub>2</sub> per cápita de 1,8 toneladas, se ubican claramente por debajo del promedio mundial de 5,0 toneladas y del promedio latinoamericano de 3,1 toneladas.
    </p>
    <p>
      En Colombia, las empresas enfrentan diferentes desafíos en términos de derechos humanos / condiciones de trabajo, medio ambiente y corrupción. En los próximos capítulos se presentarán ejemplos de cómo enfrentan estos retos.
    </p>
    <p>
      Además, se demostrará a modo de ejemplo, cómo las empresas cumplen con sus responsabilidades corporativas en las tres áreas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>