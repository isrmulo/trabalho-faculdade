import type React from "react"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "TechCareers - Sua Carreira em Tecnologia",
  description: "Conectamos talentos às melhores oportunidades em tecnologia",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
