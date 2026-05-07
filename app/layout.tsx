import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Robert Hendrix Innovation Ecosystem",
  description: "Behavioral Intelligence. Veteran Advocacy. Human Growth Systems. Live operational systems focused on behavioral intelligence, executive function, veteran support infrastructure, crisis prevention, recovery systems, and longitudinal human growth platforms.",
  keywords: ["behavioral intelligence", "veteran advocacy", "ADHD", "executive function", "crisis prevention", "recovery systems"],
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
