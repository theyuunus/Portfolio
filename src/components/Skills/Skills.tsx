import React, { Fragment } from "react";
import './Skills.scss';
import Text from "../Text/Text";

const skillsData = [
    {
        id: 1,
        title: "Languages",
        items: ["JavaScript", "TypeScript(basic)"]
    },
    {
        id: 2,
        title: "Other",
        items: ["HTML", "CSS", "SCSS", "JSON-SERVER", "REST-API"]
    },
    {
        id: 3,
        title: "Foreign Languages",
        items: ["Uzbek (native)", "English (A2)", "Russian (A2)"]
    },
    {
        id: 4,
        title: "Tools",
        items: ["VS code", "Figma", "Git", "Font-Awesome", "Webpack", "Github"]
    },
    {
        id: 5,
        title: "Frameworks",
        items: ["ReactJS", "React-TypeScript", "Bootstrap (5.3)", "React-Bootstrap"]
    },
];

const Skills: React.FC = () => {
    return (
        <Fragment>
            {skillsData.map((skill) => (
                <div className="skills" key={skill.id}>
                    <Text className="skills-title" as="h2">
                        {skill.title}
                    </Text>
                    <div className="skills-item">
                        <Text className="skills-item-text">
                            {skill.items.join(' ')}
                        </Text>
                    </div>
                </div>
            ))}
        </Fragment>
    );
};

export default Skills;
