import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automatic Sentiment Classification",
      description: "This repository brings together several machine learning projects covering different areas: classification, regression, clustering, and data analysis. Each project demonstrates the application of ML techniques on real datasets with a comprehensive methodological approach.",
      technologies: ["Python", "spaCy", "NLTK", "scikit-learn", "Matplotlib", "NumPy", "Pandas", "Jupyter Notebook"],
      category: "Machine Learning and NLP",
      year: "2024",
      githubUrl: "https://github.com/M-mbaye30/ML_Project/tree/master",
      demoUrl: "/videos/sentiment-classification-demo.mp4"
    },
    {
      title: "DataLake Explorer Project",
      description: "DataLake Explorer is a data management and exploration project designed for data lakes. The system automates the ingestion of documents from various sources, extracts metadata, and organizes them in a centralized catalog. The web interface, built with Streamlit, offers advanced search and analysis tools to simplify access to vast collections of data and make them directly usable.",
      technologies: ["Python", "Streamlit", "PyPDF2", "BeautifulSoup", "seaborn"],
      category: "Data Engineering",
      year: "2024",
      githubUrl: "https://github.com/M-mbaye30/DataLakeProject/tree/master",
      demoUrl: "/videos/datalake-explorer-demo.mp4"
    },
    {
      title: "KNOW-SN RAG",
      description: "Système de Recherche Documentaire par IA utilisant la technologie RAG pour interroger les documents officiels du Sénégal. Il combine recherche vectorielle (ChromaDB) et génération de texte (GPT-4o-mini) pour fournir des réponses précises et contextualisées.",
      technologies: ["Python", "FastAPI", "ChromaDB", "LangChain", "OpenAI GPT-4o-mini", "Streamlit", "Sentence Transformers", "Docker"],
      category: "Generative AI Engineering",
      year: "2025",
      demoUrl: "/videos/KNOW-SN RAG.webm",
      liveUrl: "https://know-sn-rag-861961046598.europe-west1.run.app/"
    },
    {
      title: "IMGT-NER-APP",
      description: "Automated named entity extraction tool for monoclonal antibody (mAb) descriptions, specialized in WHO INN nomenclature. Uses BiLSTM-CRF models to identify heavy/light chains, species origin, and structural modifiers to support biomedical research.",
      technologies: ["Python", "Streamlit", "BiLSTM-CRF", "spaCy", "TensorFlow", "scikit-learn", "Label-Studio"],
      category: "Biomedical NLP",
      year: "2025",
      demoUrl: "/videos/imgtNErAPP.webm",
      liveUrl: "https://www.imgt.org/nerapp/"
    },
    {
      title: "Library Management System",
      description: "A comprehensive application providing centralized management of books, libraries, and international awards tracking. It features a full-CRUD interface and advanced search functionality for efficient administration.",
      technologies: ["Flask", "SQLite3", "HTML", "Jinja2", "Statistics"],
      category: "Data Management",
      year: "2023",
      githubUrl: "https://github.com/M-mbaye30/myprojectsqlite",
      demoUrl: "/videos/sqlit-demo.webm"

    },
    {
      title: "NLP Tech Watch Agent",
      description: "An Artificial Intelligence agent designed to automate the monitoring and analysis of NLP advancements. It crawls the web to extract relevant content and generates structured tech watch reports, thus providing a fast and precise synthesis of the latest technological innovations.",
      technologies: ["Streamlit", "Python", "bs4,", "duckduckgo", "OpenAI API", "Docker"],
      category: "Generative AI Engineering",
      year: "2025",
      githubUrl: "https://github.com/M-mbaye30/Perso_AI_AGENT",
      demoUrl: "/videos/tech-watch-agent-demo.mp4"

    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative NLP and AI solutions exploring the boundaries of technology.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Media Section */}
              <div className="w-full lg:w-3/5 group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/50 bg-card/50 aspect-video group-hover:shadow-primary/10 transition-all duration-500">
                  {project.demoUrl && project.demoUrl.endsWith('.mp4') || project.demoUrl?.endsWith('.webm') ? (
                    <video
                      src={project.demoUrl}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      controls
                      muted={false}
                      loop
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/30 flex items-center justify-center group-hover:bg-secondary/40 transition-colors">
                      <p className="text-muted-foreground font-medium">Demo coming soon</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="outline" className="text-sm px-3 py-1 font-medium border-primary/20 text-primary">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  {project.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary/50 hover:bg-secondary transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {/* @ts-ignore */}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                        <Globe className="mr-2 h-4 w-4" />
                        Live Site
                      </Button>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                    </a>
                  )}

                  {project.demoUrl && !project.demoUrl.endsWith('.mp4') && !project.demoUrl.endsWith('.webm') && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="rounded-full px-8">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;