import type React from "react"
import { Poppins, Fredoka } from 'next/font/google'
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

const fredoka = Fredoka({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
})

export const metadata = {
  title: "Pé Direito - Sua Carreira em Tecnologia",
  description: "Conectamos talentos às melhores oportunidades em estágio de tecnologia",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${fredoka.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
