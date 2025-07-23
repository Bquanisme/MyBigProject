import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Share from './component/ChangePage/Share'
import Home from './component/Home/Home'
import News from './component/Home/News'
import Tour from './component/Home/Tour'
import Room from './component/Home/Room'
import ScrollDialog from './component/ContactPage/ScrollDialog'
import RoomDetail from './component/RoomPage/RoomDetails/RoomDetail'
import ProtectRoutes from './ProtectRoutes'
import TourDetail from './component/TourPage/TourDetail/TourDetail'
import Login from './component/Home/Login'
import ShareLayout from './component/ChangePage/ShareLayout'
import Register from './component/Home/Register'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Share />}>
          <Route index element={<Home/>}/>
          <Route path='/Room' element={<Room />} />
            <Route path="/Room/:id" element={<RoomDetail />} />
          <Route path='/Tour' element={<Tour/>}/>
            <Route path="/Tour/:id" element={<TourDetail />} />
          <Route path='/News' element={<News/>}/>
          <Route path='/Contacts' element={<ScrollDialog />}/>
        </Route>  
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route
          path="/User"
          element={
            <ProtectRoutes>
              <ShareLayout />
            </ProtectRoutes>
          }
        >
          <Route index element={<Home />} />
          <Route path="User/Room" element={<Room />} />
          <Route path="User/Room/:id" element={<RoomDetail />} />
          <Route path="User/Tour" element={<Tour />} />
          <Route path="User/Tour/:id" element={<TourDetail />} />
          <Route path="User/News" element={<News />} />
          <Route path="Contacts" element={<ScrollDialog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
