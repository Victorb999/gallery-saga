import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ImageInfo, ImageItemProps } from './ImageInfo'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Components/ImageInfo',
  component: ImageInfo,
  decorators: [(Story) => <Router>{Story()}</Router>],
} as Meta

const Template: Story<ImageItemProps> = (args) => <ImageInfo {...args} />

export const Default = Template.bind({})
Default.args = {
  author: 'John Doe',
  download_url: 'https://www.svgrepo.com/show/75578/avatar.svg',
  height: 800,
  width: 1200,
}
