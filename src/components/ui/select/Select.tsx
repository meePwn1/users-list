import { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './Select.module.scss'

type Option =
  | { disabled?: boolean; text: number; value: number }
  | { disabled?: boolean; text: number; value: string }
  | { disabled?: boolean; text: string; value: number }
  | { disabled?: boolean; text: string; value: string }

type Props = {
  onValueChange?: (value: string) => void
  options?: Option[]
} & ComponentPropsWithoutRef<'select'>

export const Select = ({ className, onValueChange, options, ...rest }: Props) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onValueChange?.(e.target.value)
  }

  return (
    <select className={clsx(s.select, className)} onChange={handleSelectChange} {...rest}>
      {options?.map(option => (
        <option disabled={option.disabled} key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}
