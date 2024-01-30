import { Link } from "react-router-dom";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export default function Footer() {
    return (
        <footer>
            <div className="px-8 mb-8 mt-16 items-center justify-between space-y-4 md:mb-10 md:flex md:space-y-0">
                <div className="flex items-center space-x-1">

                    <div className="flex space-x-1.5 bg-slate-500 p-4 rounded dark:text-gray-100">
                        <Link
                            to="https://github.com/Elencio"
                            className="flex flex-row items-center gap-2 text-lg"
                        >

                            <FaGithub className="text-2xl md:text-lg text-white" />
                        </Link>
                    </div>
                    <div className="flex space-x-1.5 bg-slate-500 p-4 rounded">
                        <Link
                            to="https://www.linkedin.com/in/elencio-calado-zivane/"
                            className="flex flex-row items-center gap-2 text-lg"
                        >

                            <FaLinkedin className="text-2xl md:text-lg  text-white " />
                        </Link>
                    </div>
                    <div className="flex space-x-1.5 bg-slate-500 p-4 rounded">
                        <a
                            href="mailto:elenciocalado@gmail.com"
                            className="flex flex-row items-center gap-2 text-lg"
                        >
                            <CgMail className="text-2xl md:text-lg text-white" />
                        </a>

                    </div>
                    <div className="bg-slate-500 p-4 rounded">
                        <Link
                            to="https://www.behance.net/elenciocalado"
                            className="flex flex-row items-center gap-2 text-lg"
                        >

                            <FaBehance className="text-2xl md:text-lg  text-white " />
                        </Link>
                    </div>

                </div>


                <div className="my-2 flex space-x-2 text-lg text-gray-500 dark:text-gray-400 sm:text-sm">
                    <div className="sm:text-sm">{`Copyright © ${new Date().getFullYear()}`}</div>
                    <span>{` • `}</span>
                    <span>elencio's Coding Adventure</span>
                </div>
            </div>
        </footer>
    )

}
