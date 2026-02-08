"use client";
import { useState } from "react"; // Removed 'useRef'

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);

  // Removed isPlaying and audioRef

  const yesButtonSize = noCount * 15 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "bae?!",
      "WAIT",
      "wait nga kase",
      "how about aitclim?",
      "HUY",
      "Don’t rush, take your time (say yes)",
      "PUDNO KADI?",
      "teka muna 😭",
      "please reconsider 😌",
      "I blinked, try again",
      "wrong answer po",
      "PRETTY PLEASE",
      "AY APO 😩",
      "Error 404: yes not found",
      "Universe says yes actually",
      "okay last na talaga (not last)",
      "Ay wen kadi?",
      "👁️👄👁️",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-50 p-4 text-center overflow-hidden">
      {yesPressed && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.6,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      {yesPressed ? (
        <div className="z-10 flex flex-col items-center">
          {/* Audio element and toggle button removed */}
          <img 
            className="mx-auto" 
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
            alt="Bear Kiss"
          />
          <div className="my-4 text-2xl md:text-4xl font-bold font-serif text-pink-600 animate-pulse">
            I LOVE YOU 3000, MY AJJI !!!
          </div>
        </div>
      ) : (
        <div className="z-10 flex flex-col items-center">
          <img
            className="h-[150px] md:h-[220px] object-contain transition-transform hover:scale-110"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Bear with Roses"
          />
          <h1 className="my-6 text-2xl md:text-4xl font-serif text-gray-800 px-4">
            Avryle, can I be your Valentine?
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              className="rounded-lg bg-green-500 px-8 py-2 font-bold text-white shadow-lg hover:bg-green-600 active:scale-95 transition-all"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded-lg bg-red-500 px-8 py-2 font-bold text-white shadow-lg hover:bg-red-600 active:scale-95 transition-all"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-100px); }
        }
        .animate-bounce {
          animation: bounce 3s linear infinite;
        }
      `}</style>
    </div>
  );
}