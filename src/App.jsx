import { Route, Routes } from "react-router-dom"
import { Nav_Bar } from "./Components/Layout/Nav_Bar"
import { Home, Products, Cart, Product_Details } from "./Pages/index"



function App() {
  
  return (
    <>
      <Nav_Bar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='products/:productId' element={<Product_Details/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
