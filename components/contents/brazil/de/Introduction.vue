<template>
  <div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Mit rund 209,5 Millionen Einwohnern und einem Bruttoinlandsprodukt von 1'869 Milliarden US-Dollar ist Brasilien die mit deutlichem Abstand größte Volks&shy;wirtschaft Lateinamerikas und das einzige portugiesischsprachige Land der Region. Bezogen auf das durchschnittliche Pro-Kopf-Einkommen klassifiziert die Weltbank (2018) Brasilien als Land im oberen mittleren Einkommensbereich und im Wohlstandsindikator der Vereinten Nationen HDI (2018) belegt das Land weltweit den 79. Rang. Damit gehört Brasilien in die Gruppe der Länder, die bezogen auf die Lebenserwartung, das Bildungsniveau sowie den Lebensstandard einen hohen Entwicklungsgrad aufweisen. Ein Gini-Koeffizient von 53,3% (2017) macht jedoch deutlich, dass die Einkommenskluft zwischen Arm und Reich in Brasilien so groß wie nur in wenigen anderen Ländern weltweit ist.
      </p>
      <SideTable tableType="gdp" :tableData="gdpData" :color="color"/>
    </div>
    <div class="clearfix-left">
      <p class="xl:float-left">
        Brasilien ist ein Land mit großer Binnenwirtschaft, in der ein Großteil der Arbeitsteilung im Inland stattfindet. Dies belegt eine Außenhandelsquote von lediglich 29,1% im Jahr 2018. Im selben Jahr summierten sich die Einfuhren von Waren und Dienstleistungen auf knapp 267 Milliarden US-Dollar und die Ausfuhren auf gut 277 Milliarden US-Dollar. Ebenfalls im gleichen Jahr betrug der Bestand an ausländischen Direktinvestitionen in Brasilien 684 Milliarden US-Dollar. Damit wurde über ein Drittel aller Auslandsinvestitionen in Lateinamerika (36%) in Brasilien getätigt.
      </p>
      <SideTable tableType="exports" :tableData="exportsData" :color="color"/>
    </div>
    <p>
      Brasilien wird seit 2014 von einer tiefgreifenden politischen und wirtschaftlichen Krise erschüttert, die durch den Korruptionsskandal um den halbstaatlichen Erdölkonzern Petrobrás ausgelöst wurde. Gemäß den Daten von Transparency International (2019) wird Korruption in Brasilien als weit verbreitet wahr&shy;ge&shy;nom&shy;men. Im Korruptionsindex der Organisation belegt das Land weltweit den 105. Platz von 180 im weltweiten Vergleich.
    </p>
    <ImageSlider :sliderImages="sliderImages" :color="color"/>
    <p>
      Laut Human Rights Watch (2017) kennzeichnen chronische Men&shy;schen&shy;rechts&shy;pro&shy;bleme den brasilianischen Sicherheitsapparat, dazu gehören extralegale Tötungen durch Polizisten, Überbelegung von Gefängnissen sowie Folter und Misshandlung von Häftlingen. Auch von Seiten der Wirtschaft sind wiederholt Fälle von Menschenrechtsverletzungen dokumentiert. Hierzu zählen Fälle von Zwangsarbeit und missbräuchliche Arbeitsbedingungen unter sklavenähnlichen Zuständen. Darüber hinaus sehen sich Aktivisten, die sich für die Rechte der landlosen und indigenen Bevölkerung stark machen, zum Teil massiven Angriffen, Drohungen und Einschüchterungen ausgesetzt. 2018 wurde in Brasilien nach Angaben von Reporter ohne Grenzen kein Journalist im Zusammenhang mit seiner Tätigkeit getötet und ein Journalist inhaftiert. Das Land belegt Platz 105 in der Rangliste der Pressefreiheit.
    </p>
    <p>
      In Brasilien werden bei 91% der Bevölkerung die Siedlungsabfälle eingesammelt (2012) und rund 1% der Abfälle wird recycelt (2000). 97,5% der Bevölkerung haben Zugang zu grundlegenden Trinkwasserdienstleistungen (2015), wobei ein deutliches Gefälle zwischen städtischen Gebieten (99,3%) und dem ländlichen Raum (86,6%) festzustellen ist. Bezüglich des Anteils der Bevölkerung, der über Zugang zu als sicher eingestuften Trinkwasserquellen verfügt, liegen keine statistischen Daten vor. 45% der Bevölkerung sind an ein Abwassersammelsystem angeschlossen (1993).
    </p>
    <p>
      Der brasilianische Pro-Kopf-Ausstoß an CO<sub>2</sub> lag 2014 bei 2,6 Tonnen und damit sowohl unter dem weltweiten Mittel (5,0 Tonnen) als auch dem la&shy;tein&shy;ame&shy;ri&shy;ka&shy;nisch&shy;en Durchschnittswert von 3,1 Tonnen.
    </p>
    <p>
      Anhand von ausgewählten Beispielen wird in den nächsten Abschnitten beschrieben, mit welchen Herausforderungen sich Unternehmen in Brasilien in den Bereichen Menschenrechte/Arbeitsbedingungen, Umwelt und Korruption konfrontiert sehen. Außerdem wird exemplarisch vorgestellt, welche Maßnahmen Unternehmen ergreifen um ihrer gesellschaftlichen Verantwortung gerecht zu werden.
    </p>
  </div>
</template>

<script>
  export default {
    props: ['color', 'sliderImages', 'gdpData', 'exportsData']
  }
</script>