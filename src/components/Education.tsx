import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const formations = [
    {
      degree: "Master II - Natural Language Processing",
      institution: "Université Marie et Louis Pasteur, Besançon, France",
      year: "2025",
      status: "Completed",
      description: "Advanced studies in machine learning and deep learning for NLP, and language model development.",
      type: "formation"
    },
    {
      degree: "Master II - Computational Linguistic",
      institution: "Université Mohammed V, Rabat, Maroc",
      year: "2024",
      status: "Completed",
      description: "Specialized IA with focus on computational linguistic.",
      type: "formation"
    },
    {
      degree: "Licence - Infolinguistic",
      institution: "Université Cady Ayyad, Marrakech, Maroc",
      year: "2022",
      status: "Completed",
      description: "Foundation in linguistics, Literature and language technology applications.",
      type: "formation"
    },
    {
      degree: "Baccalauréat - Série L'AR",
      institution: "AAII, Kaolack, Sénégal",
      year: "2019",
      status: "Completed with Very high distinction",
      description: "Literary studies with excellence in languages and humanities.",
      type: "formation"
    }
  ];

  const certifications = [
    {
      name: "Retrieval Augmented Generation (RAG)",
      issuer: "DeepLearning.AI",
      year: "2025",
      description: "Ability to design, implement, and deploy complete and reliable RAG systems, tailored to the specific needs of various application domains.",
      url: "/certifications/rag-certification.pdf"
    },
    {
      name: "Text Mining for Marketing",
      issuer: "O.P. Jindal Global University",
      year: "2025",
      description: "Gaining the ability to comprehend the basics and applications of Text Mining, while identifying best practices in text analysis for informed decision-making.",
      url: "/certifications/text-mining-marketing.pdf" 
    },
    {
      name: "Elements of AI",
      issuer: " University of Helsinki & MinnaLearn",
      year: "2024",
      description: "Fundamental understanding of AI concepts, including machine learning, neural networks, and societal implications.",
      url: "/certifications/elements-of-ai.png"
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning in AI and NLP
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formation Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold gradient-text">Academic Formation</h3>
            </div>
            
            <div className="space-y-6">
              {formations.map((formation, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:glow-effect hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant={formation.status === "In Progress" ? "default" : "secondary"}>
                      {formation.year}
                    </Badge>
                    {formation.status === "Very high distinction" && (
                      <Badge variant="outline" className="text-primary border-primary">
                        Very high distinction
                      </Badge>
                    )}
                  </div>
                  
                  <h4 className="text-lg font-semibold gradient-text mb-2">
                    {formation.degree}
                  </h4>
                  
                  <p className="text-foreground mb-3">{formation.institution}</p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {formation.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-2xl font-semibold gradient-text">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:glow-effect hover:scale-[1.02] h-full">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline">{cert.year}</Badge>
                    </div>
                    
                    <h4 className="flex items-center text-lg font-semibold gradient-text mb-2">
                      {cert.name}
                      <ExternalLink className="ml-2 h-4 w-4 text-muted-foreground" />
                    </h4>
                    
                    <p className="text-primary mb-3 font-medium">{cert.issuer}</p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;