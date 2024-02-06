import "./hero.css"
import Logo from "../../assets/20230710_141721.jpg"
import { AiFillBell } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="hero-container mx-11 items-center mt-8 justify-between gap-11">
            <div className="hero-content space-y-2 sm:pr-12">
                <div className="space-y-8">
                <h1 className="text-3xl mb-4 dark:text-gray-400 leading-8 sm:leading-10 sm:text-3xl ">Elêncio Calado - Fullstack Developer</h1>
                    <div className="flex flex-col gap-4 border-border p-4 bg-slate-100 dark:bg-zinc-900 rounded-xl mt-6 md:mt-0 text-primary border-2">
                        <h1 className="font-bold">O que estou fazendo?</h1>
                        <span>Construindo uma aplicacão para manter as pessoas atualizadas, 
                            <a href="">Tech-news</a>
                        </span>
                    </div>
                    <div>
                        <span className="text-black dark:text-white leading-8">
                        Como um desenvolvedor full-stack apaixonado por <b>JavaScript/TypeScript</b>, dedico-me a criar websites inovadores. 
                        Atualmente, estou envolvido em projetos freelancers. 
                         Meu conhecimento abrange principalmente tecnologias como <b>JavaScript</b>, <b>TypeScript</b>, <b>React</b>, <b>NodeJS</b> e <b>NextJS</b>, permitindo-me 
                         desenvolver soluções sofisticadas e eficazes para diversas necessidades do mercado.
                        </span>
                    </div>


                    <h3 className="font-bold">Por que ter este portfolio?</h3>

                    <i className="leading-8">Meu desejo de praticar minhas habilidades e compartilhar o conhecimento adquirido impulsiona meus esforços.</i>

                </div>
                <div className="flex flex-row gap-4 items-center ">
                    <span className="relative flex h-6 w-6">
                        <span className="  flex items-center gap-2 dark:text-green-400 text-green-600 "><AiFillBell size={32} /></span>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                    </span>
                    <span className="dark:text-green-400 sm:text-lg text-green-600 ">Disponivel para trabalho</span>
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

