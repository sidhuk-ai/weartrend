import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineClose }from 'react-icons/ai'
import { useRef } from 'react'
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef();
  return (
    <div>
      <div className='sticky top-0 z-[2] backdrop-blur-xl'>
        <header className="text-gray-600 body-font shadow-md">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href={'/'}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">WearTrend</span>
            </a></Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <ul>
                <Link href='/tshirts'><a className='p-3' >Tshirts</a></Link>
                <Link href='/hoodies'><a className='p-3'>Hoodies</a></Link>
                <Link href='/mugs'><a className='p-3'>Mugs</a></Link>
                <Link href='/stickers'><a className='p-3'>Stickers</a></Link>

              </ul>
            </nav>
            <button onClick={toggleCart} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <AiOutlineShoppingCart className='text-2xl'/>
            </button>
          </div>
        </header>
      </div>

      <div ref={ref} className="sidebar absolute bg-blue-400 right-0 p-6 transform transition-transform translate-x-full">
        <span onClick={toggleCart} className="absolute top-2 right-2 font-bold cursor-pointer text-2xl"><AiOutlineClose/></span>
        <h1 className='p-2 font-bold text-xl'>Shopping Cart</h1>
      </div>
    </div>
  )
}

export default Navbar