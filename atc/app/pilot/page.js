"use client";

import Link from 'next/link';
import '../globals.css';
import EventEmitter from '../events/events';

let receivedMessage = ""; // Shared variable for receiving messages

const commands = [
  "Ready for departure.",
  "Requesting takeoff clearance.",
  "Position and hold.",
  "Overhead at 2000 feet.",
  "Entering final approach.",
  "Requesting altitude change to 6000 feet.",
  "Reporting turbulence.",
  "Requesting frequency change.",
  "Fuel status: 45 minutes remaining.",
  "Requesting emergency landing.",
  "Flying visual approach.",
  "On final approach, gear down.",
  "Requesting vector to final.",
  "Confirming ILS approach.",
  "Requesting taxi clearance.",
  "Requesting pushback clearance.",
  "Reporting go-around.",
  "Requesting landing clearance.",
  "Navigating to waypoint ZULU.",
  "Need assistance on the runway.",
  "Requesting route change.",
  "Check-in with ATC.",
  "Confirming altimeter setting.",
  "Requesting flight level change.",
  "In a holding pattern."
];

const handleCommandClick = (command) => {
  receivedMessage = command;
  speakMessage(command);
  EventEmitter.emit('messageReceived', command); // Emit the message
};

const speakMessage = (message) => {
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
};

// Listen for incoming messages
EventEmitter.on('messageSent', (message) => {
  receivedMessage = message;
});

export default function Pilot() {
  return (
    <div className="page">
      <h1>Pilot Communication</h1>
      <div className="commands-container">
        {commands.map((command, index) => (
          <div 
            key={index} 
            className="command" 
            onClick={() => handleCommandClick(command)}
          >
            {command}
          </div>
        ))}
      </div>
      <div className="communication-panel">
        <h2>Live Communication</h2>
        <p>{receivedMessage}</p>
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
}