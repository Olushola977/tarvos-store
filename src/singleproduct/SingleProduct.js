import { Component } from 'react';
import Products from '../product/Products';
import { Heart } from '../images/image';
import './SingleProduct.css';

/**
 * Single Product Component
 */

export let MyCart = [];

class SingleProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                productimgs: [],
                productsizes: [],
                productspec: []
            }
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id, "id");

        this.productDetail = this.getProductDetail(id);
        console.log(this.productDetail, "product Detail")
        this.setState({ product: this.productDetail });
    }

    getProductDetail = (id) => {
        const product = Products.find((product) => product.productid == id);

        return product;
    }

    addtocart = () => {
        const id = this.state.product.productid;
        const product = Products.find((product) => product.productid == id);
        MyCart.push(product);
        console.log(MyCart, "My cart single product");
    }


    render() {
        const productDetails = this.state.product;
        console.log(productDetails.productimgs, "product images");
        return (
            <div className="pb-3">
                <div style={{ backgroundColor: `${productDetails.productcolor}`, padding: "20px 20px 50px" }}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                        <div className="carousel-inner">
                            {productDetails.productimgs && productDetails.productimgs.map(productimg => (
                                <div className="carousel-item active">
                                    <img src={productimg} className="d-block w-100" alt="..." />
                                </div>
                            )

                            )}
                        </div>
                        <div className="indicator mt-3">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> */}
                    </div>
                    <div className="productTitle mt-2">
                        <h5> {productDetails.productname} </h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="price">
                            <span> {productDetails.productprice} </span>
                        </div>
                        <div className="description px-3">
                            <span> {productDetails.productdesc} </span>
                        </div>
                        <div className="favourite ml-auto">
                            <img alt="" src={Heart} className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="sizes mt-n3 d-flex px-3">
                    {productDetails.productsizes && productDetails.productsizes.map(size => (
                        <div className="sizeCont mx-1 text-center" key={size}>
                            <span> {size} </span>
                        </div>
                    ))}
                </div>
                <div className="productDetails mt-4 px-3">
                    <p className="productDetailsStyle">
                        {productDetails.productdetails}
                        <span className="ml-1 text-danger">Read More.</span>
                    </p>
                </div>
                {productDetails.productspec ? (
                    <>
                        <div className="spec mt-4 px-3">
                            <div style={{ backgroundColor: `${productDetails.productcolor}`, padding: "2px 5px", width: "fit-content" }}>
                                <span>Spec</span>
                            </div>
                            <div className="specDetails">
                                {productDetails.productspec.map(spec => (
                                    <div className="d-flex mt-3 align-items-center" key={spec.title}>
                                        <div className="specImage">
                                            <img alt="" className="img-fluid" src={spec.img} />
                                        </div>
                                        <div className="ml-4 specInfo">
                                            <p> {spec.title} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="addToCart mx-5 mt-5">
                            <div className="addCart text-center">
                                <button className="py-3" onClick={() => this.addtocart()} >ADD TO CART</button>
                            </div>
                        </div>
                    </>
                ) : ""}

            </div>
        )
    }

}

export default SingleProduct;