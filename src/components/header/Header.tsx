import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { appActions } from '@/app/app.slice'
import { ROUTES } from '@/common/constants'
import { useBreakpoint } from '@/common/hooks'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { ChevronLeft, LogOut } from 'lucide-react'

import s from './Header.module.scss'
export const Header = () => {
  const matches = useBreakpoint(768, 'min')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(appActions.setIsAuthenticated(false))
    navigate(ROUTES.SIGN_IN)
  }
  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <header className={s.header}>
      <div className={clsx('container', s.wrapper)}>
        {matches ? (
          <>
            <Button
              as={Link}
              className={s.back}
              onClick={handleNavigate}
              to={''}
              variant={'secondary'}
            >
              Назад
            </Button>
            <Button className={s.logout} onClick={handleLogOut} variant={'secondary'}>
              Выход
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} className={s.back} onClick={handleNavigate} to={''} variant={'icon'}>
              <ChevronLeft />
            </Button>
            <Button className={s.logout} onClick={handleLogOut} variant={'icon'}>
              <LogOut size={18} />
            </Button>
          </>
        )}
      </div>
    </header>
  )
}
