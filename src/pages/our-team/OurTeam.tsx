import { useSearchParams } from 'react-router-dom'

import { PARAMS } from '@/common/constants/params'
import { UserCard } from '@/components/our-team/user-card'
import { UserCardSkeleton } from '@/components/our-team/user-card/UserCardSkeleton'
import { Pagination } from '@/components/ui/pagination'
import { VioletCard } from '@/components/violet-card'
import { useGetUsersQuery } from '@/services/users/users.service'
import clsx from 'clsx'

import s from './OurTeam.module.scss'

const perPageOptions = [4, 8, 12]
const PER_PAGE = perPageOptions[0]

export const OurTeam = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = parseInt(searchParams.get(PARAMS.PAGE) || '1')
  const per_page = parseInt(searchParams.get(PARAMS.PER_PAGE) || `${PER_PAGE}`)

  // queries
  const { data, isFetching } = useGetUsersQuery({ page, per_page })

  // handlers
  const handlePageChange = (currentPage: number) => {
    if (currentPage > 1) {
      searchParams.set(PARAMS.PAGE, currentPage.toString())
    } else {
      searchParams.delete(PARAMS.PAGE)
    }
    setSearchParams(searchParams)
  }

  const handlePerPageChange = (perPage: number) => {
    if (perPage !== PER_PAGE) {
      searchParams.set(PARAMS.PER_PAGE, perPage.toString())
    } else {
      searchParams.delete(PARAMS.PER_PAGE)
    }
    searchParams.delete(PARAMS.PAGE)
    setSearchParams(searchParams)
  }

  return (
    <>
      <section>
        <VioletCard className={s.wrapper}>
          <div className={'container'}>
            <h1 className={s.title}>Наша команда</h1>
            <p className={s.text}>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
              плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
            </p>
          </div>
        </VioletCard>
      </section>
      <section>
        <div className={clsx('container', s.usersWrapper)}>
          <div className={s.users}>
            {isFetching ? (
              <UserCardSkeleton count={per_page} />
            ) : (
              data?.data?.map(user => <UserCard key={user.id} user={user} />)
            )}
          </div>
        </div>
        {data && (
          <Pagination
            className={s.pagination}
            count={data?.total_pages}
            onPageChange={handlePageChange}
            onPerPageChange={handlePerPageChange}
            page={data?.page}
            perPage={per_page}
            perPageOptions={perPageOptions}
          />
        )}
      </section>
    </>
  )
}
