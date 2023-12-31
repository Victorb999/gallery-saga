import { render, screen } from '@testing-library/react'
import { Header } from './Header'
describe('Header component', () => {
  test('should render logo', () => {
    render(<Header />)
    const logoElement = screen.getByText('Gallery Saga')
    expect(logoElement).toBeInTheDocument()
  })
})
