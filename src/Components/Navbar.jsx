import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/logo.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import '../../src/App.css'
import { SlBadge } from "react-icons/sl";
// import { FaUser } from "react-icons/fa";
import userImg from "../assets/user-icon-8.png"




const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Successful!');
            })
            .catch(error => console.log(error))
    }


    // theme toggle
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);




    const navItems = <>
        <li>
            <NavLink className={({ isActive }) => isActive ? 'isActive hover:bg-[#00396a] hover:text-white gray-on-dark-mode blue-border-dark-mode' : 'hover:bg-[#00396a] hover:text-white'} to='/'>Home</NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'isActive hover:bg-[#00396a] hover:text-white mt-1 lg:mt-0 lg:ml-2 gray-on-dark-mode blue-border-dark-mode' : 'hover:bg-[#00396a] hover:text-white mt-1 lg:mt-0 lg:ml-2'} to='/create-assignment'>Create Assignment</NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'isActive hover:bg-[#00396a] hover:text-white my-1 lg:my-0 lg:mx-2 gray-on-dark-mode blue-border-dark-mode' : 'hover:bg-[#00396a] hover:text-white my-1 lg:my-0 lg:mx-2'} to='/assignment'>Assignments</NavLink>
        </li>

        <li>
            <NavLink className={({ isActive }) => isActive ? 'isActive hover:bg-[#00396a] hover:text-white gray-on-dark-mode blue-border-dark-mode' : 'hover:bg-[#00396a] hover:text-white'} to='/pending-assignment'>Pending Assignment</NavLink>
        </li>

        {/* {
            user?.email && (
                <li><Link to="/bookingList">My Bookings</Link></li>
            )
        } */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100 pb-12">
                <div className="navbar-start">
                    <div className="dropdown block lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} alt="logo-image" className="w-44 lg:w-48 ml-2 md:ml-4 lg:ml-0" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">


                    {/* theme toggle button */}
                    <label className="swap swap-rotate mr-4 lg:mr-6">

                        {/* this hidden checkbox controls the state */}
                        <input className="" type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current  w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>

                    {user && (

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img referrerPolicy="no-referrer" src={user?.photoURL || userImg} alt="user" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/user-profile">
                                    <li className="">
                                        <button className="justify-between py-1 hover:bg-[#00396a] rounded-lg text-gray-700 gray-on-dark-mode hover:text-gray-300">
                                            Profile
                                            <span className="badge text-[14px]"><SlBadge className="mr-1" /> New</span>
                                        </button>
                                    </li>
                                </Link>
                                <Link to="/my-submission">
                                    <li className="my-1">
                                        <button className="py-1 hover:bg-[#00396a] rounded-lg text-gray-700 gray-on-dark-mode hover:text-gray-300">My Submission</button>
                                    </li>
                                </Link>
                                <li>
                                    <button className="menu md:block py-1 hover:bg-[#00396a] rounded-lg text-gray-700 gray-on-dark-mode hover:text-gray-300" onClick={handleLogOut}>Log Out</button>
                                </li>
                            </ul>
                        </div>

                    )}
                    <div className="">
                        {
                            user?.email ? '' :
                                <div className="flex gap-2">
                                    <button className="menu text-[14px] lg:text-[16px] px-1 lg:mr-4 bg-[#00396a] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700"><Link to="/login">Login</Link></button>

                                    <button className="menu px-1 lg:mr-6 text-[14px] lg:text-[16px] bg-[#00396a] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700"><Link to="/signUp">Sign Up</Link></button>
                                </div>
                        }
                    </div>

                    {/* <div className="md:hidden block flex-wrap ml-4">
                        {
                            user?.email ? <button className="menu px-2 lg:mr-5 lg:ml-5 bg-[#ff3811] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700" onClick={handleLogOut}>Log Out</button> : <button className="menu px-2 lg:mr-10 bg-[#00396a] text-[14px] lg:text-[16px] rounded-lg text-white hover:bg-gray-200 hover:text-gray-700"><Link to="/login">Login</Link></button>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;