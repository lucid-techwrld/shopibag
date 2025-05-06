import React from 'react'
import Navbar from './header'
import MenuBar from './menuBar'
import { Outlet } from 'react-router-dom'

const Layout = ({ menuOpen, setMenuOpen }) => {
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MenuBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        {menuOpen && (
            <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />
        )}
      <main className="mt-[130px]"> {/* Add margin to avoid overlapping with the fixed header */}
        <Outlet />
      </main>
    </div>
  )
}

export default Layout