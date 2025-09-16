import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Juno Mishel Sebastian - Java Technical Lead",
  description: "Experienced Java Technical Lead with 12+ years in enterprise software development, team leadership, and cloud architecture. Available for opportunities across Canada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`open-sans-body`}>
        {children}
      </body>
    </html>
  );
}
