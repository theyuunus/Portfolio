import { Fragment } from "react/jsx-runtime"
import './Home.scss'
import Helmet from "../../components/Helmet/Helmet"
import Container from "../../components/Container/Container"

const Home: React.FC = () => {
    return (
        <Fragment>
            <Helmet title="Home">
                <Container>

                </Container>
            </Helmet>
        </Fragment>
    )
}

export default Home