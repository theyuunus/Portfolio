import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Works from '../Pages/Works/Works';
import { PageMap } from '../interfase/PageMap';

export const Pages: PageMap[] = [
    {
        id: 1,
        path: '/',
        element: <Home />,
        name: 'Home',
    },
    {
        id: 2,
        path: '/works',
        element: <Works />,
        name: 'Works',
    },
    {
        id: 3,
        path: '/about-me',
        element: <About />,
        name: 'About',
    },
    {
        id: 4,
        path: '/contact',
        element: <Contact />,
        name: 'Contact',
    },
];

const Routers: React.FC = () => {
    const page = Pages.map(({ id, path, element }) => (
        <Fragment key={id}>
            <Route path={path} element={element} />
        </Fragment>
    ));

    return (
        <Routes>
            {page}
        </Routes>
    );
};

export default Routers;
