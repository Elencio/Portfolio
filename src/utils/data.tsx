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
                skill: "Javascript e Typescript",
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
        title: "Ferramentas",
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
        titulo: "Desenvolvedor Frontend",
        empresa: "UNILAB.",
        duracao: "Out 2022 - Set 2023",
        atividades: [
            "Desenvolvimento e manutenção de interfaces de usuário responsivas.",
            "Colaboração com equipes de design para implementar designs de usuário.",
            "Otimização de desempenho de aplicações web.",
            "Resolução de bugs e problemas de compatibilidade entre navegadores.",
        ],
    },
    {
        titulo: "Desenvolvedor Frontend junior",
        empresa: "Frelancer",
        duracao: "Set 2023 - ate o momento",
        atividades: [
            "Desenvolver componentes reutilizáveis e interfaces dinâmicas usando ReactJs.",
            "Trabalho próximo com designers para garantir a fidelidade da implementação em relação ao design original.",
            "Interação direta com clientes para entender requisitos, esclarecer dúvidas e apresentar progresso",
        ],
    },
]
