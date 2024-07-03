
// import Navbar from '../components/Navbar'
// import './App.css'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import ShopCategory from './Pages/ShopCategory'
// import Shop from './Pages/Shop'
// import Product from './Pages/Product'
// import Cart from './Pages/Cart'
// import LoginSignup from './Pages/login/LoginSignup'
// import Footer from '../components/Footer/Footer'
// import men_banner from '../src/assets/images/newcollection.jpg/mens banner.jpg'
// import femal_banner from '../src/assets/images/newcollection.jpg/women banner.jpg'
// import kids_banner from '../src/assets/images/newcollection.jpg/kids banner.jpg'
// function App() {
  

//   return (
   
//       <div>
//       <BrowserRouter>
//       <Navbar/>
      
//       <Routes>
//         <Route path='/' element={<Shop/>}/>
//         <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
//         <Route path='/womens' element={<ShopCategory banner={femal_banner}category="women"/>}/>
//         <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
//         <Route path='/product' element={<Product/>}/>
//         <Route path="/:productId" element={<Product/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/login' element={<LoginSignup/>}/>
//       </Routes>
//       <Footer/>
//       </BrowserRouter>
      
//     </div>
//   )
// }

// export default App






import Navbar from '../components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/login/LoginSignup'
import Footer from '../components/Footer/Footer'
import men_banner from '../src/assets/images/newcollection.jpg/men banner2.jpg'
import femal_banner from '../src/assets/images/newcollection.jpg/womenbanner2.jpg'
import kids_banner from '../src/assets/images/newcollection.jpg/shop kids banner.jpg'
import Women from '../components/Women/Women'
import Login from '../components/Login/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={femal_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/women' element={<Women/>}/>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
