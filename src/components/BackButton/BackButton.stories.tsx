import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { BackButton } from './BackButton'

export default {
  title: 'Components/BackButton',
  component: BackButton,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
} as Meta

const Template: Story = (args) => <BackButton {...args} />

export const Default = Template.bind({})
