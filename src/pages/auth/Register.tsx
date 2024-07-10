import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { appActions, appSelectors } from '@/app/app.slice'
import { ROUTES } from '@/common/constants'
import { setUserDataToLocalStorage } from '@/common/utils'
import { SignUp } from '@/components/auth/sign-up'
import { AuthArgs } from '@/services/auth/auth.types'
import { toast } from 'sonner'

export const Register = () => {
  // const [register] = useRegisterMutation()
  const status = useSelector(appSelectors.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Регистрация в апишке не работает
  /*   const handleSubmit = (data: AuthArgs) => {
    register(data)
      .unwrap()
      .then(() => {
        navigate(ROUTES.OUR_TEAM)
        toast.success('Регистрация прошла успешно')
        dispatch(appActions.setIsAuthenticated(true))
      })
  } */

  const handleSubmit = (data: AuthArgs) => {
    dispatch(appActions.setStatus('pending'))
    setUserDataToLocalStorage(data).then(() => {
      toast.success('Регистрация прошла успешно')
      dispatch(appActions.setIsAuthenticated(true))
      dispatch(appActions.setStatus('succeeded'))
      navigate(ROUTES.OUR_TEAM)
    })
  }

  return (
    <>
      <SignUp isLoading={status === 'pending'} onSubmit={handleSubmit} />
    </>
  )
}
