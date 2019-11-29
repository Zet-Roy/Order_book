import React, { Component } from 'react'
import Table from './Table';

export class OrderBook extends Component {
    constructor(props) {
        super(props);

		this.state = { order: [] };

        this.ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@depth20@100ms')
    }

	componentDidMount() {
		this.ws.onopen = () => {
			console.log('connected')
		}

		this.ws.onmessage = evt => {
			const message = JSON.parse(evt.data)
			this.setState({ order: message.bids })
		}

		this.ws.onclose = () => {
			console.log('disconnected')
		}
	}

    render() {
        return (
            <div>
                <Table order={this.state.order} />
            </div>
        )
    }
}

export default OrderBook
