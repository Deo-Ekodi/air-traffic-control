// pages/pilot.js
'use client';
import { useState } from 'react';

export default function Pilot() {
  const [command, setCommand] = useState('');
  const pilotCommands = ['Request Takeoff', 'Request Landing', 'Report Position'];

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
      <h1>Pilot Commands</h1>
      <ul>
        {pilotCommands.map((cmd, index) => (
          <li key={index} onClick={() => handleClick(cmd)}>
            {cmd}
          </li>
        ))}
      </ul>
      <div className="output">
        <h2>Sent to ATC:</h2>
        <p>{command}</p>
      </div>
    </div>
  );
}
