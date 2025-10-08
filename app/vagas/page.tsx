"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Dados das vagas (simulando um banco de dados)
const vagasData = [
  {
    id: 1,
    titulo: "Desenvolvedor Front-End Sênior",
    empresa: "TechCorp",
    localizacao: "São Paulo, SP",
    tipo: "CLT",
    nivel: "Sênior",
    descricao: "Buscamos desenvolvedor front-end experiente em React, Next.js e TypeScript.",
  },
  {
    id: 2,
    titulo: "Desenvolvedor Full Stack",
    empresa: "StartupXYZ",
    localizacao: "Remoto",
    tipo: "PJ",
    nivel: "Pleno",
    descricao: "Oportunidade para trabalhar com Node.js, React e MongoDB em projetos inovadores.",
  },
  {
    id: 3,
    titulo: "Designer UX/UI",
    empresa: "DesignStudio",
    localizacao: "Rio de Janeiro, RJ",
    tipo: "CLT",
    nivel: "Pleno",
    descricao: "Procuramos designer criativo para criar experiências digitais incríveis.",
  },
  {
    id: 4,
    titulo: "Desenvolvedor Back-End",
    empresa: "CloudSolutions",
    localizacao: "Remoto",
    tipo: "CLT",
    nivel: "Júnior",
    descricao: "Vaga para desenvolvedor back-end com conhecimento em Python e Django.",
  },
  {
    id: 5,
    titulo: "Engenheiro de Dados",
    empresa: "DataTech",
    localizacao: "Belo Horizonte, MG",
    tipo: "CLT",
    nivel: "Sênior",
    descricao: "Oportunidade para trabalhar com big data, ETL e análise de dados.",
  },
  {
    id: 6,
    titulo: "Desenvolvedor Mobile",
    empresa: "AppMakers",
    localizacao: "Remoto",
    tipo: "PJ",
    nivel: "Pleno",
    descricao: "Desenvolvedor mobile para criar apps nativos em React Native.",
  },
]

export default function Vagas() {
  const [filtroNivel, setFiltroNivel] = useState("Todos")
  const [filtroTipo, setFiltroTipo] = useState("Todos")
  const [busca, setBusca] = useState("")
  const [vagasFiltradas, setVagasFiltradas] = useState(vagasData)
  const [vagasVisiveis, setVagasVisiveis] = useState<number[]>([])

  // Filtrar vagas com base nos filtros selecionados
  useEffect(() => {
    let resultado = vagasData

    if (filtroNivel !== "Todos") {
      resultado = resultado.filter((vaga) => vaga.nivel === filtroNivel)
    }

    if (filtroTipo !== "Todos") {
      resultado = resultado.filter((vaga) => vaga.tipo === filtroTipo)
    }

    if (busca) {
      resultado = resultado.filter(
        (vaga) =>
          vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          vaga.empresa.toLowerCase().includes(busca.toLowerCase()) ||
          vaga.localizacao.toLowerCase().includes(busca.toLowerCase()),
      )
    }

    setVagasFiltradas(resultado)
  }, [filtroNivel, filtroTipo, busca])

  // Animação de entrada das vagas
  useEffect(() => {
    vagasFiltradas.forEach((vaga, index) => {
      setTimeout(() => {
        setVagasVisiveis((prev) => [...prev, vaga.id])
      }, index * 100)
    })
  }, [vagasFiltradas])

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Título */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-balance">
              Explore nossas <span className="font-semibold">oportunidades</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-pretty">
              Encontre a vaga perfeita para impulsionar sua carreira em tecnologia
            </p>
          </div>

          {/* Filtros e Busca */}
          <div className="mb-12 space-y-4">
            {/* Busca */}
            <div className="max-w-2xl">
              <input
                type="text"
                placeholder="Buscar por cargo, empresa ou localização..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full px-6 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                aria-label="Buscar vagas"
              />
            </div>

            {/* Filtros */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <label htmlFor="filtro-nivel" className="sr-only">
                  Filtrar por nível
                </label>
                <select
                  id="filtro-nivel"
                  value={filtroNivel}
                  onChange={(e) => setFiltroNivel(e.target.value)}
                  className="px-6 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                >
                  <option>Todos os níveis</option>
                  <option>Júnior</option>
                  <option>Pleno</option>
                  <option>Sênior</option>
                </select>
              </div>

              <div>
                <label htmlFor="filtro-tipo" className="sr-only">
                  Filtrar por tipo
                </label>
                <select
                  id="filtro-tipo"
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                  className="px-6 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer"
                >
                  <option>Todos os tipos</option>
                  <option>CLT</option>
                  <option>PJ</option>
                </select>
              </div>
            </div>

            {/* Contador de resultados */}
            <p className="text-sm text-muted-foreground font-light">
              {vagasFiltradas.length} {vagasFiltradas.length === 1 ? "vaga encontrada" : "vagas encontradas"}
            </p>
          </div>

          {/* Lista de Vagas */}
          <div className="space-y-6">
            {vagasFiltradas.length > 0 ? (
              vagasFiltradas.map((vaga) => (
                <article
                  key={vaga.id}
                  className={`border border-border p-6 md:p-8 hover:border-foreground transition-all duration-300 ${
                    vagasVisiveis.includes(vaga.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-medium mb-2">{vaga.titulo}</h2>
                      <p className="text-muted-foreground font-light">{vaga.empresa}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="px-4 py-1 bg-muted text-sm font-light">{vaga.nivel}</span>
                      <span className="px-4 py-1 bg-muted text-sm font-light">{vaga.tipo}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">{vaga.descricao}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-sm text-muted-foreground font-light">📍 {vaga.localizacao}</p>
                    <Link
                      href="/contato"
                      className="inline-block bg-foreground text-background px-6 py-3 hover:opacity-80 text-sm font-medium uppercase tracking-wider text-center"
                    >
                      Candidatar-se
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground font-light">
                  Nenhuma vaga encontrada com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
