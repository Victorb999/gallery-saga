import React from 'react'
import { render, screen } from '@testing-library/react'
import { LoadingScroll } from './LoadingScroll'

describe('LoadingComponent', () => {
  it('should render correctly loader', () => {
    render(<LoadingScroll />)

    const loadingTextElement = screen.getByText(
      '... Carregando mais imagens =)',
    )

    expect(loadingTextElement).toBeInTheDocument()
  })
})
