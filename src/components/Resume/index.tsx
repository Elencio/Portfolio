export default function Resume() {
    return (
        <main className="mx-auto my-12 max-w-screen-xl gap-12 space-y-12 rounded-md bg-[#09090b] p-3 md:flex md:space-y-0 md:p-8 px-24">
            <div className="table-of-content top-20 self-start pl-0 text-white md:sticky">
                <p>Sumário</p>
                <p>Educacão</p>
                <p>Experiência de trabalho</p>
                <p>Projectos</p>
            </div>

            <div className="hidden border-l border-gray-700 md:block" />
            <div className="content prose prose-slate grow table-auto border-collapse space-y-5 text-justify leading-6 text-white">
                <div className="space-y-4">
                    <h1 className="text-2xl">Elêncio Calado Zivane</h1>

                    <p className="text-lg font-bold">Fullstack Engineer - Acarape City, Brazil</p>

                    <div>
                        <h2 className="text-xl">Sumário</h2>
                        <p className="text-sm">
                            Com dois ano de experiência dedicada ao desenvolvimento web, especializei-me na área de Frontend e design, com foco na criação de
                            interfaces interativas e na garantia de uma experiência de usuário fluída e agradável. Neste período, desenvolvi projetos variados, tanto
                            para objetivos específicos quanto para meu próprio avanço profissional. Meu Conhecimento abrange desde o design até a programação,
                            utilizando ferramentas e tecnologias de ponta como React, Javascript, Typescript, styled-components e Figma.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl">Educacão</h2>

                        <h4>University of International Integration of Lusophone Afro-Brazilian (UNILAB)</h4>
                        <li>
                            <b>Curso</b>: Bacherelato e Engenharia da Computacão.
                        </li>
                        <li>
                            <b>Duracão</b>: 2021 – until today.
                        </li>
                    </div>

                    <div>
                        <h2 className="text-xl">Experiência de trabalho</h2>
                        <h4 className="mt-2">Unilab</h4>

                        <div className="!mt-0 text-sm italic text-gray-400">Frontend Developer • 2022 - 2023</div>

                        <b>Responsabilidades</b>
                        <div className="p-4">
                            <li>Responsável por criar experiências interativas e responsivas.</li>
                            <li> Desenvolvimento de componentes reutilizáveis.</li>
                            <li> Aplicação das melhores práticas de design e usabilidade.</li>
                            <li>Comprometido em garantir uma experiência fluida e agradável para os usuários.</li>
                            <li>Especialização no desenvolvimento de interfaces do usuário com o framework React.</li>
                        </div>

                        <b>Tecnologias</b>

                        <div className="p-4">
                            <li>Front-end: ReactJS, Tailwind.</li>
                            <li>Back-end: TypeScript, NodeJS, Postgres, JWT.</li>
                        </div>

                        <h4>Frontstack</h4>

                        <div className="!mt-0 text-sm italic text-gray-400">Frontend Developer • 2023 - present</div>
                        <b>Responsabilidades</b>
                        <div className="p-4">
                            <li>Aprimoramento de habilidades como desenvolvedor frontend através de desafios.</li>
                            <li>Desenvolvimento de logos, flyers, folders</li>
                            <li>Uso proficiente de ferramentas de design como Figma.</li>
                        </div>

                        <b>Tecnologias</b>
                        <div className="p-4">
                            <li>Back-end: TypeScript, NestJS, Postgres, JWT.</li>
                            <li>Front-end: ReactJS, Tailwind.</li>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-xl">Projectos</h2>
                        <div className="p-4">
                            <li>Simulating basic geometry using ThreeJS, Vanilla JavaScript and jQuery.</li>
                            <li>Final project of web application development.</li>
                            <li>Learn Typescript from scratch.</li>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl">Destaques de Habilidades</h2>
                        <div className="p-4">
                            <li> Experiência trabalhando com Back-end: Javascript, Typescript, NodeJS, Prisma, Restful API e GraphQL API.</li>
                            <li> Experiência trabalhando com Front-end: Html, Css, Scss, Tailwindcss, ReactJS, Bootstrap, Styled-components.</li>
                            <li>Sistemas de Gerenciamento de Banco de Dados: Postgres, MySQL e MongoDB.</li>
                            <li> Utilização do Insomnia para chamadas e teste de API.</li>
                            <li>Controle de versão: Git, Github.</li>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-xl">Certificados</h2>
                        <li className="pl-2">Curso Avancado de Javascript e Typescript. <br /></li>
                        <div className="!m-0 text-sm italic text-gray-400"> Udemy Brazil em dezembro 2022.</div>
                        <li className="pl-2"> ReactJS <br /></li>
                        <div className="!m-0 text-sm italic text-gray-400"> Rocketseat, 30 de Setembro de 2023.</div>
                        <li className="pl-2">Responsive Web Design <br /></li>
                        <div className="!m-0 text-sm italic text-gray-400">freeCodeCamp, 2 de Agosto de 2023</div>
                    </div>

                    <div>
                        <h2 className="text-xl">Atividades</h2>
                        <div className="p-4">
                            <li>Participação em uma bolsa de iniciação científica como desenvolvedor frontend.</li>
                            <li>Participação na Feira de Conhecimento Ceará Tech Submit.</li>
                        </div>
                    </div>


                    <p>Last updated: Janeiro 2024</p>
                </div>
            </div>
        </main>

    )
}

