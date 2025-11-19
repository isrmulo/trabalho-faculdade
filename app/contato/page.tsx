"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validarFormulario = (): boolean => {
    const novosErros = {
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: "",
    }

    let isValido = true

    if (!formData.nome.trim()) {
      novosErros.nome = "O nome é obrigatório"
      isValido = false
    }

    if (!formData.email.trim()) {
      novosErros.email = "O e-mail é obrigatório"
      isValido = false
    }

    if (!formData.telefone.trim()) {
      novosErros.telefone = "O telefone é obrigatório"
      isValido = false
    }

    if (!formData.assunto.trim()) {
      novosErros.assunto = "O assunto é obrigatório"
      isValido = false
    }

    if (!formData.mensagem.trim()) {
      novosErros.mensagem = "A mensagem é obrigatória"
      isValido = false
    }

    setErrors(novosErros)
    return isValido
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validarFormulario()) {
      setIsSubmitting(true)

      setTimeout(() => {
        console.log("Formulário enviado:", formData)
        setIsSubmitting(false)
        setSubmitSuccess(true)

        setFormData({
          nome: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
        })

        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 md:mb-16">
              <h1 className="text-4xl md:text-6xl font-light mb-6 text-balance">
                Entre em <span className="font-semibold">contato</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed text-pretty">
                Estamos aqui para ajudar você a encontrar a oportunidade perfeita
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-medium mb-6">Informações</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">E-mail</h3>
                    <p className="text-lg font-light">romuloodorico@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">
                      Telefone
                    </h3>
                    <p className="text-lg font-light">(85) 3252-2977</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">
                      Endereço
                    </h3>
                    <p className="text-lg font-light">
                      Av. Barão de Studart, 1980 - Aldeota
                      <br />
                      Fortaleza, CE - 60120-024
                      <br />
                      CDL - Câmara de Dirigentes Lojistas
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium uppercase tracking-wider mb-2 text-muted-foreground">
                      Horário de Atendimento
                    </h3>
                    <p className="text-lg font-light">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Sábado e Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-medium mb-6">Envie uma mensagem</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-foreground text-background" role="alert" aria-live="polite">
                    <p className="font-medium">✓ Mensagem enviada com sucesso!</p>
                    <p className="text-sm font-light mt-1">Entraremos em contato em breve.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.nome ? "border-red-500" : "border-border"
                      } bg-background text-foreground focus:outline-none focus:border-foreground transition-colors`}
                      aria-required="true"
                      aria-invalid={!!errors.nome}
                      aria-describedby={errors.nome ? "nome-error" : undefined}
                    />
                    {errors.nome && (
                      <p id="nome-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.nome}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? "border-red-500" : "border-border"
                      } bg-background text-foreground focus:outline-none focus:border-foreground transition-colors`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className={`w-full px-4 py-3 border ${
                        errors.telefone ? "border-red-500" : "border-border"
                      } bg-background text-foreground focus:outline-none focus:border-foreground transition-colors`}
                      aria-required="true"
                      aria-invalid={!!errors.telefone}
                      aria-describedby={errors.telefone ? "telefone-error" : undefined}
                    />
                    {errors.telefone && (
                      <p id="telefone-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.telefone}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="assunto" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${
                        errors.assunto ? "border-red-500" : "border-border"
                      } bg-background text-foreground focus:outline-none focus:border-foreground transition-colors cursor-pointer`}
                      aria-required="true"
                      aria-invalid={!!errors.assunto}
                      aria-describedby={errors.assunto ? "assunto-error" : undefined}
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="vaga">Dúvidas sobre vagas</option>
                      <option value="candidatura">Status de candidatura</option>
                      <option value="parceria">Parceria empresarial</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                    {errors.assunto && (
                      <p id="assunto-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.assunto}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border ${
                        errors.mensagem ? "border-red-500" : "border-border"
                      } bg-background text-foreground focus:outline-none focus:border-foreground transition-colors resize-none`}
                      aria-required="true"
                      aria-invalid={!!errors.mensagem}
                      aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                    />
                    {errors.mensagem && (
                      <p id="mensagem-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.mensagem}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background px-8 py-4 hover:opacity-80 disabled:opacity-50 text-sm font-medium uppercase tracking-wider transition-opacity"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
