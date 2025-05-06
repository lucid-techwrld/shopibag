import './App.css'
import { useState } from 'react'
import WelcomePage from './pages/welcomePage'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Home from './pages/home'
import NotFound from './pages/notFound'
import CategoryPage from './pages/CategoryPage'
import Layout from './components/Layout'
import CartPage from './pages/CartPage'

import { Routes, Route } from 'react-router-dom'


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='w-full bg-slate-50 h-screen'>
      <Routes>
        <Route element={<Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/WelcomePage' element={<WelcomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/category/:category' element={<CategoryPage/>}/>
          <Route path='/cart' element={<CartPage />} />
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
