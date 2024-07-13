import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export const RootLayout = () => {
  return (
    <>
      <div className={'wrapper'}>
        <Header />
        <main style={{ paddingBottom: '60px' }}>
          <Outlet />
        </main>
      </div>
    </>
  )
}
