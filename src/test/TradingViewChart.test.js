import React from 'react'
import { render } from '@testing-library/react'
import TradingViewChart from '@/components/trading-view-chart/trading-view-chart.component'

// Mocking react-tradingview-widget
jest.mock('react-tradingview-widget', () => (props) => (
  <div data-testid="trading-view-widget">{props.symbol}</div>
))

describe('TradingViewChart', () => {
  it('renders the TradingView widget with the correct symbol', () => {
    const props = {
      symbol: 'AAPL',
    }
    const { getByTestId } = render(<TradingViewChart {...props} />)
    const widget = getByTestId('trading-view-widget')
    expect(widget).toBeInTheDocument()
    expect(widget).toHaveTextContent('AAPL')
  })
})
