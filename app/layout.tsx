import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victus - 66 Days to a Victorious Lifestyle",
  description: "Build unbreakable discipline through gamified self-mastery. Track habits, earn XP, climb leaderboards, and become the hero of your own journey.",
  keywords: ["habit tracker", "self improvement", "discipline", "gamification", "personal development", "stoicism"],
  authors: [{ name: "Victus" }],
  openGraph: {
    title: "Victus - 66 Days to a Victorious Lifestyle",
    description: "Build unbreakable discipline through gamified self-mastery.",
    url: "https://www.getvictus.com",
    siteName: "Victus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victus - 66 Days to a Victorious Lifestyle",
    description: "Build unbreakable discipline through gamified self-mastery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
