import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about bridging the gap between human language and artificial intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Specialized in Natural Language Processing (NLP),
                I design and develop robust NLP pipelines, leveraging Large Language Models (LLMs) and advanced architectures like Retrieval-Augmented Generation (RAG).
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Fluent in Arabic, French, and Wolof (Native), with professional proficiency in English, I bring a unique perspective to multilingual NLP challenges and cross-cultural communication.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Ready to contribute my skills and fresh perspective.
              </p>

            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:glow-effect">
              <h4 className="text-lg font-semibold mb-3 text-primary">🎯 Focus Areas</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Natural Language Processing</li>
                <li>• Machine Learning & Deep Learning</li>
                <li>• Linguistic</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:glow-effect">
              <h4 className="text-lg font-semibold mb-3 text-primary">🚀 Interests</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Large Language Models (LLMs)</li>
                <li>• Retrieval-Augmented Generation (RAG)</li>
                <li>• Text Mining and IR/IE</li>              
                <li>• Data Annotation</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;