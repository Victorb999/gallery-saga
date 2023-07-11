import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import { MainPage } from './MainPage'
import { fetchImagesRequest } from '../../store/images/actions'
import reducer from '../../store/images/'

describe('MainPage', () => {
  const mockStore = createStore(reducer)

  it('call dispatch with correct action', () => {
    const mockDispatch = jest.spyOn(mockStore, 'dispatch')
    render(
      <Provider store={mockStore}>
        <MainPage />
      </Provider>,
    )

    expect(mockDispatch).toHaveBeenCalledWith(fetchImagesRequest(1))
  })
})
