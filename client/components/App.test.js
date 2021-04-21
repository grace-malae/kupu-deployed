import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'

import App from './App'
import store from '../store'
import { fetchWords } from '../actions'

jest.mock('../actions')

fetchWords.mockImplementation(() => () => {})

test('page header includes word', () => {
  render(<Provider store={store}><App /></Provider>)
  const heading = screen.getByRole('heading')
  expect(heading.innerHTML).toMatch(/Word/)
})

test('renders an <li> for each word', () => {
  const words = ['orange', 'persimmons', 'kiwi word']
  jest.spyOn(store, 'getState')
  store.getState.mockImplementation(() => ({ words }))

  render(<Provider store={store}><App /></Provider>)
  const li = screen.getAllByRole('listitem')
  expect(li).toHaveLength(3)
})

test('dispatches fetchWords action', () => {
  render(<Provider store={store}><App /></Provider>)
  expect(fetchWords).toHaveBeenCalled()
})
