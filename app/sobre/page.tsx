"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [animateTeam, setAnimateTeam] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const teamSection = document.getElementById("team")
      if (teamSection) {
        const rect = teamSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.7) {
          setAnimateTeam(true)
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
              Sobre a <span className="font-semibold">Pé Direito</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Conectando faculdades, estudantes e empresas para criar experiências de estágio transformadoras
            </p>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance">
                Nossa Missão
              </h2>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  A Pé Direito surgiu com o propósito de revolucionar a forma como faculdades, estudantes e empresas colaboram. Acreditamos que estágios de qualidade são a ponte perfeita entre a formação acadêmica e a carreira profissional em tecnologia.
                </p>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Nosso objetivo é criar um ecossistema inclusivo onde estudantes talentosos possam ganhar experiência real, faculdades expandam suas redes corporativas, e empresas encontrem o potencial futuro de suas equipes.
                </p>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Todos os dias, trabalhamos para eliminar barreiras entre academia e indústria, criando oportunidades que preparam profissionais para o mercado de tecnologia em constante evolução.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-16 md:mb-24 text-balance">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 bg-card border border-border hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h3 className="text-2xl font-medium mb-4">Excelência Acadêmica</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Promovemos estágios que enriquecem a formação e ampliam conhecimentos práticos.
                </p>
              </div>
              <div className="p-8 bg-card border border-border hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🤝</div>
                <h3 className="text-2xl font-medium mb-4">Colaboração</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Faculdades e empresas trabalham juntas para criar programas relevantes e impactantes.
                </p>
              </div>
              <div className="p-8 bg-card border border-border hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-2xl font-medium mb-4">Crescimento</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Impulsionamos carreiras desde o primeiro dia, criando profissionais preparados para o futuro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 md:py-32 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-light text-center mb-16 md:mb-24 text-balance">
              Nossa Equipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Rômulo", role: "Fundador & Estratégia", delay: 0 },
                { name: "Klleber", role: "Fundador & Tecnologia", delay: 0.2 },
              ].map((member, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${
                    animateTeam
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${member.delay}s` }}
                >
                  <div className="w-32 h-32 bg-foreground rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl font-light text-background">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium mb-2">{member.name}</h3>
                  <p className="text-muted-foreground font-light">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-balance">
              Pronto para começar?
            </h2>
            <p className="text-lg md:text-xl opacity-80 font-light mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
              Seja você um estudante buscando estágio, uma faculdade buscando parcerias, ou uma empresa procurando talentos, temos um lugar para você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/vagas"
                className="inline-block bg-background text-foreground px-8 py-4 hover:opacity-80 text-sm font-medium uppercase tracking-wider"
              >
                Explorar Estágios
              </Link>
              <Link
                href="/contato"
                className="inline-block border border-background px-8 py-4 hover:bg-background hover:text-foreground text-sm font-medium uppercase tracking-wider"
              >
                Seja Parceiro
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
