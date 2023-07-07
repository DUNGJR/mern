import React from 'react'
import './Footer.css'


const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);

    return (
        <footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <h3>Chăm sóc khách hàng</h3>
                    <p>Trung tâm trợ giúp</p>
                    <p>LD Shop Mail</p>
                    <p>Hướng dẫn mua hàng</p>
                </div>
                <div className="footr_details_one">
                    <h3>Thanh toán</h3>
                    <p>Trung tâm trợ giúp</p>
                    <p>LD Shop Mail</p>
                    <p>Hướng dẫn mua hàng</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Về chúng tôi</h3>
                    <p>Giới Thiệu</p>
                    <p>Chính sách</p>
                    <p>Điều khoản</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Theo Dõi Chúng Tôi Trên</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="lastdetails">
                <p className='detail'>  ©  2023-{year} Bản Quyền Thuộc Về LD SHOP</p>
            </div>
        </footer>
    )
}

export default Footer
