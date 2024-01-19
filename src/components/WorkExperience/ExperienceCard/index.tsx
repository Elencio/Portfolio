import "./experiencecard.css";

interface ExperienceCardProps {
    details: {
        titulo: string;
        empresa: string;
        duracao: string;
        atividades: string[];
    };
}

function ExperienceCard({ details }: ExperienceCardProps) {
    return (
        <div className="work-experience-card">
            <h6>{details.titulo}</h6>

            <div className="work-duration">
                {details.duracao}
            </div>

            <ul>
                {details.atividades.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;
