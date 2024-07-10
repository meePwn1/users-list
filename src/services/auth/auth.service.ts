import { AuthArgs } from '@/services/auth/auth.types'
import { baseApi } from '@/services/base-api'

const authService = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<{ token: string }, AuthArgs>({
      query: data => ({
        body: data,
        method: 'POST',
        url: '/login',
      }),
    }),

    logout: build.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: '/logout',
      }),
    }),

    register: build.mutation<{ id: string; token: string }, AuthArgs>({
      query: data => ({
        body: data,
        method: 'POST',
        url: '/register',
      }),
    }),
  }),
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authService
