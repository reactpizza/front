import React, { FC } from 'react'

interface MenuItemProps {
	title: string
	weight: number
	imagePath: string
	price: number
	ingredients: string
}

export const MenuItem: FC<MenuItemProps> = ({
	imagePath,
	weight,
	title,
	ingredients,
	price,
}) => {
	return (
		<div className='w-96 shadow-xl rounded-2xl'>
			<div className='relative'>
				<img
					className=' object-cover object-center w-full h-[15rem] rounded-t-2xl'
					src={imagePath}
					alt='pizzaImg'
				/>
				<span className='absolute bottom-2 right-3 bg-gray-600/90 rounded-xl text-white px-2'>
					{weight} г
				</span>
			</div>

			<div className='p-8'>
				<h2 className='text-xl font-semibold mb-2'>{title}</h2>
				<p className='mb-8'>{ingredients}</p>
				<span className='font-semibold text-xl'>{price} грн</span>
			</div>
		</div>
	)
}
