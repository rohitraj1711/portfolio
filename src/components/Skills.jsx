import { Code2, Layers, Wrench } from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        icon: Code2,
        title: 'Languages',
        skills: ['Python', 'C++', 'Java', 'JavaScript'],
    },
    {
        icon: Layers,
        title: 'Frameworks',
        skills: ['React.js', 'React Native', 'Node.js', 'HTML', 'CSS'],
    },
    {
        icon: Wrench,
        title: 'Tools & Platforms',
        skills: ['MySQL', 'MongoDB', 'Firebase', 'Git', 'GitHub', 'Vercel'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills__grid">
                    {skillsData.map((category) => (
                        <div key={category.title} className="skills__category">
                            <div className="skills__category-header">
                                <category.icon size={20} className="skills__category-icon" />
                                <h3 className="skills__category-title">{category.title}</h3>
                            </div>
                            <div className="skills__list">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skills__item">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
