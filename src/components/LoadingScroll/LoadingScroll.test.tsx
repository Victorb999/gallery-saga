import React from 'react'
import { render, screen } from '@testing-library/react'
import { LoadingScroll } from './LoadingScroll'

describe('LoadingComponent', () => {
  it('deve renderizar corretamente o componente de carregamento', () => {
    render(<LoadingScroll />)

    const loadingTextElement = screen.getByText(
      '... Carregando mais imagens =)',
    )

    expect(loadingTextElement).toBeInTheDocument()
  })
})
