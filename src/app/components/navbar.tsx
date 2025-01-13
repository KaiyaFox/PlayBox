"use client"
import React from 'react';
import AuthButton from "@/app/components/authButton";
//import { useRouter } from 'next/navigation';


// const HandleClick = (path: string) => {
//     const router = useRouter();
//
//     console.log("clicked");
//     // Use next to navigate to the path
//     router.push(path);
// }
export default function Navbar() {

    return (
        <div className="navbar bg-base-100 bg-opacity-90 fixed top-0 left-0 w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow">
                        <button className="btn btn-ghost">Now Playing</button>
                        <button className="btn btn-ghost">About</button>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">PlayBox</a>
            </div>
            <div className="navbar-end">
                <AuthButton/>
            </div>
        </div>
    )
}
