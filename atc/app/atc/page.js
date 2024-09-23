// pages/atc.js
'use client';
import { useState } from 'react';

export default function ATC() {
  const [command, setCommand] = useState('');
  const atcCommands = ['Clear for Takeoff', 'Clear for Landing', 'Maintain Altitude'];

  const handleClick = (cmd) => {
    setCommand(cmd);
    playAudio(cmd);
  };

  const playAudio = (cmd) => {
    const utterance = new SpeechSynthesisUtterance(cmd);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="page">
      <h1>ATC Commands</h1>
      <ul>
        {atcCommands.map((cmd, index) => (
          <li key={index} onClick={() => handleClick(cmd)}>
            {cmd}
          </li>
        ))}
      </ul>
      <div className="output">
        <h2>Sent to Pilot:</h2>
        <p>{command}</p>
      </div>
    </div>
  );
}
