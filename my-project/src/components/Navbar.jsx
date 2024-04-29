import {BsCart3 , BsMoonFill,BsSunFill} from 'react-icons/bs'
import {FaBarsStaggered} from 'react-icons/fa6'
import {NavLink} from 'react-router-dom'
import NavLinks from './NavLinks'

import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'




const Navbar = () => {
    const dispacth = useDispatch();

    const handleTheme = () => {
        dispacth(toggleTheme());
    };

    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
    const user = useSelector((state) => state.userState.user);

  return (
    <nav className='bg-base-200'>
        <div className='navbar align-element'>
            <div className='navbar-start'>
                {/* TITLE */}
                <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl ">
                ERTEN SHOP    
                </NavLink>  
                {/*Dropdown*/}  
                <div className="dropdown">
                    <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                        <FaBarsStaggered className='w-6 h-6' />
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'>
                        <NavLinks />
                    </ul>
                </div>
            </div>    
            <div className='navbar-center hidden lg:flex'>
                <ul className='menu menu-horizontal'>
                    <NavLinks />
                </ul>
            </div>    
            <div className='navbar-end '>
            {/*THEME SETUP*/}
            <label className='swap swap-rotate'>
                <input type="checkbox" onChange={handleTheme} />
                {/* Sun Icon */}
                <BsSunFill className='swap-on h-4 w-4' />
                {/*Moon Icon*/}
                <BsMoonFill className='swap-off h-4 w-4' />

            </label>
            {/*CART LINK */}
            {user? 
            (<NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            
               <div className="indicator">
                <BsCart3 className='h-6 w-6'/>
                <span className='badge badge-sm badge-primary indicator-item'>
                   {numItemsInCart}
                </span>
               </div>
            </NavLink>)
            :
            (<NavLink to="/" className="btn btn-ghost btn-circle btn-md ml-4">
            
               <div className="indicator">
                <BsCart3 className='h-6 w-6'/>
                <span className='badge badge-sm badge-primary indicator-item'>
                   {numItemsInCart}
                </span>
               </div>
            </NavLink>)
            }
                
            </div>  
        </div>    
    </nav>
  )
}

export default Navbar