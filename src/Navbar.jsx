import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="mainNav navbar navbar-expand-lg navbar-dark text-white bg-black px-3 px-md-5 align-items-center border-bottom" style={{ backgroundColor: "#070c18" }}>
                <div className="container-fluid">
                    <div>
                        <img src="src\assets\MixusBeatz.png" alt="" width={"90px"} />
                        <a className="navbar-brand" href="#" style={{ color: "#c3f5ff" }}>MixusBeatz</a>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
                        <ul className="navbar-nav gap-2 gap-lg-5 text-center py-3 py-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{ color: "#c3f5ff" }} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-none d-lg-block">
                        <p className="text-white nav-contact">Contact</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar