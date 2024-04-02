import React, { useEffect } from 'react';

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { routes } from './routes';

interface AppRouterProps {
    valueSearchProduct: string
}

export const AppRouter = ({ valueSearchProduct }: AppRouterProps) => {

    const navigate = useNavigate(); // hook that allows to navigate to another path

    useEffect(() => {    

        navigate('searchproduct', {state: { key: valueSearchProduct }}) // navigate to searchproduct sending a object with the searchproduct value
    }, [valueSearchProduct])
    

    return (
        <div className="main-layout">
            <Routes>
                {
                    routes.map(({ to, path, Component }) => (
                        <Route key={to} path={path} element={< Component />} />
                    ))
                }
                <Route path="/*" element={<Navigate to={routes[2].to} />} />
            </Routes>
        </div>
    )
}