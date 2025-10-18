import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PositionProvider } from "@/contexts/PositionContext";
import { CategoryContextProvider } from "@/contexts/CategoryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nearby Places Finder",
  description: "Find nearby places based on your location",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PositionProvider>{children}</PositionProvider>
      </body>
    </html>
  );
}
