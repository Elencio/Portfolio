import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import MobileNavbar from "../MobileNavbar";
import { FaTimes, FaBars } from "react-icons/fa"

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav>
                <div className="nav-wrapper">
                    <div className="nav-content">
                        <span className="logo">elencio.calado</span>

                        <ul>
                            <li>
                                <Link to="/" className="menu-item">Home</Link>
                            </li>
                            <li>
                                <Link to="/skills" className="menu-item">Skills</Link>
                            </li>
                            <li>
                                <Link to="/work-experience" className="menu-item">Work Experience</Link>
                            </li>
                            <li>
                                <Link to="/contact-me" className="menu-item">Contact</Link>
                            </li>
                        </ul>

                        <button className="menu-btn" onClick={toggleMenu}>
                            {openMenu ? (
                                <FaTimes className="materials-symbols-outlined" style={{ fontSize: "1.8rem" }} />
                            ) : (
                                <FaBars className="materials-symbols-outlined" style={{ fontSize: "1.8rem" }} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

