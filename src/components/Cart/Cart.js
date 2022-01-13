import React from 'react';
import './Cart.css'
import Product from './../Product/Product';
import { Button, FormControl, InputGroup } from 'react-bootstrap';


const Cart = (props) => {
    const {cart}= props;

    let total = 0;
    for (const product of cart) {
    
        total = total + product.price;
    
    }
    let coupon = 50;
    let grandTotal;
    if(total===0){
        coupon = 0;
        grandTotal =0;
    }
    
    grandTotal = total-coupon;

    return (
        <div className="cart">
                <h1><i className="fas fa-shopping-cart"></i></h1>
              <table className="product-table" >
                <tr>
                    <th>Products</th>
                    <th>Color & size</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>total</th>
                </tr>
                {
                   cart.map(product=><tr>
                       <td  className="product-image" ><div><img src={product.image} alt="" /></div> <h4>{product.title}</h4> </td>
                       <td><p>Size:XL</p><br /><p>Color:Black</p></td>
                       <td>1</td>
                       <td>{product.price}</td>
                       <td>{product.price}
                       <input type="checkbox" name="" id="" />
                       </td>
                    </tr>)
                }
                
            </table>
            <div className="discount-sec">
                <div>
                    <h3>USE COUPON CODE</h3> <br />
                    <InputGroup className="mb-3 ">
                        <FormControl
                        placeholder="Enter your coupon here"
                        aria-label="coupon"
                        aria-describedby="basic-addon2"
                        className="coupon-input"
                        />
                        <Button className="coupon-input-btn" variant="outline-secondary" id="button-addon2">
                        APPLY
                        </Button>
                    </InputGroup>
                </div>
                <div>
                    <h3>USE GIFT VOUCHER</h3> <br />
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Enter your gift voucher code here"
                        aria-label="coupon"
                        aria-describedby="basic-addon2"
                        className="coupon-input"
                        />
                        <Button className="coupon-input-btn" variant="outline-secondary" id="button-addon2">
                        APPLY
                        </Button>
                    </InputGroup>
                </div>
            </div>
            <div className="shipping">
                <div className="shipping-address">
                    <h3>Shipping Availability</h3>
                    <p><small>Select Country</small></p>
                    <div className="input-group mb-3 ">
                    <select className="form-select select-input" id="inputGroupSelect01" >
                        <option selected>Bangladesh</option>
                        <option value="1">Nepal</option>
                        <option value="2">India</option>
                        <option value="3">Singapur</option>
                    </select>
                    </div>
                   
                    <p><small>Select State</small></p>
                    <div className="input-group mb-3 ">
                    <select className="form-select select-input" id="inputGroupSelect01" >
                        <option selected>Dhaka</option>
                        <option value="1">Sylhet</option>
                        <option value="2">Rangpur</option>
                        <option value="3">Khulna</option>
                    </select>
                    </div>
                    <div className="input-group input-group-sm mb-3">
                    <br />
                    <p><small>Postalcode/Zip</small></p>
                    <input type="text" className="form-control postal-input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                    <br />
                    <button className="shipping-btn1">UPDATE TOTALS</button>
                </div>
                <div  >
                    <h3>Shipping Cart Calculation</h3>
                    <div className="shipping-calculation" >
                        <div className="calculation">
                            <h6>Subtotal</h6>
                            <h6>${total}</h6>
                        </div>
                        <div className="calculation">
                            <h6>Coupon</h6>
                            <h6>${coupon}</h6>
                        </div>
                        <div className="calculation">
                            <h6>Shipping</h6>
                            <h6>Free Shipping</h6>
                        </div>
                    </div>
                    <div className="grand-total">
                            <h6>Total</h6>
                            <h6>${grandTotal}</h6>
                        </div>
                    <button className="shipping-btn2">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;