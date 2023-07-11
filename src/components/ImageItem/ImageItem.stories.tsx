import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ImageItem, ImageItemProps } from './ImageItem'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Components/ImageItem',
  component: ImageItem,
  argTypes: {
    author: { control: 'text' },
    download_url: { control: 'text' },
    id: { control: 'number' },
  },
} as Meta

const Template: Story<ImageItemProps> = (args) => (
  <Router>
    <ImageItem {...args} />
  </Router>
)

export const Default = Template.bind({})
Default.args = {
  author: 'Alejandro Escamilla',
  download_url: 'https://picsum.photos/id/0/5000/3333',
  id: 1,
}
