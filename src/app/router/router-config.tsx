import { useSelector } from 'react-redux'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { appSelectors } from '@/app/app.slice'
import { ROUTES } from '@/common/constants'
import { AuthLayout, RootLayout } from '@/components/layout'

import { privateRoutes, publicRoutes } from './routes'

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
    ],
    element: <RootLayout />,
    path: ROUTES.HOME,
  },
  {
    children: publicRoutes,
    element: <AuthLayout />,
  },
])

function PrivateRoutes() {
  const status = useSelector(appSelectors.status)
  const isAuthenticated = useSelector(appSelectors.isAuthenticated)

  if (status === 'pending') {
    return <div>...loading</div>
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.SIGN_UP} />
}
export const Router = () => {
  return <RouterProvider router={router} />
}
