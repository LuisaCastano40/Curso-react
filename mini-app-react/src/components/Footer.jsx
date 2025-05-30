import React from 'react'
import { NavLink } from 'react-router-dom'

export function Footer() {
    return (
        <footer className='fixed bottom-0 left-0 w-full'>
            <div className='bg-periwinkle text-ivory h-[150px] w-full flex flex-col justify-center items-center gap-6 rounded-t-[50px]'>
                <span className='text-4xl font-bold'>SD</span>
                <nav className="flex gap-8">
                    <NavLink to='/' className={({ isActive }) => isActive ? "font-bold underline" : ""} >Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
                    <NavLink to='/products' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Products</NavLink>
                </nav>
            </div>
            <div className='bg-navy text-ivory h-6 text-center'>
                <p>Proyecto creado para Bootcamp React - BIT - &copy; Luisa Castaño</p>
            </div>
        </footer>
    )
}
