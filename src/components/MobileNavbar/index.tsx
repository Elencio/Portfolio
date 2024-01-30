import { Link } from "react-router-dom";
import "./mobilenavbar.css"

interface MobileNavbarProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

export default function MobileNavbar({ isOpen, toggleMenu }: MobileNavbarProps) {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""} text-white dark:text-white`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <span className="logo">elencio.calado</span>
                    <ul>
                        <li>
                            <Link to="/" className="menu-item">Home</Link>
                        </li>
                        <li>
                            <Link to="/projectos" className="menu-item">Projectos</Link>
                        </li>
                        <li>
                            <Link to="/skills" className="menu-item">Skills</Link>
                        </li>
                        <li>
                            <Link to="/work-experience" className="menu-item">Work Experience</Link>
                        </li>
                        <li>
                            <Link to="/resume" className="menu-item">Resumo</Link>
                        </li>
                    
                    </ul>

                </div>
            </div>
        </>
    )
}

