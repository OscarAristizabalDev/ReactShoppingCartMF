import React from 'react';

import { useMediaQuery } from '../hooks/useMediaQuery';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
    isOpenMenuMovil: boolean
}

export const Navbar = ({ isOpenMenuMovil }: NavbarProps) => {

    // if the screen width is major than 768px return true
    const isPageWide = useMediaQuery('(min-width: 768px)');

    return (
        <>
            {
                (isPageWide)
                    ?
                    <div className='md:flex bg-yellow-default'>
                        <div className='md:grow md:flex-1'></div>
                        <nav className='flex space-x-6 px-2.5 text-sm md:w-full xl:w-1200'>
                            <div className='md:w-162 flex-none'>
                                hola 1
                            </div>
                            <div className='grow flex md:w-612 lg:bg-green-200 xl:bg-red-200'>
                                <NavLink to={"/homeappliances"} className="block px-2 py-1 text-slate-950 font-normal">Homeappliances</NavLink>
                                <NavLink to={"/technology"} className="mt-1 block px-2 py-1 text-slate-950 font-normal sm:mt-0 sm:ml-2">Technology</NavLink>
                            </div>
                            <div className='flex-none w-388'>
                                hola 2
                            </div>
                        </nav>
                        <div className='md:grow md:flex-1'></div>
                    </div>
                    :
                    <nav className={`${isOpenMenuMovil ? 'block' : 'hidden'} bg-yellow-default px-2 pt-2 pb-4 md:flex sm:p-0 justify-end items-center relative`} >
                        <div className='flex'>
                            <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search products, brands and more"
                                required />
                            <button className='bg-gray-50 border-gray-300 h-10 w-10'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </div>
                        <NavLink to={"/homeappliances"} className="block px-2 py-1 text-slate-950 font-normal text-sm">Homeappliances</NavLink>
                        <NavLink to={"/technology"} className="mt-1 block px-2 py-1 text-slate-950 font-normal text-sm sm:mt-0 sm:ml-2">Technology</NavLink>
                    </nav>
            }
        </>
    )
}