import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clicker — On-Chain Tap Game",
  description: "Tap to earn on Stacks blockchain. Compete on the leaderboard!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="talentapp:project_verification" content="b437f5815716f142afc2c78b10d85838cb0e41ae1fb1123f97004483ee3b7a77b29208d432780803cebed05bce98368f04b5f681560fcffda357248061a1eff2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

// layout: 1773475772030

// layout: 1773528426296

// layout: 1773572183217

// layout: 1773610580215

// layout: 1773671007393

// layout: 1773905141900

// layout: 1774340904108

// layout: 1774352710519

// layout: 1774432769481

// layout: 1774513215562

// layout: 1774611789893

// layout: 1774682262634

// layout: 1774785603232

// layout: 1774878024197

// layout: 1774936453880

// layout: 1775117434155

// layout: 1775195140712

// layout: 1775199655315

// layout: 1775207478394

// layout: 1775236332938

// layout: 1775269075873

// layout: 1775281980491

// layout: 1775383003900

// layout: 1775389385782
