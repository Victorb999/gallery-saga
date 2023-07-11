/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { useNavigate } from 'react-router-dom'
import { BackButton } from './BackButton'

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as object),
  useNavigate: jest.fn(),
}))

describe('BackButton', () => {
  beforeEach(() => {
    // Limpar os mocks antes de cada teste
    jest.clearAllMocks()
  })

  it('should render back button', () => {
    const { getByRole } = render(<BackButton />)

    const buttonElement = getByRole('button')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Voltar')
  })

  it('should call useNavigate', () => {
    const mockNavigate = jest.fn()
    ;(useNavigate as jest.Mock).mockImplementation(() => mockNavigate)

    const { getByRole } = render(<BackButton />)
    const buttonElement = getByRole('button')

    fireEvent.click(buttonElement)

    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })
})
