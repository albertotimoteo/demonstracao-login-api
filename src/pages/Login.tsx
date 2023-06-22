import { Dispatch, SetStateAction, useState } from "react"
import { login } from "../services/user"

type Props = {
  setLoginResult: Dispatch<SetStateAction<{ name: string; token: string }>>
}

function Login({ setLoginResult }: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const doLogin = async () => {
    const loginResult = await login(email, password)
    setLoginResult(loginResult)
  }

  return (
    <>
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
    </>
  )
}

export default Login
