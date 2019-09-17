<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Kolumbien verfügte 2018 über knapp 50 Millionen Einwohner und erzielte eine Wirtschaftsleistung von gut 330 Milliarden US-Dollar. Gemäß Einteilung der Weltbank (2018) zählt Kolumbien zu den Ländern mit höherem mittlerem Einkommen und belegt im Index der menschlichen Entwicklung der Vereinten Nationen den 90. Rang. Somit wird Kolumbien bezüglich Lebenserwartung, Bildungsniveau und Lebensstandard als Land mit hohem Entwicklungsstand eingestuft. Bei diesen auf Mittelwerten basierenden Indikatoren bleiben jedoch die großen Einkommensunterschiede weitgehend unberücksichtigt, die in Kolumbien herrschen, und die in einem Gini-Koeffizient von 49,7% (2017) zum Ausdruck kommen.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Die kolumbianische Außenhandelsquote lag 2018 bei 36,8%, wobei das Land Waren und Dienstleistungen in Höhe von gut 69 Milliarden US-Dollar einführte und von knapp 52 Milliarden US-Dollar ausführte. Im gleichen Jahr betrugen die In&shy;ves&shy;ti&shy;ti&shy;ons&shy;be&shy;stände aus dem Ausland 189 Milliarden US-Dollar. Damit entfielen 10% der in Lateinamerika befindlichen Direktinvestitionen auf Kolumbien.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      2016 haben die Regierung und die Guerillagruppe Fuerzas Armadas Revolucion&shy;arias de Colombia (FARC) ein Abkommen zur Beendigung ihres bewaffneten Konflikts erzielt. Ob der damit eingeleitete Friedensprozess erfolgreich sein kann, wird auch davon abhängen, ob Kolumbien die drängenden gesellschaftlichen und ökologischen Herausforderungen wirksam angeht, mit dem das Land konfrontiert ist. Im Corruption Perceptions Index von Transparency International (2019) belegt Kolumbien den 99. Platz von 180 weltweit, was bedeutet, dass das Kor&shy;rup&shy;ti&shy;ons&shy;niveau im öffentlichen Sektor als hoch wahrgenommen wird.
    </p>
    <p>
      In den 52 Jahren des Bürgerkrieges kam es von Seiten der Guerillas, Paramilitärs sowie der Sicherheitskräfte wiederholt zu massiven Menschenrechtsverletzungen, welche durch das 2016 beschlossene Friedensabkommen  deutlich eingedämmt werden konnten. Human Rights Watch (2019) stellt jedoch besorgt fest, dass nach ersten Rückgängen im Zusammenhang mit dem 2015 vereinbarten Waffenstillstand der FARC die Gewalt im Jahr 2018 wieder zugenommen hat und Men&shy;schen&shy;rechts&shy;ver&shy;tei&shy;di&shy;ger, Gewerkschaftsvertreter und Journalisten weiterhin bedroht, angegriffen und an der Ausübung ihrer Tätigkeit gehindert werden. Darüber hinaus sei festzustellen, dass die sozialen und wirtschaftlichen Entwicklungsmöglichkeiten der indigenen Bevölkerung des Landes stark eingeschränkt seien. Man&shy;gel&shy;er&shy;näh&shy;rung, Krankheiten und Kindersterblichkeit seien die Folge. 2019 registrierte Reporter ohne Grenzen, dass in Kolumbien ein Journalist im Zusammenhang mit seiner Tätigkeit getötet wurde. In der Rangliste der Pressefreiheit belegt das Land den 129. Platz von 180 Ländern.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Laut offiziellen Statistiken, werden bei 81% der Bevölkerung die Siedlungsabfälle eingesammelt (2012), und 1% der Abfälle wird recycelt (2011). 96,5% der Bevölkerung haben Zugang zu grundlegenden Trinkwasserdienstleistungen (2015), wobei zwischen den städtischen Gebieten mit 99,8% und den ländlichen Regionen mit 86,0% ein deutliches Stadt-Land-Gefälle zeigt. Auffallend ist darüber hinaus, dass lediglich 71,1% der Bevölkerung Zugang zu Trinkwasserquellen haben, die als sicher eingestuft werden. 77% der Bevölkerung sind an das Abwassersammelsystem angeschlossen (2010).
    </p>
    <p>
      Die CO<sub>2</sub> Emissionen pro Kopf liegen mit 1,8 Tonnen sowohl deutlich unter dem weltweiten Mittel (5,0 Tonnen) als auch unter dem Durchschnittwert in Lateinamerika (3,1 Tonnen).
    </p>
    <p>
      Im Folgenden wird jeweils eine Herausforderung auf einzelbetrieblicher Ebene aus den Gebieten dargestellt und aufgezeigt, wie Unternehmen versuchen, ihrer unternehmerischen Verantwortung in den beschriebenen Bereichen gerecht zu werden.
    </p>
    <p>
      Für Unternehmen ergeben sich in Kolumbien bezüglich Menschenrechte / Arbeitsbedingungen, Umwelt und Korruption unterschiedliche Herausforderungen, auf die in den folgenden Abschnitten exemplarisch näher eingegangen wird. Außerdem werden Beispiele beschrieben, wie Unternehmen in den drei Bereichen ihrer unternehmerischen Verantwortung nachkommen.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>