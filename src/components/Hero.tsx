import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-slate-950 to-cyan-900/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="text-emerald-400 font-mono text-sm tracking-wider">
              {'<Hello World />'}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
            Malik Hall-Hinds
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Computer Programmer
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting elegant solutions through clean code and innovative thinking.
            Passionate about building software that makes a difference.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/MalikHH0316?tab=projects"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/malik-hall-hinds-6065a0291/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Malikhallhinds1@gmail.com"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
          >
            View My Work
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-emerald-400" />
      </button>
    </section>
  );
}
