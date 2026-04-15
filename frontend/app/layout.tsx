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

// layout: 1775436670140

// layout: 1775510294186

// layout: 1775598001009

// layout: 1775642756929

// layout: 1775694905508

// layout: 1775709885581

// layout: 1775751021047

// layout: 1775795607512

// layout: 1775827068587

// layout: 1775870080559

// fonts: 1775870312076

// fonts: 1775918917274

// layout: 1775918979405

// layout: 1775931917456

// fonts: 1775931963104

// fonts: 1775965386800

// layout: 1775965509340

// layout: 1776061433451

// fonts: 1776061459097

// layout: 1776082367031

// fonts: 1776082378601

// layout: 1776142322338

// fonts: 1776142555199

// layout: 1776169486224

// fonts: 1776169563424

// layout: 1776184674752

// fonts: 1776184830727

// layout: 1776214009374

// fonts: 1776246293141
