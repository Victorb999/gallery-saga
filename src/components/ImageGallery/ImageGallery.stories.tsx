import React from 'react'
import { Story, Meta } from '@storybook/react'
import { ImageGallery, ImageGalleryProps } from './ImageGallery'
import { Image } from '../../store/images/types'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Components/ImageGallery',
  component: ImageGallery,
  decorators: [(Story) => <Router>{Story()}</Router>],
} as Meta

const Template: Story<ImageGalleryProps> = (args) => <ImageGallery {...args} />

const images: Image[] = [
  {
    id: 1,
    author: 'John Doe',
    download_url: 'https://www.svgrepo.com/show/75578/avatar.svg',
    width: 100,
    height: 100,
    url: 'https://www.svgrepo.com/show/75578/avatar.svg',
  },
  {
    id: 2,
    author: 'Jane Smith',
    download_url: 'https://www.svgrepo.com/show/17344/avatar.svg',
    width: 100,
    height: 100,
    url: 'https://www.svgrepo.com/show/17344/avatar.svg',
  },
]

export const Default = Template.bind({})
Default.args = {
  images: images,
}
