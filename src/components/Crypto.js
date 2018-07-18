import React, { Component } from 'react'
import Currency from './Currency'
import axios from 'axios'

import './Crypto.css'

class Crypto extends Component {
  fetchCurrencyData = () => {
    axios
      .get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => {
        const wanted = ['bitcoin', 'ethereum', 'ripple', 'eos', 'litecoin']
        const result = response.data.filter(currency =>
          wanted.includes(currency.id),
        )
        this.setState({ data: result })
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.fetchCurrencyData()
    this.interval = setInterval(() => this.fetchCurrencyData(), 1 * 1000)
  }
  constructor(props) {
    super(props)
    this.state = {
      data: [
        // {
        //   id: 'bitcoin',
        //   name: 'Bitcoin',
        //   symbol: 'BTC',
        //   price_usd: '1',
        //   percent_change_1h: '0',
        //   percent_change_24h: '0',
        //   percent_change_7d: '0',
        // },
        // {
        //   id: 'ethereum',
        //   name: 'Ethereum',
        //   symbol: 'ETH',
        //   price_usd: '1',
        //   percent_change_1h: '0',
        //   percent_change_24h: '0',
        //   percent_change_7d: '0',
        // },
      ],
    }
  }
  render() {
    let crypto = this.state.data.map(currency => (
      <Currency data={currency} key={currency.id} />
    ))

    return (
      <div className="crypto-container">
        <ul className="crypto"> {crypto} </ul>
      </div>
    )
  }
}

export default Crypto
