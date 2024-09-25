// pages/index.js
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the ATC and Pilot Simulation</h1>

      {/* Introduction section */}
      <section className="intro">
        <p>
          Discover the critical role of communication between Air Traffic Control (ATC) and pilots in ensuring safe and smooth air travel. Dive into our interactive simulation and experience firsthand the challenges and coordination required in modern aviation.
        </p>
      </section>

      {/* Learn More Section */}
      <section className="learn-more">
        <h2>Why Is This Important?</h2>
        <p>
          ATCs and pilots work together to manage aircraft movement, ensuring safe takeoff, navigation, and landing. Effective communication is crucial, and now you can experience this dynamic environment!
        </p>
      </section>

      {/* Simulation Access Section */}
      <section className="simulation">
        <h2>Start the Simulation</h2>
        <div className="links">
          <Link href="/pilot">
            <button className="pilot-btn">Pilot Mode</button>
          </Link>
          <Link href="/atc">
            <button className="atc-btn">ATC Mode</button>
          </Link>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="how-to-use">
        <h2>Did You Know?</h2>
        <ol>
          <li>There are over 100,000 flights globally each day.</li>
          <li>Air traffic controllers manage airspace across several sectors.</li>
          <li>Pilots rely on real-time instructions from ATC to avoid collisions.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer>
        <p>Stay Curious, Stay Safe.</p>
      </footer>
    </div>
  );
}
