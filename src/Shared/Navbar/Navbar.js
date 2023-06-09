import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FaBeer, FaUser } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Navbar = () => {

    const { user, userSignOut } = useContext(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }


    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>

        {
            user?.uid ? <>
                <li><Link onClick={handleSignOut} >Logout</Link></li>
            </>
                :
                <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }

    </React.Fragment>

    return (
        <div className="navbar bg-base-100 bg-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Job Search</Link>

                <form className='p-0 flex items-center gap-2'>
                    <input type="text" placeholder="Search here" className="input input-bordered w-full" />
                    <button className='btn'>Search</button>
                </form>

            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;