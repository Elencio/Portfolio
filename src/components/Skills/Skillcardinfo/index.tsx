import React from "react";
import "./SkillCardInfo.css";
import { Card } from "@/components/ui/card";

interface Skill {
    skill: string;
    percentage: string;
}

interface SkillCardInfoProps {
    heading: string;
    skills: Skill[];
}

export default function SkillCardInfo({ heading, skills }: SkillCardInfoProps) {
    return (
        <Card className="skills-info-card">
            <h6>{heading}</h6>
            <div className="skills-info-content">
                {skills.map((skill, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <p>{skill.skill}</p>
                            <p className="percentage">{skill.percentage}</p>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress"
                                style={{ width: skill.percentage }}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </Card>
    );
}
