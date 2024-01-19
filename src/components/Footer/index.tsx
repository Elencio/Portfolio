import { Link } from "react-router-dom";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa6"
import { CgMail } from "react-icons/cg"

export default function Footer() {
    return (
        <div className="nav-content mt-14">
            <ul>
                <li>
                    <Link to="https://github.com/Elencio" className="flex flex-row items-center gap-2 text-lg">
                        Github
                        <FaGithub color="#c1ff72" />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.linkedin.com/in/elencio-calado-zivane/" className="flex flex-row items-center gap-2 text-lg">
                        linkedin
                        <FaLinkedin color="#c1ff72" />
                    </Link>
                </li>
                <li>
                    <Link to="/work-experience" className="flex flex-row items-center gap-2 text-lg">
                        Gmail
                        <CgMail color="#c1ff72" />
                    </Link>
                </li>
                <li>
                    <Link to="https://www.behance.net/elenciocalado" className="flex flex-row items-center gap-2 text-lg">
                        Behance
                        <FaBehance color="#c1ff72" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

