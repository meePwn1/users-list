import { type AuthArgs } from '@/services/auth/auth.types'

export const getUserDataFromLocalStorage = () => {
  return new Promise<AuthArgs>(resolve => {
    setTimeout(() => {
      const userData = localStorage.getItem('user')

      resolve(JSON.parse(userData || '{}'))
    }, 1000)
  })
}
