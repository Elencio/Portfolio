import "./hero.css"
import Logo from "../../assets/20230710_141721.jpg"
// import Spotify from '../../../public/icons/spotify.svg';


export default function Hero() {
    return (
        <section className="hero-container px-24  items-center mt-8 justify-between gap-11">
            <div className="hero-content space-y-2 sm:pr-12">
                <div className="space-y-8">
                    <h1 className="text-3xl mb-4 text-white leading-8 sm:leading-10 sm:text-3xl font-bold">Elêncio Calado - Fullstack Developer</h1>
                    <div className="flex flex-col gap-4 border-border p-4 bg-slate-100 dark:bg-zinc-900 rounded-xl mt-6 md:mt-0 text-primary border">
                        <h1 className="font-bold">O que estou fazendo?</h1>
                        <span>Construindo uma aplicacão para manter as pessoas atualizadas,
                            <a href="">Tech-news</a>
                        </span>
                    </div>
                    <div>
                        <span className="text-black dark:text-[#D1D5DB] leading-8">
                            Como um desenvolvedor full-stack apaixonado por <b>JavaScript/TypeScript</b>, dedico-me a criar websites inovadores.
                            Atualmente, estou envolvido em projetos freelancers.
                            Meu conhecimento abrange principalmente tecnologias como <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>, <b>NodeJS</b> e <b>NextJS</b>, permitindo-me
                            desenvolver soluções sofisticadas e eficazes para diversas necessidades do mercado.
                        </span>
                    </div>

                    <div className="flex items-center border border-border rounded-xl px-2 gap-3 w-max">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <a href="mailto:elenciocalado@gmail.com">Disponivel para trabalho</a>
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <div className="justify-end">
                    <img src={Logo} alt="" className="rounded" />
                </div>
            </div>
        </section>
    )
}

