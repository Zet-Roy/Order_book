import React from 'react'
import './Table.css';

export default function Table(props) {
    let sum = 0;
    const listOrder = props.order.map((item, index) => {
        let total = Math.round(parseFloat(item[0]) * parseFloat(item[1]))
        
        if(index === 0) {
            sum = total
        } else {
            sum = sum + total
        }

        return (
            <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{total}</td>
                <td>{sum}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>price</th>
                    <th>amount</th>
                    <th>total</th>
                    <th>sum </th>
                </tr>
            </thead>
            <tbody>
                {listOrder}
            </tbody>
        </table>
    )
}