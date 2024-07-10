import { useDispatch } from 'react-redux'

import { appActions } from '@/app/app.slice'
import { useBreakpoint } from '@/common/hooks'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { LogOut } from 'lucide-react'

import s from './Header.module.scss'
export const Header = () => {
  const matches = useBreakpoint(768, 'min')
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(appActions.setIsAuthenticated(false))
  }

  return (
    <header className={s.header}>
      <div className={clsx('container', s.wrapper)}>
        {matches ? (
          <Button className={s.logout} onClick={handleLogOut} variant={'secondary'}>
            Выход
          </Button>
        ) : (
          <Button className={s.logout} onClick={handleLogOut} variant={'icon'}>
            <LogOut size={18} />
          </Button>
        )}
      </div>
    </header>
  )
}
