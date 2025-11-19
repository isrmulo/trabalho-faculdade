"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [counters, setCounters] = useState({ vagas: 0, faculdades: 0, estagiarios: 0 })
  const [animateFeatures, setAnimateFeatures] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const statsSection = document.getElementById("stats")
      const featuresSection = document.getElementById("features")

      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setShowStats(true)
        }
      }

      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.7) {
          setAnimateFeatures(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!showStats) return

    const targets = { vagas: 350, faculdades: 45, estagiarios: 2000 }
    const intervals = Object.keys(targets).map((key) => {
      const target = targets[key as keyof typeof targets]
      const increment = target / 50

      return setInterval(() => {
        setCounters((prev) => ({
          ...prev,
          [key]: Math.min(prev[key as keyof typeof prev] + increment, target),
        }))
      }, 30)
    })

    return () => intervals.forEach(clearInterval)
  }, [showStats])

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
              Primeiros passos em <span className="font-semibold">tecnologia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              A plataforma que conecta faculdades, estudantes e empresas para criar oportunidades de estágio em tecnologia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vagas"
                className="bg-foreground text-background px-8 py-4 hover:opacity-80 hover:shadow-xl text-sm font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                Explorar Estágios
              </Link>
              <Link
                href="/contato"
                className="border border-foreground px-8 py-4 hover:bg-foreground hover:text-background text-sm font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                Seja Parceiro
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
                <div className="text-5xl md:text-6xl font-light mb-4 tabular-nums">
                  {Math.floor(counters.vagas)}+
                </div>
                <p className="text-muted-foreground font-light">Estágios Disponíveis</p>
              </div>
              <div
                className={`text-center transition-all duration-700 delay-300 ${showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="text-5xl md:text-6xl font-light mb-4 tabular-nums">
                  {Math.floor(counters.faculdades)}+
                </div>
                <p className="text-muted-foreground font-light">Faculdades Parceiras</p>
              </div>
              <div
                className={`text-center transition-all duration-700 delay-500 ${showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="text-5xl md:text-6xl font-light mb-4 tabular-nums">
                  {Math.floor(counters.estagiarios)}+
                </div>
                <p className="text-muted-foreground font-light">Estagiários Colocados</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-16 md:mb-24 text-balance">
              Por que escolher <span className="font-semibold" style={{ fontFamily: "var(--font-fredoka)" }}>Pé Direito</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
              <div
                className={`group p-8 border border-border hover:border-foreground transition-all duration-500 hover:shadow-xl transform ${
                  animateFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0s" }}
              >
                <div className="text-6xl font-light mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                  01
                </div>
                <h3 className="text-2xl font-medium mb-4">Estágios de Qualidade</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Acesso a oportunidades de estágio em empresas de tecnologia curadas e verificadas.
                </p>
              </div>

              <div
                className={`group p-8 border border-border hover:border-foreground transition-all duration-500 hover:shadow-xl transform ${
                  animateFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="text-6xl font-light mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                  02
                </div>
                <h3 className="text-2xl font-medium mb-4">Conexão Academia-Empresa</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Programas integrados entre faculdades e empresas para melhor preparação dos alunos.
                </p>
              </div>

              <div
                className={`group p-8 border border-border hover:border-foreground transition-all duration-500 hover:shadow-xl transform ${
                  animateFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="text-6xl font-light mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                  03
                </div>
                <h3 className="text-2xl font-medium mb-4">Acompanhamento Dedicado</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Suporte personalizado durante todo o período de estágio e desenvolvimento profissional.
                </p>
              </div>

              <div
                className={`group p-8 border border-border hover:border-foreground transition-all duration-500 hover:shadow-xl transform ${
                  animateFeatures ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="text-6xl font-light mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">
                  04
                </div>
                <h3 className="text-2xl font-medium mb-4">Rede de Oportunidades</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Construa sua rede profissional com empresas e colegas da área de tecnologia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">Comece sua jornada agora</h2>
            <p className="text-lg md:text-xl opacity-80 font-light mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Descubra centenas de oportunidades de estágio em tecnologia
            </p>
            <Link
              href="/vagas"
              className="inline-block bg-background text-foreground px-8 py-4 hover:opacity-80 hover:shadow-xl text-sm font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
            >
              Ver Estágios
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
