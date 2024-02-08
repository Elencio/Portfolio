import { useState } from "react";

import SkillCard from "./SkillCard";
import "./skills.css";
import SkillCardInfo from "./Skillcardinfo";
import { SKILLS } from "@/utils/data";

interface SkillsData {
    title: string;
    icon: string;
    skills: {
        skill: string;
        percentage: string;
    }[];
}

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = useState<SkillsData>(SKILLS[0]);

    const handleSelectedSkill = (data: SkillsData) => {
        setSelectedSkill(data);
    };

    return (
        <section className="skills-container sm:px-24 ">
            <h5 className="text-gray-900 dark:text-gray-400">Proficiência Técnica</h5>
            <div className="skills-content">
                <div className="skills">
                    {SKILLS.map((item: SkillsData) => (
                        <SkillCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            onClick={() => handleSelectedSkill(item)}
                            isActive={selectedSkill.title === item.title}
                        />
                    ))}
                </div>
                <div className="skills-info">

                    <SkillCardInfo
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills}
                    />

                </div>
            </div>
        </section>
    );
}
