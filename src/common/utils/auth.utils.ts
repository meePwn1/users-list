import { AuthArgs } from '@/services/auth/auth.types'

export const getAuthDataFromLocalStorage = () => {
  return new Promise<AuthArgs>(resolve => {
    setTimeout(() => {
      const userData = localStorage.getItem('user')

      resolve(JSON.parse(userData || '{}'))
    }, 1000)
  })
}

export const setAuthDataToLocalStorage = (data: AuthArgs) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
      localStorage.setItem('user', JSON.stringify(data))
    }, 1000)
  })
}
