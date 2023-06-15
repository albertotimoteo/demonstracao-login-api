import { useState } from "react"
import { login } from "./services/user"
import { TokenContext } from "./context/TokenContext"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

  const doLogin = async () => {
    const token = await login(email, password)
    setToken(token)
  }

  return (
    <TokenContext.Provider value={{ token }}>
      <label>
        E-mail
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Senha
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
      </label>
      <button onClick={doLogin}>Entrar</button>
    </TokenContext.Provider>
  )
}

export default App
