import { Path } from '@/constants'
import Layout from './ui/layout/Layout.tsx'
import { Accounts, Items, OSRSGold, Reward, RS3Gold, SellGold } from '@/pages'
import { RouteObject } from 'react-router-dom'

export const routerList: RouteObject[] = [
	{
		path: Path.index,
		element: <Layout />,
		children: [
			{
				path: Path.osrsGold,
				element: <OSRSGold />,
			},
			{
				path: Path.index,
				element: <RS3Gold />,
			},
			{
				path: Path.sellRsGold,
				element: <SellGold />,
			},
			{
				path: Path.osrsItems,
				element: <Items />,
			},
			{
				path: Path.osrsAccounts,
				element: <Accounts />,
			},
			{
				path: Path.reward,
				element: <Reward />,
			},
		],
	},
]
