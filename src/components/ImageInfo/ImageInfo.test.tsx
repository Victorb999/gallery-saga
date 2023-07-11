import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { ImageInfo } from './ImageInfo'

describe('ImageInfo', () => {
  const mockProps = {
    author: 'John Doe',
    download_url: 'https://example.com/image.jpg',
    height: 800,
    width: 1200,
  }

  it('deve renderizar corretamente as informações da imagem', () => {
    render(
      <Router>
        <ImageInfo {...mockProps} />
      </Router>,
    )

    const authorElement = screen.getByText('Author:')
    const heightElement = screen.getByText('Altura imagem original:')
    const widthElement = screen.getByText('Largura imagem original:')
    const linkElement = screen.getByRole('link', {
      name: 'https://example.com/image.jpg',
    })
    const backButtonElement = screen.getByRole('button', { name: 'Voltar' })

    expect(authorElement).toBeInTheDocument()
    expect(heightElement).toBeInTheDocument()
    expect(widthElement).toBeInTheDocument()
    expect(linkElement).toBeInTheDocument()
    expect(backButtonElement).toBeInTheDocument()

    expect(screen.getByAltText('John Doe')).toBeInTheDocument()
  })
})