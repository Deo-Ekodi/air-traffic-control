// // app/layout.js
// import './globals.css';
// import Header from './components/Header';
// import Footer from './components/Footer';

// export const metadata = {
//   title: 'ATC and Pilot Simulation',
//   description: 'Simulate communications between ATC and pilots.',
// };

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

// app/layout.js
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import Header from "./components/Header";  // Import the Header
import Footer from "./components/Footer";  // Import the Footer

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aviation Assistant",
  description: "Your Aviation home",
};

export const fetchCache = 'force-no-store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header /> {/* Header added here */}
        <main className="flex-grow">{children}</main> {/* Ensures content grows */}
        <Footer /> {/* Footer added here */}
      </body>
    </html>
  );
}
