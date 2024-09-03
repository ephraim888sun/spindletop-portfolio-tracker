import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Portfolio Tracker',
  description: 'Spindletop Energy Portfolio Tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProviders>
        <body suppressHydrationWarning={true} className={inter.className}>
          {children}
        </body>
     </AppProviders>
    </html>
  );
}
