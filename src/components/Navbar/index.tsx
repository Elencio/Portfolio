import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import MobileNavbar from "../MobileNavbar";
import { FaTimes, FaBars } from "react-icons/fa"
import { AiFillBell } from "react-icons/ai";

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
                        <span className=" text-green-500 flex items-center gap-2 sm:text-lg"><AiFillBell />Avaliable to work</span>

                        <ul>
                            <li>
                                <Link to="/" className="menu-item">Home</Link>
                            </li>
                            <li>
                                <Link to="/skills" className="menu-item">habilidades</Link>
                            </li>
                            <li>
                                <Link to="/work-experience" className="menu-item">Experência</Link>
                            </li>
                            <li>
                                <Link to="/contact-me" className="menu-item">Contato</Link>
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

