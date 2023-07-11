import React from 'react'
import { render, screen } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ImageDetails } from './ImageDetails'
import { fetchImageDetailsRequest } from '../../store/images/actions'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}))

describe('ImageDetails component', () => {
  beforeEach(() => {
    ;(useSelector as jest.Mock).mockClear()
    ;(useDispatch as jest.Mock).mockClear()
    ;(useParams as jest.Mock).mockClear()
  })

  test('renders loading component when loading is true', () => {
    ;(useSelector as jest.Mock).mockReturnValue({ loading: true })

    render(<ImageDetails />)

    expect(screen.getByTestId('loading-component')).toBeInTheDocument()
  })

  test('renders error component when error is true', () => {
    ;(useSelector as jest.Mock).mockReturnValue({ error: true })

    render(<ImageDetails />)

    expect(screen.getByTestId('error-component')).toBeInTheDocument()
  })

  test('dispatches fetchImageDetailsRequest action with correct id', () => {
    const mockDispatch = jest.fn()
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
    ;(useParams as jest.Mock).mockReturnValue({ id: '123' })

    render(<ImageDetails />)

    expect(mockDispatch).toHaveBeenCalledWith(fetchImageDetailsRequest('123'))
  })
})
