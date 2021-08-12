import { useState, useEffect } from "react";

const DrumPad = ({ audioLink, volume }) => {
  const defaultStyle = `w-24 h-24 bg-gray-700 rounded-xl border-b-4 border-gray-900 transition-all`;
  const [style, setStyle] = useState(defaultStyle);
  const [audio, setAudio] = useState("");

  useEffect(() => {
    setAudio(new Audio(audioLink));
  }, [audioLink]);

  const handleClick = () => {
    setStyle(
      `w-24 h-24 bg-gray-600 rounded-xl border-b-4 border-gray-900 transition-all`
    );
    audio.volume = volume / 100;
    audio.play();
    setTimeout(() => {
      setStyle(defaultStyle);
    }, 100);
  };

  return <button onClick={handleClick} className={style}></button>;
};

export default DrumPad;
