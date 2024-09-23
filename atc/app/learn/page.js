// pages/students.js
import Link from 'next/link';
import '../globals.css';

export default function Students() {
  return (
    <div className="studentsPage">
      <h1>Roles of Communication in an Airport</h1>
      <div className="content">
        <div className="role">
          <h2>Air Traffic Controller (ATC)</h2>
          <p>
            The ATC guides aircraft during takeoff, landing, and ensures safe separation while in airspace.
          </p>
        </div>
        <div className="role">
          <h2>Pilot</h2>
          <p>
            Pilots communicate with ATC to receive instructions and relay their position, intent, and status.
          </p>
        </div>
      </div>

      {/* Flowchart */}
      <div className="flowchart">
        <h2>Communication Flowchart</h2>

        <div className="flow-container">
          <div className="flow-step">Pilot requests clearance</div>
          <div className="arrow">↓</div>
          <div className="flow-step">ATC grants clearance</div>
          <div className="arrow">↓</div>
          <div className="flow-step">Pilot taxis to runway</div>
          <div className="arrow">↓</div>
          <div className="flow-step">Pilot takes off</div>
          <div className="arrow">↓</div>
          <div className="flow-step">ATC monitors flight</div>
          <div className="arrow">↓</div>
          <div className="flow-step">Pilot approaches for landing</div>
          <div className="arrow">↓</div>
          <div className="flow-step">ATC gives landing instructions</div>
          <div className="arrow">↓</div>
          <div className="flow-step">Pilot lands and confirms</div>
        </div>
      </div>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
