import { createRoot } from 'react-dom/client'

import 'react-loading-skeleton/dist/skeleton.css'
import './styles/index.scss'

import { App } from './App'

createRoot(document.getElementById('root') as HTMLElement).render(<App />)
