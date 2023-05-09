import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem } from './menuItem.component'

const meta: Meta<typeof MenuItem> = {
	title: 'Menu/MenuItem',
	component: MenuItem,
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const View: Story = {
	args: {
		imagePath: '/assets/pizza/manhattan.jpeg',
		weight: 555,
		title: 'Піца Мангеттен',
		ingredients:
			'(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
		price: 215,
	},
}
