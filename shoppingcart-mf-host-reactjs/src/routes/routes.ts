import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const technology = lazy(() => import('../pages/Technology'));
const homeAppliances = lazy(() => import('../pages/HomeAppliances'));
const searchProduct = lazy(() => import('../pages/SearchProduct'));

export const routes: Route[] = [
    {
        to: '/technology',
        path: 'technology',
        Component: technology,
        name: 'Technology'
    },
    {
        to: '/homeappliances',
        path: 'homeappliances',
        Component: homeAppliances,
        name: 'HomeAppliances'
    },
    {
        to: '/searchproduct',
        path: 'searchproduct',
        Component: searchProduct,
        name: 'Searchproduct'
    }
]
