import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { authSchema } from '@/common/schemas/auth.schema'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { AuthArgs } from '@/services/auth/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignIn.module.scss'

const formSchema = authSchema.omit({ confirmPassword: true })

type FormValues = z.infer<typeof formSchema>

type Props = {
  isLoading?: boolean
  onSubmit?: (values: AuthArgs) => void
}

export const SignIn = ({ isLoading, onSubmit }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onHandleSubmit = (values: FormValues) => {
    onSubmit?.(values)
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <h3 className={s.title}>Войти</h3>
      <TextField {...register('username')} error={errors.username?.message} label={'Имя'} />
      <TextField {...register('email')} error={errors.email?.message} label={'Электронная почта'} />
      <TextField
        {...register('password')}
        error={errors.password?.message}
        label={'Пароль'}
        togglePassword
      />
      <Button className={s.submitButton} isLoading={isLoading}>
        Войти
      </Button>
      <p className={s.footer}>
        Нет аккаунта? <Link to={ROUTES.SIGN_UP}>Зарегистрироваться</Link>
      </p>
    </form>
  )
}
