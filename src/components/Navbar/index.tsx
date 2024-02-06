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
            <nav className="w-full inset-x-0 top-0 z-30 items-center border-b px-8 py-6  sticky backdrop-blur-lg transition-all">
                <div className="nav-content">
                    <Link to="/" className="menu-item text-xl">
                        <span>Calado</span>
                    </Link>

                    <ul>
                        <li>
                            <Link to="/" className="menu-item">
                                <span>Sobre min</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projectos" className="menu-item text-black dark:text-white">
                                <span>Projectos</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="menu-item text-black  dark:text-white">
                                <span>habilidades</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/work-experience" className="menu-item text-black  dark:text-white">
                                <span>Experência</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume" className="menu-item text-black  dark:text-white">
                                <span>Resumo</span>
                            </Link>
                        </li>

                    </ul>
                    <button className="menu-btn dark:text-white" onClick={toggleMenu}>
                        {openMenu ? (
                            <FaTimes className="materials-symbols-outlined" style={{ fontSize: "1.8rem" }} />
                        ) : (
                            <FaBars className="materials-symbols-outlined" style={{ fontSize: "1.8rem" }} />
                        )}
                    </button>
                </div>
            </nav>
        </>
    )
}

