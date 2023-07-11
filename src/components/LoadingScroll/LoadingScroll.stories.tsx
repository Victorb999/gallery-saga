import React from 'react'
import { Story, Meta } from '@storybook/react'
import { LoadingScroll } from './LoadingScroll'

export default {
  title: 'Components/LoadingScroll',
  component: LoadingScroll,
} as Meta

const Template: Story = (args) => <LoadingScroll {...args} />

export const Default = Template.bind({})
