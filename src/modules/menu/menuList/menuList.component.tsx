import React from 'react'
import pizzaMenu from '@app/mocks/pizza.json'
import { MenuItem } from '../menuItem/menuItem.component'
export const MenuList = () => {
	return (
		<div className='flex flex-wrap gap-10'>
			{pizzaMenu.map(({ image, ...pizza }) => (
				<MenuItem
					key={pizza.id}
					imagePath={'/assets/pizza/' + image}
					{...pizza}
				/>
			))}
		</div>
	)
}
