import { Fragment } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Popular from "./components/Popular";
import SpecialLook from "./components/SpecialLook";
import LimitedEdition from "./components/LimitedEdition";
import "./styles/App.scss";

export default function App() {
    return (
        <Fragment>
            <Header />

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
