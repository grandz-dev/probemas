import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routerList } from '@/router.tsx'
import CurrencyProvider from '@/context/CurrencyContext.tsx'

import '@/assets/styles/index.scss'

const router = createBrowserRouter(routerList)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<CurrencyProvider>
		<RouterProvider router={router} />
	</CurrencyProvider>,
)
