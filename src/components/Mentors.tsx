import React, { useState } from 'react';
import { MapPin, Award, Users, Github, Linkedin, GraduationCap, Building2, Star, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

interface MentorsProps {
  onOpenPopup: (popupType: string) => void;
}

const Mentors: React.FC<MentorsProps> = ({ onOpenPopup }) => {
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      designation: 'Senior AI Researcher',
      company: 'Google DeepMind',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'AI Ethics'],
      previousCompanies: ['Google', 'Microsoft', 'NVIDIA', 'Stanford AI Lab'],
      education: [
        { degree: 'Ph.D. in Computer Science', institution: 'Stanford University', year: '2012' },
        { degree: 'M.S. in Artificial Intelligence', institution: 'MIT', year: '2008' },
        { degree: 'B.S. in Computer Engineering', institution: 'UC Berkeley', year: '2006' }
      ],
      achievements: [
        'Published 50+ research papers in top-tier conferences',
        'Led AI team that developed breakthrough computer vision models',
        'Keynote speaker at NeurIPS, ICML, and ICLR conferences',
        'Recipient of Google Research Excellence Award 2023'
      ],
      github: 'https://github.com/sarahchen-ai',
      linkedin: 'https://linkedin.com/in/dr-sarah-chen',
      personalWebsite: 'https://sarahchen.ai',
      rating: 4.9,
      studentsGuided: 150,
      category: 'ai-ml',
      bio: 'Dr. Sarah Chen is a leading AI researcher with over 12 years of experience in machine learning and computer vision. She has published extensively in top-tier conferences and led breakthrough research in neural network architectures.',
      mentorshipStyle: 'Hands-on approach with focus on research methodology and practical implementation',
      availability: 'Weekends, 2-4 PM PST'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      designation: 'Principal Data Scientist',
      company: 'Meta',
      experience: '10+ years',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Data Science', 'Statistical Modeling', 'Big Data', 'A/B Testing'],
      previousCompanies: ['Meta', 'Uber', 'Spotify', 'Netflix'],
      education: [
        { degree: 'M.S. in Statistics', institution: 'Harvard University', year: '2014' },
        { degree: 'B.S. in Mathematics', institution: 'UCLA', year: '2012' }
      ],
      achievements: [
        'Built recommendation systems serving 2B+ users',
        'Led data science team of 25+ engineers',
        'Improved user engagement by 40% through ML models',
        'Speaker at Strata Data Conference and PyData'
      ],
      github: 'https://github.com/mrodriguez-ds',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-ds',
      personalWebsite: 'https://michaelrodriguez.dev',
      rating: 4.8,
      studentsGuided: 200,
      category: 'data-science',
      bio: 'Michael is a seasoned data scientist who has built large-scale ML systems at top tech companies. He specializes in recommendation systems, statistical modeling, and turning data into business value.',
      mentorshipStyle: 'Project-based learning with emphasis on business impact and scalable solutions',
      availability: 'Weekdays, 6-8 PM EST'
    },
    {
      id: 3,
      name: 'Emily Watson',
      designation: 'Staff Software Engineer',
      company: 'Netflix',
      experience: '14+ years',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Full Stack Development', 'System Design', 'Cloud Architecture', 'DevOps'],
      previousCompanies: ['Netflix', 'Amazon', 'Airbnb', 'Twitter'],
      education: [
        { degree: 'M.S. in Computer Science', institution: 'Carnegie Mellon University', year: '2010' },
        { degree: 'B.S. in Software Engineering', institution: 'University of Washington', year: '2008' }
      ],
      achievements: [
        'Architected microservices handling 100M+ requests/day',
        'Led migration to cloud-native architecture',
        'Mentored 50+ junior engineers across multiple companies',
        'Open source contributor with 10K+ GitHub stars'
      ],
      github: 'https://github.com/emilywatson-dev',
      linkedin: 'https://linkedin.com/in/emily-watson-engineer',
      personalWebsite: 'https://emilywatson.tech',
      rating: 4.9,
      studentsGuided: 180,
      category: 'development',
      bio: 'Emily is a full-stack engineer with deep expertise in building scalable systems. She has led engineering teams at top tech companies and is passionate about mentoring the next generation of developers.',
      mentorshipStyle: 'Code review focused with emphasis on best practices and system design thinking',
      availability: 'Weekends, 10 AM - 12 PM PST'
    },
    {
      id: 4,
      name: 'David Kim',
      designation: 'Lead Data Engineer',
      company: 'Spotify',
      experience: '11+ years',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Data Engineering', 'MLOps', 'Cloud Platforms', 'Real-time Analytics'],
      previousCompanies: ['Spotify', 'LinkedIn', 'Twitter', 'Palantir'],
      education: [
        { degree: 'M.S. in Data Engineering', institution: 'UC San Diego', year: '2013' },
        { degree: 'B.S. in Computer Science', institution: 'KAIST', year: '2011' }
      ],
      achievements: [
        'Built data pipelines processing 10TB+ daily',
        'Reduced data processing costs by 60% through optimization',
        'Created MLOps framework adopted company-wide',
        'Certified AWS Solutions Architect Professional'
      ],
      github: 'https://github.com/davidkim-data',
      linkedin: 'https://linkedin.com/in/david-kim-data-engineer',
      personalWebsite: 'https://davidkim.io',
      rating: 4.7,
      studentsGuided: 120,
      category: 'data-engineering',
      bio: 'David specializes in building robust data infrastructure and MLOps systems. He has extensive experience with cloud platforms and real-time data processing at scale.',
      mentorshipStyle: 'Infrastructure-focused with hands-on cloud platform training and best practices',
      availability: 'Weekdays, 7-9 PM EST'
    },
    {
      id: 5,
      name: 'Dr. Priya Sharma',
      designation: 'Principal BI Architect',
      company: 'Microsoft',
      experience: '13+ years',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Business Intelligence', 'Data Visualization', 'Analytics', 'Power BI'],
      previousCompanies: ['Microsoft', 'Tableau', 'Oracle', 'SAP'],
      education: [
        { degree: 'Ph.D. in Information Systems', institution: 'University of Pennsylvania', year: '2011' },
        { degree: 'M.S. in Business Analytics', institution: 'Northwestern University', year: '2007' },
        { degree: 'B.Tech in Computer Science', institution: 'IIT Delhi', year: '2005' }
      ],
      achievements: [
        'Led BI transformation for Fortune 500 companies',
        'Created Power BI templates used by 1M+ users',
        'Microsoft MVP for Power BI (5 consecutive years)',
        'Author of "Modern Business Intelligence" book'
      ],
      github: 'https://github.com/priyasharma-bi',
      linkedin: 'https://linkedin.com/in/dr-priya-sharma-bi',
      personalWebsite: 'https://priyasharma.bi',
      rating: 4.8,
      studentsGuided: 250,
      category: 'business-intelligence',
      bio: 'Dr. Priya Sharma is a renowned BI expert who has transformed data analytics for numerous Fortune 500 companies. She is a Microsoft MVP and author of several influential books on modern BI.',
      mentorshipStyle: 'Business-focused approach with emphasis on translating data into actionable insights',
      availability: 'Weekends, 9-11 AM EST'
    },
    {
      id: 6,
      name: 'James Thompson',
      designation: 'VP of Engineering',
      company: 'Stripe',
      experience: '16+ years',
      image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=400',
      specializations: ['Engineering Leadership', 'Product Development', 'Scaling Teams', 'Fintech'],
      previousCompanies: ['Stripe', 'PayPal', 'Square', 'Goldman Sachs'],
      education: [
        { degree: 'MBA', institution: 'Stanford Graduate School of Business', year: '2015' },
        { degree: 'M.S. in Computer Science', institution: 'MIT', year: '2008' },
        { degree: 'B.S. in Electrical Engineering', institution: 'Georgia Tech', year: '2006' }
      ],
      achievements: [
        'Scaled engineering team from 20 to 200+ engineers',
        'Led product launches generating $100M+ revenue',
        'Built payment systems processing $50B+ annually',
        'Featured in Harvard Business Review for leadership'
      ],
      github: 'https://github.com/jamesthompson-eng',
      linkedin: 'https://linkedin.com/in/james-thompson-vp',
      personalWebsite: 'https://jamesthompson.leadership',
      rating: 4.9,
      studentsGuided: 100,
      category: 'leadership',
      bio: 'James is an engineering leader with extensive experience in scaling teams and building products. He has led engineering organizations at top fintech companies and is passionate about developing future leaders.',
      mentorshipStyle: 'Leadership and career development focused with emphasis on strategic thinking',
      availability: 'Weekdays, 5-7 PM PST'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Mentors', count: mentors.length },
    { id: 'ai-ml', name: 'AI & ML', count: mentors.filter(m => m.category === 'ai-ml').length },
    { id: 'data-science', name: 'Data Science', count: mentors.filter(m => m.category === 'data-science').length },
    { id: 'development', name: 'Development', count: mentors.filter(m => m.category === 'development').length },
    { id: 'data-engineering', name: 'Data Engineering', count: mentors.filter(m => m.category === 'data-engineering').length },
    { id: 'business-intelligence', name: 'Business Intelligence', count: mentors.filter(m => m.category === 'business-intelligence').length },
    { id: 'leadership', name: 'Leadership', count: mentors.filter(m => m.category === 'leadership').length }
  ];

  const filteredMentors = filterCategory === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.category === filterCategory);

  const openMentorDetail = (mentorId: number) => {
    setSelectedMentor(mentorId);
  };

  const closeMentorDetail = () => {
    setSelectedMentor(null);
  };

  const selectedMentorData = mentors.find(m => m.id === selectedMentor);

  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn from <span className="text-purple-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized mentorship from professionals working at top tech companies around the world
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
            <div className="text-gray-600">Years Avg Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-gray-600">Top Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">1:1</div>
            <div className="text-gray-600">Personal Mentorship</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilterCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filterCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer"
              onClick={() => openMentorDetail(mentor.id)}
            >
              {/* Mentor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-purple-600">{mentor.experience}</span>
                </div>
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{mentor.rating}</span>
                </div>
              </div>

              {/* Mentor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                <div className="flex items-center text-purple-600 mb-2">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{mentor.designation}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span>{mentor.company}</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 mb-4">
                  <a
                    href={mentor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={mentor.personalWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentor.specializations.slice(0, 3).map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                    {mentor.specializations.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{mentor.specializations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{mentor.studentsGuided}</div>
                    <div className="text-xs text-gray-500">Students Guided</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{mentor.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{mentor.experience.split('+')[0]}</div>
                    <div className="text-xs text-gray-500">Years Exp</div>
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPopup('bookCall');
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform group-hover:scale-105"
                >
                  Book 1:1 Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Connect with Your Mentor?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get matched with the perfect mentor based on your career goals and learning preferences. 
              Start your personalized learning journey today.
            </p>
            <button 
              onClick={() => onOpenPopup('careerGuidance')}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Find Your Mentor
            </button>
          </div>
        </div>
      </div>

      {/* Mentor Detail Modal */}
      {selectedMentor && selectedMentorData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-t-2xl">
                <button
                  onClick={closeMentorDetail}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex items-center space-x-6">
                  <img
                    src={selectedMentorData.image}
                    alt={selectedMentorData.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
                  />
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedMentorData.name}</h2>
                    <p className="text-xl opacity-90 mb-2">{selectedMentorData.designation}</p>
                    <p className="text-lg opacity-80">{selectedMentorData.company}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{selectedMentorData.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-5 w-5" />
                        <span>{selectedMentorData.studentsGuided} students guided</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Bio */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedMentorData.bio}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2 text-purple-600" />
                        Education
                      </h3>
                      <div className="space-y-3">
                        {selectedMentorData.education.map((edu, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <div className="font-semibold text-gray-900">{edu.degree}</div>
                            <div className="text-purple-600">{edu.institution}</div>
                            <div className="text-sm text-gray-500">{edu.year}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-purple-600" />
                        Key Achievements
                      </h3>
                      <ul className="space-y-3">
                        {selectedMentorData.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Previous Companies */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Building2 className="h-5 w-5 mr-2 text-purple-600" />
                        Career Journey
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedMentorData.previousCompanies.map((company, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Contact Links */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
                      <div className="space-y-3">
                        <a
                          href={selectedMentorData.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                          <span>GitHub Profile</span>
                        </a>
                        <a
                          href={selectedMentorData.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span>LinkedIn Profile</span>
                        </a>
                        <a
                          href={selectedMentorData.personalWebsite}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span>Personal Website</span>
                        </a>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">Specializations</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMentorData.specializations.map((spec, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Mentorship Info */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 mb-4">Mentorship Style</h4>
                      <p className="text-gray-600 text-sm mb-4">{selectedMentorData.mentorshipStyle}</p>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedMentorData.availability}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <button 
                      onClick={() => {
                        closeMentorDetail();
                        onOpenPopup('bookCall');
                      }}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="h-5 w-5 inline mr-2" />
                      Book 1:1 Session
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Mentors;