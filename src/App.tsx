import { SkeletonTheme } from 'react-loading-skeleton'
import { Provider } from 'react-redux'

import { Router } from '@/app/router/router-config'
import { store } from '@/app/store'
import { Toaster } from 'sonner'

export function App() {
  return (
    <Provider store={store}>
      <SkeletonTheme baseColor={'#202020'} highlightColor={'#444'}></SkeletonTheme>
      <Toaster richColors />
      <Router />
    </Provider>
  )
}
