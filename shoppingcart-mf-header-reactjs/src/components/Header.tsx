import React, { FormEvent, useRef } from 'react';

import { useMediaQuery } from '../hooks/useMediaQuery';

interface HeaderProps {
    isOpenMenuMovil: boolean,
    onOpenMenuMovil: (isOpen: boolean) => void,
    onClickSearchProduct: (value: string) => void
}

export const Header = ({ isOpenMenuMovil, onOpenMenuMovil, onClickSearchProduct }: HeaderProps) => {


    const inputRef = useRef<HTMLInputElement>(null);

    // if the screen width is major than 768px return true
    const isPageWide = useMediaQuery('(min-width: 768px)');

    const onClickOpenMenu = () => {
        console.log('onClickOpenMenu')
        onOpenMenuMovil(isOpenMenuMovil);
    }

    const onClickSearch = () => {        
        if (inputRef.current?.value) onClickSearchProduct(inputRef.current?.value)
    }


    return (
        <>
            <header className='md:flex bg-yellow-default'>
                <div className='md:grow md:flex-1'></div>
                <div className='flex space-x-6 pt-2 pb-3 px-2.5 md:w-full xl:w-1200 lg:bg-green-200 xl:bg-red-200'>
                    <div className='sm:w-674 md:w-162 h-10 md:flex-none'>
                        <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/logo_large_plus.webp" alt="Workcation" />
                    </div>
                    <div className={`${isPageWide ? 'block' : 'hidden'} grow flex items-center md:w-580 lg:h-10`}>
                        <input
                            id="search"
                            name="search"
                            ref={inputRef}
                            type="text"
                            className="w-full h-full rounded-sm bg-white py-2.5 px-3.5 text-base"
                            placeholder="Buscar productos, marcas y más"
                            required />
                        <button
                            type='submit'
                            onClick={onClickSearch}
                            className='w-10 h-10 pl-2 rounded-sm bg-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                    </div>
                    <div className='md:hidden pr-1'>
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false"
                            onClick={onClickOpenMenu}
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {
                                    (isOpenMenuMovil)
                                        ?
                                        <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                        :
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                }
                            </svg>
                        </button>
                    </div>
                    <div className={`${isPageWide ? 'block flex-none w-388 h-39 justify-end' : 'hidden'}`}>
                        <img className='w-340 h-full' src="https://http2.mlstatic.com/D_NQ_927556-MLA74342696385_022024-OO.webp" alt="Workcation" />
                    </div>
                </div>
                <div className='md:grow md:flex-1'></div>
            </header>


            {/* <div className=''>
                <header className="bg-yellow-default sm:flex sm:justify-between sm:items-center sm:px-3">
                    <div className="flex items-center justify-between">
                        <div className='px-2 py-3 md:pl-20 lg:pl-40 xl:pl-60 2xl:pl-80'>
                            <img className="sm:h-7 lg:h-8" src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.15/mercadolibre/logo_large_plus.webp" alt="Workcation" />
                        </div>
                        <form onSubmit={(e) => handleSearchProduct(e)}>
                            <div className={`${isPageWide ? 'block' : 'hidden'} sm:pl-6 sm:flex justify-end items-center relative sm:p-0 pt-2 pb-4 md:w-288 lg:w-352 xl:w-560`}>
                                <input
                                   
                                    name="search"
                                    id="search"
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search products, brands and more"
                                    required />
                                
                                <button
                                    type='submit'
                                    className='bg-gray-50 border-gray-300 h-10 w-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div className='sm:hidden pr-1'>
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false"
                                onClick={onClickOpenMenu}
                            >
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    {
                                        (isOpenMenuMovil)
                                            ?
                                            <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                                            :
                                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                    }
                                </svg>
                            </button>
                        </div>
                        <div className={`${isPageWide ? 'block' : 'hidden'} px-2 py-3 pl-10 sm:pl-6`}>
                            <img className="sm:h-7 lg:h-8" src="https://http2.mlstatic.com/D_NQ_927556-MLA74342696385_022024-OO.webp" alt="Workcation" />
                        </div>
                    </div>
                </header>
            </div> */}
        </>
    )
}