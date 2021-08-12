import DrumPad from "./DrumPad";
import BankSwitch from "./BankSwitch";
import VolumeSlider from "./VolumeSlider";
import Monitor from "./Monitor";
import PowerSwitch from "./PowerSwitch";
import { useState } from "react";

const DrumMachine = () => {
  const bankOne = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(30);
  const [keyword, setKeyword] = useState("");
  const [power, setPower] = useState(false);

  const playAudio = (audio) => {
    audio.volume = volume / 100;
    audio.currentTime = 0;
    audio.play();
  };

  const handleMonitorUpdate = (text) => {
    setKeyword(text);
  };

  const handleSliderChange = (event, newVolume) => {
    setVolume(newVolume);
    handleMonitorUpdate(newVolume);
  };

  let bank = enabled ? bankOne : bankTwo;

  if (!power) {
    for (let i = 0; i < bank.length; i++) {
      bank[i].id = "";
      bank[i].url = "";
    }
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="max-w-sm">
        {bank.map((val, i) => {
          return (
            <DrumPad
              audioLink={val.url}
              volume={volume}
              handleMonitorUpdate={handleMonitorUpdate}
              soundName={val.id}
              key={i}
              playAudio={playAudio}
              keyTrigger={val.keyTrigger}
            />
          );
        })}
      </div>
      <div id="side-bar" className="m-4">
        <PowerSwitch power={power} setPower={setPower} />
        <BankSwitch enabled={enabled} setEnabled={setEnabled} />
        <VolumeSlider handleSliderChange={handleSliderChange} volume={volume} />
        <Monitor keyword={keyword} />
      </div>
    </div>
  );
};

export default DrumMachine;
