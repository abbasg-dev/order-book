import React, { useState } from 'react'
import OrderBook from '@/components/order-book/order-book.component'
import TradingViewChart from '@/components/trading-view-chart/trading-view-chart.component'
const App: React.FC = () => {
  const [currencyPair, setCurrencyPair] = useState<string>('BTC-USD')
  return (
    <div className="App">
      <h1>CoinRoutes Order Book</h1>
      <select
        onChange={(e) => setCurrencyPair(e.target.value)}
        value={currencyPair}
      >
        <option value="BTC-USD">BTC-USD</option>
        <option value="ETH-USD">ETH-USD</option>
        <option value="LTC-USD">LTC-USD</option>
        <option value="BCH-USD">BCH-USD</option>
      </select>
      <OrderBook currencyPair={currencyPair} />
      <TradingViewChart symbol={currencyPair.replace('-', '')} />
    </div>
  )
}
export default App
