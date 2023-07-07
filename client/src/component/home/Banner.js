import React from 'react'
import Carousel from 'react-material-ui-carousel'
import './banner.css'

const data = [
    "https://villahome.com.vn/wp-content/uploads/2018/11/banner-iphone-hands_3_by-tranmautritam.jpg",
    "https://taovietstore.vn/wp-content/uploads/2023/03/Banner-iPhone-14-Series.png",
    "https://marketplace.canva.com/EAFWecuevFk/1/0/1600w/canva-grey-brown-minimalist-summer-season-collections-banner-landscape-VXEmg9V800o.jpg",
    "https://img.freepik.com/free-vector/hand-drawn-book-club-twitter-header-template_23-2149753861.jpg",
    "https://cdn.tgdd.vn/Files/2020/08/31/1285622/laptopnew-asus-rog-g512-thiet-ke-7d20b542-1681-4621-bcaf-9f72c60ef904_1253x590-800-resize.jpg",
]

// console.log(data);

const Banner = () => {
    return (
        <div className='Banner'>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 20,
                        marginTop: -22,
                        height: "50px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Banner;

