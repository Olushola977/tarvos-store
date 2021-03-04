import { Link } from 'react-router-dom';
import Card from '../card';
import { Heart } from '../images/image';
import Products from '../product/Products';
import './ProductCard.css';

/**
 * Product Card Component
 */


function ProductCard() {
    return (
        <>
            {Products.map(product => {
                return (

                    <Card bgColor={product.productcolor} key={product.productid}>
                        <div className="p-4">
                            <div className="productImg text-center">
                                <img alt="" className="img-fluid" src={product.productimg} />
                            </div>
                            <div className="mt-4">
                                <h5> <Link to={`/product/${product.productid}`} className="nameStyle">{product.productname}</Link> </h5>
                            </div>
                            <div className="d-flex productDetailsSection mt-2">
                                <div className="productDetails">
                                    <span> {product.productprice} </span>
                                    <span className="pl-3"> {product.productdesc} </span>
                                </div>
                                <div className="ml-auto heart">
                                    <img alt="" className="img-fluid" src={Heart} />
                                </div>
                            </div>
                        </div>
                    </Card>
                )
            })}
        </>
    );
}

export default ProductCard;