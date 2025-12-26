import './Skills.css';

const skillsData = {
    languages: ['Python', 'C++', 'Java', 'JavaScript'],
    frameworks: ['React.js', 'React Native', 'Node.js', 'HTML', 'CSS'],
    tools: ['MySQL', 'MongoDB', 'Firebase', 'Git', 'GitHub', 'Vercel'],
};

export default function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>

                <div className="skills__grid">
                    <div className="skills__category">
                        <h3 className="skills__category-title">Languages</h3>
                        <div className="skills__list">
                            {skillsData.languages.map((skill) => (
                                <span key={skill} className="skills__item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skills__category">
                        <h3 className="skills__category-title">Frameworks</h3>
                        <div className="skills__list">
                            {skillsData.frameworks.map((skill) => (
                                <span key={skill} className="skills__item">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skills__category">
                        <h3 className="skills__category-title">Tools & Platforms</h3>
                        <div className="skills__list">
                            {skillsData.tools.map((skill) => (
                                <span key={skill} className="skills__item">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
