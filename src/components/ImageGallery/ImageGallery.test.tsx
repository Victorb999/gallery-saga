/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { Image } from '../../store/images/types'
import { ImageGallery } from './ImageGallery'

describe('ImageGallery', () => {
  const mockImages: Image[] = [
    {
      id: 1,
      author: 'John Doe',
      download_url: 'https://example.com/image1.jpg',
      width: 100,
      height: 100,
      url: 'https//example.com/image.jpg',
    },
    {
      id: 2,
      author: 'Jane Smith',
      download_url: 'https://example.com/image2.jpg',
      width: 100,
      height: 100,
      url: 'https//example.com/image.jpg',
    },
  ]

  it('deve renderizar número correto de imagens', () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <ImageGallery images={mockImages} />
      </BrowserRouter>,
    )

    const imageItems = getAllByTestId('image-test')

    expect(imageItems.length).toBe(mockImages.length)
  })
})
