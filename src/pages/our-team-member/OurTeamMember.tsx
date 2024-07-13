import { useParams } from 'react-router-dom'

import { VioletCard } from '@/components/violet-card'
import { useGetUserByIdQuery } from '@/services/users/users.service'
import { Mail, Phone } from 'lucide-react'

import s from './OurTeamMember.module.scss'

export const OurTeamMember = () => {
  const { memberId } = useParams<{ memberId: string }>()

  const { data, isLoading } = useGetUserByIdQuery(memberId || '')
  const user = data?.data

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <>
      <section>
        <VioletCard className={s.wrapper}>
          <div className={'container'}>
            <div className={s.userWrapper}>
              <div className={s.image}>
                <img alt={`${user?.first_name} ${user?.last_name}`} src={user?.avatar} />
              </div>
              <div className={s.info}>
                <h3>
                  {user?.first_name} {user?.last_name}
                </h3>
                <p>Партнер</p>
              </div>
            </div>
          </div>
        </VioletCard>
      </section>
      <section>
        <div className={s.contentWrapper}>
          <div className={s.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime cum itaque,
              explicabo ratione nulla, nam possimus sapiente, officia impedit voluptas doloribus
              quae minus ducimus quidem. Tenetur facilis commodi voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime cum itaque,
              explicabo ratione nulla, nam possimus sapiente, officia impedit voluptas doloribus
              quae minus ducimus quidem. Tenetur facilis commodi voluptatum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam maxime cum itaque,
              explicabo ratione nulla, nam possimus sapiente, officia impedit voluptas doloribus
              quae minus ducimus quidem. Tenetur facilis commodi voluptatum.
            </p>
          </div>
          <div className={s.contacts}>
            <a href={'tel:+79543334455'}>
              <Phone size={20} />
              <span>+7 (954) 333-44-55</span>
            </a>
            <a href={`mailto:${user?.email}`}>
              <Mail />
              <span>{user?.email}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
