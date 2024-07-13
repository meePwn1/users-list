import { Link } from 'react-router-dom'

import { ROUTES } from '@/common/constants'
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
      <Link className={s.image} to={ROUTES.OUR_TEAM_MEMBER(user.id.toString())}>
        <img alt={`${user.first_name} ${user.last_name}`} src={user.avatar} />
      </Link>
      <Link className={s.title} to={ROUTES.OUR_TEAM_MEMBER(user.id.toString())}>
        {`${user.first_name} ${user.last_name}`}
      </Link>
      <div className={s.action}>
        <Button variant={'icon'}>
          <Heart size={14} />
        </Button>
      </div>
    </div>
  )
}
