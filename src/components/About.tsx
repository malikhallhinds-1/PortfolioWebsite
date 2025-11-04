import { Code2, Database, Globe, Terminal } from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building responsive and intuitive user interfaces',
    },
    {
      icon: Terminal,
      title: 'Backend Development',
      description: 'Creating robust and scalable server-side applications',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Architecting efficient and normalized data structures',
    },
    {
      icon: Globe,
      title: 'Full Stack',
      description: 'End-to-end development from concept to deployment',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-emerald-400 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a passionate computer programmer with a love for creating elegant solutions
                to complex problems. My journey in software development has been driven by
                curiosity and a constant desire to learn and improve.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Quick Facts</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">▹</span>
                  <span>Location: London, Ontario, Canada</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">▹</span>
                  <span>Years of Experience: 3+</span>
                </div>
                <div className="flex items-start">
                  <span className="text-emerald-400 mr-3 mt-1">▹</span>
                  <span>Coding Languages: C++, C, C#, JavaScript, Java, Python, COBOL, </span>
                </div>

              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-2"
              >
                <skill.icon className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-slate-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
