import  { memo,} from 'react'
import { navbarConfig } from '../config/navbarconfig';
import { NavLink } from 'react-router-dom';


const Navbar = memo(() => {
   
    return (
        <>
            <nav className="flex bg-black px-1 py-2 items-center navbar-light">
                <div className="container flex w-[1110px] py-3 justify-between my-0 mx-auto">
                    <a href="/" className=" text-white font-black text-2xl uppercase">Sapan</a>
                    <div className='flex basis-auto'>
                        <ul className='flex list-none pl-0 ml-auto flex-row flex-wrap'>
                            {
                                navbarConfig.map((navItem: { headerName: string; field: string; href: string; }) => {
                                    
                                    return (
                                        <li key={navItem.field} onClick={() =>console.log("clicked")}>
                                            <NavLink to={navItem.href} className="text-base text-white font-normal text-white !opacity-100  px-6  active: active:text-light-orange focus:outline-none  focus:text-light-orange"><span className='underline-animation '>{navItem.headerName}</span></NavLink>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}
)
export default Navbar
