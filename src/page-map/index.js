import Home from "../pages/home/home"
import About from "../pages/about/about"
import Work from "../pages/work/work"
import Contact from "../pages/contact/contact"
import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"

const Pages = [
    {
        id: 1,
        path: "/",
        title: "Home",
        element: <Home title={"Home"} />,
    },
    {
        id: 1,
        path: "/about",
        title: "About",
        element: <About title={"About"} />,
    },
    {
        id: 3,
        path: "/work",
        title: "Work",
        element: <Work title={"Work"} />,
    },
    {
        id: 4,
        path: "/contact",
        title: "Contact",
        element: <Contact title={"Contact"} />,
    },
]

const PageMap = () => {
    const page = Pages.map(({ id, path, element }) => {
        return (
            <Fragment key={id}>
                <Route path={path} element={element} />
            </Fragment>
        );
    });
    return (
        <Fragment>
            <Routes>
                {page}
            </Routes>
        </Fragment>
    )
}
export { Pages, PageMap }