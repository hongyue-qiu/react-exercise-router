import data from '../mockups/data.json'
import React, {Component} from 'react';

class Product extends Component{
    render(){
        // const product = data[id]
        console.log(this.props)
        console.log(this.props.match.params)
        const productId = this.props.match.params.id;
        console.log(Object.values(data))
        const productInfo = Object.values(data).filter(product => product.id === Number(productId))[0];
        console.log(productInfo);

        return(
            <div className="product">
                <p>Product Details:</p>
                {
                    Object.keys(productInfo).map(key => <p key={key}>{key}: {productInfo[key]}</p>)
                }
                <p>URL: /product/{productInfo.id}</p>
            </div>
        );
    }
}
export default Product;