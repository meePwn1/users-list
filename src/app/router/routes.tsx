import { Navigate, RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { Login } from '@/pages/auth/Login'
import { Register } from '@/pages/auth/Register'
import { OurTeam } from '@/pages/our-team/OurTeam'
import { OurTeamMember } from '@/pages/our-team-member'

export const publicRoutes: RouteObject[] = [
  {
    element: <Login />,
    path: ROUTES.SIGN_IN,
  },
  {
    element: <Register />,
    path: ROUTES.SIGN_UP,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    element: <Navigate replace to={ROUTES.OUR_TEAM} />,
    path: ROUTES.HOME,
  },
  { element: <OurTeam />, path: ROUTES.OUR_TEAM },
  { element: <OurTeamMember />, path: ROUTES.OUR_TEAM_MEMBER() },
]
