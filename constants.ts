import { Project, Skill, SocialLink, Experience, Education, Reference } from './types';

export const MY_NAME = "Thato Lesudi";
export const MY_ROLE = "Machine Learning Engineer";

export const PERSONAL_DETAILS = {
  age: 23,
  location: "Johannesburg, Gauteng",
  languages: ["English", "Sepedi", "Isizulu"],
  driversLicence: "No"
};

export const PROJECTS: Project[] = [
  {
    id: '6',
    title: 'Kgothatso Shrinkage Control',
    description: 'An intelligent retail inventory tracking application designed to monitor stock levels and analyze shrinkage patterns to reduce revenue loss.',
    tags: ['React', 'Data Analytics', 'Retail Tech'],
    link: 'https://kgothatso-shrinkage-control-git-main-thato-s-projects-f68677d8.vercel.app/?_vercel_share=VZzla4k0IYKe4uY3LNCiZ4iNH48TFZGQ',
    githubLink: 'https://github.com/Mthatos/Kgothatso-Shrinkage-Control',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
    features: ['Loss prevention analytics', 'Inventory tracking', 'Shrinkage reporting']
  },
  {
    id: '1',
    title: 'Areyeng Logistics',
    description: 'A comprehensive logistics and transportation optimization platform designed to streamline routes and enhance commuter experiences.',
    tags: ['React', 'Node.js', 'Maps API', 'Logistics'],
    link: 'https://areyeng.vercel.app/',
    githubLink: 'https://github.com/tech-titans-projects/areyeng',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    features: ['Real-time route tracking', 'Commuter analytics', 'Optimized scheduling']
  },
  {
    id: '4',
    title: 'Resume Builder',
    description: 'An intelligent resume building application that uses AI to analyze and optimize content for Applicant Tracking Systems (ATS).',
    tags: ['AI', 'NLP', 'Career Tech', 'React'],
    link: 'https://resumeproject-five.vercel.app/',
    githubLink: 'https://github.com/tech-titans-projects/resume_project',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    features: ['ATS scoring', 'Keyword optimization', 'PDF generation']
  },
  {
    id: '3',
    title: 'Marketing copy generator',
    description: 'An AI-powered tool capable of generating engaging social media marketing copy and suggesting relevant visuals tailored to brand voice.',
    tags: ['Next.js', 'OpenAI/Gemini API', 'Generative AI', 'Marketing'],
    link: 'https://marketingpostgenerate.vercel.app/',
    githubLink: 'https://github.com/tech-titans-projects/marketing_post_generate',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    features: ['Auto-caption generation', 'Hashtag suggestion', 'Image prompt generation']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java Development', category: 'Languages', proficiency: 90 },
  { name: 'SQL', category: 'Languages', proficiency: 85 },
  { name: 'API Integration', category: 'Tools', proficiency: 90 },
  { name: 'AI Integration', category: 'AI/ML', proficiency: 88 },
];

export const SOFT_SKILLS = [
  "Adaptability",
  "Teamwork",
  "Time Management",
  "Effective Communication"
];

export const INTERESTS = [
  "Software Development",
  "System Design"
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Candidate',
    company: 'Capaciti',
    period: 'October 2025 - Present',
    description: 'Participating in intensive tech career accelerator program focused on digital skills and software development.'
  },
  {
    role: 'IT Intern',
    company: 'The Document Warehouse',
    period: 'May 2024 - June 2025',
    description: 'Provided IT support, system maintenance, and assisted in technical operations.'
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Diploma in Informatics',
    institution: 'Tshwane University of Technology',
    year: 'February 2025'
  }
];

export const REFERENCES: Reference[] = [
  {
    name: 'Emile Setowski',
    role: 'IT Manager',
    company: 'The Document Warehouse',
    email: 'EmileS@tdw.co.za'
  },
  {
    name: 'Kefilwe Mphye',
    role: 'Talent development coach',
    company: 'Capaciti',
    email: 'Kefilwe.Mphye@capaciti.org.za'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Mthatos', icon: 'github' },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/thato-lesudi-023070216', icon: 'linkedin' },
];

export const BIO = `I am an aspiring Software developer with strong coding skills. I am proficient in several different programming languages, covering both the front-end and back-end development. I am proficient mainly in Java, Python, MySQL, HTML5/CSS3. I strive for knowledge, and I am always eager to learn.`;

export const CAREER_OBJECTIVE = `To secure a challenging position as an AI Engineer or Machine Learning Engineer where I can leverage my skills in Python, Java, and Full Stack Development to contribute to innovative projects. I aim to work in a collaborative environment that values technical excellence, adaptability, and effective communication.`;