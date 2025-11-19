"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface Vaga {
  id: number
  titulo: string
  empresa: string
  faculdade: string
  localizacao: string
  modalidade: string
  nivel: string
  descricao: string
  bolsa?: string
}

const vagasDataInicial: Vaga[] = [
  {
    id: 1,
    titulo: "Estágio em Desenvolvimento Front-End",
    empresa: "TechCorp",
    faculdade: "Universidade Federal do Ceará",
    localizacao: "Fortaleza, CE",
    modalidade: "Presencial",
    nivel: "Júnior",
    descricao: "Oportunidade para aplicar conhecimentos em React, JavaScript e UX/UI em projetos reais.",
    bolsa: "R$ 1.200 - R$ 1.800"
  },
  {
    id: 2,
    titulo: "Estágio em Desenvolvimento Full Stack",
    empresa: "StartupXYZ",
    faculdade: "Instituto Federal do Ceará",
    localizacao: "Remoto",
    modalidade: "Remoto",
    nivel: "Pleno",
    descricao: "Trabalhe com Node.js, React e MongoDB em um ambiente ágil e inovador.",
    bolsa: "R$ 1.500 - R$ 2.000"
  },
  {
    id: 3,
    titulo: "Estágio em Design UX/UI",
    empresa: "DesignStudio",
    faculdade: "Universidade de Fortaleza",
    localizacao: "Fortaleza, CE",
    modalidade: "Híbrido",
    nivel: "Pleno",
    descricao: "Crie experiências digitais incríveis e desenvolva seu portfólio profissional.",
    bolsa: "R$ 1.300 - R$ 1.900"
  },
  {
    id: 4,
    titulo: "Estágio em Desenvolvimento Back-End",
    empresa: "CloudSolutions",
    faculdade: "UNIFOR",
    localizacao: "Remoto",
    modalidade: "Remoto",
    nivel: "Júnior",
    descricao: "Aprenda Python, Django e melhores práticas de desenvolvimento de APIs.",
    bolsa: "R$ 1.000 - R$ 1.400"
  },
  {
    id: 5,
    titulo: "Estágio em Análise de Dados",
    empresa: "DataTech",
    faculdade: "Universidade Estadual do Ceará",
    localizacao: "Fortaleza, CE",
    modalidade: "Presencial",
    nivel: "Pleno",
    descricao: "Trabalhe com análise de dados, SQL e ferramentas de BI.",
    bolsa: "R$ 1.400 - R$ 2.000"
  },
  {
    id: 6,
    titulo: "Estágio em Desenvolvimento Mobile",
    empresa: "AppMakers",
    faculdade: "Centro Universitário Unichristus",
    localizacao: "Remoto",
    modalidade: "Remoto",
    nivel: "Pleno",
    descricao: "Desenvolva aplicações mobile em React Native com mentoria profissional.",
    bolsa: "R$ 1.300 - R$ 1.800"
  },
]

export default function Vagas() {
  const [vagas, setVagas] = useState<Vaga[]>(vagasDataInicial)
  const [filtroNivel, setFiltroNivel] = useState("Todos")
  const [filtroModalidade, setFiltroModalidade] = useState("Todos")
  const [busca, setBusca] = useState("")
  const [vagasFiltradas, setVagasFiltradas] = useState(vagas)
  const [vagasVisiveis, setVagasVisiveis] = useState<number[]>([])
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [novaVaga, setNovaVaga] = useState({ titulo: "", empresa: "", faculdade: "", localizacao: "", modalidade: "Presencial", nivel: "Júnior", descricao: "", bolsa: "" })
  const [editandoId, setEditandoId] = useState<number | null>(null)

  useEffect(() => {
    let resultado = vagas

    if (filtroNivel !== "Todos") {
      resultado = resultado.filter((vaga) => vaga.nivel === filtroNivel)
    }

    if (filtroModalidade !== "Todos") {
      resultado = resultado.filter((vaga) => vaga.modalidade === filtroModalidade)
    }

    if (busca) {
      resultado = resultado.filter(
        (vaga) =>
          vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
          vaga.empresa.toLowerCase().includes(busca.toLowerCase()) ||
          vaga.faculdade.toLowerCase().includes(busca.toLowerCase()) ||
          vaga.localizacao.toLowerCase().includes(busca.toLowerCase()),
      )
    }

    setVagasFiltradas(resultado)
  }, [filtroNivel, filtroModalidade, busca, vagas])

  useEffect(() => {
    setVagasVisiveis([])
    vagasFiltradas.forEach((vaga, index) => {
      setTimeout(() => {
        setVagasVisiveis((prev) => [...prev, vaga.id])
      }, index * 100)
    })
  }, [vagasFiltradas])

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (adminPassword === "admin123") {
      setIsAdmin(true)
      setAdminPassword("")
      setShowAdminPanel(false)
    } else {
      alert("Senha incorreta")
    }
  }

  const handleAddVaga = (e: React.FormEvent) => {
    e.preventDefault()
    if (!novaVaga.titulo || !novaVaga.empresa) {
      alert("Preencha os campos obrigatórios")
      return
    }

    if (editandoId) {
      setVagas(vagas.map(v => v.id === editandoId ? { ...novaVaga, id: editandoId } : v))
      setEditandoId(null)
    } else {
      const novaVagaComId = { ...novaVaga, id: Math.max(...vagas.map(v => v.id), 0) + 1 }
      setVagas([...vagas, novaVagaComId])
    }
    
    setNovaVaga({ titulo: "", empresa: "", faculdade: "", localizacao: "", modalidade: "Presencial", nivel: "Júnior", descricao: "", bolsa: "" })
  }

  const handleEditVaga = (vaga: Vaga) => {
    setNovaVaga(vaga)
    setEditandoId(vaga.id)
  }

  const handleDeleteVaga = (id: number) => {
    if (confirm("Tem certeza que deseja deletar este estágio?")) {
      setVagas(vagas.filter(v => v.id !== id))
    }
  }

  const handleLogout = () => {
    setIsAdmin(false)
    setShowAdminPanel(false)
  }

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case "Júnior":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Pleno":
        return "bg-green-50 text-green-700 border-green-200"
      default:
        return "bg-muted"
    }
  }

  const getModalidadeColor = (modalidade: string) => {
    switch(modalidade) {
      case "Presencial":
        return "bg-amber-50 text-amber-700 border-amber-200"
      case "Remoto":
        return "bg-indigo-50 text-indigo-700 border-indigo-200"
      case "Híbrido":
        return "bg-rose-50 text-rose-700 border-rose-200"
      default:
        return "bg-muted"
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-light mb-6 text-balance">
                Explore <span className="font-semibold">oportunidades de estágio</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-pretty">
                Encontre o estágio perfeito para começar sua carreira em tecnologia
              </p>
            </div>
            <button
              onClick={() => setShowAdminPanel(!showAdminPanel)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              title="Admin Panel"
            >
              ⚙️
            </button>
          </div>

          {showAdminPanel && !isAdmin && (
            <div className="mb-12 p-6 border border-border bg-card rounded transition-all duration-300 animate-in">
              <form onSubmit={handleAdminLogin} className="max-w-sm space-y-4">
                <h3 className="text-lg font-medium">Painel Administrativo</h3>
                <input
                  type="password"
                  placeholder="Senha"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                  aria-label="Senha admin"
                />
                <button
                  type="submit"
                  className="w-full bg-foreground text-background px-4 py-2 hover:opacity-80 hover:shadow-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Entrar
                </button>
              </form>
            </div>
          )}

          {isAdmin && (
            <div className="mb-12 p-6 border border-border bg-muted rounded transition-all duration-300 animate-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Gerenciar Estágios</h3>
                <button
                  onClick={handleLogout}
                  className="text-sm px-4 py-2 border border-border hover:bg-border transition-all duration-300 transform hover:scale-105"
                >
                  Sair
                </button>
              </div>

              <form onSubmit={handleAddVaga} className="space-y-4 mb-8 p-6 bg-background border border-border rounded">
                <h4 className="font-medium">{editandoId ? "Editar Estágio" : "Novo Estágio"}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Título do estágio *"
                    value={novaVaga.titulo}
                    onChange={(e) => setNovaVaga({ ...novaVaga, titulo: e.target.value })}
                    className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Empresa *"
                    value={novaVaga.empresa}
                    onChange={(e) => setNovaVaga({ ...novaVaga, empresa: e.target.value })}
                    className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Faculdade Parceira"
                    value={novaVaga.faculdade}
                    onChange={(e) => setNovaVaga({ ...novaVaga, faculdade: e.target.value })}
                    className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded"
                  />
                  <input
                    type="text"
                    placeholder="Localização"
                    value={novaVaga.localizacao}
                    onChange={(e) => setNovaVaga({ ...novaVaga, localizacao: e.target.value })}
                    className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Bolsa/Remuneração"
                    value={novaVaga.bolsa}
                    onChange={(e) => setNovaVaga({ ...novaVaga, bolsa: e.target.value })}
                    className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded"
                  />
                  <select
                    value={novaVaga.modalidade}
                    onChange={(e) => setNovaVaga({ ...novaVaga, modalidade: e.target.value })}
                    className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded cursor-pointer"
                  >
                    <option>Presencial</option>
                    <option>Remoto</option>
                    <option>Híbrido</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={novaVaga.nivel}
                    onChange={(e) => setNovaVaga({ ...novaVaga, nivel: e.target.value })}
                    className="px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded cursor-pointer"
                  >
                    <option>Júnior</option>
                    <option>Pleno</option>
                  </select>
                </div>

                <textarea
                  placeholder="Descrição"
                  value={novaVaga.descricao}
                  onChange={(e) => setNovaVaga({ ...novaVaga, descricao: e.target.value })}
                  className="w-full px-4 py-2 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded"
                  rows={3}
                />

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-foreground text-background px-6 py-2 hover:opacity-80 hover:shadow-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 rounded"
                  >
                    {editandoId ? "Atualizar" : "Adicionar"} Estágio
                  </button>
                  {editandoId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditandoId(null)
                        setNovaVaga({ titulo: "", empresa: "", faculdade: "", localizacao: "", modalidade: "Presencial", nivel: "Júnior", descricao: "", bolsa: "" })
                      }}
                      className="border border-border px-6 py-2 hover:bg-border text-sm font-medium transition-all duration-300 transform hover:scale-105 rounded"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </form>

              <div className="space-y-2">
                <h4 className="font-medium mb-4">Estágios cadastrados ({vagas.length})</h4>
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {vagas.map((vaga) => (
                    <div key={vaga.id} className="p-3 bg-background border border-border flex items-center justify-between hover:border-foreground transition-all duration-300 rounded group">
                      <div>
                        <p className="font-medium text-sm">{vaga.titulo}</p>
                        <p className="text-xs text-muted-foreground">{vaga.empresa} • {vaga.faculdade}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditVaga(vaga)}
                          className="px-3 py-1 text-xs bg-muted hover:bg-border transition-all duration-300 transform hover:scale-110 rounded"
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteVaga(vaga.id)}
                          className="px-3 py-1 text-xs bg-destructive text-destructive-foreground hover:opacity-80 transition-all duration-300 transform hover:scale-110 rounded"
                        >
                          Deletar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mb-12 space-y-4">
            <div className="max-w-2xl">
              <input
                type="text"
                placeholder="Buscar por cargo, empresa ou faculdade..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full px-6 py-4 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 rounded"
                aria-label="Buscar estágios"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={filtroNivel}
                onChange={(e) => setFiltroNivel(e.target.value)}
                className="px-6 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 cursor-pointer rounded"
                aria-label="Filtrar por nível"
              >
                <option>Todos os níveis</option>
                <option>Júnior</option>
                <option>Pleno</option>
              </select>

              <select
                value={filtroModalidade}
                onChange={(e) => setFiltroModalidade(e.target.value)}
                className="px-6 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground focus:ring-2 focus:ring-foreground/20 transition-all duration-300 cursor-pointer rounded"
                aria-label="Filtrar por modalidade"
              >
                <option>Todas as modalidades</option>
                <option>Presencial</option>
                <option>Remoto</option>
                <option>Híbrido</option>
              </select>
            </div>

            <p className="text-sm text-muted-foreground font-light">
              {vagasFiltradas.length} {vagasFiltradas.length === 1 ? "estágio encontrado" : "estágios encontrados"}
            </p>
          </div>

          <div className="space-y-6">
            {vagasFiltradas.length > 0 ? (
              vagasFiltradas.map((vaga) => (
                <article
                  key={vaga.id}
                  className={`border border-border p-6 md:p-8 hover:border-foreground hover:shadow-xl transition-all duration-300 group rounded bg-card ${
                    vagasVisiveis.includes(vaga.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-medium mb-2 group-hover:text-foreground transition-colors">{vaga.titulo}</h2>
                      <p className="text-muted-foreground font-light">{vaga.empresa}</p>
                      <p className="text-sm text-muted-foreground font-light mt-1">Faculdade: {vaga.faculdade}</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className={`px-4 py-2 text-sm font-medium border rounded ${getNivelColor(vaga.nivel)}`}>
                        {vaga.nivel}
                      </span>
                      <span className={`px-4 py-2 text-sm font-medium border rounded ${getModalidadeColor(vaga.modalidade)}`}>
                        {vaga.modalidade}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-light mb-4 leading-relaxed">{vaga.descricao}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-border">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground font-light">📍 {vaga.localizacao}</p>
                      {vaga.bolsa && <p className="text-sm font-semibold text-foreground">Bolsa: {vaga.bolsa}</p>}
                    </div>
                    <Link
                      href="/contato"
                      className="inline-block bg-foreground text-background px-6 py-3 hover:opacity-80 hover:shadow-xl text-sm font-medium uppercase tracking-wider transition-all duration-300 transform hover:scale-105 text-center rounded"
                    >
                      Candidatar-se
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-20 border border-dashed border-border rounded p-8 bg-muted/30">
                <p className="text-xl text-muted-foreground font-light">
                  Nenhum estágio encontrado com os filtros selecionados.
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
