import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CreateListing from './pages/CreateListing'
import ListingDetails from './pages/ListingDetails'
import TripList from './pages/TripList'
import WishList from './pages/WishList'
import PropertyList from './pages/PropertyList'
import Reservation from './pages/Reservation'
import CatagoryPage from './pages/CatagoryPage'
import SearchPage from './pages/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>
      <HomePage/>
    </div> */}
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/register" element={<RegisterPage/>}/>
           <Route path="/login" element={<LoginPage/>}/>
           <Route path="/create-listing" element={<CreateListing/>}/>
           <Route path="/listings/:listingId" element={<ListingDetails/>}/>
           <Route path="/listings/category/:category" element={<CatagoryPage/>}/>
           <Route path="/listings/search/:search" element={<SearchPage/>}/>
           <Route path="/:userId/trips" element={<TripList/>}/>
           <Route path="/:userId/wishList" element={<WishList/>}/>
           <Route path="/:userId/properties" element={<PropertyList/>}/>
           <Route path="/:userId/reservations" element={<Reservation/>}/>
        </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
