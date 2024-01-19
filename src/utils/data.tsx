import imagem1 from "../assets/1.png"
import imagem2 from "../assets/4.png"
import imagem3 from "../assets/3.png"
import imagem4 from "../assets/2.png"

export const SKILLS = [
    {
        title: "Frontend",
        icon: imagem1,
        skills: [
            {
                skill: "HTML5 e CSS",
                percentage: "80%"
            },
            {
                skill: "Javascript",
                percentage: "70%"
            },
            {
                skill: "ReactJS",
                percentage: "50%"
            },
            {
                skill: "NextJS",
                percentage: "50%"
            },
        ]
    },
    {
        title: "Backend",
        icon: imagem2,
        skills: [
            {
                skill: "NodeJs",
                percentage: "60%"
            },
            {
                skill: "Express",
                percentage: "40%"
            },
            {
                skill: "Prisma",
                percentage: "50%"
            },
            {
                skill: "bun",
                percentage: "30%"
            },
        ]
    },
    {
        title: "Design Grafico",
        icon: imagem3,
        skills: [
            {
                skill: "User Experience (UX) e User Interface (UI) Design",
                percentage: "80%"
            },
            {
                skill: "Design Visual",
                percentage: "90%"
            },
            {
                skill: "Branding e Identidade Visual:",
                percentage: "90%"
            },
        ]
    },
    {
        title: "Soft Skills",
        icon: imagem4,
        skills: [
            {
                skill: "Trabalho em equipe",
                percentage: "80%"
            },
            {
                skill: "Resolução de problemas",
                percentage: "90%"
            },
            {
                skill: "Ética profissional",
                percentage: "90%"
            },
        ]
    },
    {
        title: "Tools",
        icon: imagem4,
        skills: [
            {
                skill: "Git/Github",
                percentage: "70%"
            },
            {
                skill: "VsCode",
                percentage: "90%"
            },
            {
                skill: "Insomia",
                percentage: "50%"
            },
            {
                skill: "Canva e Figma",
                percentage: "70%"
            },
        ]
    }
]

export const WORK_EXPERIENCE = [

    {
        titulo: "Desenvolvedor Frontend Sênior",
        empresa: "Tech Solutions Inc.",
        duracao: "Jan 2020 - Presente",
        atividades: [
            "Desenvolvimento e manutenção de interfaces de usuário responsivas.",
            "Colaboração com equipes de design para implementar designs de usuário.",
            "Otimização de desempenho de aplicações web.",
            "Resolução de bugs e problemas de compatibilidade entre navegadores.",
        ],
    },
    {
        titulo: "Desenvolvedor Frontend Júnior",
        empresa: "WebTech Startup",
        duracao: "Jul 2018 - Dez 2019",
        atividades: [
            "Participação no desenvolvimento de novos recursos para o produto principal.",
            "Implementação de melhorias de usabilidade sugeridas pelos usuários.",
            "Testes de código e revisões de código em equipe.",
        ],
    },
    {
        titulo: "Desenvolvedor Backend Júnior",
        empresa: "WebTech Startup",
        duracao: "Jul 2018 - Dez 2019",
        atividades: [
            "Participação no desenvolvimento de novos recursos para o produto principal.",
            "Implementação de melhorias de usabilidade sugeridas pelos usuários.",
            "Testes de código e revisões de código em equipe.",
        ],
    },
]
