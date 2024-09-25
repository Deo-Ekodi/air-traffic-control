import Image from 'next/image';
import styles from '../globals.css';

export default function Classification() {
  return (
    <div className="container mx-auto p-5">
      <h1 className={styles.title}>Classification of Aircrafts</h1>
      
      {/* Brief Explanation */}
      <div className="text-2xl font-semibold mb-2">
        <p>Aircraft are classified into two main categories: <strong>Lighter-Than-Air</strong> and <strong>Heavier-Than-Air</strong>.</p>
        <p>These categories distinguish different types of aircraft based on how they generate lift and stay airborne.</p>
      </div>

      {/* Image for Lighter-Than-Air */}
      <div className="container">
        <Image 
          src="/images/classification.jpg" 
          alt="Basic Classification" 
          width={600} 
          height={400} 
          className={styles.image}
        />
      </div>

      {/* Lighter-Than-Air Section */}
      <div className="how-to-use">
        <h2 className={styles.subheading}>Lighter-Than-Air</h2>
        <p className={styles.paragraph}>Lighter-than-air aircraft are those that generate lift through buoyancy, using gases like helium or hot air to become airborne. They include balloons and airships.</p>
        
        {/* Lighter-Than-Air Flowchart */}
        <div className={styles.flowchart}>
          <div className={styles.flowbox}>Lighter-Than-Air</div>
          <ol>
            <li>Balloons</li>
            <li>Airships</li>
          </ol>
        </div>
      </div>

      {/* Heavier-Than-Air Section */}
      <div className="how-to-use">
        <h2 className={styles.subheading}>Heavier-Than-Air</h2>
        <p className={styles.paragraph}>Heavier-than-air aircraft are those that rely on mechanisms such as wings and propulsion systems to achieve flight. This category includes airplanes, helicopters, and gliders.</p>

        {/* Heavier-Than-Air Flowchart */}
        <div className={styles.flowchart}>
          <div className={styles.flowbox}>Heavier-Than-Air</div>
          <ol>
            <li>Fixed-Wing : Examples: Jets, Gliders</li>
            <li>Rotorcraft : Examples: Helicopters</li>
          </ol>
          {/* <div className={styles.flowbox}>Examples: Jets, Gliders</div>
          <div className={styles.flowbox}>Examples: Helicopters</div> */}
        </div>
        
        {/* Detailed Description */}
        {/* <div className={styles.container}>
          <p>Heavier-than-air aircraft use aerodynamic forces to lift themselves into the air. Examples include:</p>
          <ul className={styles.list}>
            <li><strong>Fixed-Wing Aircraft:</strong> Planes like jets or gliders that use wings to create lift as air flows over them.</li>
            <li><strong>Rotorcraft:</strong> Aircraft like helicopters that use rotating blades to generate lift and propulsion.</li>
            <li><strong>Gliders:</strong> Unpowered planes that glide on wind currents, using air movement to stay aloft.</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
