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
import Settings from './component/Home/Settings'
import ShareSettings from './component/ChangePage/ShareSettings'
import DashBoard from './component/SettingsPage/DashBoard/DashBoard'
import History from './component/SettingsPage/History/History'
import Account from './component/SettingsPage/Account/Account'
import ChangePassword from './component/SettingsPage/ChangePassword/ChangePassword'
import HistoryDetail from './component/SettingsPage/History/HistoryDetail'


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
          <Route path="Room" element={<Room />} />
          <Route path="Room/:id" element={<RoomDetail />} />
          <Route path="Tour" element={<Tour />} />
          <Route path="Tour/:id" element={<TourDetail />} />
          <Route path="News" element={<News />} />
          <Route path="Contacts" element={<ScrollDialog />} />
        </Route>
        <Route
          path="User/Settings"
          element={
            <ProtectRoutes>
              <ShareSettings />
            </ProtectRoutes>
          }
        >
          <Route index element={<DashBoard />} />
          <Route path="History" element={<History />} />
          <Route path='History/:id' element={<HistoryDetail />} />
          <Route path="Account" element={<Account />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
