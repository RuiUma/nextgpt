'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const runtime = 'edge'

export const metadata: Metadata = {
  title: "GPT",
  description: "Chat GPT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const getUserInfo = () => {
    return fetch('/api/access', {
      method: 'GET'
    })
  }
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    getUserInfo().then((res => res.json())).then((data) => {
      const { userEmail, jwt }: any = data
      setUserEmail(userEmail)
      const userName = String(userEmail).split('@')[0]
      localStorage.setItem('userName', userName)
    })



  })
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
