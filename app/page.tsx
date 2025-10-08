"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [showStats, setShowStats] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Mostrar estatísticas após scroll
    const handleScroll = () => {
      const statsSection = document.getElementById("stats")
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setShowStats(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-balance">
              Construa sua carreira em <span className="font-semibold">tecnologia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Conectamos profissionais talentosos às empresas mais inovadoras do mercado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vagas"
                className="bg-foreground text-background px-8 py-4 hover:opacity-80 text-sm font-medium uppercase tracking-wider"
              >
                Ver Vagas
              </Link>
              <Link
                href="/contato"
                className="border border-foreground px-8 py-4 hover:bg-foreground hover:text-background text-sm font-medium uppercase tracking-wider"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
              <div
                className={`text-center transition-all duration-700 delay-100 ${showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="text-5xl md:text-6xl font-light mb-4">500+</div>
                <p className="text-muted-foreground font-light">Vagas Disponíveis</p>
              </div>
              <div
                className={`text-center transition-all duration-700 delay-300 ${showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="text-5xl md:text-6xl font-light mb-4">200+</div>
                <p className="text-muted-foreground font-light">Empresas Parceiras</p>
              </div>
              <div
                className={`text-center transition-all duration-700 delay-500 ${showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="text-5xl md:text-6xl font-light mb-4">1000+</div>
                <p className="text-muted-foreground font-light">Profissionais Contratados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-16 md:mb-24 text-balance">
              Por que escolher a <span className="font-semibold">TechCareers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
              <div className="fade-in">
                <div className="text-6xl font-light mb-6">01</div>
                <h3 className="text-2xl font-medium mb-4">Vagas Exclusivas</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Acesso a oportunidades únicas em empresas de tecnologia que você não encontra em outros lugares.
                </p>
              </div>
              <div className="fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-6xl font-light mb-6">02</div>
                <h3 className="text-2xl font-medium mb-4">Processo Simplificado</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Candidatura rápida e acompanhamento transparente de todas as etapas do processo seletivo.
                </p>
              </div>
              <div className="fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-6xl font-light mb-6">03</div>
                <h3 className="text-2xl font-medium mb-4">Suporte Personalizado</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Nossa equipe está pronta para ajudar você em cada etapa da sua jornada profissional.
                </p>
              </div>
              <div className="fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-6xl font-light mb-6">04</div>
                <h3 className="text-2xl font-medium mb-4">Networking</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Conecte-se com profissionais e empresas líderes no mercado de tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">Pronto para dar o próximo passo?</h2>
            <p className="text-lg md:text-xl opacity-80 font-light mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Explore centenas de oportunidades e encontre a vaga perfeita para você
            </p>
            <Link
              href="/vagas"
              className="inline-block bg-background text-foreground px-8 py-4 hover:opacity-80 text-sm font-medium uppercase tracking-wider"
            >
              Explorar Vagas
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
