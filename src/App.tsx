import { Fragment } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Popular from "./components/Popular";
import SpecialLook from "./components/SpecialLook";
import "./styles/App.scss";
import LimitedEdition from "./components/LimitedEdition";

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

            <main>
                <Container>
                    <Popular />

                    <SpecialLook />

                    <LimitedEdition />
                </Container>
            </main>
        </Fragment>
    );
}
