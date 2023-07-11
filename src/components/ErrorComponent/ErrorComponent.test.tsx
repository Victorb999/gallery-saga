/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import { ErrorComponent } from './ErrorComponent'
describe('ErrorComponent', () => {
  test('deve renderizar a mensagem de erro corretamente', () => {
    const { getByText } = render(<ErrorComponent />)
    expect(
      getByText('Ops ocorreu um erro ao carregar as imagens'),
    ).toBeInTheDocument()
    expect(getByText('Tente novamente mais tarde')).toBeInTheDocument()
  })
})
