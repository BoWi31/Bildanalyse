import React, { useState, useEffect } from "react";
import { STEPS, SOLUTION_TEXT, INSTRUCTION_HINT, AMPEL_FEEDBACK } from "./constants";
import Infographic from "./components/Infographic";

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [showWritingHelp, setShowWritingHelp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [ampelChoice, setAmpelChoice] = useState<null | "red" | "yellow" | "green">(null);

  const handlePrint = () => {
    window.print();
  };

  const currentStep = STEPS[activeStep];

  // ✅ WICHTIG: Auf Cloudflare Pages muss das i.d.R. absolut sein:
  // Lege das Bild nach public/Dummy_Bild.jpg (Ordner kannst du anlegen)
  const paintingUrl = "/Dummy_Bild.jpg";

  const backupUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1200px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = backupUrl;
  };

  // Reset Ampel-Wahl beim Navigieren
  useEffect(() => {
    if (activeStep !== 4) {
      setAmpelChoice(null);
    }
  }, [activeStep]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-x-hidden">
      {/* Navbar */}
      <nav className="no-print sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 h-16 md:h-20 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 text-white p-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-black text-xs md:text-sm tracking-tighter leading-none uppercase text-slate-900">Bildanalyse</h1>
            <p className="text-[7px] md:text-[8px] uppercase font-bold text-slate-400 tracking-widest mt-0.5">Geschichte 7</p>
          </div>
        </div>

        {/* Step Icons */}
        <div className="flex items-center gap-1.5 md:gap-4 bg-slate-100 p-1.5 md:p-2 rounded-2xl border border-slate-200">
          {STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => {
                setActiveStep(idx);
                setShowHints(false);
                setShowWritingHelp(false);
              }}
              className={`w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl transition-all active:scale-90 ${
                activeStep === idx
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100"
                  : "bg-white text-slate-400 hover:text-slate-600 border border-slate-200 shadow-sm"
              }`}
              aria-label={`Schritt ${step.number}: ${step.title}`}
            >
              {step.icon}
            </button>
          ))}
        </div>

        <button
          onClick={handlePrint}
          className="bg-slate-900 hover:bg-black text-white font-bold p-2.5 md:p-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
          aria-label="Drucken"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
            />
          </svg>
        </button>
      </nav>

      {/* Permanenter Schreib-Hinweis */}
      <div className="no-print bg-amber-400 border-b border-amber-600 px-4 py-3 text-center shadow-md z-40">
        <p className="text-xs md:text-sm font-black text-amber-950 uppercase tracking-widest flex items-center justify-center gap-3">
          <span className="text-xl">📝</span> {INSTRUCTION_HINT}
        </p>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-2 animate-in fade-in duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors z-[110]"
            aria-label="Schließen"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* ✅ Fix: korrektes <img> */}
          <img
            src={paintingUrl}
            onError={handleImageError}
            alt="Bildanalyse"
            className="max-w-full max-h-full object-contain rounded-sm shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Solution Modal */}
      {showSolution && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300"
          onClick={() => setShowSolution(false)}
        >
          <div
            className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] max-w-2xl shadow-2xl border-4 border-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-600 text-white p-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter">Die Lösung</h3>
            </div>

            <p className="text-lg md:text-2xl text-slate-700 leading-relaxed font-bold italic">{SOLUTION_TEXT}</p>

            <button
              onClick={() => setShowSolution(false)}
              className="mt-10 w-full bg-slate-900 text-white py-5 md:py-6 rounded-2xl font-black uppercase tracking-widest shadow-xl active:scale-95 transition-transform text-base md:text-lg"
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="no-print flex-grow container mx-auto p-4 md:p-6 lg:p-10 max-w-full">
        <div className="flex flex-col xl:flex-row gap-6 lg:gap-10 h-full">
          {/* Linke Seite: Bild */}
          <div className="w-full xl:w-[45%] h-auto xl:sticky xl:top-36">
            <div className="bg-slate-950 text-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col h-full border border-slate-900">
              <div
                className="relative group cursor-pointer flex-grow min-h-[300px] md:min-h-[400px]"
                onClick={() => setIsModalOpen(true)}
              >
                {/* ✅ Fix: nutzt jetzt paintingUrl mit / */}
                <img
                  src={paintingUrl}
                  onError={handleImageError}
                  alt="Bildquelle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-indigo-600/90 backdrop-blur-md text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-lg border border-indigo-400/30">
                    SCHRITT {currentStep.number} von 5
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
                    <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-1">
                      {currentStep.title}
                    </h2>
                    <p className="text-indigo-400 text-sm md:text-lg font-black italic tracking-tight uppercase">
                      {currentStep.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Seite: Aufgaben & Hilfe */}
          <div className="w-full xl:w-[55%] flex flex-col gap-8">
            <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-slate-200/60 p-6 md:p-10 lg:p-14 flex flex-col gap-10">
              <div className="max-w-4xl w-full">
                <p className="text-2xl md:text-3xl lg:text-4xl text-slate-800 leading-tight font-black tracking-tight mb-8">
                  {currentStep.description}
                </p>

                {currentStep.contextText && (
                  <div className="bg-slate-900 text-white p-8 md:p-10 rounded-[2.5rem] border-l-[12px] border-indigo-500 shadow-xl animate-in fade-in slide-in-from-bottom duration-500">
                    <h4 className="text-indigo-400 font-black uppercase text-xs tracking-[0.4em] mb-4">Hintergrund-Wissen</h4>
                    <p className="text-lg md:text-2xl font-bold leading-relaxed italic">{currentStep.contextText}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-8 items-start w-full">
                <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border-2 border-slate-100 shadow-sm flex flex-col h-full">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse"></span>
                    Deine Aufgaben
                  </h4>
                  <ul className="space-y-6 flex-grow">
                    {currentStep.points.map((p: string, i: number) => (
                      <li key={i} className="flex items-start gap-5 text-slate-900 font-black leading-tight text-lg md:text-xl">
                        <span className="w-10 h-10 rounded-2xl bg-white text-indigo-700 flex items-center justify-center text-sm font-black flex-shrink-0 shadow-sm border-2 border-slate-100">
                          {i + 1}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-5 h-full">
                  {/* Interaktive Ampel nur in Schritt 5 */}
                  {activeStep === 4 && (
                    <div className="bg-slate-900 p-8 rounded-[2.2rem] shadow-2xl border-4 border-slate-800 mb-4 animate-in slide-in-from-right duration-500">
                      <h4 className="text-white font-black uppercase text-center text-xs tracking-widest mb-6">
                        Wähle die richtige Ampelfarbe:
                      </h4>

                      <div className="flex justify-center gap-6">
                        <button
                          onClick={() => setAmpelChoice("red")}
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 border-4 transition-all active:scale-90 ${
                            ampelChoice === "red"
                              ? "border-white shadow-[0_0_25px_rgba(220,38,38,0.8)] scale-110"
                              : "border-red-900/50 opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
                          }`}
                          aria-label="Rot"
                        />
                        <button
                          onClick={() => setAmpelChoice("yellow")}
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 border-4 transition-all active:scale-90 ${
                            ampelChoice === "yellow"
                              ? "border-white shadow-[0_0_25px_rgba(250,204,21,0.8)] scale-110"
                              : "border-yellow-900/50 opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
                          }`}
                          aria-label="Gelb"
                        />
                        <button
                          onClick={() => setAmpelChoice("green")}
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500 border-4 transition-all active:scale-90 ${
                            ampelChoice === "green"
                              ? "border-white shadow-[0_0_25px_rgba(34,197,94,0.8)] scale-110"
                              : "border-green-900/50 opacity-40 grayscale hover:grayscale-0 hover:opacity-100"
                          }`}
                          aria-label="Grün"
                        />
                      </div>

                      {ampelChoice && (
                        <div
                          className={`mt-8 p-6 rounded-2xl border-2 font-bold text-center animate-in zoom-in-95 duration-300 ${
                            ampelChoice === "yellow"
                              ? "bg-yellow-50 border-yellow-400 text-yellow-900"
                              : "bg-slate-800 border-slate-700 text-slate-300"
                          }`}
                        >
                          <p className="text-lg italic leading-tight">
                            {ampelChoice === "red" && AMPEL_FEEDBACK.red}
                            {ampelChoice === "yellow" && AMPEL_FEEDBACK.yellow}
                            {ampelChoice === "green" && AMPEL_FEEDBACK.green}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => setShowHints(!showHints)}
                    className={`w-full flex items-center justify-between p-7 md:p-8 rounded-[2.2rem] font-black uppercase tracking-widest transition-all shadow-lg text-lg border-b-8 active:scale-[0.98] ${
                      showHints ? "bg-amber-400 text-amber-950 border-amber-600" : "bg-slate-900 text-white border-slate-700 hover:bg-slate-800"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-3xl">{showHints ? "📖" : "🔍"}</span>
                      <span>Detektiv-Lupe</span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 transition-transform duration-300 ${showHints ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showHints && (
                    <div className="bg-amber-50 p-6 rounded-[2.2rem] border-4 border-amber-200 shadow-inner animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-3">
                        {currentStep.hints.map((hint: string, i: number) => (
                          <div
                            key={i}
                            className="bg-white p-5 rounded-2xl border-2 border-amber-100 text-amber-950 font-black text-base md:text-lg flex items-center gap-5 shadow-sm"
                          >
                            <span className="text-amber-400 text-2xl">★</span>
                            {hint}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setShowWritingHelp(!showWritingHelp)}
                    className={`w-full flex items-center justify-between p-7 md:p-8 rounded-[2.2rem] font-black uppercase tracking-widest transition-all shadow-lg text-lg border-b-8 active:scale-[0.98] ${
                      showWritingHelp ? "bg-indigo-100 text-indigo-950 border-indigo-300" : "bg-indigo-600 text-white border-indigo-900 hover:bg-indigo-700"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-3xl">{showWritingHelp ? "✍️" : "💡"}</span>
                      <span>Schreib-Hilfe</span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-8 w-8 transition-transform duration-300 ${showWritingHelp ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {showWritingHelp && (
                    <div className="bg-indigo-50 p-6 rounded-[2.2rem] border-4 border-indigo-100 shadow-inner animate-in slide-in-from-top-4 duration-300">
                      <div className="space-y-3">
                        {currentStep.sentenceStarters.map((s: string, i: number) => (
                          <div
                            key={i}
                            className="bg-white p-5 rounded-2xl border-2 border-indigo-100 text-indigo-950 font-black text-base md:text-lg italic shadow-sm leading-tight"
                          >
                            „{s}“
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-10 flex flex-wrap items-center justify-between gap-6 border-t-2 border-slate-100">
                <button
                  disabled={activeStep === 0}
                  onClick={() => {
                    setActiveStep((prev) => prev - 1);
                    setShowHints(false);
                    setShowWritingHelp(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex-1 min-w-[140px] max-w-[200px] flex items-center justify-center gap-3 py-5 rounded-[2rem] font-black transition-all disabled:opacity-20 hover:bg-slate-100 text-slate-500 border-2 border-slate-200 active:scale-95 uppercase tracking-widest text-[10px] md:text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                  Zurück
                </button>

                <div className="flex-1 flex justify-center order-3 sm:order-none w-full sm:w-auto">
                  {activeStep === 4 && (
                    <button
                      onClick={() => setShowSolution(true)}
                      className="bg-blue-600/10 hover:bg-blue-600 text-blue-700 hover:text-white transition-all text-[11px] font-black uppercase tracking-[0.3em] px-8 py-3 rounded-full border-2 border-blue-200 active:scale-90"
                    >
                      Gesamt-Lösung
                    </button>
                  )}
                </div>

                {activeStep < 4 ? (
                  <button
                    onClick={() => {
                      setActiveStep((prev) => prev + 1);
                      setShowHints(false);
                      setShowWritingHelp(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex-1 min-w-[140px] max-w-[200px] flex items-center justify-center gap-4 bg-indigo-600 text-white py-5 rounded-[2rem] font-black shadow-2xl hover:bg-indigo-700 active:scale-95 border-b-8 border-indigo-900 uppercase tracking-widest text-[10px] md:text-xs"
                  >
                    Weiter
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={handlePrint}
                    className="flex-1 min-w-[140px] max-w-[200px] flex items-center justify-center gap-4 bg-green-600 text-white py-5 rounded-[2rem] font-black shadow-2xl hover:bg-green-700 active:scale-95 border-b-8 border-green-800 uppercase tracking-widest text-[10px] md:text-xs"
                  >
                    Drucken
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Druck-Ansicht */}
      <div className="hidden print:block absolute inset-0">
        <Infographic />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @media print {
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
