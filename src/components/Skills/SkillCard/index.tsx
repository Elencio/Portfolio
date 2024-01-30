import "./skillcard.css"

interface SkillCardProps {
    title: string;
    iconUrl: string;
    isActive: boolean;
    onClick: () => void;
}

export default function SkillCard({ title, iconUrl, isActive, onClick }: SkillCardProps) {
    return (
        <div className={`skills-card ${isActive ? "active" : ""} dark:bg-zinc-900`}
            onClick={() => onClick()}
        >
            <div className="skill-icon">
                <img src={iconUrl} alt={title} />
            </div>

            <span>{title}</span>
        </div>
    )
}

