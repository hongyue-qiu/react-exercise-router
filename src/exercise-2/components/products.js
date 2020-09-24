import data from '../mockups/data.json'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Products extends Component{
    state={
        products: {},
    }
    componentDidMount() {
        this.setState({
            products:data
        })
    }

    render(){
        return(
            <div className="products">
                {Object.keys(this.state.products).map((key, index)=>
                    <Link key={index} to={`/product/${data[key].id}`} className="product">{key}</Link>
                )}
            </div>
        );
    }
}
export default Products;