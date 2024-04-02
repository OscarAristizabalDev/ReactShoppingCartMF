import React, { FormEvent, Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './routes/AppRouter'

import { Navbar } from "mf_navbar/Navbar";
import { Header } from "mf_header/Header";

import { useHeader } from "mf_header/useHeader";
import { useSearch } from "mf_header/useSearch";

import './index.scss'

const App = () => {

    const { isOpenMenuMovil, onOpenMenuMovil } = useHeader();
    const { onClickSearchProduct, valueSearchProduct } = useSearch();

    return (
        <Suspense>
            <BrowserRouter>
                <Header
                    isOpenMenuMovil={isOpenMenuMovil}
                    onOpenMenuMovil={onOpenMenuMovil}
                    onClickSearchProduct={onClickSearchProduct}
                />
                <Navbar
                    isOpenMenuMovil={isOpenMenuMovil}
                />
                <AppRouter valueSearchProduct={valueSearchProduct} />
            </BrowserRouter>
        </Suspense>
    )
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
