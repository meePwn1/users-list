import { Button } from '@/components/ui/button'
import { User } from '@/services/users/users.types'
import { Heart } from 'lucide-react'

import s from './UserCard.module.scss'

type Props = {
  user: User
}
export const UserCard = ({ user }: Props) => {
  return (
    <div className={s.userCard}>
      <div className={s.image}>
        <img alt={`${user.first_name} ${user.last_name}`} src={user.avatar} />
      </div>
      <h3 className={s.title}>{`${user.first_name} ${user.last_name}`}</h3>
      <div className={s.action}>
        <Button variant={'icon'}>
          <Heart size={14} />
        </Button>
      </div>
    </div>
  )
}
