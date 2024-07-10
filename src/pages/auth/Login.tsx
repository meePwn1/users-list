import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { appActions, appSelectors } from '@/app/app.slice'
import { ROUTES } from '@/common/constants'
import { getUserDataFromLocalStorage } from '@/common/utils/get-user-data-from-local-storage'
import { SignIn } from '@/components/auth/sign-in'
import { AuthArgs } from '@/services/auth/auth.types'
import { toast } from 'sonner'

export const Login = () => {
  const status = useSelector(appSelectors.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (data: AuthArgs) => {
    dispatch(appActions.setStatus('pending'))
    getUserDataFromLocalStorage().then(res => {
      if (
        res.email === data.email &&
        res.password === data.password &&
        res.username === data.username
      ) {
        toast.success('Авторизация прошла успешно')
        dispatch(appActions.setIsAuthenticated(true))
        dispatch(appActions.setStatus('succeeded'))
        navigate(ROUTES.OUR_TEAM)
      } else {
        toast.error('Неверные данные')
        dispatch(appActions.setStatus('failed'))
      }
    })
  }

  return <SignIn isLoading={status === 'pending'} onSubmit={handleSubmit} />
}
