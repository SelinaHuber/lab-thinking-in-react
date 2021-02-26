import React, { Component } from 'react'
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        console.log("props at PT",this.props)

        let tableData;
        let filtered = this.props.products.filter(product => product.name.toLowerCase().includes(this.props.query.toLowerCase()))
        tableData =filtered.map((product, index) => {
            console.log('THIS IS OUR INDEX', index)
            return <ProductRow key={index} product={product}/>
        })

        return (
            <div>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </div>
        )
    }
}
