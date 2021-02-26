import React, { Component } from 'react'
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow'; 


export default class FilterableProductTable extends Component {
    state = {
        products: this.props.products,
        query: ''
    }

    setQuery = query => {
        this.setState({
            query: query
        })
    }


    render() {
        return (
            <div>
                <h1>Thinking in React</h1>
                <Searchbar setQuery={this.setQuery}
                 />
                <ProductTable products={this.state.products}
                query={this.state.query}/>
            </div>
        )
    }
}
