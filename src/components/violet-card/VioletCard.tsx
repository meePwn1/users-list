import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './VioletCard.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const VioletCard = ({ children, className, ...rest }: Props) => {
  return (
    <div className={clsx(s.violetCard, className)} {...rest}>
      {children}
    </div>
  )
}
