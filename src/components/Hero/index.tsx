import "./hero.css"
import Logo from "../../assets/20230710_142210.jpg"
import { AiFillBell } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building <span className="text-[#c1ff72]">Digital Experiences</span> That Inspire</h2>
                <p>
                    Passionate Frontend Developer and Design | Transforming Ideas into Seamless and Visuality Stunnig Web Solutions
                </p>
                <span className=" text-green-400 flex items-center gap-2 sm:text-lg"><AiFillBell />Avaliable to work</span>
            </div>
            <div className="hero-img">
                <div>
                    <img src={Logo} alt="" className="rounded" />
                </div>

                {/* <div>
                    <div className="tech-icon">
                        <span>Typescript</span>
                    </div>
                    <div className="tech-icon">
                        <span>Css</span>
                    </div>
                    <div className="tech-icon">
                        <span>HTML</span>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

