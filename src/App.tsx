"use client";
import { useState, useRef } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Responsive button size: increases faster on mobile but stays manageable
  const yesButtonSize = noCount * 15 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "are you sure?",
      "WAIT",
      "wait nga kase",
      "how about aitclim?",
      "HUY",
      "Don’t rush, take your time (say yes)",
      "PUDNO KADI?",
      "teka muna 😭(",
      "Please reconsider 😌",
      "I blinked, try again",
      "wrong answer po",
      "PRETTY PLEASE",
      "AY APO 😩",
      "Error 404: yes not found",
      "Universe says yes actually",
      "Okay last na talaga (not last)",
      "Ay wen kadi?",
      "👁️👄👁️",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-50 p-4 text-center overflow-hidden">
      {/* 1. Floating Hearts Background Effect */}
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
          {/* 2. Audio Element - Make sure 'our-song.mp3' is in your /public folder */}
          <audio ref={audioRef} src="/our-song.mp3" loop />
          
          <img 
            className="mx-auto" 
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
            alt="Bear Kiss"
          />
          <div className="my-4 text-2xl md:text-4xl font-bold font-serif text-pink-600 animate-pulse">
            I LOVE YOU SO MUCH, MY AJJI ;)) !!!
          </div>

          <button 
            onClick={toggleMusic}
            className="mt-4 rounded-full bg-pink-500 px-8 py-3 text-white font-bold shadow-xl hover:scale-105 transition-all"
          >
            {isPlaying ? "Pause Music 🎵" : "Play Our Song 🎶"}
          </button>
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
          
          {/* Mobile responsive buttons: vertical on small screens, horizontal on larger */}
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
    </div>
  );
}