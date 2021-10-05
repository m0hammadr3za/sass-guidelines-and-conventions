import { Fragment } from "react";
import "./styles/App.scss";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

export default function App() {
    return (
        <Fragment>
            <header className="header">
                <div className="header__colored-background" />

                <div className="header__top-layer">
                    <Container>
                        <Navbar />

                        <Intro />
                    </Container>
                </div>
            </header>

            <main>{/* <Container></Container> */}</main>
        </Fragment>
    );
}
