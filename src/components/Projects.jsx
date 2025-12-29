import { FolderOpen, Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'PickNRide',
        subtitle: 'Bike Rental Management System',
        description: 'Full-stack React Native vehicle rental app enabling users to browse rental shops, view vehicles, and complete bookings with real-time price calculations.',
        tech: ['React Native', 'TypeScript', 'React Navigation', 'REST APIs'],
        github: 'https://github.com/rohitraj1711/pickNride',
        date: 'Nov 2025',
    },
    {
        id: 2,
        title: 'BingeIt',
        subtitle: 'Streaming Platform Mobile App',
        description: 'Cross-platform streaming application allowing users to browse, search, and save movies with modern UI, authentication, and watchlist features.',
        tech: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
        github: 'https://github.com/rohitraj1711/BingeIt',
        date: 'Jun 2025',
    },
    {
        id: 3,
        title: 'Portfolio Website',
        subtitle: 'Developer Portfolio',
        description: 'Clean, minimal personal portfolio showcasing projects and skills with responsive design and optimized performance using Vite.',
        tech: ['React.js', 'Vite', 'JavaScript', 'CSS'],
        github: 'https://github.com/rohitraj1711/portfolio',
        date: 'Apr 2024',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="projects__grid">
                    {projectsData.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-card__header">
                                <div className="project-card__icon">
                                    <FolderOpen size={24} />
                                </div>
                                <div className="project-card__links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card__link"
                                        aria-label="View on GitHub"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card__link"
                                        aria-label="View live"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__subtitle">{project.subtitle}</p>
                            <p className="project-card__description">{project.description}</p>

                            <div className="project-card__tech">
                                {project.tech.map((item) => (
                                    <span key={item} className="project-card__tech-item">{item}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
