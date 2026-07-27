import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets:['latin'], variable:'--font-inter' });
const playfair = Playfair_Display({ subsets:['latin'], variable:'--font-playfair' });
export const metadata: Metadata = { title:'Apostle KTM Ministries', description:"Helping people discover God's purpose, position and calling." };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}>{children}</body></html>; }
