import { Outlet } from 'react-router-dom'

import s from './AuthLayout.module.scss'
export const AuthLayout = () => {
  return (
    <div className={s.authLayout}>
      <Outlet />
    </div>
  )
}
