import './style.css';
export default function Header() {
    return (
        <div>
            <div className="siderbar-nav">
                <div className="navbar navbar-light fixed-top header-nav">
                    <nav className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="bg-light offcanvas offcanvas-start shadow" tabindex="-1" id="offcanvasNavbar" aria-label="offcanvasNavbarLabel">
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li><a href="#"><span className="item-text">Nome<br />função</span></a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a href="#"><span className="item-text">Tarefas</span></a></li>
                                    <li><a href="#"><span className="item-text">Sobre</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}