/*
  Modern404.jsx
  ----------------
  Usage (React Router v6):
    import Modern404 from './Modern404';
    <Route path="*" element={<Modern404 />} />

  This component is a single-file responsive 404 page using Tailwind CSS.
*/

import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      {/* full card */}
      <div className="max-w-4xl w-full bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">

        {/* Left: Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl md:text-9xl font-extrabold tracking-tight leading-none animate-pulse">404</div>
                <div className="mt-3 text-lg uppercase text-slate-400 animate-bounce">Page Not Found</div>
              </div>
            </div>
            {/* floating squares for subtle motion */}
            <span className="absolute -left-6 -top-6 w-8 h-8 md:w-10 md:h-10 bg-indigo-500/30 rounded-lg blur-sm animate-float-slow"></span>
            <span className="absolute -right-8 -bottom-8 w-12 h-12 md:w-16 md:h-16 bg-rose-500/30 rounded-full blur-md animate-float"></span>
            <span className="absolute right-6 top-10 w-6 h-6 md:w-8 md:h-8 bg-emerald-400/25 rounded-md blur-sm animate-float-reverse"></span>
          </div>
        </div>

        {/* Right: Message + actions */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">ওহো — পাতা পাওয়া যায়নি</h1>
          <p className="mt-3 text-slate-300">আপনি যেই ইউআরএল-এ ঢুকেছেন সেই পথটি আমাদের সিস্টেমে নেই অথবা হয়তো মুছে ফেলা হয়েছে। নিচের অপশনগুলো দেখুন —</p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3">
            <Link to="/" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition-shadow shadow-md text-white font-medium">হোমে ফিরে যান</Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-slate-700 text-slate-200 hover:bg-slate-800/40 transition"
            >
              আগের পাতায় ফিরে যান
            </button>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            <p>এখনও সমস্যা থাকলে — <a href="https://mxaziz.vercel.app/#contact" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-100">আমাদেরকে জানান</a> অথবা URL চেক করুন।</p>
          </div>

          <div className="mt-6 text-xs text-slate-500">Error code: <span className="text-rose-400 font-mono">NOT_FOUND</span></div>
        </div>
      </div>

      {/* Local styles for floating animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px) translateX(6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px) translateX(-6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px) translateX(-4px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 5s ease-in-out infinite; }
      `}</style>
    </main>
  );
}
