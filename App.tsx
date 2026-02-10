import React, { useEffect, useRef, useState } from "react";
import { STEPS, SOLUTION_TEXT, INSTRUCTION_HINT, AMPEL_FEEDBACK } from "./constants";

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [showWritingHelp, setShowWritingHelp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [ampelChoice, setAmpelChoice] = useState<null | "red" | "yellow" | "green">(null);

  const handlePrint = () => window.print();

  const currentStep: any = STEPS[activeStep];

  // ✅ Cloudflare Pages: Bild aus /public laden (public/Dummy_Bild.jpg)
  const paintingUrl = "/Dummy_Bild.jpg";

  const backupUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1200px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = backupUrl;
  };

  useEffect(() => {
    if (activeStep !== 4) setAmpelChoice(null);
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
          {STEPS.map((step: any, idx: number) => (
            <button
              key={step.number ?? idx}
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

      {/* Image Modal (Original + optional Lupe) */}
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

          <div className="w-full max-w-[1400px] px-2" onClick={(e) => e.stopPropagation()}>
            <MagnifierImage
              src={paintingUrl}
              alt="Bildanalyse"
              onError={handleImageError}
              fallbackSrc={backupUrl}
              // Feintuning:
              lensSize={220}
              zoom={2.6}
            />
          </div>
        </div>
      )}

      {/* Solution Modal (kurzer Text in Webansicht) */}
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
                    <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-1">{currentStep.title}</h2>
                    <p className="text-indigo-400 text-sm md:text-lg font-black italic tracking-tight uppercase">{currentStep.subtitle}</p>
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
                  <div className="bg-slate-900 text-white p-8 md:p-10 rounded-[2.5rem] border-l-[12px] border-indigo-500 shadow-xl">
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
                    <div className="bg-slate-900 p-8 rounded-[2.2rem] shadow-2xl border-4 border-slate-800 mb-4">
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
                          className={`mt-8 p-6 rounded-2xl border-2 font-bold text-center ${
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
                    <div className="bg-amber-50 p-6 rounded-[2.2rem] border-4 border-amber-200 shadow-inner">
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
                    <div className="bg-indigo-50 p-6 rounded-[2.2rem] border-4 border-indigo-100 shadow-inner">
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
                      Gesamt-Lösung (kurz)
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
                    Drucken (Gesamtlösung)
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

      {/* ✅ Druck-Ansicht: komplette Gesamtlösung (alle Schritte + Ampel + Lösungstext) */}
      <div className="hidden print:block">
        <PrintAllSteps />
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }

          .print-root {
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
            color: #0f172a;
            padding: 18mm 14mm;
          }

          .print-header h1 { font-size: 18pt; margin: 0 0 6mm 0; }
          .print-header p { margin: 0 0 8mm 0; font-size: 10pt; color: #334155; }

          .print-image img {
            width: 100%;
            max-height: 90mm;
            object-fit: contain;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
          }

          .print-section { margin: 0 0 8mm 0; }
          .print-step h2 { font-size: 14pt; margin: 0 0 2mm 0; }

          .print-subtitle {
            margin: 0 0 4mm 0;
            font-size: 10pt;
            color: #475569;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: .08em;
          }

          .print-desc { margin: 0 0 4mm 0; font-size: 11pt; }

          .print-box {
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 5mm 6mm;
            margin: 0 0 5mm 0;
          }

          .print-box h3 { margin: 0 0 3mm 0; font-size: 11pt; }
          .print-box p, .print-box li { font-size: 10.5pt; line-height: 1.35; }
          .print-box ol, .print-box ul { margin: 0 0 0 5mm; padding: 0; }

          .page-break { page-break-after: always; }

          .ampel-grid { display: grid; grid-template-columns: 1fr; gap: 4mm; }
          .ampel-item { border: 1px solid #e2e8f0; border-radius: 10px; padding: 5mm 6mm; }
          .ampel-item h4 { margin: 0 0 2mm 0; font-size: 11pt; }
          .ampel-item p { margin: 0; font-size: 10.5pt; }
        }
      `}</style>
    </div>
  );
}

function PrintAllSteps() {
  return (
    <div className="print-root">
      <header className="print-header print-section">
        <h1>Bildanalyse – Gesamtlösung (Schritte 1–5)</h1>
        <p>{INSTRUCTION_HINT}</p>
      </header>

      <section className="print-image print-section">
        <h2 style={{ fontSize: "12pt", marginBottom: "3mm" }}>Bild</h2>
        <img
          src="/Dummy_Bild.jpg"
          alt="Bildquelle"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1200px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg";
          }}
        />
      </section>

      {STEPS.map((step: any, idx: number) => (
        <section key={step.number ?? idx} className="print-step print-section">
          <h2>
            Schritt {step.number}: {step.title}
          </h2>
          {step.subtitle ? <p className="print-subtitle">{step.subtitle}</p> : null}
          {step.description ? <p className="print-desc">{step.description}</p> : null}

          {step.contextText ? (
            <div className="print-box">
              <h3>Hintergrund-Wissen</h3>
              <p>{step.contextText}</p>
            </div>
          ) : null}

          {Array.isArray(step.points) && step.points.length > 0 ? (
            <div className="print-box">
              <h3>Aufgaben</h3>
              <ol>
                {step.points.map((p: string, i: number) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            </div>
          ) : null}

          {Array.isArray(step.hints) && step.hints.length > 0 ? (
            <div className="print-box">
              <h3>Detektiv-Lupe (Hinweise)</h3>
              <ul>
                {step.hints.map((h: string, i: number) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {Array.isArray(step.sentenceStarters) && step.sentenceStarters.length > 0 ? (
            <div className="print-box">
              <h3>Schreib-Hilfe (Satzstarter)</h3>
              <ul>
                {step.sentenceStarters.map((s: string, i: number) => (
                  <li key={i}>"{s}"</li>
                ))}
              </ul>
            </div>
          ) : null}

          {idx < STEPS.length - 1 ? <div className="page-break" /> : null}
        </section>
      ))}

      <div className="page-break" />

      <section className="print-section">
        <h2 style={{ fontSize: "14pt", marginBottom: "3mm" }}>Gesamtlösung</h2>

        <div className="print-box">
          <h3>Lösungstext</h3>
          <p>{SOLUTION_TEXT}</p>
        </div>

        <div className="print-box">
          <h3>Ampel – Begründungen</h3>
          <div className="ampel-grid">
            <div className="ampel-item">
              <h4>Rot</h4>
              <p>{AMPEL_FEEDBACK.red}</p>
            </div>
            <div className="ampel-item">
              <h4>Gelb</h4>
              <p>{AMPEL_FEEDBACK.yellow}</p>
            </div>
            <div className="ampel-item">
              <h4>Grün</h4>
              <p>{AMPEL_FEEDBACK.green}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* =========================
   Magnifier (Originalbild + Lupe)
   - Bild bleibt "normal" (contain)
   - Optional Lupe aktivieren: vergrößert Bereich unter Cursor/Finger
   ========================= */

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function MagnifierImage({
  src,
  alt,
  onError,
  fallbackSrc,
  lensSize = 220,
  zoom = 2.6,
}: {
  src: string;
  alt: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  fallbackSrc?: string;
  lensSize?: number; // px
  zoom?: number; // 2.0 - 4.0 sinnvoll
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const [lensOn, setLensOn] = useState(false);
  const [inside, setInside] = useState(false);

  // Position relativ zum Bild (0..1)
  const [rel, setRel] = useState({ x: 0.5, y: 0.5 });

  // Bild-Rechteck im Layout (für Background-Calc)
  const [rect, setRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

  const updateRect = () => {
    const el = imgRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setRect({ left: r.left, top: r.top, width: r.width, height: r.height });
  };

  useEffect(() => {
    updateRect();
    const onResize = () => updateRect();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const setFromClient = (clientX: number, clientY: number) => {
    const r = rect;
    if (!r) return;
    const x = (clientX - r.left) / r.width;
    const y = (clientY - r.top) / r.height;
    setRel({ x: clamp(x, 0, 1), y: clamp(y, 0, 1) });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!lensOn) return;
    setFromClient(e.clientX, e.clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!lensOn) return;
    if (e.touches.length < 1) return;
    const t = e.touches[0];
    setFromClient(t.clientX, t.clientY);
  };

  // Lens-Position in px innerhalb des Bildes
  const lensLeftPx = rect ? rel.x * rect.width : 0;
  const lensTopPx = rect ? rel.y * rect.height : 0;

  // Hintergrundgröße (auf gerendertem Bild basierend, *zoom)
  const bgSize = rect ? `${rect.width * zoom}px ${rect.height * zoom}px` : "0 0";

  // Hintergrundposition: so, dass die Mitte der Lupe den vergrößerten Punkt zeigt
  const bgPos = rect
    ? `${-(rel.x * rect.width * zoom - lensSize / 2)}px ${-(rel.y * rect.height * zoom - lensSize / 2)}px`
    : "0 0";

  return (
    <div className="relative w-full">
      {/* Controls */}
      <div className="absolute top-3 left-3 z-[120] flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 rounded-full font-black uppercase tracking-widest text-xs md:text-sm backdrop-blur border ${
            lensOn ? "bg-amber-400 text-amber-950 border-amber-300" : "bg-white/15 text-white border-white/20 hover:bg-white/25"
          }`}
          onClick={() => {
            setLensOn((v) => !v);
            // beim Einschalten Rect neu messen (falls Font/Scale etc)
            setTimeout(updateRect, 0);
          }}
        >
          {lensOn ? "Lupe: AN" : "Lupe: AUS"}
        </button>

        <div className="px-3 py-2 rounded-full text-white text-xs md:text-sm font-black bg-white/10 border border-white/15 backdrop-blur">
          Tipp: Lupe an → über Details fahren
        </div>
      </div>

      {/* Image wrapper (fixed height for modal) */}
      <div
        ref={wrapRef}
        className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center"
        onMouseEnter={() => lensOn && setInside(true)}
        onMouseLeave={() => setInside(false)}
        onMouseMove={onMouseMove}
        onTouchStart={() => lensOn && setInside(true)}
        onTouchEnd={() => setInside(false)}
        onTouchMove={onTouchMove}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={(e) => {
            // 1) erst normale onError-Logik
            onError?.(e);
            // 2) optional: wenn du lieber fix fallback willst
            if (fallbackSrc) {
              (e.currentTarget as HTMLImageElement).src = fallbackSrc;
            }
          }}
          onLoad={() => updateRect()}
          className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
          draggable={false}
        />

        {/* Lens */}
        {lensOn && inside && rect && (
          <div
            className="pointer-events-none absolute"
            style={{
              // Position relativ zum Bild: wir brauchen das Bild als Bezug -> deshalb setzen wir die Lupe über das Bild,
              // aber wir positionieren innerhalb des Wrappers anhand von imgRect.
              left: 0,
              top: 0,
              width: rect.width,
              height: rect.height,
            }}
          >
            {/* Kreis-Lupe */}
            <div
              style={{
                position: "absolute",
                left: `calc(${lensLeftPx}px - ${lensSize / 2}px)`,
                top: `calc(${lensTopPx}px - ${lensSize / 2}px)`,
                width: `${lensSize}px`,
                height: `${lensSize}px`,
                borderRadius: "9999px",
                border: "4px solid rgba(255,255,255,0.85)",
                boxShadow: "0 18px 60px rgba(0,0,0,0.6)",
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: bgSize,
                backgroundPosition: bgPos,
                overflow: "hidden",
                // leichter Glas-Effekt
                backdropFilter: "blur(0.5px)",
              }}
            />

            {/* Fadenkreuz */}
            <div
              style={{
                position: "absolute",
                left: `calc(${lensLeftPx}px - 10px)`,
                top: `calc(${lensTopPx}px - 1px)`,
                width: "20px",
                height: "2px",
                background: "rgba(255,255,255,0.7)",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: `calc(${lensLeftPx}px - 1px)`,
                top: `calc(${lensTopPx}px - 10px)`,
                width: "2px",
                height: "20px",
                background: "rgba(255,255,255,0.7)",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
              }}
            />
          </div>
        )}
      </div>

      {/* Hinweis unten */}
      <div className="absolute bottom-3 left-3 z-[120] bg-black/40 text-white text-xs font-bold px-3 py-2 rounded-xl backdrop-blur border border-white/10">
        Bild bleibt original · Lupe optional (ideal für Details)
      </div>
    </div>
  );
}
