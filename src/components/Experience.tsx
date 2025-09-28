import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "NLP Engineer Intern",
      company: "IMGT (IGH, CNRS)",
      location: "Montpellier, France",
      period: "Jan-Jul 2025",
      description: "I contributed to automating the extraction of information from scientific documents to enrich the IMGT/mAb-DB and IMGT/mAb-KG databases, global references in immunogenetics. By combining corpus annotation, model training (BiLSTM-CRF, GLiNER, scispaCy) and the development of a Streamlit interface, I explored solutions to optimize the processing of data on therapeutic antibodies, in the face of an explosion of publications and the complexity of heterogeneous sources. An immersion in the heart of the challenges of AI applied to biomedical research.",
      technologies: ["Python", "SpaCy", "Label-Studio", "TensorFlow", "Pandas", "scikit-learn", "PyTorch", "Hugging Face","NumPy", "Streamlit", "plotly", "Matplotlib", "Seaborn", "GitHub"]
    },
    {
      title: "NLP Engineer",
      company: "Mohammed V University",
      location: "Rabat, Morocco",
      period: "Jan-Jun 2024",
      description: "I designed and evaluated automated pipelines for multilingual document processing, including annotation, information extraction, and data structuring. By implementing and benchmarking LSTM and BERT models, I optimized text classification, blending traditional and deep learning approaches to address real-world document analysis challenges.",
      technologies: ["Python", "spaCy", "Transformers", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "GitHub", "huggingface"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building intelligent solutions through natural language processing and machine learning
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:glow-effect hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-1">{exp.title}</h3>
                  <p className="text-lg text-foreground mb-1">{exp.company}</p>
                  {exp.location && <p className="text-muted-foreground text-sm">{exp.location}</p>}
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">
                  {exp.period}
                </Badge>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="transition-smooth hover:bg-primary hover:text-primary-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;