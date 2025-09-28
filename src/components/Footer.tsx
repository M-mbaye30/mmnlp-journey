import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Mohamed Mbaye</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              NLP Engineer passionate about creating intelligent solutions that bridge
              human language and artificial intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth block">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-smooth block">Experience</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-smooth block">Projects</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth block">Skills</a>
              <a href="#education" className="text-muted-foreground hover:text-primary transition-smooth block">Education</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth block">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:mouhamedmbaye237@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/mohamed-mbaye20" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/mouhamed-mbaye-tal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Mouhamed Mbaye. All rights reserved.</p>
            <p className="flex items-center mt-4 md:mt-0">
              Built with <Heart className="h-4 w-4 mx-1 text-primary" /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;