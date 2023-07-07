
import './item.css'
import { Divider } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import React, { useContext, useEffect, useState } from 'react'
const Item = () => {
    const { id } = useParams("");
    // console.log(id);

    //     const history = useHistory();

    // const [inddata, setIndedata] = useState("");

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
        console.log(data);

        //     if (res.status !== 201) {
        //         alert("no data available")
        //     } else {
        //         // console.log("ind mila hain");
        //         setIndedata(data);
        //     }
        };

        useEffect(() => {
            setTimeout(getinddata, 1000)
        }, [id]);
        return (
            <div>
                <div class="grid">
                    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

                    <div class="container">



                        <div class="LeftBlock">
                            <div class="LeftBlock_Main">
                                <img src="assets/img/img1.jpg" alt="" class="img-feature" />
                                {/* <div class="control control__next"><ion-icon name="caret-forward-circle-sharp"/></ion-icon></div>
                            <div class="control control__pre"><ion-icon name="caret-back-circle-sharp"/></ion-icon></div> */}
                            </div>

                            <div class="LeftBlock_list">
                                <div class="listitem active"><img src="/img1.jpg" alt="" /></div>
                                <div class="listitem"><img src='./img1.jpg' /></div>
                                <div class="listitem"><img src='./img1.jpg' /></div>
                                <div class="listitem"><img src='./img1.jpg' /></div>
                                <div class="listitem"><img src='./img1.jpg' /></div>
                                <div class="listitem"><img src='./img1.jpg' /></div>
                                <div class="listitem"><img src='./img1.jpg' /></div>
                            </div>
                        </div>



                        <div class="RightBlock">
                            <div class="HeaderBox">
                                <h1 class="HeaderBox__Item">Item Name</h1>
                                <div class="HeaderBox__Item">More information about this item</div>
                                <div class="home-product-item__rating ">
                                    <i class="home-product-item__rating__gold fa-solid fa-star"></i>
                                    <i class="home-product-item__rating__gold fa-solid fa-star"></i>
                                    <i class="home-product-item__rating__gold fa-solid fa-star"></i>
                                    <i class="home-product-item__rating__gold fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>

                            <div class="FirstBlock topline botline">
                                <h1 class="FirstBlock__ItemPrice">1000$</h1>
                            </div>

                            <div class="color-content botline" >
                                <h3 class="select-color">Select color</h3>
                                <div class="color-group ">
                                    <div class="color color-white"></div>
                                    <div class="color color-black"></div>
                                    <div class="color color-yellow"></div>
                                    <div class="color color-blue"></div>
                                    <div class="color color-red"></div>
                                </div>
                            </div>

                            <div class="button1">
                                <h3 class="quantity">Quantity</h3>
                                <div class="btn-group">
                                    <button class="arr left">-</button>
                                    <div class="count">Number</div>
                                    <button class="arr right">+</button>
                                </div>

                            </div>

                            <div class="button2">
                                <button class="btn btn1">Buy Now</button>
                                <button class="btn btn2">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )


    }

    export default Item
