import Link from 'next/link'
import React from 'react'
// import Image from 'next/image'
import { AiOutlineShoppingCart, AiOutlineClose, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { useRef } from 'react'

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef();

  return (
    <div className='flex flex-col md:justify-start justify-center items-center md:flex-row py-2 shadow-xl sticky top-0 bg-white z-10'>
      <div className="logo mx-5">
        <Link href={'/'}><a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">WearTrend</span>
        </a></Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-xl">
          <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
          <Link href={'/stickers'}><a><li>Stickers</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className='cart absolute right-0 top-2 mx-5'>
        <AiOutlineShoppingCart className='text-xl md:text-4xl cursor-pointer'/>
      </div>
      <div ref={ref} className={`sidebar absolute px-8 py-10 bg-[#6366f1] right-0 top-0 w-80 h-[100vh] transform transition-transform ${Object.keys(cart).length !== 0? 'translate-x-0':'translate-x-full'}translate-x-0`}>
        <h1 className='font-bold text-xl text-center'>Shopping Cart</h1>
        <span onClick={toggleCart} className="absolute top-2 right-2 font-bold cursor-pointer text-2xl"><AiOutlineClose /></span>
        <ol className='list-decimal font-semibold'>
          {Object.keys(cart).length==0 && 
          <div>
            Your Cart is Empty
          </div>}
          {/* console.log(Object); */}
          {Object.keys(cart).map((k)=>{return<li key={k}>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">{cart[k].name}</div>
              <div className="flex items-center justify-center font-semibold w-1/3 text-lg"><AiFillMinusCircle onClick={()=>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer'/><span className='mx-2'>{cart[k].qty}</span><AiFillPlusCircle onClick={()=>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)}} className='cursor-pointer'/></div>
            </div>
            <span>Total: ₹{subTotal}</span>
          </li>})}
        </ol>
        <div className="flex mt-12">
          <Link href={'/checkout'}><button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-lg"><BsFillBagCheckFill className='m-1'/>Checkout</button></Link>
          <button onClick={clearCart} className="flex mx-auto text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-lg">Clear Cart</button>
        </div>
      </div>
    </div>
  )
};

export default Navbar