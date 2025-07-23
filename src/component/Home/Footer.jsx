import React from 'react'
import '../../AllCss/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
      <div className='background-footer'>
        <div className='flex'>
            <div>
                <div className='slice'>
                    <h3>Công Ty</h3>
                    <p>_____</p>
                </div>
                <p className='item'>About us</p>
                <p>Our Service</p>
                <p>Privacy Policy</p>
                <p>Affiliate Program</p>
                <br />
            </div>
            <div>
                <div className='slice'>
                    <h3>Điểm Đến</h3>
                    <p>_____</p>
                </div>
                <p className='item'>Điểm Du Lịch</p>
                <p>Ẩm Thực</p>
                <p>Room</p>
                <p>Tour</p>
                <p>Khách Sạn</p>
                <br />
            </div>
            <div>
                <div className='slice'>
                    <h3>Dịch Vụ</h3>
                    <p>_____</p>
                </div>
                <p className='item'>Phương Tiện Đi Lại</p>
                <p>Công Ty Lữ Hành</p>
                <p>Ngân Hàng</p>
                <p>Hỗ Trợ Du Lịch</p>
                <br />
            </div>
            <div>
                <div className='slice'>
                    <h3>Công ty</h3>
                    <p>_____</p>
                </div>
                <div className='flex-icon'>
                    <p>
                        <FacebookIcon sx={{ fontSize: 25 }} />
                    </p>
                    <p><InstagramIcon sx={{ fontSize: 25 }}/></p>
                    <p><TwitterIcon sx={{ fontSize: 25 }}/></p>
                    <p><LinkedInIcon sx={{ fontSize: 25 }}/></p>
                </div>
                <br />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
