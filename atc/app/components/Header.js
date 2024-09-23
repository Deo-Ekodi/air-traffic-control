// app/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h1>ATC and Pilot Simulation</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/pilot">Pilot</Link>
        <Link href="/atc">ATC</Link>
        <Link href="/learn">Learn</Link> {/* New link added */}
      </nav>
    </header>
  );
}
