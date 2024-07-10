import { Users } from '@/components/our-team/users/Users'
import { VioletCard } from '@/components/violet-card'
import { useGetUsersQuery } from '@/services/users/users.service'
import clsx from 'clsx'

import s from './OurTeam.module.scss'
export const OurTeam = () => {
  const { data } = useGetUsersQuery({})

  return (
    <>
      <section>
        <VioletCard className={s.wrapper}>
          <div className={'container'}>
            <h1 className={s.title}>Наша команда</h1>
            <p className={s.text}>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
              плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
            </p>
          </div>
        </VioletCard>
      </section>
      <section>
        <div className={clsx('container', s.usersWrapper)}>
          <Users users={data?.data} />
        </div>
      </section>
    </>
  )
}
