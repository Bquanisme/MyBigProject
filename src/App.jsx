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
import AdminHome from './component/Admin/DashBoardAdmin/AdminHome'
import ShareAdmin from './component/ChangePage/ShareAdmin'
import LoginAdmin from './component/Admin/LoginAdmin'
import Unauthorized from './Unauthorized'
import Customer from './component/Admin/ManageUsers/Customer/Customer'
import Staff from './component/Admin/ManageUsers/Staff/Staff'
import ManageTour from './component/Admin/ManageTour/ManageTour'
import CancelRequest from './component/Admin/CancelRequest/CancelRequest'
import Category from './component/Admin/Category/Category'
import ManageOrders from './component/Admin/ManageOrders/ManageOrders'


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
        <Route path='/LoginAdmin' element={<LoginAdmin />}/>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/User"
          element={
            <ProtectRoutes allowedRoles={'user'}>
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
            <ProtectRoutes allowedRoles={'user'}>
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

        <Route
          path='/Admin'
          element={
            <ProtectRoutes allowedRoles={'admin'}>
              <ShareAdmin />
            </ProtectRoutes>
        }
        >
          <Route index element={<AdminHome />} />
          <Route path="Customer" element={<Customer />} />
          <Route path='Staff' element={<Staff />} />
          <Route path="Category" element={<Category />} />
          <Route path="ManageTour" element={<ManageTour />} />
          <Route path="CancelRequest" element={<CancelRequest />} />
          <Route path="ManageOrders" element={<ManageOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
