import { lazy } from 'react'

export const OrbitalSphere = lazy(() => import('./orbital-sphere/orbital-sphere'))
export const Spinner = lazy(() => import('./spinner/spinner'))

export const Sidebar = lazy(() => import('./navbar/sidebar'))
export const Header = lazy(() => import('./navbar/header'))
export const Footer = lazy(() => import('./footer/footer'))

export const Contact = lazy(() => import('./contact/contact'))
export const Home = lazy(() => import('./home/home'))
