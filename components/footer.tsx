import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Coluna 1 - Logo e Descrição */}
          <div>
            <h3 className="text-xl font-semibold mb-4">TechCareers</h3>
            <p className="text-sm font-light opacity-80 leading-relaxed">
              Conectamos talentos às melhores oportunidades em tecnologia.
            </p>
          </div>

          {/* Coluna 2 - Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/" className="hover:opacity-70 transition-opacity">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/vagas" className="hover:opacity-70 transition-opacity">
                  Vagas
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:opacity-70 transition-opacity">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Contato</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li>contato@techcareers.com</li>
              <li>(85) 3252-2977</li>
              <li>Fortaleza, CE</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Equipe</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li>Romulo</li>
              <li>Klleber</li>
              <li>Julio</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm font-light opacity-70">
          <p>&copy; {new Date().getFullYear()} TechCareers. Todos os direitos reservados.</p>
          <p className="mt-2">Projeto Acadêmico - CDL Fortaleza</p>
        </div>
      </div>
    </footer>
  )
}
