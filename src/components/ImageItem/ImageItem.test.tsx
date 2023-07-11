import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ImageItem } from './ImageItem'

describe('ImageItem', () => {
  const mockProps = {
    author: 'John Doe',
    download_url: 'https://example.com/image.jpg',
    id: 1,
  }

  it('deve renderizar corretamente o item de imagem', () => {
    render(
      <Router>
        <ImageItem {...mockProps} />
      </Router>,
    )

    const linkElement = screen.getByRole('link')
    const imgElement = screen.getByAltText('John Doe')

    expect(linkElement).toBeInTheDocument()

    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', 'https://example.com/image.jpg')
    expect(imgElement).toHaveAttribute('alt', 'John Doe')
  })

  it('should render skeleton', () => {
    render(
      <Router>
        <ImageItem {...mockProps} />
      </Router>,
    )

    const skeletonElement = screen.getByTestId('skeleton')

    expect(skeletonElement).toBeInTheDocument()
  })

  it('should remove skeleton when image is loaded', () => {
    render(
      <Router>
        <ImageItem {...mockProps} />
      </Router>,
    )

    const imgElement = screen.getByAltText('John Doe')

    expect(imgElement).toBeInTheDocument()

    // Simula o evento de carregamento da imagem
    imgElement.dispatchEvent(new Event('load'))

    const skeletonElement = screen.queryByRole('progressbar')

    expect(skeletonElement).not.toBeInTheDocument()
  })
})
