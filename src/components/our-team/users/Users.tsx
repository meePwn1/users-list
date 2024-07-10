import { UserCard } from '@/components/our-team/user-card'
import { User } from '@/services/users/users.types'

import s from './Users.module.scss'
type Props = {
  users?: User[]
}

export const Users = ({ users }: Props) => {
  return <div className={s.users}>{users?.map(user => <UserCard key={user.id} user={user} />)}</div>
}
