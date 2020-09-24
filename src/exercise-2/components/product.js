import data from '../mockups/data.json'
import React, {Component} from 'react';

class Product extends Component{
    state = {
        product:{}
    }
    componentDidMount(){
        const productId = this.props.match.params.id;
        const productInfo = Object.values(data).find(product => product.id === Number(productId));
        this.setState({
            product:productInfo
        })
    }

    render(){
        return(
            <div className="product">
                <p>Product Details:</p>
                {
                    Object.keys(this.state.product).map(key => <p key={key}>{key}: {this.state.product[key]}</p>)
                }
                <p>URL: /product/{this.state.product.id}</p>
            </div>
        );
    }
}
export default Product;