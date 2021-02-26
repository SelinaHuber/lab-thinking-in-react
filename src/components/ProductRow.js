import React, { Component } from 'react'

export default class ProductRow extends Component {
    render() {
        return (
            /* <div>
                <table>
                    <th>Name</th>
                    <th>Price</th>

                    {this.props.products.map(item => (
                    <tr key={item.id}> 
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>        
                    ))}      
                </table>
            </div> */
        
        <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        </tr>
        )
        
    }
}
