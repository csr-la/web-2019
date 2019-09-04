<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Im Jahr 2017 betrug die Gesamtbevölkerung Argentiniens rund 44,5 Millionen Einwohner und das Bruttoinlandsprodukt rund 518 Milliarden US-Dollar. Nach der Klassifizierung der Weltbank ist Argentinien ein Land mit mittlerem Einkommen im oberen Bereich und belegt im Human Development Index (2017) Platz 47. Damit zählt Argentinien gemessen an der Lebenserwartung, dem Bildungsniveau sowie dem Lebensstandard zu der Kategorie der Länder mit sehr hoher menschlicher Entwicklung. Ein Gini-Koeffizient von 40,6% (2017) deutet darauf hin, dass die Einkommensverteilung in Argentinien im Vergleich zu Mitteleuropa stärker konzentriert ist. Verglichen mit anderen Ländern Lateinamerikas gehört Ar&shy;gen&shy;ti&shy;ni&shy;en jedoch zu den Ländern mit der moderatesten Einkommenskonzentration.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Eine Außenhandelsquote von 19,7% im Jahr 2017 weist auf eine un&shy;ter&shy;durch&shy;schnitt&shy;liche Einbindung Argentiniens in den internationalen Handel hin. 2018 importierte das Land Waren und Dienstleistungen im Wert von gut 85 Milliarden US-Dollar und exportierte für rund 75 Milliarden US-Dollar. Dass Argentinien in den zurückliegenden Jahren eher unterdurchschnittlich Interesse bei ausländischen Investoren geweckt hat, wird daran deutlich, dass der Bestand an Di&shy;rekt&shy;in&shy;ves&shy;ti&shy;ti&shy;onen 2018 lediglich 73 Milliarden US-Dollar beträgt. Dies entspricht 4% der Auslandsinvestitionen in Lateinamerika.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      In den zwölf Regierungsjahren des Ehepaares Néstor und Cristina Kirchner hatte sich Argentinien international zunehmend isoliert. Der seit Dezember 2015 amtierende Präsident Mauricio Macri versucht das wirtschaftlich weitgehend abgeschottete Land sukzessive zu öffnen. Neben der Umsetzung der wirt&shy;schafts&shy;po&shy;li&shy;tisch&shy;en Reformagenda ist das Land auch mit erheblichen gesellschaftlichen und ökologischen Herausforderungen konfrontiert. Der Kor&shy;rup&shy;ti&shy;ons&shy;wahr&shy;neh&shy;mungs&shy;index (CPI) von Transparency International (2019) führt Argentinien auf dem 85. Rang. Damit wird Korruption – auch verglichen mit anderen lateinamerikanischen Ländern – als weit verbreitet wahrgenommen.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Zu massiven Menschenrechtsverletzungen kam es in Argentinien in der Zeit der letzten Militärdiktatur, deren Folgen die Gesellschaft bis heute in starkem Maße bewegen. Darüber hinaus weist Human Rights Watch (2019) darauf hin, dass auch das heutige Argentinien mit Menschenrechtsproblemen konfrontiert ist, darunter fallen der Missbrauch polizeilicher Gewalt ebenso wie schlechte Haftbedingungen und die gehäuft auftretende Gewalt gegen Frauen. Darüber hinaus wird dem Land vorgeworfen, seiner indigenen Bevölkerung nur unzureichend Zugang zur Justiz sowie zu Land, Bildung, Gesundheitsversorgung und anderen staatlichen Basisleistungen zu gewähren und dieser Bevölkerungsgruppe außerdem nicht im ausreichenden Maße die vorgesehenen Partizipationsmöglichkeit bei der wirtschaftlichen Erschließung des Hinterlandes einzuräumen. Laut Reporter ohne Grenzen wurden 2019 in Argentinien keine Journalisten im Zusammenhang mit ihrer Tätigkeit getötet und das Land belegt Platz 57 in der Rangliste der Pressefreiheit.
    </p>
    <p>
      Bei 90% der Bevölkerung werden die Siedlungsabfälle eingesammelt (2010), wobei keine Angaben dazu vorliegen, welcher Anteil dieser Abfälle recycelt wird. 99,6% der Bevölkerung haben Zugang zu grundlegenden Trinkwasserdienstleistungen (2015). Obwohl diesbezüglich nur unwesentliche Unterschiede zwischen Stadt und Land festzustellen sind, hat jedoch in den Städten ein etwas geringerer Anteil der Bevölkerung Zugang zu Basisleistungen des Wassersektors. Ein Großteil der Bevölkerung kann eine als sicher eingestufte Trinkwasserversorgung in Anspruch nehmen (98,5%). Gleichzeitig sind aber nur 50% der Bevölkerung an das Abwassersammelsystem angeschlossen (2010). 2014 lagen die CO<sub>2</sub>-Emissionen pro Kopf bei 4,7 Tonnen und damit knapp unter dem durchschnittlichen weltweiten Pro-Kopf-Ausstoß an CO<sub>2</sub> von 5 Tonnen, aber deutlich über dem la&shy;tein&shy;ame&shy;ri&shy;ka&shy;nisch&shy;en Durchschnitt von 3,1 Tonnen.
    </p>
    <p>
      In den nächsten Abschnitten werden beispielhaft Herausforderungen von Unternehmen in Argentinien mit Bezug zu Menschenrechte/Arbeitsbedingungen, Umwelt und Korruption vorgestellt. Ferner wird exemplarisch aufgezeigt, wie Unternehmen ihrer gesellschaftlichen Verantwortung in den beschriebenen Bereichen gerecht werden.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>