import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import PageContext from '../context/PageContext'
import { BiLogOut, BiLogIn, BiUser } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const MenuBar = ({ menuOpen, setMenuOpen }) => {
  const pageContext = useContext(PageContext)
  const navigate = useNavigate()

  if (!pageContext) {
    console.error('Page contexts are not defined')
  }
  const { isLoggedIn } = pageContext || {}

  const handleCategoryClick = (categoryName) => {
    const category = categoryName.toLowerCase()
    navigate(`/category/${category}`)
    setMenuOpen(false)
  }

  const handleNavigation = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <>
      <div
        className={`w-3/4 sm:w-1/2 lg:w-1/3 h-full fixed bg-gray-800 text-white right-0 top-0 z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center w-full h-20 px-4 bg-blue-600 lg:h-24">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-white">
              <BiUser className="text-2xl font-extrabold text-blue-600 lg:text-3xl" />
            </div>
            {isLoggedIn ? (
              <p className="text-lg font-semibold lg:text-xl">Welcome, User!</p>
            ) : (
              <p className="text-lg font-semibold lg:text-xl">Welcome, Guest!</p>
            )}
          </div>
          <FaTimes
            onClick={() => setMenuOpen(false)}
            className="text-3xl text-white cursor-pointer hover:text-gray-300 lg:text-4xl"
          />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 lg:px-6 lg:py-8">
          {/* Product Categories */}
          <div className="mt-5">
            <h2 className="text-lg font-bold mb-4 text-white lg:text-xl">Categories</h2>
            <ul className="space-y-4">
              {['Men', 'Women', 'Kids', 'Shoes', 'Bags', 'Accessories', 'NightWears'].map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="hover:bg-blue-500 hover:text-white transition-all duration-300 bg-gray-700 px-4 py-3 rounded-md cursor-pointer lg:px-6 lg:py-4"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logout Button */}
        <div className="w-full h-20 px-4 bg-gray-900 flex items-center lg:h-24">
          <button
            className="w-full rounded-md bg-blue-600 p-4 text-white font-bold text-base flex justify-center items-center gap-2 hover:bg-blue-500 transition-all lg:p-5 lg:text-lg"
            onClick={() => {
              if (isLoggedIn) {
                console.log('Logging out...')
              } else {
                navigate('/login')
              }
              setMenuOpen(false)
            }}
          >
            {isLoggedIn ? (
              <>
                <BiLogOut className="text-xl lg:text-2xl" />
                <span>Log Out</span>
              </>
            ) : (
              <>
                <BiLogIn className="text-xl lg:text-2xl" />
                <span>Login</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default MenuBar