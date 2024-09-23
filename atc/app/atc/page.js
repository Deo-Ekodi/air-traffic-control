"use client";

import Link from 'next/link';
import '../globals.css';
import EventEmitter from '../events/events';

let receivedMessage = ""; // Shared variable for receiving messages




const commands = [
  "Cleared for takeoff.",
  "Maintain altitude 3000 feet.",
  "Turn left heading 270.",
  "Contact approach on 123.45.",
  "Report your position.",
  "Clear to land runway 27.",
  "Hold short of runway 09.",
  "Descend and maintain 5000 feet.",
  "Squawk 1200.",
  "Continue on present heading.",
  "Expect vectors for ILS approach.",
  "Go around, you're not cleared to land.",
  "Request flight following.",
  "Advise when ready to copy.",
  "Taxi to gate A2.",
  "Check in on frequency 118.50.",
  "Do you have information Alpha?",
  "Please expedite your taxi.",
  "Cleared to cross runway 15.",
  "Approaching final, report runway in sight.",
  "Maintain visual separation.",
  "Hold position.",
  "Your altitude is too low.",
  "Switch to ground control.",
  "Expect delay due to traffic.",
  "Runway is closed for maintenance."
];

const handleCommandClick = (command) => {
  receivedMessage = command;
  speakMessage(command);
  EventEmitter.emit('messageSent', command); // Emit the message
};

const speakMessage = (message) => {
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
};

// Listen for incoming messages
EventEmitter.on('messageReceived', (message) => {
  receivedMessage = message;
});

export default function ATC() {
  return (
    <div className="page">
      <h1>ATC Communication</h1>
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