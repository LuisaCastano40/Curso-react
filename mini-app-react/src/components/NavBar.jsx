// Para react - Link o NavLink
import { NavLink, Link } from "react-router-dom"

export function NavBar() {
    return (
        <>
            <nav className="bg-periwinkle text-ivory p-2 px-4 flex gap-2 rounded-2xl m-2 shadow-md">
                <NavLink to='/'>Home</NavLink>
                <NavLink to= '/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
            </nav>
        </>
    )
}