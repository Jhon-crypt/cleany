export default function Header() {

    return (

        <>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a id="nav-text-head" className="navbar-brand" href="#">Cleany</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-3" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="nav-text-items">
                            <li className="nav-item me-4">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active" href="#">Services</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button id="nav-login-button">Login</button>
                        </div>
                    </div>
                </div>
            </nav>

        </>

    )

}   