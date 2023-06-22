import api from ".."
import { isAxiosError } from "axios"

type LoginResult = {
  token: string
  name: string
}

export const login = async (email: string, password: string) => {
  try {
    const result = await api.post<LoginResult>("/user/login", {
      email,
      password,
    })

    return result.data
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data
    }
  }
}
