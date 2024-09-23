// pages/index.js
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to the ATC and Pilot Simulation</h1>
      <div className="links">
        <Link href="/pilot">Pilot</Link>
        <Link href="/atc">ATC</Link>
      </div>
    </div>
  );
}
