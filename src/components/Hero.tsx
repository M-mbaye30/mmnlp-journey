import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: 'Projects', value: '8+', icon: '🚀' },
    { label: 'Years Experience', value: '0-2', icon: '⏱️' },
    { label: 'Degrees', value: '4+', icon: '🎓' },
    { label: 'Languages', value: '4', icon: '🌍' },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <div className="mb-8 animate-float">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-primary p-1 animate-glow">
              <img 
                src="/profile-photo.png" 
                alt="Mouhamed Mbaye" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Mouhamed</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            NLP Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about Text Mining and AI. 
            I explore the intersection of language and technology to build innovative solutions, from text analysis to model training.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <a href= "mailto: mouhamedmbaye371@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="glow-effect transition-smooth hover:scale-105">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </a>
          <a href= "https://github.com/M-mbaye30" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="transition-smooth hover:scale-105">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
          <a href= "https://www.linkedin.com/in/mouhamed-mbaye-nlp-tal/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="transition-smooth hover:scale-105">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </a>
            <a href="/mouhamed-mbaye-cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="transition-smooth hover:scale-105">
                <FileText className="mr-2 h-5 w-5" />
                View CV
              </Button>
          </a>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 transition-smooth hover:scale-105 hover:glow-effect">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center">
          <Button 
            variant="ghost" 
            onClick={scrollToAbout}
            className="animate-bounce transition-smooth hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;