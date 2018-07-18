import React from 'react'
import './Currency.css'

const Currency = props => {
  const {
    name,
    symbol,
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
  } = props.data
  return (
    <li className="currency">
      <p className="currency-name">
        {name} ({symbol})
      </p>
      <h1>${(+price_usd).toFixed(2)}</h1>
      <p>{percent_change_1h}% 1hr</p>
      <p>{percent_change_24h}% 24hrs</p>
      <p>{percent_change_7d}% 7days</p>
    </li>
  )
}

export default Currency
