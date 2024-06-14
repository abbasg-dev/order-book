import { OrderBookState } from '../../interfaces/order-book.model'
import * as ROUTES from '../../constants/keys'

const initialState: OrderBookState = {
  bids: [],
  offers: [],
}
const orderBookReducer = (
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any
): OrderBookState => {
  switch (action.type) {
    case ROUTES.UPDATE_ORDER_BOOK:
      return {
        ...state,
        bids: action.payload.bids,
        offers: action.payload.offers,
      }
    default:
      return state
  }
}
export default orderBookReducer
