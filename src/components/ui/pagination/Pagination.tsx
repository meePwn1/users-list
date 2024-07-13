import { FC } from 'react'

import { Select } from '@/components/ui/select'
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import s from './Pagination.module.scss'

import { DOTS, usePagination } from './lib/use-pagination'

type PageButtonProps = {
  onPageChange: (page: number) => void
  page: number
  selected: boolean
}
type NavigationButtonProps = {
  disabled: boolean
  onClick: () => void
}
type PaginationProps = {
  className?: string
  count: number
  onPageChange: (page: number) => void
  onPerPageChange?: (pageSize: number) => void
  page: number
  perPage?: number
  perPageOptions?: number[]
  siblings?: number
}
export const Pagination = ({
  className,
  count,
  onPageChange,
  onPerPageChange,
  page = 1,
  perPage,
  perPageOptions,
  siblings,
}: PaginationProps) => {
  const {
    handleNextPageChange,
    handlePageChange,
    handlePrevPageChange,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({
    count,
    onChange: onPageChange,
    page,
    siblings,
  })

  const isShowPerPageSelect = perPageOptions?.length && perPage && onPerPageChange

  return (
    <div className={clsx(s.root, className)}>
      <div className={s.pagination}>
        <PrevPageButton disabled={isFirstPage} onClick={handlePrevPageChange} />
        <PaginationPages
          currentPage={page}
          onPageChange={handlePageChange}
          paginationRange={paginationRange}
        />
        <NextPageButton disabled={isLastPage} onClick={handleNextPageChange} />
      </div>
      {isShowPerPageSelect && (
        <PerPageSelect
          onPerPageChange={onPerPageChange}
          perPage={perPage}
          perPageOptions={perPageOptions}
        />
      )}
    </div>
  )
}
const Dots: FC = () => {
  return (
    <li className={s.item}>
      <span>{DOTS}</span>
    </li>
  )
}
const PageButton = ({ onPageChange, page, selected }: PageButtonProps) => {
  return (
    <li className={clsx(s.item, selected && s.active)}>
      <button className={s.pageButton} onClick={() => onPageChange(page)} type={'button'}>
        {page}
      </button>
    </li>
  )
}
const PrevPageButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} type={'button'}>
      <ChevronLeft />
    </button>
  )
}
const NextPageButton = ({ disabled, onClick }: NavigationButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick} type={'button'}>
      <ChevronRight />
    </button>
  )
}

type PaginationPagesProps = {
  currentPage: number
  onPageChange: (page: number) => void
  paginationRange: (number | string)[]
}
const PaginationPages = ({ currentPage, onPageChange, paginationRange }: PaginationPagesProps) => {
  return (
    <ul className={s.list}>
      {paginationRange.map((pageNumber, index) => {
        const isSelected = pageNumber === currentPage

        if (typeof pageNumber === 'string') {
          return <Dots key={index} />
        }

        return (
          <PageButton
            key={index}
            onPageChange={onPageChange}
            page={pageNumber}
            selected={isSelected}
          />
        )
      })}
    </ul>
  )
}

type PerPageSelectProps = {
  onPerPageChange?: (pageSize: number) => void
  perPage?: number
  perPageOptions?: number[]
}

const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions }: PerPageSelectProps) => {
  const selectOptions = perPageOptions?.map(el => ({
    text: el,
    value: el,
  }))
  const handlePerPageChange = (value: string) => {
    onPerPageChange?.(Number(value))
  }

  return (
    <div className={s.select}>
      Показать
      <Select onValueChange={handlePerPageChange} options={selectOptions} value={String(perPage)} />
      на странице
    </div>
  )
}
