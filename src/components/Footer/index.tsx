import { Link } from "react-router-dom";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export default function Footer() {
    return (
        <div className="flex flex-row md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-14 justify-center">
            <ul className="flex flex-row gap-4 justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li>
                    <Link
                        to="https://github.com/Elencio"
                        className="flex flex-row items-center gap-2 text-lg"
                    >
                        <span className="hidden md:inline">Github</span>
                        <FaGithub className="text-2xl md:text-lg" color="#c1ff72" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://www.linkedin.com/in/elencio-calado-zivane/"
                        className="flex flex-row items-center gap-2 text-lg"
                    >
                        <span className="hidden md:inline">LinkedIn</span>
                        <FaLinkedin color="#c1ff72" className="text-2xl md:text-lg" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/work-experience"
                        className="flex flex-row items-center gap-2 text-lg"
                    >
                        <span className="hidden md:inline">Gmail</span>
                        <CgMail color="#c1ff72" className="text-2xl md:text-lg" />
                    </Link>
                </li>
                <li>
                    <Link
                        to="https://www.behance.net/elenciocalado"
                        className="flex flex-row items-center gap-2 text-lg"
                    >
                        <span className="hidden md:inline">Behance</span>
                        <FaBehance color="#c1ff72" className="text-2xl md:text-lg" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}
