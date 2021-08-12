import { useState, useEffect } from "react";

const DrumPad = ({ audioLink, volume, handleMonitorUpdate, soundName, playAudio, keyTrigger }) => {
  const defaultStyle = `w-24 h-24 bg-gray-700 rounded-xl border-b-4 border-gray-900 transition-all text-gray-500 m-4 text-xl`;
  const [style, setStyle] = useState(defaultStyle);
  const [audio, setAudio] = useState("");

  useEffect(() => {
    setAudio(new Audio(audioLink));
  }, [audioLink]);

  const handleClick = () => {
    setStyle(
      `w-24 h-24 bg-gray-600 rounded-xl border-b-4 border-gray-900 transition-all text-white m-4 text-xl`
    );
    playAudio(audio);
    setTimeout(() => {
      setStyle(defaultStyle);
    }, 100);
    handleMonitorUpdate(soundName);
  };

  return <button onClick={handleClick} className={style}>{keyTrigger}</button>;
};

export default DrumPad;
