import { memo } from 'react'
import { navbarConfig } from '../config/navbarconfig';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = memo(() => {

    return (
        <>
            <nav className="bg-black flex justify-between w-full  py-5  my-0 ">
            <NavLink to="/" className="ml-20 -mt-3" ><div className='nav-icon  ml-10 text-black text-5xl font-semibold'>Sapan</div></NavLink>
               
                <div className='flex basis-auto nav-display-hidden mr-20'>
                    <ul className='flex list-none pl-0 ml-auto flex-row flex-wrap'>
                        {
                            navbarConfig.map((navItem: NavbarConfig) => {

                                return (
                                    !navItem.hidden ? <li key={navItem.field} className='px-6'>
                                        <NavLink
                                            to={navItem.navigateTo}
                                            
                                            className={({ isActive }) =>
                                                ` font-normal text-base !opacity-100 ${isActive
                                                    ? 'text-light-orange underline-nav'
                                                    : 'underline-animation text-white'
                                                }`
                                            }
                                        >
                                           <span> {navItem.headerName}</span>
                                        </NavLink>
                                    </li> : <li key={navItem.field}></li>
                                )
                            })
                        }

                    </ul>
                </div>
            </nav>

        </>
    )
}
)
export default Navbar
