import { Fragment } from "react";
import "./Container.scss"

const Container = ({
    className = "",
    children = "Children"
}) => {
    className = "Container"
    return (
        <Fragment>
            <div className={className}>
                {children}
            </div>
        </Fragment>
    )
}

export { Container }