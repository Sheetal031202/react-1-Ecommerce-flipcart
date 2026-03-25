import React from 'react'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Header/Navbar'
import AddProduct from './Pages/AddProductPage/AddProduct'
import ContactPage from './Pages/ContactPage/ContactPage'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex items-center justify-center bg-gray-100">
<Outlet/>
        </main>


        <Footer/>
      </div>

    </>
  )
}

export default App
