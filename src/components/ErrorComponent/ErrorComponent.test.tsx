/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import { ErrorComponent } from './ErrorComponent'
describe('ErrorComponent', () => {
  test('should render error', () => {
    const { getByText } = render(<ErrorComponent />)
    expect(
      getByText('Ops ocorreu um erro ao carregar as imagens'),
    ).toBeInTheDocument()
    expect(getByText('Tente novamente mais tarde')).toBeInTheDocument()
  })
})
