"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "are you sure?",
      "WAIT",
      "…wait lang",
      "how about icequeeemmm?",
      "HUY",
      "PUDNO KADI?",
      "teka muna 😭(",
      "are you really really sure",
      "I blinked, try again",
      "I choose to ignore that",
      "wrong answer po",
      ":((((",
      "PRETTY PLEASE",
      "AY APO 😩",
      "No :(",
      "Error 404: yes not found",
      "Universe says yes actually",
      "Don’t rush, take your time (say yes)",
      "NA AH",
      "I asked my heart, it said yes",
      "Please reconsider 😌",
      "Okay last na talaga (not last)",
      "Ay wen kadi?",
      "👁️👄👁️",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">MWHIHIHI I LOVE YOU SO MUCHHHH, MY AJJI ;)) !!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Avryle, can I be your Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
