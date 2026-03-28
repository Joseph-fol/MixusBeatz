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

                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                        <p className="text-white nav-contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-dasharray="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path stroke-dashoffset="28" d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" to="0"/></path></g></svg>
                        </p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar