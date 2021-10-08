import Container from "./Container";
import Navbar from "./Navbar";
import Intro from "./Intro";
import "../styles/Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__colored-background" />

            <div className="header__top-layer">
                <Container>
                    <Navbar />

                    <Intro />
                </Container>
            </div>
        </header>
    );
}
