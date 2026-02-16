
import { StepData } from './types';

export const INSTRUCTION_HINT = "WICHTIG: Bitte schreibe deine Ergebnisse und Gedanken in dein Heft oder auf das Arbeitsblatt!";

export const STEPS: StepData[] = [
  {
    number: 1,
    icon: '📐',
    title: 'Beschreibung',
    subtitle: 'Was kannst du mit deinen Augen sehen?',
    description: 'Wir suchen zuerst nur Dinge, die man im Bild wirklich sieht. Bleib sachlich und genau!',
    points: [
      'Was liegt ganz vorne auf dem Boden am unteren Bildrand?',
      'Wer steht in der Mitte und hält eine Flagge hoch?',
      'Welches große Gebäude erkennst du im Hintergrund rechts im Nebel?',
      'Welche unterschiedliche Kleidung tragen die Personen?',
      'Welche Farben und Lichtstimmungen fallen dir sofort auf?'
    ],
    sentenceStarters: [
      'Auf dem Bild erkenne ich...',
      'Im Vordergrund sieht man...',
      'In der Mitte befindet sich...',
      'Auffällig ist die Kleidung von...',
      'Die Farben wirken eher...'
    ],
    hints: [
      'Schau ganz unten: Da liegen gefallene Soldaten des Königs und Aufständische im Schlamm.',
      'Die Frau trägt eine rote Mütze (Phrygische Mütze) – ein Symbol der antiken Sklavenbefreiung.',
      'Im Hintergrund erkennt man klein die Türme der Kathedrale Notre-Dame in Paris.',
      'Man sieht einen Jungen mit Pistolen, einen Mann im Zylinder und einen Arbeiter in Hemdsärmeln.'
    ]
  },
  {
    number: 2,
    icon: '💭',
    title: 'Hypothesen',
    subtitle: 'Was vermutest du über den Inhalt?',
    description: 'Nutze die Details aus Schritt 1: Was verraten uns Kleidung, Waffen und Symbole über die Geschichte?',
    points: [
      'Welches historische Ereignis wird hier wohl gezeigt?',
      'Wer kämpft hier gegen wen? Schau auf die Uniformen vs. Alltagskleidung.',
      'Was verraten uns Zylinder und Arbeitertracht über das Bündnis der Menschen?',
      'Warum stürmen sie gemeinsam über Barrikaden? Was ist ihr Ziel?',
      'Welche Bedeutung hat die Trikolore für die Kämpfer in dieser Zeit?'
    ],
    sentenceStarters: [
      'Aufgrund der Kleidung vermute ich, dass hier verschiedene soziale Schichten...',
      'Das Bündnis aus Bürger (Zylinder) und Arbeiter zeigt wohl...',
      'Ich glaube, das Ziel des Sturmes ist...',
      'Die Flagge ist ein Zeichen dafür, dass sie für...',
      'Die Szene wirkt wie ein Aufstand gegen...'
    ],
    hints: [
      'Die Mischung aus "feinen Herren" (Zylinder) und "einfachem Volk" ist ein starker historischer Hinweis.',
      'Die Barrikaden deuten auf einen Häuserkampf in einer großen Stadt hin.',
      'Die Trikolore war unter den Bourbonen-Königen verboten – sie zu zeigen ist eine Straftat.'
    ]
  },
  {
    number: 3,
    icon: '🕰️',
    title: 'Historischer Kontext',
    subtitle: 'Die Juli-Revolution 1830',
    description: 'Hier findest du die Fakten. Vergleiche sie mit deinen Vermutungen.',
    contextText: 'Im Juli 1830 erließ König Karl X. die "Juli-Ordonnanzen": Er schaffte die Pressefreiheit ab und änderte das Wahlrecht zu seinen Gunsten. Das Volk von Paris reagierte mit den "Drei Glorreichen Tagen" (27.–29. Juli). Arbeiter, Studenten und Bürger errichteten über 4.000 Barrikaden. Sie kämpften gegen die königliche Garde. Delacroix malte das Bild kurz darauf, um den Sieg des Volkes über die absolute Macht des Königs zu feiern. Karl X. musste fliehen, und Louis-Philippe I., der "Bürgerkönig", bestieg den Thron.',
    points: [
      'Was waren die "Juli-Ordonnanzen" und warum lösten sie Wut aus?',
      'Warum war das Bündnis zwischen Bürgertum und Arbeitern so entscheidend?',
      'Wer war Karl X. und warum endete seine Herrschaft?',
      'Warum wurde Louis-Philippe als "Bürgerkönig" bezeichnet?',
      'Welche Rolle spielt Delacroix selbst? (Er malte sich evtl. als Mann im Zylinder).'
    ],
    sentenceStarters: [
      'Ein Auslöser der Revolution war das Verbot der...',
      'Die "Drei Glorreichen Tage" führten dazu, dass...',
      'König Karl X. wollte die Zeit zurückdrehen, indem er...',
      'Das Bild zeigt den Moment, als das Volk...',
      'Nach der Revolution änderte sich die Herrschaft zu...'
    ],
    hints: [
      'Die Revolution war eine Antwort auf den Versuch, die Ergebnisse von 1789 rückgängig zu machen.',
      'Barrikaden machten die engen Gassen von Paris für die Kavallerie des Königs unpassierbar.',
      'Obwohl das Volk siegte, bekam es keine Republik, sondern einen neuen, liberaleren König.'
    ]
  },
  {
    number: 4,
    icon: '🔍',
    title: 'Überprüfung',
    subtitle: 'Überprüfe deine Hypothesen',
    description: 'Vergleiche deine Vermutungen aus Schritt 2 mit den Fakten aus Schritt 3.',
    points: [
      'Welche deiner Vermutungen über die Kämpfer waren historisch korrekt?',
      'Ist die Frau eine echte Person? (Marianne/Allegorie)',
      'Warum stellt der Maler die Revolution so "sauber" und heroisch dar?',
      'Was hat Delacroix im Vergleich zur Realität des Kampfes verändert?',
      'Wie verändert das Wissen über Karl X. deinen Blick auf das Bild?'
    ],
    sentenceStarters: [
      'Ich dachte zuerst, die Frau sei echt, aber nun weiß ich...',
      'Das Bündnis der Klassen war tatsächlich so, weil...',
      'Der heroische Stil des Bildes dient dazu...',
      'Im Vergleich zu den Fakten wirkt das Bild...',
      'Besonders das Detail der Notre-Dame im Hintergrund bedeutet jetzt...'
    ],
    hints: [
      'Die Freiheit (Marianne) ist eine Allegorie – sie kann keine Kugeln abbekommen.',
      'Der Junge mit den Pistolen ist die Inspiration für "Gavroche" in Victor Hugos "Les Misérables".',
      'Propaganda oder Kunst? Delacroix wollte die Begeisterung der Freiheit einfangen.'
    ]
  },
  {
    number: 5,
    icon: '🚦',
    title: 'Unsere Ampelbewertung',
    subtitle: 'Wie bewertest du das Bild? Wieso?',
    description: 'Gib dein abschließendes Urteil ab. Wie nützlich ist dieses Bild für Historiker?',
    points: [
      'Ist das Bild eine objektive Quelle oder politische Werbung (Propaganda)?',
      'Was lernen wir über die Ideale der Menschen, was wir aus Texten nicht lernen?',
      'Welche Farbe gibst du dem Bild für seine historische Aussagekraft?',
      'Warum hast du dich für diese Bewertung entschieden?',
      'Wem würdest du dieses Bild zeigen, um die Revolution zu erklären?'
    ],
    sentenceStarters: [
      'Ich bewerte das Bild mit der Farbe..., weil...',
      'Als historische Quelle ist das Bild besonders wertvoll für...',
      'Man muss vorsichtig sein, da das Bild...',
      'Die emotionale Wirkung des Bildes zeigt uns...',
      'Insgesamt ist das Gemälde ein Zeugnis für...'
    ],
    hints: [
      'Rot: Das Bild verzerrt die Realität zu stark für eine sachliche Analyse.',
      'Gelb: Es ist ein wichtiges Zeitdokument, aber man muss die Absicht des Malers kennen.',
      'Grün: Es ist die perfekte Quelle, um den "Geist" und die Symbole der Freiheit zu verstehen.'
    ]
  }
];

export const AMPEL_FEEDBACK = {
  red: "Rot: Du siehst das Bild kritisch als heroisierende Propaganda, die den echten Schmutz und das Leid des Straßenkampfes ausblendet.",
  yellow: "Gelb: Eine differenzierte Sicht! Das Bild vermischt reale Ereignisse von 1830 mit starken Symbolen und Wunschbildern der Freiheit.",
  green: "Grün: Du betonst den Quellenwert für die Mentalitätsgeschichte – das Bild zeigt perfekt, wofür die Menschen damals bereit waren zu sterben!"
};

export const SOLUTION_TEXT = "Zusammenfassung: 'Die Freiheit führt das Volk' (1830) ist das Schlüsselbild der Juli-Revolution. Es zeigt Marianne als Symbol der Freiheit, die ein Bündnis aller sozialen Schichten (Bürger, Arbeiter, Jugend) gegen die Unterdrückung durch Karl X. anführt.";
export const FOOTER_TIP = 'Tipp: Schau dir noch einmal genau den Mann im Zylinder an – viele glauben, es ist Delacroix selbst!';
