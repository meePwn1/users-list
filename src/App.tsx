import { Provider } from 'react-redux'

import { Router } from '@/app/router/router-config'
import { store } from '@/app/store'
import { Toaster } from 'sonner'

export function App() {
  return (
    <Provider store={store}>
      <Toaster richColors />
      <Router />
    </Provider>
  )
}
