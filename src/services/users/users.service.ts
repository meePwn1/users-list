import type { UserByIdResponse, UsersParams, UsersResponse } from '@/services/users/users.types'

import { baseApi } from '../base-api'

const usersService = baseApi.injectEndpoints({
  endpoints: build => {
    return {
      getUserById: build.query<UserByIdResponse, string>({
        providesTags: ['Users'],
        query: id => ({
          method: 'GET',
          url: `/users/${id}`,
        }),
      }),
      getUsers: build.query<UsersResponse, UsersParams>({
        providesTags: ['Users'],
        query: params => ({
          method: 'GET',
          params,
          url: '/users',
        }),
      }),
    }
  },
})

export const { useGetUserByIdQuery, useGetUsersQuery } = usersService
