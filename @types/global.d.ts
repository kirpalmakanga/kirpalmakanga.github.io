interface Skill {
    name: string;
    level: number;
}

interface SkillCategory {
    name: string;
    items: Skill[];
}

interface Project {
    title: string;
    desc: string;
    technologies: string;
    url: string;
}
