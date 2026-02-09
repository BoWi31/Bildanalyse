
import { StepData } from './types';

export const INSTRUCTION_HINT = "WICHTIG: Bitte schreibe deine Ergebnisse und Gedanken in dein Heft oder auf ein Blatt Papier!";

export const STEPS: StepData[] = [
  {
    number: 1,
    icon: '📐',
    title: 'WAS SEHT IHR?',
    subtitle: 'Wo seht ihr das?',
    description: 'Wir suchen zuerst nur Dinge, die man im Bild mit den Augen finden kann. Schau genau hin!',
    points: [
      'Was liegt ganz vorne (unten) auf dem Boden?',
      'Wer steht genau in der Mitte und hält eine Flagge?',
      'Was hält der Junge auf der rechten Seite in den Händen?',
      'Welches große Gebäude siehst du hinten rechts im Rauch?',
      'Welche Farben hat die große Flagge in der Luft?'
    ],
    sentenceStarters: [
      'Ganz vorne am Boden sehe ich...',
      'In der Mitte steht eine Frau, die...',
      'Der Junge auf der rechten Seite hält...',
      'Im Hintergrund erkennt man...',
      'Die Flagge hat die Farben...'
    ],
    hints: [
      'Schau ganz unten: Da liegen tote Männer.',
      'Die Frau in der Mitte trägt ein helles Kleid.',
      'Der Junge hat zwei Pistolen.',
      'Die Kirche hinten heißt Notre-Dame.',
      'Die Flagge ist Blau, Weiß und Rot.'
    ]
  },
  {
    number: 2,
    icon: '🧩',
    title: 'WER IST ZU SEHEN?',
    subtitle: 'Kleidung und Gegenstände',
    description: 'Jetzt schauen wir uns die Personen genauer an. Wer kämpft hier eigentlich gemeinsam?',
    points: [
      'Was trägt der Mann mit dem hohen schwarzen Hut (Zylinder)?',
      'Wie sieht die Kleidung der Frau in der Mitte aus?',
      'Was für Waffen haben die verschiedenen Leute (Gewehre, Säbel)?',
      'Was tragen die Menschen auf dem Kopf (Mützen, Hüte)?',
      'Wie schauen die Gesichter der Kämpfer aus (mutig, wild)?'
    ],
    sentenceStarters: [
      'Der Mann mit dem Zylinder trägt...',
      'Die Frau in der Mitte wirkt...',
      'Ich sehe verschiedene Waffen, wie...',
      'An den Hüten erkenne ich, dass...',
      'Die Gesichter der Personen sehen... aus.'
    ],
    hints: [
      'Der Mann mit dem Zylinder sieht aus wie ein reicher Bürger.',
      'Die Frau trägt eine rote Mütze (Freiheitsmütze).',
      'Es gibt Gewehre mit Bajonetten (Messern vorne dran).',
      'Man sieht einfache Arbeiter und reiche Leute zusammen.',
      'Alle stürmen gemeinsam nach vorne.'
    ]
  },
  {
    number: 3,
    icon: '💭',
    title: 'WAS BEDEUTET DAS?',
    subtitle: 'Vermutungen und Ideen',
    description: 'Das Bild ist wie eine Geschichte. Warum hat der Maler die Leute genau so gemalt?',
    points: [
      'Warum ist die Frau in der Mitte so viel heller als der Rest?',
      'Warum kämpfen reiche und arme Menschen hier zusammen?',
      'Was könnte die erhobene Flagge für die Kämpfer bedeuten?',
      'Warum sind manche Soldaten am Boden fast nackt?',
      'Warum stürmen alle Leute in die gleiche Richtung?'
    ],
    sentenceStarters: [
      'Ich vermute, die Frau leuchtet so hell, weil...',
      'Der Maler will zeigen, dass alle Leute...',
      'Die Flagge ist ein Symbol für...',
      'Dass Soldaten am Boden liegen, bedeutet...',
      'Alle stürmen nach vorne, um zu zeigen...'
    ],
    hints: [
      'Die Frau ist ein Symbol für die Freiheit.',
      'Es kämpfen Bürger und Arbeiter für das gleiche Ziel.',
      'Die Flagge steht für Hoffnung und das Land Frankreich.',
      'Die Toten am Boden zeigen, wie schlimm der Kampf war.',
      'Die Richtung zeigt: Es geht in eine neue Zukunft.'
    ]
  },
  {
    number: 4,
    icon: '🕰️',
    title: 'DER HINTERGRUND',
    subtitle: 'Warum gab es Streit?',
    description: 'Hier erfährst du, was damals in Paris wirklich los war.',
    contextText: 'Stell dir vor, du lebst im Jahr 1830 in Paris. Der König, Karl X., will die totale Macht. Er verbietet plötzlich alle Zeitungen, damit niemand ihn kritisieren kann. Das ist der Funke! Die Menschen in Paris – egal ob arm oder reich – halten zusammen. Sie reißen das Pflaster aus den Straßen und bauen riesige Mauern aus Steinen und Möbeln, die "Barrikaden". Drei Tage lang (27. bis 29. Juli) tobt ein heftiger Kampf in den engen Gassen gegen die Soldaten des Königs. Über 600 Menschen sterben, aber das Volk siegt! Der König bekommt Angst und flieht nach England. Die Menschen feiern ihren Sieg für die Freiheit und bekommen einen neuen König, der verspricht, sich an die Gesetze zu halten.',
    points: [
      'Warum war das Verbot von Zeitungen so schlimm?',
      'Aus was bauten die Leute ihre Schutzmauern (Barrikaden)?',
      'Welche Gruppen von Menschen hielten im Kampf zusammen?',
      'Wie lange dauerten die Kämpfe in Paris?',
      'Wohin verschwand der König nach seiner Niederlage?'
    ],
    sentenceStarters: [
      'Das Zeitungsverbot war schlimm, weil...',
      'Die Barrikaden bestanden aus...',
      'Es hielten verschiedene Menschen zusammen, zum Beispiel...',
      'Die Kämpfe dauerten insgesamt...',
      'Nach dem Sieg des Volkes floh der König nach...'
    ],
    hints: [
      'Ohne Zeitungen gibt es keine freie Meinung mehr.',
      'Man nutzte Pflastersteine und Möbel für die Barrikaden.',
      'Reiche Bürger und arme Arbeiter kämpften Seite an Seite.',
      'Man nennt diese Zeit auch die "Drei Glorreichen Tage".',
      'König Karl X. floh ins Exil nach Großbritannien.'
    ]
  },
  {
    number: 5,
    icon: '🚦',
    title: 'DIE BEWERTUNG',
    subtitle: 'Glauben wir dem Bild?',
    description: 'Prüfe das Bild jetzt kritisch. Klicke unten auf die Ampelfarbe, die am besten passt!',
    points: [
      'Zeigt das Bild die echte Gewalt oder wirkt es eher wie ein Heldendrama?',
      'Warum malte Delacroix die Freiheit als starke Frau ohne Hemd?',
      'Fehlen im Bild vielleicht die schmutzigen und grausamen Seiten des Krieges?',
      'Ist das Bild neutral oder will es uns von der Revolution überzeugen?',
      'Klicke auf deine Wahl: Grün, Gelb oder Rot?'
    ],
    sentenceStarters: [
      'Das Bild wirkt auf mich eher wie...',
      'Die Darstellung der Freiheit soll zeigen, dass...',
      'Ich denke, der Maler hat weggelassen, dass...',
      'Das Ziel des Bildes ist es wahrscheinlich...',
      'Ich entscheide mich für die Ampelfarbe...'
    ],
    hints: [
      'Der Maler war ein Anhänger der Revolution, er war nicht neutral.',
      'Das Bild ist "idealisiert" – es macht alles schöner und stolzer.',
      'Die Frau ist eine "Allegorie" (ein personifiziertes Symbol).',
      'In der Geschichte muss man Quellen immer hinterfragen.',
      'Tipp: Ist ein Werbeplakat für die Freiheit 100% objektiv?'
    ]
  }
];

export const AMPEL_FEEDBACK = {
  red: "Rot? Nicht ganz. Das Bild ist zwar parteiisch (Propaganda), aber es zeigt ein echtes historisches Ereignis. Es ist nicht komplett gelogen, zeigt aber nur eine Seite.",
  yellow: "Richtig! Gelb ist die beste Wahl. Das Bild zeigt zwar die Wahrheit über den Aufstand, aber es übertreibt auch maßlos und macht alles heldenhafter, als es war. Man muss es kritisch prüfen!",
  green: "Grün? Sei vorsichtig! Das Bild ist kein Foto. Der Maler wollte die Revolution feiern und hat vieles erfunden oder verschönert. Es ist keine ganz neutrale Quelle."
};

export const SOLUTION_TEXT = "Zusammenfassung: Das Bild 'Die Freiheit führt das Volk' von Eugène Delacroix zeigt die Juli-Revolution von 1830 in Paris. Die Frau in der Mitte ist 'Liberté' (die Freiheit). Sie ist kein echter Mensch, sondern ein Symbol. Sie führt verschiedene soziale Schichten (Bürger, Arbeiter, Kinder) zum Sieg gegen die Herrschaft des Königs. Das Bild ist idealisiert, das heißt, es macht den Kampf schöner und heldenhafter, als er in echt war.";
export const FOOTER_TIP = 'Tipp: Erst beschreiben (Beweise im Bild), dann Vermutungen, danach den Kontext klären – und am Ende mit der Ampel abschließen.';
