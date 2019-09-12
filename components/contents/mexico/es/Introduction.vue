<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        En el año 2018, más  de 126 millones de personas vivían en México, generando un producto interno bruto de 1&thinsp;223 mil millones de dólares. El país pertenece al grupo de estados con mayor promedio de ingreso per cápita y ocupa el puesto 74 en el Índice de Desarrollo Humano (2018). Por ende, México es considerado un país con un alto nivel de desarrollo en términos de esperanza de vida, educación y nivel de vida. Sin embargo, un coeficiente de Gini del 43,3% (2016) deja en claro que los ingresos se distribuyen de manera bastante desigual.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        La fuerte participación de México en el comercio internacional queda ilustrada en su alta tasa de comercio exterior de 80,3% en 2018. En el mismo año, las importaciones del país ascendieron a 503 mil millones y las exportaciones a 480 mil millones de dólares. Además, con inversiones de aproximadamente 486 mil millones de dólares estadounidenses (2018), México es un destino interesante para la inversión extranjera directa.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      A pesar del positivo desarrollo económico en los últimos años, México continúa enfrentando importantes desafíos sociales y ambientales. En el Índice de Percepción de la Corrupción de Transparency International (2018), el país ocupa el lugar 138 de 180 estados, lo que lo convierte en uno de los países del continente americano donde la corrupción es más frecuente.
    </p>
    <p>
      Según Human Rights Watch, violaciones masivas de los derechos humanos ocurren con regularidad en México. Estas incluyen denuncias de uso excesivo de la fuerza, ejecuciones extrajudiciales y tortura por parte de las fuerzas de seguridad, con impunidad sistemática y continua de los perpetradores. Periodistas que informan sobre el crimen organizado o la mala administración en las instituciones estatales son atacados, acosados y sometidos a la autocensura. Según Reporteros sin Fronteras, cincoperiodistas fueron asesinados en relación con sus actividades en 2018, y México ocupa el puesto 144 de 180 países en el ranking de libertad de prensa.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Según la Base de datos de estadísticas ambientales de las Naciones Unidas, en el 90% de la población mexicana se recolectan los desechos domésticos (2006) y el 5% de éstos son reciclados (2013). El 98,3% de la población tiene acceso a servicios básicos de agua potable (2015), con una cierta brecha urbano-rural (urbano 99,5%, rural 93,7%). Sin embargo, es sorprendente que solo una minoría de la población tenga acceso a fuentes de agua dulce que se consideran seguras (42,6%). El 71% de la población está conectada al sistema de alcantarillado (2010). En 2014, las emisiones de CO<sub>2</sub> per cápita se situaron en 3,9 toneladas, por debajo del promedio mundial de las emisiones de 5 toneladas, pero por encima del promedio de 3,1 toneladas de América Latina.
    </p>
    <p>
      En los próximos capítulos se presentarán ejemplos de los desafíos que enfrentan las empresas en México en relación con los derechos humanos / condiciones de trabajo, el medio ambiente y la corrupción. Además, se demostrará a modo de ejemplo cómo las empresas cumplen con su responsabilidad social en estas áreas.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>