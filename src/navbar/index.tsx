import { memo } from 'react'
import { navbarConfig } from '../config/navbarconfig';
import { NavLink } from 'react-router-dom';
import './navbar.scss'

const Navbar = memo(() => {
 
    return (
        <>
            <nav className="flex bg-black px-1 py-2 items-center">
                <div className="container flex w-full py-3 justify-between my-0 mx-auto">
                    <NavLink to="/" className=" text-white font-black text-2xl uppercase">Sapan</NavLink>
                   
                    <div className='flex basis-auto nav-display-hidden'>
                        <ul className='flex list-none pl-0 ml-auto flex-row flex-wrap'>
                            {
                                navbarConfig.map((navItem: NavbarConfig) => {

                                    return (
                                        !navItem.hidden ? <li key={navItem.field} className='px-6' onClick={() => console.log("click")}>
                                            <NavLink
                                                to={navItem.navigateTo}
                                                className={({ isActive }) =>
                                                    ` font-normal text-base !opacity-100 ${isActive
                                                        ? 'text-light-orange underline-nav'
                                                        : 'underline-animation text-white'
                                                    }`
                                                }
                                            >
                                                {navItem.headerName}
                                            </NavLink>
                                        </li> : <li key={navItem.field}></li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                   <button className=' hidden display-menu-icon'>
                   <img src="/icons/menu.svg" alt="menu" className='w-8 h-6 '/>
                   <span className='text-[#FFFFFF80] font-medium text-base uppercase'>Menu</span>
                   </button>
                </div>
            </nav>
            
        </>
    )
}
)
export default Navbar
