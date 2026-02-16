
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
      'Schau ganz unten: Da liegen gefallene Soldaten und Aufständische.',
      'Die Frau in der Mitte trägt eine rote Mütze (Phrygische Mütze) – ein Symbol für Freiheit.',
      'Im Hintergrund erkennt man klein die Türme von Notre-Dame in Paris.',
      'Man sieht einen Jungen mit Pistolen, einen Mann im Zylinder und einen Arbeiter.'
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
      'Die Frau ist eine "Allegorie" (ein personifiziertes Symbol) für die Freiheit.',
      'Die Trikolore (Blau-Weiß-Rot) war damals als Flagge eigentlich verboten.',
      'Dass Arm und Reich gemeinsam kämpfen, ist eine starke politische Botschaft.'
    ]
  },
  {
    number: 3,
    icon: '🕰️',
    title: 'Historischer Kontext',
    subtitle: 'Was passiert auf dem Bild?',
    description: 'Verbinde das Bild mit den geschichtlichen Fakten.',
    contextText: 'Vom 27. bis 29. Juli 1830 ereigneten sich in Paris die "Drei Glorreichen Tage" (Les Trois Glorieuses). König Karl X. wollte die Pressefreiheit abschaffen und das Wahlrecht einschränken. Daraufhin bauten Arbeiter, Studenten und Bürger Barrikaden in den engen Gassen von Paris. Das Gemälde von Eugène Delacroix zeigt diesen Moment des Sturms. Am Ende musste der König fliehen und sein Cousin Louis-Philippe wurde neuer König – er nannte sich "Bürgerkönig", um zu zeigen, dass er für das Volk da ist.',
    points: [
      'Was waren die "Drei Glorreichen Tage" im Juli 1830?',
      'Warum wehrten sich die Menschen gegen König Karl X.?',
      'Was passierte nach der Flucht des alten Königs?',
      'Welche Bedeutung hatte die Trikolore in dieser Zeit?',
      'Wie wurden die Barrikaden aus Möbeln und Steinen genutzt?'
    ],
    sentenceStarters: [
      'Das Bild zeigt die Ereignisse der...',
      'Der historische Hintergrund ist...',
      'Die Menschen kämpfen gegen...',
      'Ein wichtiger Grund für den Aufstand war...',
      'In dieser Zeit (1830) passierte in Paris...'
    ],
    hints: [
      'König Karl X. wollte die absolute Macht zurück, wie vor der ersten Revolution 1789.',
      'Die Menschen bauten über 4000 Barrikaden in der Stadt.',
      'Delacroix selbst war kein Kämpfer, wollte aber "für sein Vaterland malen".'
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
      'Warum ist der Junge links (Vorbild für Gavroche) so wichtig?',
      'Warum zeigt der Maler die Freiheit barfuß und mit entblößter Brust?',
      'Was hat der Maler vielleicht weggelassen (z.B. den Gestank oder echten Dreck)?',
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
      'Die Freiheit ist keine echte Frau, sie ist eine "Idee", die das Volk anführt.',
      'Der Junge mit den Pistolen symbolisiert die aufmüpfige Jugend von Paris.',
      'Achte darauf, wie der Maler Licht nutzt, um die Szene dramatisch wirken zu lassen.'
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
      'Kann man dem Bild glauben, wenn man wissen will, wie es damals wirklich war?',
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
      'Rot: Das Bild ist fast wie ein Filmplakat – es soll begeistern, nicht neutral informieren.',
      'Gelb: Es zeigt zwar echte Ereignisse, ist aber eine künstlerische Interpretation.',
      'Grün: Es ist eine wertvolle Quelle für die "Gefühle" und Ideale der Menschen von 1830.'
    ]
  }
];

export const AMPEL_FEEDBACK = {
  red: "Rot: Du denkst, das Bild ist reine Propaganda. Es macht den grausamen Kampf zu einer schönen Helden-Erzählung und lässt das Leid der Toten fast heldenhaft wirken.",
  yellow: "Gelb: Gute Wahl! Das Bild zeigt echte Symbole und Ereignisse von 1830, aber es ist stark idealisiert (schöner gemacht), um die Revolution zu feiern.",
  green: "Grün: Du vertraust dem Maler sehr. Das Bild hilft uns heute zu verstehen, wofür die Menschen damals gestorben sind: Freiheit und Gleichheit!"
};

export const SOLUTION_TEXT = "Zusammenfassung: Das Gemälde 'Die Freiheit führt das Volk' von Eugène Delacroix entstand direkt nach der Juli-Revolution 1830. Es ist eines der berühmtesten Bilder der Kunstgeschichte und zeigt den Sieg des Volkes über die Willkür des Königs. Die zentrale Figur ist Marianne, die Verkörperung der französischen Republik.";
export const FOOTER_TIP = 'Tipp: Achte besonders auf den Kontrast zwischen den Toten am Boden und der strahlenden Freiheit in der Mitte!';
