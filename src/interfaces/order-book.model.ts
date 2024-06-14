import * as ROUTES from '../constants/keys'

export interface OrderBookProps {
  currencyPair: string
}
export interface OrderBookState {
  bids: Array<[number, number]>
  offers: Array<[number, number]>
}
export interface UpdateOrderBookSlice {
  type: typeof ROUTES.UPDATE_ORDER_BOOK
  payload: {
    bids: Array<[number, number]>
    offers: Array<[number, number]>
  }
}
