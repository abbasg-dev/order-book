import * as ROUTES from '../../constants/keys'
import { UpdateOrderBookSlice } from '../../interfaces/order-book.model'

export const updateOrderBook = (data: {
  bids: Array<[number, number]>
  offers: Array<[number, number]>
}): UpdateOrderBookSlice => ({
  type: ROUTES.UPDATE_ORDER_BOOK,
  payload: data,
})
