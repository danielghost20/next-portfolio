import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import {Nunito, Nunito_Sans, Inter} from 'next/font/google'
import clsx from "clsx";

export const metadata: Metadata = {
  title: "GHOST",
  description: "This is my web site",
};

const nunito = Nunito({
  subsets: ['latin'],
  weight: '800',
  variable: '--font-nunito'
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-nunito-sans'
}) 

const inter = Inter({
  subsets: ['latin'],
  weight: '800',
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(nunito.variable, nunitoSans.variable, inter.variable)}>
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#111111] bg-[radial-gradient(#1b1b1b_1px,#111111_1px)] bg-[size:20px_20px]"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
