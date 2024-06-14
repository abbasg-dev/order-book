import { combineReducers } from 'redux'
import orderBookReducer from '@/store/reducers/orderBookReducer'
import { OrderBookState } from '@/interfaces/order-book.model'
const rootReducer = combineReducers({
  orderBook: orderBookReducer,
})
export type AppState = {
  orderBook: OrderBookState
}
export default rootReducer
