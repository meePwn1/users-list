import { type AuthArgs } from '@/services/auth/auth.types'

export const setUserDataToLocalStorage = (data: AuthArgs) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
      localStorage.setItem('user', JSON.stringify(data))
    }, 1000)
  })
}
