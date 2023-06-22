import { ReactNode } from "react"

type TesteProps = {
  email: string
  numero: number
  ehTeste: boolean
  mudaEmail: (value: string) => void
  children: ReactNode
}

const Teste = ({ email, numero, ehTeste, mudaEmail, children }: TesteProps) => (
  <div>
    {children}
    <p>Isto é um teste</p>
    <p>{email}</p>
    <p>{numero}</p>
    <p>É um teste? {ehTeste ? "Sim" : "Não"}</p>
    <button onClick={() => mudaEmail("a@a.com")}>
      Clique aqui para mudar o e-mail
    </button>
  </div>
)

export default Teste
