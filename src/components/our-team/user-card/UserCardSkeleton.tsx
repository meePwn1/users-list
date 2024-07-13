import Skeleton from 'react-loading-skeleton'

import s from './UserCard.module.scss'

type Props = {
  count?: number
}
export const UserCardSkeleton = ({ count }: Props) => {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <div className={s.userCard} key={index}>
            <div className={s.image}>
              <Skeleton circle height={100} width={100} />
            </div>
            <h3 className={s.title}>
              <Skeleton width={150} />
            </h3>
            <div className={s.action}>
              <Skeleton height={30} width={30} />
            </div>
          </div>
        ))}
    </>
  )
}
