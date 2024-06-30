import { Fragment } from "react/jsx-runtime"
import Navbar from "../components/Navbar/Navbar"
import Routers from "../page-map"
import Footer from "../components/Footer/Footer"

const Layout: React.FC = () => {
    return (
        <Fragment>
            <Navbar />
            <Routers />
            <Footer />
        </Fragment>
    )
}

export default Layout