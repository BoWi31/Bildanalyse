
import React from 'react';
import { STEPS } from '../constants';
import { StepBox } from './StepBox';

export const Infographic: React.FC = () => {
  return (
    <div className="print-area w-[210mm] h-[297mm] bg-white mx-auto overflow-hidden flex flex-col p-[12mm] text-indigo-900 border-[12px] border-slate-100 print:border-none">
      
      {/* Header mit Illustration-Stil wie im Screenshot */}
      <header className="flex justify-between items-start mb-8">
        <div className="w-2/3">
          <h1 className="text-[42px] font-black tracking-tighter leading-none mb-4">
            Bildanalyse Geschichte
          </h1>
          <div className="bg-indigo-50 p-4 rounded-xl border-l-[6px] border-indigo-900">
            <p className="text-[13px] font-bold leading-snug">
              Fülle das Arbeitsblatt mit Hilfe der Internetseite aus. 
              <span className="block mt-1 text-indigo-700">Hinweis: Die Fragen auf der Seite helfen dir bei der Analyse und Beantwortung der Fragen unten!</span>
            </p>
          </div>
        </div>
        
        {/* Placeholder für die Grafik oben rechts */}
        <div className="w-[80px] h-[100px] border-4 border-indigo-900 rounded-lg flex flex-col items-center justify-center p-2 bg-indigo-50 relative rotate-3 shadow-lg">
           <div className="w-full h-2/3 border-2 border-indigo-900 bg-white mb-1"></div>
           <div className="w-3 h-8 bg-indigo-900 absolute -right-2 top-1/2 rounded-full"></div>
           <div className="text-[10px] font-black uppercase text-center leading-none">Bildquelle</div>
        </div>
      </header>

      {/* Main Table-like Structure */}
      <main className="flex-grow flex flex-col border-[2px] border-indigo-900">
        {STEPS.map((step) => (
          <StepBox key={step.number} step={step} />
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-6 flex justify-between items-end opacity-40">
        <p className="text-[10px] font-black uppercase tracking-widest">
          Name: __________________________
        </p>
        <p className="text-[10px] font-black uppercase tracking-widest">
          Datum: __________________
        </p>
      </footer>
    </div>
  );
};
