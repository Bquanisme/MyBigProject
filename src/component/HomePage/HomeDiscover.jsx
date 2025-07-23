import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import HomeTicketPage from './HomeTicket/HomeTicketPage'
import StandardRoomPage from './StandardRoom/StandardRoomPage'
import '../../AllCss/Home.css'

const HomeDiscover = () => {    
  return (
    <div>
      <div>
        <div className='background-discover'>
            <div className='center-text'>
                <div>
                  <h1>Khám phá điểm nổi bật</h1>
                  <p>Nhận cơ hội để đi du lịch | Đi nghỉ | Nghỉ dưỡng cùng gia đình | tận hưởng chính mình</p>
                </div>
                <div className='img-change'>
                    <img src={img2} alt="" className='img-change-size'/>
                    <div className='img-change-flex'>
                        <img src={img1} alt="" className='img-change-size-2'/>
                        <img src={img4} alt="" className='img-change-size-2'/>
                    </div>
                    <img src={img3} alt="" className='img-change-size'/>
                </div>
            </div>
            <div className='center-text'>
              <div>
                <h1>Tour HOT 2023</h1>
                <p>Chào hè 2023 sôi động với những Tour du lịch hấp dẫn,những
                  địa điểm thu hút khách du lịch </p>
                <p>tại Nha Trang. Khám phá ngay 
                  để có thêm những trải nghiệm hè thật sôi động
                  </p> 
                  <p>bên gia đình, 
                  người thân nào !</p>
              </div><br />
              <div>
                <HomeTicketPage />
              </div><br />
            </div>
        </div>
        <div>
          <StandardRoomPage />
        </div>
      </div>
    </div>
  )
}

export default HomeDiscover
