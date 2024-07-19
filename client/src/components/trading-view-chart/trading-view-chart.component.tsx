import React from 'react'
import TradingViewWidget from 'react-tradingview-widget'
import { TradingViewChartProps } from '@/interfaces/tradingview-chart.model'
const TradingViewChart: React.FC<TradingViewChartProps> = (
  props: TradingViewChartProps
) => {
  const { symbol } = props
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <TradingViewWidget symbol={symbol} locale="en" autosize />
    </div>
  )
}
export default TradingViewChart
