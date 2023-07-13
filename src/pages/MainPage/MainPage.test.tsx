import { render, screen } from '@testing-library/react'
import { MainPage } from './MainPage'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { fetchImagesRequest } from '../../store/images/actions'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

const mockData = {
  data: [
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
  ],
  loading: false,
  error: false,
  page: 1,
}

describe('MainPage', () => {
  beforeEach(() => {
    ;(useSelector as jest.Mock).mockClear()
    ;(useDispatch as jest.Mock).mockClear()
  })
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('should render LoadingComponent when loading is true and page is 1', () => {
    const mockDispatch = jest.fn()
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
    ;(useSelector as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: false,
      page: 1,
    })
    render(<MainPage />)
    expect(screen.getByTestId('loading-component')).toBeInTheDocument()
  })
  test('should render ErrorComponent when error is true', () => {
    const mockDispatch = jest.fn()
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
    ;(useSelector as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: true,
      page: 1,
    })
    render(<MainPage />)
    expect(screen.getByTestId('error-component')).toBeInTheDocument()
  })
  test('should render ImageGallery when data is not null', () => {
    const mockDispatch = jest.fn()
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
    ;(useSelector as jest.Mock).mockReturnValue(mockData)

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    )
    expect(screen.getByTestId('image-gallery')).toBeInTheDocument()
  })
  test('should dispatch fetchImagesRequest action on component mount', () => {
    const mockDispatch = jest.fn()
    ;(useDispatch as jest.Mock).mockReturnValue(mockDispatch)
    ;(useSelector as jest.Mock).mockReturnValue(mockData)

    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>,
    )

    expect(mockDispatch).toHaveBeenCalledWith(fetchImagesRequest(1))
  })
})
