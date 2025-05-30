// Para react - Link o NavLink
import { NavLink, Link } from "react-router-dom"
// import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";

export function NavBar() {
    return (
        <>
            {/* 1. colores 2. tamaños 3. posicionamiento 4. agregados */}
            <div className="bg-navy text-ivory h-[35px] w-full text-center pt-1">Lorem ipsum dolor sit amet.</div>
            <nav className="flex bg-ivory text-navy h-[80px] w-full justify-between items-center px-8">

                <Link to='/'>
                    <div className="font-bold text-2xl">
                        {/* <img src={logo} alt="logo" /> */}
                        SD
                    </div>
                </Link>
                <div className="flex gap-8">
                    <NavLink to='/' className={({ isActive }) => isActive ? "font-bold underline" : ""} >Home</NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
                    <NavLink to='/products' className={({ isActive }) => isActive ? "font-bold underline" : ""}>Products</NavLink>
                </div>

                <div className="flex">
                    <Link to='https://github.com/LuisaCastano40' >
                        <Icon icon="pajamas:github" width={30} height={30} />
                    </Link>
                </div>
            </nav>
        </>
    )
}