import {
  ChangeEvent,
  ComponentPropsWithRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useId,
  useState,
} from 'react'

import clsx from 'clsx'
import { Eye, EyeOff } from 'lucide-react'

import s from './TextField.module.scss'

export type TextFieldProps = {
  error?: string
  label?: string
  onValueChange?: (value: string) => void
  togglePassword?: boolean
  value?: string
} & ComponentPropsWithRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, error, id, label, onChange, onValueChange, togglePassword, ...rest }, ref) => {
    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(() => {
      return togglePassword ? 'password' : 'text'
    })
    const generatedId = useId()
    const inputId = id || generatedId

    const handleChangePasswordType = () => {
      setInputType(prev => (prev === 'text' ? 'password' : 'text'))
    }
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }

    return (
      <div className={clsx(s.field, className)}>
        {label && (
          <label className={clsx(s.label)} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={s.inputWrapper}>
          <input
            className={clsx('input-reset', s.input, error && s.error)}
            id={inputId}
            onChange={handleChangeInput}
            ref={ref}
            type={inputType}
            {...rest}
          />

          {togglePassword && (
            <button className={s['icon-right']} onClick={handleChangePasswordType} type={'button'}>
              {inputType === 'password' ? <EyeOff /> : <Eye />}
            </button>
          )}
          {error && <span className={s.errorLabel}>{error}</span>}
        </div>
      </div>
    )
  }
)
