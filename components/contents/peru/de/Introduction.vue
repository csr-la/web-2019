<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Im Jahr 2018 lebten in Peru knapp 32 Millionen Einwohner und das Land verfügte über eine Wirtschaftsleistung von 222 Milliarden US-Dollar. Ein durchschnittliches Pro-Kopf-Einkommen von knapp über 6&thinsp;000 US-Dollar entspricht laut Weltbank (2017) der Einstufung als Land mit mittlerem Einkommen im oberen Bereich. Im Human Development Index der Vereinten Nationen belegt Peru den 89. Rang. Gemessen an der Lebenserwartung, dem Bildungsniveau sowie dem Lebensstandard wird dem Land damit eine hohe menschliche Entwicklung attestiert. Der Gini-Koeffizient von 43,3% (2017) macht jedoch deutlich, dass in Peru erhebliche Einkommensunterschiede existieren, auch wenn diese nicht ganz so ausgeprägt sind wie in anderen Ländern Lateinamerikas.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        2018 lag die peruanische Außenhandelsquote bei 49,0%, wobei das Land Waren und Dienstleistungen im Wert von knapp unter 53 Milliarden US-Dollar importierte und von etwas mehr als 56 Milliarden US-Dollar exportierte. Im gleichen Jahr betrug der ausländische Direktinvestitionsbestand in Peru 104 Milliarden US-Dollar womit das Land 6% der in Lateinamerika getätigten Investitionen auf sich vereinigte.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Auf dem Korruptionswahrnehmungsindex der Nichtregierungsorganisation Transparency International (2019) rangiert Peru auf Platz 105 und gilt damit als ein Land mit hoher Korruptionsanfälligkeit im öffentlichen Sektor. Laut Human Rights Watch (2017) wurden bei Protesten gegen Bergbauprojekte und größere In&shy;fra&shy;struk&shy;tur&shy;maß&shy;nah&shy;men in den vergangenen Jahren wiederholt Zivilisten durch Si&shy;cher&shy;heits&shy;kräfte verletzt und getötet. Wobei jedoch festzustellen sei, dass die Gewalt in jüngster Zeit zurückgegangen ist. Journalisten, die Korruption von öffentlichen Amtsträgern und Geschäftsleuten untersuchen, würden jedoch mit Ver&shy;leum&shy;dungs&shy;kla&shy;gen eingedeckt, eingeschüchtert und bedroht. Reporter ohne Grenzen hält fest, dass 2018 kein Journalist im Zusammenhang mit seiner Tätigkeit getötet und 1 Journalist inhaftiert wurde. In der Rangliste der Pressefreiheit landet Peru auf Platz 85 von 180 Ländern.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Bei 75% der peruanischen Bevölkerung werden die Siedlungsabfälle eingesammelt (2001) und 15% der Abfälle werden recycelt (2001). Im Jahr 2015 hatten 89,9% der Einwohner Perus Zugang zu grundlegenden Trinkwasserdienstleistungen, wobei eine deutliche Kluft zwischen Stadt (94,6%) und Land (72,4%) bestand. Ferner ist festzustellen, dass lediglich die Hälfte der Bevölkerung aus Trinkwasserquellen versorgt wurde, die als sicher eingestuft sind (50,2%). Gemäß der letzten vorliegenden Zahlen sind 81% der Bevölkerung an das Abwassersammelsystem angeschlossen (2009).
    </p>
    <p>
      Mit einem Pro-Kopf-Ausstoß von 2,0 Tonnen liegen die peruanischen CO<sub>2</sub>-Emissionen sowohl unter dem weitweiten Niveau von durchschnittlich 5 Tonnen als auch unter dem regionalen Durchschnitt für Lateinamerika von 3,1 Tonnen pro Kopf.
    </p>
    <p>
      Mit welchen Herausforderungen sich Unternehmen in Peru in den Bereichen Menschenrechte/Arbeitsbedingungen, Umwelt und Korruption konfrontiert sehen, wird in den folgenden Abschnitten anhand von Beispielen beschrieben. Darüber hinaus wird exemplarisch aufgezeigt, wie Unternehmen ihre verantwortungsvolle Unternehmensführung konkret ausgestalten.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>