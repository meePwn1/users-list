import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
import { authSchema } from '@/common/schemas/auth.schema'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/text-field'
import { AuthArgs } from '@/services/auth/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignUp.module.scss'

const formSchema = authSchema.refine(values => values.password === values.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
})

type FormValues = z.infer<typeof formSchema>

type Props = {
  isLoading?: boolean
  onSubmit?: (values: AuthArgs) => void
}

export const SignUp = ({ isLoading, onSubmit }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onHandleSubmit = (values: FormValues) => {
    onSubmit?.({
      email: values.email,
      password: values.password,
      username: values.username,
    })
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onHandleSubmit)}>
      <h3 className={s.title}>Регистрация</h3>
      <TextField {...register('username')} error={errors.username?.message} label={'Имя'} />
      <TextField {...register('email')} error={errors.email?.message} label={'Электронная почта'} />
      <TextField
        {...register('password')}
        error={errors.password?.message}
        label={'Пароль'}
        togglePassword
      />
      <TextField
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
        label={'Повторите пароль'}
        togglePassword
      />
      <Button className={s.submitButton} isLoading={isLoading}>
        Зарегистрироваться
      </Button>
      <p className={s.footer}>
        Уже есть аккаунт? <Link to={ROUTES.SIGN_IN}>Войти</Link>
      </p>
    </form>
  )
}
