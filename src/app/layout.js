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
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`open-sans-body`}>
        {children}
      </body>
    </html>
  );
}
