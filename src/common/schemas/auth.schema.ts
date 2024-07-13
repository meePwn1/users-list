import { z } from 'zod'

export const authSchema = z.object({
  confirmPassword: z.string(),
  email: z.string().email({ message: 'Некорректная эл.почта' }),
  password: z.string().min(6, { message: 'Пароль должен быть не менее 6 символов' }),
  username: z
    .string()
    .min(3, { message: 'Имя должно быть не менее 3 символов' })
    .max(20, { message: 'Имя должно быть не более 20 символов' }),
})
