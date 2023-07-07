import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
// import { products } from '../home/productdata';
import { Divider } from '@mui/material';
import { useHistory, useParams } from 'react-router';
// import CircularProgress from '@mui/material/CircularProgress';
// import { Logincontext } from "../context/Contextprovider";
const Cart = () => {
    //     const { account, setAccount } = useContext(Logincontext);
    //     // console.log(account);



    const { id } = useParams("");
    // console.log(id);

    //     const history = useHistory();

    const [inddata, setIndedata] = useState("");

    const getinddata = async () => {
        const res = await fetch(`/getproducts/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            alert("no data available")
        } else {
            // console.log("ind mila hain");
            setIndedata(data);
        }
    };

    useEffect(() => {
        setTimeout(getinddata, 1000)
    }, [id]);

    return (
        <div class="grid">
            <div class="cart__container cart-page">
                <table class="table1">
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>

                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="assets/img/img4.png" alt="" class="cart-info__itemimg" />
                                <div>
                                    <p class="cart-info__item">Air Pod1</p>
                                    <p><small>Price : 199$</small></p>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" aria-valuemax="3" style={{ width: '50px' }} /></td>
                        <td>199$</td>
                    </tr>

                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="assets/img/img3.jpg" alt="" class="cart-info__itemimg" />
                                <div>
                                    <p class="cart-info__item">Air Pod1</p>
                                    <p><small>Price : 199$</small></p>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" min="0" style={{ width: '50px' }} /></td>
                        <td>199$</td>
                    </tr>

                    <tr>
                        <td>
                            <div class="cart-info">
                                <img src="assets/img/img2.jpg" alt="" class="cart-info__itemimg" />
                                <div>
                                    <p class="cart-info__item">Air Pod1</p>
                                    <p><small>Price : 199$</small></p>
                                    <a href="">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" value="1" style={{ width: '50px' }} /></td>
                        <td>199$</td>
                    </tr>



                </table>



                <div class="buybtn">
                    <div class="total-price ">
                        <table>
                            <div class="table-total-price ">


                                <tr>
                                    <td>Subtotal</td>
                                    <td>597$</td>
                                </tr>
                                <tr>
                                    <td>Tax</td>
                                    <td>3$</td>
                                </tr>

                                <tr>
                                    <td>transport fee</td>
                                    <td>20$</td>
                                </tr>

                                <tr>
                                    <td>Total</td>
                                    <td>620$</td>
                                </tr>



                            </div>

                        </table>
                    </div>
                    <div class="button2">
                        <a href="payment.html"><button class="btn btn1">Pay Now</button></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
