declare module 'react-tradingview-widget' {
  import * as React from 'react'

  interface TradingViewWidgetProps {
    symbol: string
    width?: string | number
    height?: string | number
    autosize?: boolean
    interval?: string
    timezone?: string
    theme?: string
    style?: string
    locale?: string
    toolbar_bg?: string
    enable_publishing?: boolean
    allow_symbol_change?: boolean
    container_id?: string
    hide_top_toolbar?: boolean
    withdateranges?: boolean
    hide_side_toolbar?: boolean
  }

  const TradingViewWidget: React.FC<TradingViewWidgetProps>

  export default TradingViewWidget
}
