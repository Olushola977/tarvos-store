import { MyCart } from '../singleproduct/SingleProduct';
import './Cart.css';
import '../singleproduct/SingleProduct.css'
import { Component } from 'react';

/**
 * Cart Componennt
 */

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: [
                {
                    productsize: []
                }
            ]
        };
    }

    componentDidMount() {
        const Mycart = MyCart;
        this.setState({ cart: Mycart });
    }
    render() {
        console.log(this.state.cart, "state cart");
        const UserCart = this.state.cart;
        console.log(UserCart, "User Cart");
        return (
            <div>
                {UserCart.length > 0 ? UserCart.map(usercart => (
                    <div className="cartContainer px-3 py-4">
                        <div className="cartCard d-flex align-items-center">
                            <div style={{backgroundColor: `${usercart.productcolor}`, padding: "6px 15px"}}>
                                <img alt="" className="img-fluid" src={usercart.productimg} />
                            </div>
                            <div className="briefDesc p-3">
                                <div className="productName">
                                    <h6> {usercart.productname} </h6>
                                </div>
                                <div className="productInfo">
                                    <span> {usercart.productprice} </span>
                                    <span> {usercart.productdesc} </span>
                                </div>
                                <div className="sizePicked">
                                    <span> Size: M </span>
                                </div>
                                <div className="remove">
                                    <span className="text-danger">REMOVE</span>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <div className="counterButton">
                                    <div>+</div>
                                    <div>1</div>
                                    <div>-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

                ) : ""}
                <div className="cartContainer px-3 py-4">
                    <div className="cartReceipt">
                        <div className="detailsTitle">
                            <span>Card Details</span>
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <div className="totalAmount">
                                <p>Total Amount</p>
                                <p>Discount Amount</p>
                            </div>
                            <div className="ml-auto discountAmount amount">
                                <p>Rs 398</p>
                                <p>Rs 0</p>
                            </div>
                        </div>
                        <hr style={{ backgroundColor: "", height: "1px" }} />
                        <div className="finalAmount d-flex mt-4">
                            <div>
                                <p>Final Amount</p>
                            </div>
                            <div className="ml-auto amount">
                                <p>Rs 398</p>
                            </div>
                        </div>
                        <div className="addToCart mx-5 mt-5">
                            <div className="addCart text-center">
                                <button className="py-3" onClick={(e) => e.preventDefault} >CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Cart;