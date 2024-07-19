import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import OrderBook from '@/components/order-book/order-book.component'
import { connectWebSocket } from '@/services/websocket.services'

jest.mock('@/services/websocket.services', () => ({
  connectWebSocket: jest.fn(),
}))

const mockStore = configureMockStore()

describe('OrderBook', () => {
  const initialState = {
    orderBook: {
      bids: [
        [100, 1],
        [101, 2],
      ],
      offers: [
        [102, 1],
        [103, 2],
      ],
    },
  }
  const store = mockStore(initialState)

  it('renders the order book with bids and offers', () => {
    const props = {
      currencyPair: 'BTC/USD',
    }
    const { getByText } = render(
      <Provider store={store}>
        <OrderBook {...props} />
      </Provider>
    )

    expect(getByText('BTC/USD')).toBeInTheDocument()
    expect(getByText('Price: 100, Quantity: 1')).toBeInTheDocument()
    expect(getByText('Price: 101, Quantity: 2')).toBeInTheDocument()
    expect(getByText('Price: 102, Quantity: 1')).toBeInTheDocument()
    expect(getByText('Price: 103, Quantity: 2')).toBeInTheDocument()
  })
})
