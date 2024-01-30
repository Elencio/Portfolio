import "./hero.css"
import Logo from "../../assets/20230710_141721.jpg"
import { AiFillBell } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="hero-container mx-11 items-center mt-8 justify-center gap-8">
            <div className="hero-content space-y-2">
                <div className="space-y-8">
                    <div className="flex flex-col gap-4 border border-border p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl mt-6 md:mt-0 text-primary">
                        <h1 className="font-bold">O que estou fazendo?</h1>
                        <span>Construindo uma aplicacão para manter as pessoas atualizadas, 
                            <a href="">Tech-news</a>
                        </span>
                    </div>
                    <div>
                        <h1 className="text-4xl font-extrabold mb-4 dark:text-gray-400 leading-8 sm:leading-10">Kmk, bros!  Chamo-me Elêncio Calado Zivane</h1>
                        <span className="text-black dark:text-white">
                            Tenho uma paixão por <b>JavaScript/Typescript</b> e desenvolvimento de websites. Atualmente, sou um desenvolvedor fullstack
                            na Freelancer, profundamente envolvido nos projectos pessoais, que envolve gestão de participação de mercado,
                            pesquisa de concorrentes e promoção do crescimento do comércio eletrônico. Trabalho principalmente com <b>Javascript</b>,
                            <b>Typescript</b>, <b>React</b>,<b>NodeJS</b>  e <b>NextJS</b>.
                        </span>
                    </div>


                    <h3 className="font-bold">Por que ter este portfolio?</h3>

                    <i className="leading-8">Meu desejo de praticar minhas habilidades e compartilhar o conhecimento adquirido impulsiona meus esforços.</i>

                </div>
                <div className="flex flex-row gap-4 items-center ">
                    <span className="relative flex h-6 w-6">
                        <span className="  flex items-center gap-2 dark:text-green-400 text-green-600 "><AiFillBell size={32} /></span>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
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

