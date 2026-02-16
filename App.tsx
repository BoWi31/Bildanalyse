
import React, { useState, useEffect, useRef } from 'react';
import { STEPS, SOLUTION_TEXT, INSTRUCTION_HINT, AMPEL_FEEDBACK } from './constants';
import { Infographic } from './components/Infographic';

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [showWritingHelp, setShowWritingHelp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [ampelChoice, setAmpelChoice] = useState<null | 'red' | 'yellow' | 'green'>(null);
  const modalImageRef = useRef<HTMLImageElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const currentStep = STEPS[activeStep];
  const backupUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/1200px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = backupUrl;
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      // Reset zoom when opening
      setIsZoomed(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
          <div className="bg-indigo-900 text-white p-2 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="hidden sm:block text-left">
            <h1 className="font-black text-xs md:text-sm tracking-tighter leading-none uppercase text-slate-900">Bildanalyse</h1>
            <p className="text-[7px] md:text-[8px] uppercase font-bold text-slate-400 tracking-widest mt-0.5">Geschichte AB-Hilfe</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-1.5 md:gap-3 bg-slate-100 p-1.5 md:p-2 rounded-2xl border border-slate-200">
          {STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => { setActiveStep(idx); setShowHints(false); setShowWritingHelp(false); }}
              className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-black transition-all active:scale-90 ${
                activeStep === idx 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-white text-slate-400 border border-slate-200'
              }`}
            >
              {step.number}
            </button>
          ))}
        </div>

        <button 
          onClick={handlePrint}
          className="bg-indigo-900 hover:bg-black text-white font-bold p-2.5 md:p-3 rounded-xl shadow-lg transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        </button>
      </nav>

      {/* Schreib-Hinweis Banner */}
      <div className="no-print bg-indigo-600 px-4 py-2 text-center shadow-md">
        <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">
          {INSTRUCTION_HINT}
        </p>
      </div>

      {/* Enhanced Image Modal (Lightbox) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center overscroll-none"
          style={{ touchAction: 'none' }} // Prevents mobile reloads/scrolls
        >
          {/* Modal Header Controls */}
          <div className="absolute top-4 right-4 flex gap-4 z-[110]">
             <button 
              onClick={() => setIsZoomed(!isZoomed)}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all"
              title="Zoom umschalten"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all"
              title="Schließen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div 
            className={`w-full h-full flex items-center justify-center overflow-auto transition-all ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img 
              ref={modalImageRef}
              src={backupUrl} 
              onError={handleImageError}
              alt="Bildanalyse Vollbild" 
              className={`max-w-none transition-transform duration-300 ease-out select-none ${isZoomed ? 'scale-[2.5] md:scale-[2]' : 'max-h-[90vh] max-w-[90vw]'}`}
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white/70 text-xs font-bold uppercase tracking-widest backdrop-blur-sm pointer-events-none">
            {isZoomed ? 'Verschiebe das Bild zum Erkunden' : 'Klicken zum Zoomen'}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="no-print flex-grow container mx-auto p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Bild-Sektion */}
          <div className="w-full lg:w-[40%] flex flex-col gap-4">
             <div className="sticky top-28 bg-white p-3 rounded-[2rem] shadow-xl border border-slate-200">
                <div 
                  className="relative cursor-zoom-in rounded-[1.5rem] overflow-hidden group"
                  onClick={() => setIsModalOpen(true)}
                >
                  <img src={backupUrl} onError={handleImageError} alt="Quelle" className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white/90 p-4 rounded-full text-indigo-900 shadow-xl font-black uppercase text-xs flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      Analysieren
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 text-center">
                   <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-1">Aktueller Arbeitsschritt</span>
                   <h2 className="text-2xl font-black text-indigo-900 uppercase tracking-tight">
                     {currentStep.number}. {currentStep.title}
                   </h2>
                </div>
             </div>
          </div>

          {/* Aufgaben-Sektion */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200">
               <h3 className="text-xl md:text-2xl font-black italic text-indigo-700 mb-6 text-left">
                 "{currentStep.subtitle}"
               </h3>
               
               <p className="text-lg md:text-xl font-bold text-slate-800 mb-8 leading-tight text-left">
                 {currentStep.description}
               </p>

               {currentStep.contextText && (
                 <div className="bg-indigo-900 text-white p-6 rounded-2xl mb-8 border-l-[10px] border-indigo-400 text-left">
                   <p className="font-bold italic text-lg leading-relaxed">{currentStep.contextText}</p>
                 </div>
               )}

               <div className="space-y-4 mb-10">
                 {currentStep.points.map((point, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors text-left">
                      <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-black flex-shrink-0">{i+1}</span>
                      <p className="text-base md:text-lg font-bold text-slate-900 leading-tight">{point}</p>
                   </div>
                 ))}
               </div>

               {/* Step 5 Ampel-Logik */}
               {activeStep === 4 && (
                 <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl border-4 border-slate-800 mb-10">
                    <h4 className="text-white font-black uppercase text-center text-xs tracking-widest mb-6">Wähle die passende Farbe für das AB:</h4>
                    <div className="flex justify-center gap-6">
                       <button onClick={() => setAmpelChoice('red')} className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 border-4 ${ampelChoice === 'red' ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-40'}`} />
                       <button onClick={() => setAmpelChoice('yellow')} className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-yellow-400 border-4 ${ampelChoice === 'yellow' ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-40'}`} />
                       <button onClick={() => setAmpelChoice('green')} className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 border-4 ${ampelChoice === 'green' ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-40'}`} />
                    </div>
                    {ampelChoice && (
                      <p className="mt-6 text-indigo-300 font-bold text-center italic text-lg">{AMPEL_FEEDBACK[ampelChoice]}</p>
                    )}
                 </div>
               )}

               <div className="flex flex-col gap-4">
                 <button onClick={() => setShowHints(!showHints)} className="w-full p-6 bg-amber-400 hover:bg-amber-500 rounded-2xl font-black uppercase text-amber-950 flex items-center justify-between shadow-lg">
                    <span className="flex items-center gap-3">🔍 Detektiv-Lupe</span>
                    <span>{showHints ? '▲' : '▼'}</span>
                 </button>
                 {showHints && (
                   <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-200 space-y-3 text-left">
                     {currentStep.hints.map((h, i) => <p key={i} className="font-bold text-amber-900">★ {h}</p>)}
                   </div>
                 )}

                 <button onClick={() => setShowWritingHelp(!showWritingHelp)} className="w-full p-6 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-black uppercase text-white flex items-center justify-between shadow-lg">
                    <span className="flex items-center gap-3">✍️ Schreib-Hilfe</span>
                    <span>{showWritingHelp ? '▲' : '▼'}</span>
                 </button>
                 {showWritingHelp && (
                   <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-200 space-y-3 text-left">
                     {currentStep.sentenceStarters.map((s, i) => <p key={i} className="font-bold text-indigo-900 italic leading-tight">„{s}“</p>)}
                   </div>
                 )}
               </div>

               <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between gap-4">
                  <button 
                    disabled={activeStep === 0} 
                    onClick={() => { setActiveStep(a => a - 1); setShowHints(false); setShowWritingHelp(false); }}
                    className="px-6 md:px-10 py-4 bg-slate-200 text-slate-500 rounded-2xl font-black uppercase disabled:opacity-20"
                  >
                    Zurück
                  </button>
                  {activeStep < 4 ? (
                    <button 
                      onClick={() => { setActiveStep(a => a + 1); setShowHints(false); setShowWritingHelp(false); }}
                      className="px-6 md:px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase shadow-lg"
                    >
                      Weiter
                    </button>
                  ) : (
                    <button onClick={handlePrint} className="px-6 md:px-10 py-4 bg-green-600 text-white rounded-2xl font-black uppercase shadow-lg">
                      AB Drucken
                    </button>
                  )}
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Druck-Bereich */}
      <div className="hidden print:block">
        <Infographic />
      </div>
    </div>
  );
}
