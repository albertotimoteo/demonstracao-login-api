import { useState } from "react"
import Login from "./pages/Login"
import { UserContext } from "./context/TokenContext"

function App() {
  const [loginResult, setLoginResult] = useState<{
    token: string
    name: string
  }>({
    token: "",
    name: "",
  })

  console.log(import.meta.env.VITE_API_BASE_URL)

  return (
    <UserContext.Provider
      value={{ token: loginResult.token, name: loginResult.name }}
    >
      <Login setLoginResult={setLoginResult} />
    </UserContext.Provider>
  )
}

export default App
