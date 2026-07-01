import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Users, Lightbulb, Rocket, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

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

  const summary = "Marketing & Customer Experience Project Manager with 7+ years of experience leading brand campaigns, audience research, stakeholder management, and integrated project delivery across corporate events, sports marketing, hospitality, and consumer experience. Managed 50+ high-impact client programs with $12K–$200K budgets, translating customer insights, segmentation, and post-event analytics into executive-ready strategies. Delivered measurable growth, including 30% attendance increase, 25% YoY revenue growth, reduced rework by 25%, and stronger customer engagement outcomes.";

  const experience = [
    {
      company: "LIVEWIRE Experiences Private Limited",
      role: "Assistant Manager, Client Service",
      location: "India",
      dates: "Sep. 2021 – Jun. 2024",
      highlights: [
        "Led end-to-end planning and delivery for 50+ corporate events, brand campaigns, and client experience programs, managing $12K–$200K budgets for enterprise clients including Mastercard, Cummins, and Syngenta.",
        "Directed 10+ internal team members and vendor partners across operations, creative, accounts, and client teams to define project scope, KPIs, timelines, budgets, and quality standards for 50+ high-impact brand programs.",
        "Built financial and operational models for $12K–$200K client programs to evaluate cost, risk, ROI, vendor pricing, and resource allocation, enabling senior leaders to make data-backed budget and scope decisions.",
        "Analyzed attendee engagement, post-event feedback, participation data, and customer experience gaps to optimize event strategy, driving a 30% attendance increase for a flagship annual program.",
        "Strengthened delivery consistency by identifying process gaps, vendor bottlenecks, and execution risks, then implementing corrective actions across planning, communication, and on-site operations.",
        "Restored trust with a high-risk client account by aligning senior stakeholders, improving service delivery, and resolving commercial concerns, resulting in repeat business and 25% YoY revenue growth."
      ]
    },
    {
      company: "Remarkablle Productions Private Limited",
      role: "Associate Producer",
      location: "India",
      dates: "Jun. 2020 – Aug. 2021",
      highlights: [
        "Coordinated end-to-end production workflows across concept development, scheduling, logistics, shoot execution, and post-production within a 5-member creative team, ensuring timely delivery in fast-paced client environments.",
        "Standardized feedback, review, and approval processes across internal teams and client stakeholders, reducing production rework by 25% and improving project turnaround timelines.",
        "Optimized crew coordination, resource planning, vendor communication, and on-ground production logistics as Second Assistant Director, reducing execution delays by 20%."
      ]
    },
    {
      company: "Gravity Entertainment Private Limited",
      role: "Client Service Executive",
      location: "India",
      dates: "Mar. 2017 – May 2020",
      highlights: [
        "Developed branding concepts, digital promotion plans, event communication strategies, and integrated client experience programs for 3+ major corporate clients including Tata Motors, Maruti Suzuki, and Apollo Tyres.",
        "Managed attendee coordination, guest logistics, vendor communication, and on-site execution for 250+ attendees across two consecutive years, ensuring seamless brand experiences despite last-minute changes.",
        "Customized event app experiences including UI design, location features, real-time updates, and attendee communication flows, strengthening client engagement before, during, and after events."
      ]
    }
  ];

  const projects = [
    {
      title: "FeelGoodz Consulting Practicum",
      subtitle: "Market Research & Go-to-Market Strategy",
      category: "Market Research",
      introduction: "Led stakeholder interviews, hospitality market research, customer segmentation, and ICP development to identify high-potential luxury hospitality buyers, procurement pathways, value propositions, and go-to-market expansion opportunities.",
      problem: "Breaking into the luxury hospitality market requires a nuanced understanding of buyer behavior, procurement pathways, and competitive positioning to identify where a brand can create defensible value.",
      objective: "Develop a comprehensive, research-backed Go-to-Market strategy for FeelGoodz by identifying high-potential buyer segments and mapping actionable expansion opportunities in the luxury hospitality sector.",
      methodology: [
        "Conducted stakeholder interviews to align on business goals, target segments, and market positioning.",
        "Performed in-depth luxury hospitality market research and competitive benchmarking.",
        "Developed customer segmentation frameworks and Ideal Customer Profiles (ICPs).",
        "Mapped procurement pathways, identified value proposition opportunities, and outlined go-to-market expansion strategy."
      ],
      results: [
        "Identified high-potential luxury hospitality buyer segments and articulated their core needs.",
        "Mapped clear procurement entry points and competitive value propositions.",
        "Delivered an actionable go-to-market expansion strategy with prioritized target segments."
      ],
      conclusion: "The practicum demonstrated end-to-end applied marketing research skills — from stakeholder alignment and customer segmentation to actionable GTM strategy in a specialized luxury hospitality context."
    },
    {
      title: "NASCAR Marketing Practicum",
      subtitle: "Audience Segmentation & Sponsorship Strategy",
      category: "Audience & Sponsorship Strategy",
      introduction: "Conducted market research and 30+ qualitative interviews to evaluate high-potential audience segments, build audience personas, assess engagement fit, and present sponsorship activation recommendations to senior leadership.",
      problem: "NASCAR needed to identify non-traditional audience segments with high engagement potential to expand its sponsorship value proposition and attract new brand partners.",
      objective: "Evaluate audience segments, build data-informed personas, and develop actionable sponsorship activation recommendations aligned to NASCAR's strategic growth goals.",
      methodology: [
        "Conducted 30+ qualitative interviews across diverse audience profiles to capture behavioral and attitudinal insights.",
        "Performed market research to evaluate segment size, engagement fit, and sponsorship potential.",
        "Built audience personas grounded in primary research and behavioral data.",
        "Synthesized findings into sponsorship activation recommendations presented to senior NASCAR leadership."
      ],
      results: [
        "Identified high-potential, non-traditional audience segments with strong engagement fit.",
        "Delivered detailed audience personas to support targeted sponsorship activation.",
        "Presented data-backed sponsorship strategy recommendations to NASCAR senior leadership."
      ],
      conclusion: "The practicum applied rigorous qualitative research and segmentation frameworks to generate sponsorship strategy insights for a major sports brand, demonstrating cross-industry marketing research expertise."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Project & Operations',
      skills: ['Project Planning', 'Program Management', 'Budget Management', 'KPI Tracking', 'Risk Assessment', 'Resource Allocation', 'Process Improvement', 'Timeline Planning', 'ROI Tracking', 'Event Operations']
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Strategy',
      skills: ['Marketing Strategy', 'Brand Management', 'Brand Activation', 'Event Strategy', 'Audience Segmentation', 'Go-to-Market Strategy', 'Value Proposition Development', 'Customer Experience Strategy', 'Consumer Behavior Analysis']
    },
    {
      icon: Lightbulb,
      title: 'Research & Analytics',
      skills: ['Market Research', 'Customer Insights', 'Qualitative Research', 'Quantitative Research', 'Survey Design', 'Competitive Benchmarking', 'Data Analysis', 'Reporting', 'Persona Development', 'ICP Development']
    },
    {
      icon: Rocket,
      title: 'Tools & Platforms',
      skills: ['SQL', 'Tableau', 'Advanced Excel', 'SAS', 'JMP', 'SPSS', 'MAXQDA', 'Qualtrics', 'Salesforce Essentials', 'MS Project', 'Microsoft Office Suite', 'Adobe Premiere Pro', 'Canva']
    }
  ];

  const education = [
    {
      school: "North Carolina State University, Jenkins Graduate School of Management",
      degree: "Master of Business Administration (MBA), STEM MBA · Concentration: Marketing and Business Analytics",
      location: "Raleigh, NC",
      dates: "Expected May 2026",
      details: "STEM-designated MBA with dual concentration in Marketing and Business Analytics."
    },
    {
      school: "Amity University Haryana",
      degree: "Bachelor of Arts in Journalism and Mass Communication · Minor: English Literature",
      location: "Gurugram, India",
      dates: "Mar. 2017",
      details: ""
    }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Saumya Rathore"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              SAUMYA RATHORE
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Marketing & Customer Experience Project Manager
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              NORTH CAROLINA, USA · OPEN TO OPPORTUNITIES
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'CLIENT PROGRAMS DELIVERED', value: '50+', detail: 'High-Impact Brand Programs' },
              { label: 'ATTENDANCE INCREASE', value: '30%', detail: 'Flagship Annual Program' },
              { label: 'YOY REVENUE GROWTH', value: '25%', detail: 'Client Account Recovery' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Marketing & Customer Experience Project Manager specializing in brand campaigns, integrated event delivery, and audience research. Translating customer insights into executive-ready strategies across corporate events, sports marketing, and hospitality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Campaign & Brand Delivery',
                detail: 'Led end-to-end planning and delivery of 50+ corporate events and brand campaigns, managing $12K–$200K budgets for enterprise clients including Mastercard, Cummins, and Syngenta.'
              },
              {
                icon: Users,
                title: 'Client Experience',
                detail: 'Restored high-risk client accounts through stakeholder alignment and service delivery improvements, driving 25% YoY revenue growth. Analyzed post-event feedback to optimize engagement, achieving a 30% attendance increase.'
              },
              {
                icon: Lightbulb,
                title: 'Research & Strategy',
                detail: 'Fluent in market research, customer segmentation, qualitative and quantitative methods, and go-to-market strategy. Applied across luxury hospitality and sports marketing practicum projects at NC State MBA.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              7+ years delivering brand campaigns, corporate events, and client experience programs across corporate, entertainment, and agency environments.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Applied marketing research, audience segmentation, and go-to-market strategy projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or project documentation?{' '}
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Project management, marketing strategy, research, and analytics expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
                {edu.details && (
                  <p className="text-brown leading-relaxed font-light">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss marketing strategy, brand campaigns, customer experience initiatives, or new opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+19196199659"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (919) 619-9659
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/saumya-rathore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:saumyarathore1896@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                saumyarathore1896@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Saumya Rathore · Marketing & Customer Experience Project Manager.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
