
import { StepData } from './types';

export const INSTRUCTION_HINT = "WICHTIG: Bitte schreibe deine Ergebnisse und Gedanken in dein Heft oder auf das Arbeitsblatt!";

export const STEPS: StepData[] = [
  {
    number: 1,
    icon: '📐',
    title: 'Beschreibung',
    subtitle: 'Was kannst du mit deinen Augen sehen?',
    description: 'Wir suchen zuerst nur Dinge, die man im Bild wirklich sieht. Bleib sachlich!',
    points: [
      'Was liegt ganz vorne auf dem Boden?',
      'Wer steht in der Mitte und hält eine Flagge?',
      'Welches große Gebäude siehst du im Hintergrund?',
      'Welche Kleidung tragen die verschiedenen Personen?',
      'Welche Farben und Lichtstimmungen dominieren?'
    ],
    sentenceStarters: [
      'Auf dem Bild erkenne ich...',
      'Im Vordergrund sieht man...',
      'In der Mitte befindet sich...',
      'Auffällig ist die Kleidung von...',
      'Die Farben wirken eher...'
    ],
    hints: [
      'Schau ganz unten: Da liegen tote Männer.',
      'Die Frau in der Mitte trägt ein helles Kleid und eine rote Mütze.',
      'Im Hintergrund erkennt man die Türme von Notre-Dame.',
      'Man sieht reiche Bürger mit Zylindern und arme Arbeiter.'
    ]
  },
  {
    number: 2,
    icon: '💭',
    title: 'Hypothesen',
    subtitle: 'Was vermutest du?',
    description: 'Hier geht es um deine Vermutungen. Was will uns der Maler sagen?',
    points: [
      'Warum ist die Frau in der Mitte so hell beleuchtet?',
      'Was könnte die Flagge für die Kämpfer bedeuten?',
      'Warum kämpfen hier so unterschiedliche Menschen zusammen?',
      'Wer ist wohl der Gegner, gegen den sie stürmen?',
      'Welches Gefühl soll das Bild beim Betrachter auslösen?'
    ],
    sentenceStarters: [
      'Ich vermute, die Frau steht für...',
      'Die Flagge könnte ein Symbol sein für...',
      'Der Maler will zeigen, dass alle Menschen...',
      'Ich glaube, das Ziel der Menschen ist...',
      'Das Bild wirkt auf mich sehr...'
    ],
    hints: [
      'Die Frau ist wahrscheinlich kein echter Mensch, sondern ein Symbol (Freiheit).',
      'Die Flagge steht für die Nation Frankreich.',
      'Das Zusammenstehen zeigt Einigkeit gegen einen gemeinsamen Feind.'
    ]
  },
  {
    number: 3,
    icon: '🕰️',
    title: 'Historischer Kontext',
    subtitle: 'Was passiert auf dem Bild?',
    description: 'Verbinde das Bild mit den geschichtlichen Fakten.',
    contextText: 'Im Juli 1830 gab es in Paris einen Aufstand (Juli-Revolution). Das Volk kämpfte gegen König Karl X., der die Pressefreiheit einschränkte. Das Bild zeigt den Moment, in dem die Menschen die Barrikaden stürmen.',
    points: [
      'In welchem Jahr und in welcher Stadt spielt die Szene?',
      'Gegen wen richtet sich der Aufstand der Menschen?',
      'Was waren die Gründe für den Streit (z.B. Zeitungsverbot)?',
      'Wie endete dieser Kampf für den König?',
      'Welche Rolle spielten die Barrikaden in den engen Gassen?'
    ],
    sentenceStarters: [
      'Das Bild zeigt die Ereignisse der...',
      'Der historische Hintergrund ist...',
      'Die Menschen kämpfen gegen...',
      'Ein wichtiger Grund für den Aufstand war...',
      'In dieser Zeit (1830) passierte in Paris...'
    ],
    hints: [
      'Es geht um die "Drei Glorreichen Tage" im Juli 1830.',
      'König Karl X. wollte die absolute Macht zurück.',
      'Die Menschen bauten Mauern aus Möbeln und Steinen (Barrikaden).'
    ]
  },
  {
    number: 4,
    icon: '🔍',
    title: 'Überprüfung',
    subtitle: 'Überprüfe deine Hypothesen',
    description: 'Vergleiche deine Vermutungen aus Schritt 2 mit dem Wissen aus Schritt 3.',
    points: [
      'Stimmten deine ersten Vermutungen mit den Fakten überein?',
      'Was hast du durch den Text über den Hintergrund neu gelernt?',
      'Gibt es Details im Bild, die du jetzt besser verstehst?',
      'Was hat der Maler vielleicht weggelassen oder schöner gemalt?',
      'Ist das Bild eine realistische Darstellung oder eine Helden-Geschichte?'
    ],
    sentenceStarters: [
      'Meine Hypothese aus Schritt 2 war...',
      'Nachdem ich den Kontext kenne, weiß ich nun...',
      'Besonders interessant finde ich, dass...',
      'Der Maler hat die Szene wahrscheinlich so gemalt, weil...',
      'Jetzt verstehe ich, dass das Symbol der Flagge...'
    ],
    hints: [
      'Überlege: Ist das Bild wie ein Foto oder eher wie ein Werbeplakat?',
      'Achte auf die "Heldendarstellung" der Freiheit.',
      'Manche Dinge sind symbolisch, nicht unbedingt real.'
    ]
  },
  {
    number: 5,
    icon: '🚦',
    title: 'Unsere Ampelbewertung',
    subtitle: 'Wie bewertest du das Bild? Wieso?',
    description: 'Gib dein abschließendes Urteil ab. Klicke auf die Ampel!',
    points: [
      'Ist das Bild eine gute Geschichtsquelle oder eher Propaganda?',
      'Kann man dem Bild glauben, wenn man wissen will, wie es damals war?',
      'Welche Farbe gibst du dem Bild für seine Glaubwürdigkeit?',
      'Warum hast du dich für diese Farbe entschieden?',
      'Was müsste man noch wissen, um das Bild voll zu verstehen?'
    ],
    sentenceStarters: [
      'Ich bewerte das Bild mit der Farbe..., weil...',
      'Als historische Quelle finde ich das Bild...',
      'Man muss beachten, dass der Maler...',
      'Das Bild will uns davon überzeugen, dass...',
      'Insgesamt halte ich die Darstellung für...'
    ],
    hints: [
      'Rot: Das Bild lügt oder übertreibt extrem.',
      'Gelb: Es zeigt Wahres, aber sehr einseitig.',
      'Grün: Es zeigt die Ereignisse sehr neutral und echt (selten bei Kunst!).'
    ]
  }
];

export const AMPEL_FEEDBACK = {
  red: "Rot: Du denkst, das Bild ist reine Propaganda. Es macht den grausamen Kampf zu einer schönen Heldengeschichte.",
  yellow: "Gelb: Gute Wahl! Das Bild zeigt echte Symbole und Ereignisse, aber es ist idealisiert (schöner gemacht).",
  green: "Grün: Du vertraust dem Maler sehr. Aber denk dran: Jedes Bild hat eine Absicht des Erfinders!"
};

export const SOLUTION_TEXT = "Zusammenfassung: Das Bild zeigt die Juli-Revolution 1830. In 5 Schritten haben wir beobachtet (Beschreibung), vermutet (Hypothesen), Fakten gelernt (Kontext), verglichen (Überprüfung) und bewertet (Ampel). Die 'Freiheit' führt das Volk zum Sieg.";
export const FOOTER_TIP = 'Tipp: Arbeite Schritt für Schritt. Nutze die Detektiv-Lupe, wenn du nicht weiterkommst!';
