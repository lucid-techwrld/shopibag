import './App.css'
import WelcomePage from './pages/welcomePage'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Home from './pages/home'
import NotFound from './pages/notFound'

import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className='w-full bg-slate-50 h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/WelcomePage' element={<WelcomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
