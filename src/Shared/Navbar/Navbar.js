import React from 'react';

const Navbar = () => {

    const menuItems = <React.Fragment>

        <li><a>Home</a></li>
        <li><a>Register</a></li>
        <li><a>Login</a></li>

        <li>
            <form className='p-0'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button className='btn'>Search</button>
            </form>
        </li>


    </React.Fragment>

    return (
        <div className="navbar bg-base-100 bg-gray-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Job Search Website</a>
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