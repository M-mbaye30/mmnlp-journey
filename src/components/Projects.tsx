import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

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
      title: "RAG Senegal – Budgetary Assistant",
      description: "A Retrieval-Augmented Generation (RAG) application specialized in analyzing official Senegalese budget documents. This application allows users to ask questions in natural language and receive accurate answers directly sourced from the official government content.",
      technologies: ["Python", "PyPDF2", "OpenAI", "ChromaDB,", "LangChain", "Streamlit", "all-MiniLM-L6-v2", "prompt engineering"],
      category: "Generative AI Engineering",
      year: "2025",
      githubUrl: "https://github.com/M-mbaye30/RagApplication",
      demoUrl: "/videos/rag-senegal-demo.mp4"
    },
    {
      title: "Named Entity Recognition for Monocolonal Antibodies",
      description: "A Named Entity Recognition (NER) application designed to automatically extract and classify biomedical entities, including genes and alleles, from unstructured text. To achieve high precision, I trained a dedicated LSTM-CRF model and fine-tuned cutting-edge models such as GliNER, BERT, and ScispaCy. This hybrid methodology guarantees superior performance and reliability when processing complex biomedical literature",
      technologies: ["Python", "Streamlit", "spaCy", "Pandas", "NumPy", "Matplotlib", "Seaborn", "hugging face", "scikit-learn", "TensorFlow", "Keras", "Label-Studio"],
      category: "NLP Engineering",
      year: "2025",
      githubUrl: "https://github.com/M-mbaye30/streamlit_ner_app",
      demoUrl: "/videos/interactive-interface-demo.mp4"

    },
    {
      title: "Library Management System",
      description: "A comprehensive application providing centralized management of books, libraries, and international awards tracking. It features a full-CRUD interface and advanced search functionality for efficient administration.",
      technologies: ["Flask", "SQLite3", "HTML", "Jinja2", "Statistics"],
      category: "Data Management",
      year: "2023",
      githubUrl: "https://github.com/M-mbaye30/myprojectsqlite",
      demoUrl: "/videos/library-management-system-demo.mp4"

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
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative NLP and AI solutions I've developed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:glow-effect hover:scale-105 group flex flex-col">
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 gradient-text group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2 mt-auto">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" variant="outline" className="w-full">
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;