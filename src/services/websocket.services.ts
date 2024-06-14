import { updateOrderBook } from '@/store/slices/orderBookSlices'
import store from '@/store/store'
let socket: WebSocket | null = null
const websocketURL: string | undefined =
  process.env.REACT_APP_WEB_SOCKET_URL || ''
export const connectWebSocket = (currencyPair: string) => {
  if (socket) {
    socket.close()
  }
  socket = new WebSocket(websocketURL)
  socket.onopen = () => {
    const subscribeMessage = {
      type: 'subscribe',
      product_ids: [currencyPair],
      channels: ['level2'],
    }
    socket?.send(JSON.stringify(subscribeMessage))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    if (data.type === 'snapshot' || data.type === 'l2update') {
      const bids = data.bids || []
      const offers = data.asks || []
      store.dispatch(updateOrderBook({ bids, offers }))
    }
  }
}
