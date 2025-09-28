import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", expertise: "Advanced", icon: "🐍" },
        { name: "SQL", expertise: "Advanced", icon: "🗄️" },
        { name: "JavaScript", expertise: "Beginner", icon: "⚡" },
        { name: "R", expertise: "Pre-Intermediate", icon: "📊" },
      ]
    },
    {
      title: "NLP & ML Frameworks",
      skills: [
        { name: "spaCy", expertise: "Advanced", icon: "🕸️" },
        { name: "Hugging Face", expertise: "Advanced", icon: "🤗" },
        { name: "scikit-learn", expertise: "Intermediate", icon: "🔬" },
        { name: "TensorFlow", expertise: "Intermediate", icon: "🔥" },
        { name: "PyTorch", expertise: "Intermediate", icon: "⚡" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", expertise: "Intermediate", icon: "🌿" },
        { name: "Docker", expertise: "Intermediate", icon: "🐳" },
        { name: "Streamlit", expertise: "Intermediate", icon: "🚀" },
        { name: "MongoDB", expertise: "Advanced", icon: "🍃" },
        { name: "MySQL", expertise: "Advanced", icon: "🐘" },
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "French", expertise: "Fluent", icon: "🇫🇷" },
        { name: "English", expertise: "Professional", icon: "🇬🇧" },
        { name: "Arabic", expertise: "Fluent", icon: "🇸🇦" },
        { name: "Wolof", expertise: "Native", icon: "🇸🇳" },
      ]
    }
  ];

  const methodologies = [
    "Natural Language Processing",
    "Machine Learning",
    "Deep Learning",
    "Text Mining",
    "Named Entity Recognition",
    "Information Extraction",
    "Research & Development"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and methodologies I use to build intelligent solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:glow-effect">
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
              <div className="grid gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth group">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-foreground font-medium group-hover:text-primary transition-smooth">{skill.name}</span>
                    </div>
                    <Badge 
                      variant={skill.expertise === 'Expert' || skill.expertise === 'Native' ? 'default' : 
                              skill.expertise === 'Advanced' ? 'secondary' : 'outline'}
                      className="text-xs font-medium"
                    >
                      {skill.expertise}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Skills;