import { Fragment } from "react/jsx-runtime"
import './About.scss'
import Helmet from "../../components/Helmet/Helmet"
import Container from "../../components/Container/Container"

const About: React.FC = () => {
    return (
        <Fragment>
            <Helmet title="About">
                <Container>

                </Container>
            </Helmet>
        </Fragment>
    )
}

export default About