'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Download, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Github,
  MapPin,
  Calendar,
  ArrowRight,
  Users,
  Award,
  Briefcase
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-gray-900"
            >
              James Faye
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`transition-colors duration-200 ${
                    activeSection === id 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {label}
                </button>
              ))}
              <a
                href="/now"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              James Faye
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-600 mb-8">
              Product Manager
            </h2>
            <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto">
              Leading SaaS & AI products by day. Fuelled by coffee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/James_Faye_CV_2025_.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>
              
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Product Manager with 6+ years of experience delivering AI-powered and secure platform features across SaaS and fintech.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mr-6 flex-shrink-0">
                    <Image
                      src="/james-faye.jpg"
                      alt="James Faye"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Current Focus</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  I currently lead product updates and roadmap communication for SmartAgent and SmartPCI at Gamma — 
                  two cloud-native platforms used in high-volume contact centres. I've launched AI tools using AWS Bedrock 
                  and a PCI-DSS Level 1 payment solution on Amazon Connect.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Glossop, UK</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Product Manager at Gamma</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">England Touch Rugby Representative</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">AI & Cloud Expertise</h4>
                <p className="text-gray-600 text-sm">AWS Bedrock, Lambda, Serverless Architecture, PCI Compliance</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Product Leadership</h4>
                <p className="text-gray-600 text-sm">Cross-functional alignment, roadmap strategy, stakeholder management</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Community Building</h4>
                <p className="text-gray-600 text-sm">Founded Manchester Foxes touch rugby club, side project development</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Experience</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Experience items */}
            <div className="space-y-12">
              {[
                {
                  title: "Product Manager",
                  company: "Gamma",
                  period: "Apr 2023 – Present",
                  description: "Own the roadmap for AI-first tooling and secure payments across 20+ enterprise customers.",
                  achievements: [
                    "Launched SmartPCI on AWS Marketplace — PCI DSS Level 1 compliant — handling 50k+ secure transactions monthly",
                    "Delivered AI After Call Work automation (AWS Bedrock) — reduced wrap time by 40% and saved £1.5M/year for a top-3 customer",
                    "Built CRM integrations (Salesforce, Zendesk, MS Dynamics) — accelerated average onboarding by 2 weeks"
                  ]
                },
                {
                  title: "Product Owner",
                  company: "Gamma (formerly Mission Labs)",
                  period: "Apr 2022 – Apr 2023",
                  description: "Wrote user stories and prioritised delivery for SmartAgent Webchat — used by over 15,000 agents daily.",
                  achievements: [
                    "Led scoping workshops across engineering, UX, CX, and commercial",
                    "Partnered with designers to iterate flows that reduced interaction drop-offs by 18%",
                    "Contributed to a 10% increase in weekly active users over six months"
                  ]
                },
                {
                  title: "Process Improvement Manager",
                  company: "Bupa UK Insurance",
                  period: "Sep 2020 – Mar 2022",
                  description: "Delivered a £125M rebate programme to 1M+ customers at speed and under regulatory scrutiny.",
                  achievements: [
                    "Scaled Webchat across UK Insurance — increased digital deflection by 33%, reduced AHT by 3 mins",
                    "Scrum Master for 2 agile squads — focused on digital CX and operational tooling",
                    "Facilitated cross-departmental workshops that directly improved NPS and reduced failure demand"
                  ]
                },
                {
                  title: "Operations Graduate",
                  company: "Bupa UK Insurance",
                  period: "Sep 2019 – Sep 2020",
                  description: "Managed a team of 10 agents — boosted first-call resolution by 23%, improved CSAT by 53%.",
                  achievements: [
                    "Modelled contact strategy scenarios in Excel to optimise resourcing and call routing",
                    "Shadowed senior leaders and presented a customer experience uplift proposal to the board"
                  ]
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">{job.period}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <h4 className="text-lg text-blue-600 font-medium mb-4">{job.company}</h4>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building and shipping side projects that bring communities together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wrkfriends",
                description: "A platform connecting professionals for networking and collaboration. Built with modern web technologies to foster meaningful work relationships.",
                link: "https://wrkfriends.co.uk",
                status: "Live",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Manchester Foxes",
                description: "Founded and built the digital presence for Manchester's premier touch rugby club. Representing England at international level.",
                link: "https://manchesterfoxes.com",
                status: "Community",
                gradient: "from-orange-500 to-red-500"
              },
              {
                title: "Dark Peak Run Club",
                description: "Building a community of trail runners in the Peak District. Organizing events and connecting outdoor enthusiasts.",
                link: "https://darkpeakrunclub.com/",
                status: "Live",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800' :
                      project.status === 'Community' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:underline"
                    >
                      Visit Project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in working together or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:jameswrfaye@gmail.com"
                    className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-8 h-8 text-gray-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900 text-lg">Email</div>
                      <div className="text-gray-600">jameswrfaye@gmail.com</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://uk.linkedin.com/in/jamesimons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="w-8 h-8 text-gray-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900 text-lg">LinkedIn</div>
                      <div className="text-gray-600">Connect professionally</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/jwrsimons77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-8 h-8 text-gray-600 mr-4" />
                    <div>
                      <div className="font-medium text-gray-900 text-lg">GitHub</div>
                      <div className="text-gray-600">View my code</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Quick Response</h4>
                <p className="text-gray-600">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to reach out via LinkedIn.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">James Faye</h3>
              <p className="text-gray-400">Product Manager & Builder</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:jameswrfaye@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://uk.linkedin.com/in/jamesimons" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/jwrsimons77" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 James Faye. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
