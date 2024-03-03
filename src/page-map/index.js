import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';

export const Pages = [
    {
        id: 1,
        path: '/',
        element: <Home />,
        name: 'Home',
    },
    {
        id: 2,
        path: '/works',
        element: <Projects />,
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

const Routers = () => {
    const page = Pages.map(({ id, path, element }) => {
        return (
            <Fragment key={id}>
                <Route path={path} element={element} />
            </Fragment>
        )
    });

    return (
        <Fragment>
            <Routes>
                {page}
            </Routes>
        </Fragment>
    );
};

export default Routers;
