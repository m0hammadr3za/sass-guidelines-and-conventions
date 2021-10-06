import "../styles/Navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__menu-icon">
                <span className="navbar__menu-icon-line navbar__menu-icon-line--first" />
                <span className="navbar__menu-icon-line navbar__menu-icon-line--second" />
            </div>

            <div className="navbar__logo">
                <a href="/#">Mini Designs</a>
            </div>
        </nav>
    );
}
