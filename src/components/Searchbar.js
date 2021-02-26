import React, { Component } from 'react'

export default class Searchbar extends Component {

    handleChange = event => {
        this.props.setQuery(event.target.value)
        
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                    type="text" 
                    placeholder="Search..." 
                    id="search"
                    value={this.props.query}
                    onChange={this.handleChange}
                />

                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
                </p>
                </form>
            </div>
        )
    }
}
