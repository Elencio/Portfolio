import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"
import MobileNavbar from "../MobileNavbar";
import { FaTimes, FaBars } from "react-icons/fa"
import { Toggle } from "@/components/ui/toggle"
import { ModeToggle } from "../mode-toggle";


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
                    <span className="logo">elencio.calado</span>
                    <ul>
                        <li>
                            <Link to="/" className="menu-item">
                                <Toggle className="text-lg">Sobre min</Toggle>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projectos" className="menu-item text-black dark:text-white">
                                <Toggle className="text-lg">Projectos</Toggle>
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills" className="menu-item text-black  dark:text-white">
                                <Toggle className="text-lg">habilidades</Toggle>
                            </Link>
                        </li>
                        <li>
                            <Link to="/work-experience" className="menu-item text-black  dark:text-white">
                                <Toggle className="text-lg">Experência</Toggle>
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume" className="menu-item text-black  dark:text-white">
                                <Toggle className="text-lg">Resumo</Toggle>
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume" className="menu-item text-black  dark:text-white">
                                <Toggle className="text-lg">Contato</Toggle>
                            </Link>
                        </li>
                        <ModeToggle />
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
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

