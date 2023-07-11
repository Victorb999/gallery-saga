import React from 'react'
import { render, screen } from '@testing-library/react'
import { LoadingComponent } from './LoadingComponent'

describe('LoadingComponent', () => {
  it('should render correctly loader', () => {
    render(<LoadingComponent />)

    const loadingTextElement = screen.getByText(
      'Aguarde um pouco, estamos carregando as imagens pra você',
    )

    expect(loadingTextElement).toBeInTheDocument()
  })
})
