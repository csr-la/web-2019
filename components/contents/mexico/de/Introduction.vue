<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        2018 lebten in Mexiko mehr als  126 Millionen Menschen, die ein Brut&shy;to&shy;in&shy;lands&shy;pro&shy;dukt von 1&thinsp;223 Milliarden US-Dollar erwirtschafteten. Das Land zählt zur Gruppe der Staaten mit höherem mittleren Pro-Kopf-Einkommen und rangiert auf dem Index der menschlichen Entwicklung (2018) auf Platz 74. Damit gilt Mexiko gemessen an der Lebenserwartung, dem Bildungsniveau sowie dem Lebensstandard als Land mit hohem Entwicklungsstand. Ein Gini-Koeffizient von 43,4% (2016) macht jedoch deutlich, dass das Einkommen in Mexiko recht ungleich verteilt ist.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Die starke Einbindung Mexikos in den internationalen Handel wird daran deutlich, dass das Land eine hohe Außenhandelsquote von 80,3% im Jahr 2018 aufweist. Im selben Jahr beliefen sich die Einfuhren des Landes auf 503 Milliarden und die Ausfuhren auf 480 Milliarden US-Dollar. Darüber hinaus ist das Land mit einem Bestand von rund 486 Milliarden US-Dollar (2018) ein gefragtes Ziel für aus&shy;län&shy;dischen Direktinvestitionen.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Trotz der positiven wirtschaftlichen Entwicklung der letzten Jahre ist Mexiko weiterhin mit erheblichen gesellschaftlichen und ökologischen Herausforderungen konfrontiert. So belegt das Land im Corruption Perceptions Index von Trans&shy;paren&shy;cy International (2018) Rang 138 von 180 Staaten, und wird damit als eines der Länder auf dem amerikanischen Kontinent wahrgenommen, in dem Korruption am weitesten verbreitet ist.
    </p>
    <p>
      Laut Human Rights Watch kommt es in Mexiko regelmäßig zu massiven Men&shy;schen&shy;rechts&shy;ver&shy;let&shy;zungen. Hierzu zählen Vorwürfe über exzessive Ge&shy;walt&shy;an&shy;wen&shy;dung, extralegale Hinrichtungen sowie Folter durch Sicherheitskräfte, wobei eine systematische und fortgesetzte Straflosigkeit der Täter zu beobachten sei. Journalisten, die über die organisierte Kriminalität oder Missstände in staatlichen Institutionen berichten, werden angegriffen, schikaniert und zur Selbstzensur getrieben. 2018 wurden gemäß Reporter ohne Grenzen fünf Journalisten im Zusammenhang mit ihrer Tätigkeit getötet und Mexiko belegt auf der Rangliste der Pressefreiheit Platz 144 von 180 Ländern.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Gemäß UN Environment Statistics Database werden in Mexiko bei 90% der Bevölkerung die Siedlungsabfälle eingesammelt (2006) und 5% der Abfälle recycelt (2013). 98,3% der Bevölkerung haben Zugang zu grundlegenden Trink&shy;was&shy;ser&shy;dienst&shy;leis&shy;tung&shy;en (2015), wobei ein gewisses Stadt-Land-Gefälle festzustellen ist (Stadt 99,5%; Land 93,7%). Auffallend ist jedoch, dass lediglich eine Minderheit der Bevölkerung Zugang zu Trinkwasserquellen hat (42,6%), die als sicher gelten. 71% der Bevölkerung sind an das Abwassersammelsystem angeschlossen (2010). 2014 lag der Pro-Kopf-Ausstoß an CO<sub>2</sub> bei 3,9 Tonnen und damit zwar unter den durch&shy;schnitt&shy;lich&shy;en weltweiten CO<sub>2</sub>-Emissionen pro Kopf von 5 Tonnen aber über dem regionalen Durchschnitt für Lateinamerika von 3,1 Tonnen.
    </p>
    <p>
      Im Folgenden werden jeweils beispielhaft Herausforderung auf einzelbetrieblicher Ebene aus den Gebieten Menschenrechte/Arbeitsbedingungen, Umwelt und Korruption dargestellt. Zudem wird anhand von Beispielen aufgezeigt, wie Unternehmen in Mexiko versuchen, ihrer unternehmerischen Verantwortung in den beschriebenen Bereichen nachzukommen.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>