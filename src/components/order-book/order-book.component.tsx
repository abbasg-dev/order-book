import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store/reducers'
import { connectWebSocket } from '../../services/websocket.services'
import { OrderBookProps } from '../../interfaces/order-book.model'
const OrderBook: React.FC<OrderBookProps> = ({ currencyPair }) => {
  const dispatch = useDispatch()
  const orderBook = useSelector((state: AppState) => state.orderBook)
  useEffect(() => {
    connectWebSocket(currencyPair)
  }, [currencyPair, dispatch])
  return (
    <div>
      <h2>{currencyPair}</h2>
      <div>
        <h3>Bids</h3>
        {orderBook.bids.map((bid, index) => (
          <div key={index}>
            Price: {bid[0]}, Quantity: {bid[1]}
          </div>
        ))}
      </div>
      <div>
        <h3>Offers</h3>
        {orderBook.offers.map((offer, index) => (
          <div key={index}>
            Price: {offer[0]}, Quantity: {offer[1]}
          </div>
        ))}
      </div>
    </div>
  )
}
export default OrderBook
