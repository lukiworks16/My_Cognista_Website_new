import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Star, ExternalLink, Calendar, Building2, Award, CheckCircle, ArrowRight } from 'lucide-react';

interface InternshipsProps {
  onOpenPopup: (popupType: string) => void;
}

const Internships: React.FC<InternshipsProps> = ({ onOpenPopup }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const internshipPrograms = [
    {
      id: 1,
      title: 'AI & Machine Learning Internship',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      duration: '1/2/3/6 Months',
      type: 'Paid',
      stipend: '*',
      category: 'ai-ml',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Work on cutting-edge AI projects including computer vision, NLP, and deep learning applications.',
      requirements: ['Python Programming', 'Machine Learning Basics', 'TensorFlow/PyTorch', 'Statistics'],
      benefits: ['Real-world AI projects', 'Mentorship from AI experts', 'Certificate of completion', 'Job opportunity'],
      skills: ['Python', 'TensorFlow', 'Computer Vision', 'NLP'],
      rating: 4.8,
      applicants: 150
    },
    {
      id: 2,
      title: 'Data Science Internship',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      duration: '1/2/3/6 Months',
      type: 'Paid',
      stipend: '*',
      category: 'data-science',
      image: 'https://miro.medium.com/0*OqcIHYENsQGpHN-9.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Analyze large datasets, build predictive models, and create data-driven insights for business decisions.',
      requirements: ['Python/R', 'SQL', 'Statistics', 'Data Visualization'],
      benefits: ['Hands-on data projects', 'Industry exposure', 'Portfolio building', 'Networking opportunities'],
      skills: ['Python', 'SQL', 'Tableau', 'Statistics','Numpy','Pamdas'],
      rating: 4.7,
      applicants: 200
    },
    {
      id: 3,
      title: 'Full Stack Development Internship',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      duration: '1/2/3/6 Months',
      type: 'Paid',
      stipend: '*',
      category: 'development',
      image: 'https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/03f61980c4f9.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Develop complete web applications using modern frameworks and technologies.',
      requirements: ['HTML/CSS/JavaScript', 'React/Angular', 'Node.js', 'Database Knowledge'],
      benefits: ['Full-stack project experience', 'Code review sessions', 'Agile methodology', 'Tech stack mastery'],
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      rating: 4.6,
      applicants: 180
    },
    {
      id: 4,
      title: 'Business Intelligence Internship',
      company: 'J2l Technologies',
      location: 'Bangalore, India',
      duration: '1/2/3/6 Months',
      type: 'Paid',
      stipend: '*',
      category: 'business-intelligence',
      image: 'https://www.elternativa.com/wp-content/uploads/2024/03/10-Data-Warehousing-y-Business-Intelligence.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Create interactive dashboards and reports using Power BI and Tableau for business insights.',
      requirements: ['SQL', 'Excel', 'Power BI/Tableau', 'Business Acumen'],
      benefits: ['Dashboard development', 'Business analysis skills', 'Client interaction', 'BI tool expertise'],
      skills: ['Power BI', 'Tableau', 'SQL', 'Excel'],
      rating: 4.5,
      applicants: 120
    },
    {
      id: 5,
      title: 'Data Analytics Internship',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      duration: '1/2/3/6 Months',
      type: 'Paid',
      stipend: '*',
      category: 'cloud',
      image: 'https://edvancer.in/wp-content/uploads/2022/10/What-is-data-analytics-How-it-can-help-your-career.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Analyzing data sets, generating reports, and supporting decision-making processes then Work with Data, Power Bi, and Tableau.',
      requirements: ['Basic Programming', 'Power BI', 'Tableau', 'Excel'],
      benefits: ['Certification', 'Decision Making', 'Infrastructure knowledge', 'Industry Projects'],
      skills: ['Power BI', 'Tableau', 'Excel', 'Analysis','Reporting Dashboard'],
      rating: 4.7,
      applicants: 90
    },
    {
      id: 6,
      title: 'Cybersecurity Internship',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      duration: '1/2/3/6 Months',
      type: 'Paid',
      stipend: '*',
      category: 'cybersecurity',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Learn ethical hacking, security auditing, and implement security measures for enterprise systems.',
      requirements: ['Networking', 'Linux', 'Security Basics', 'Programming'],
      benefits: ['Security certifications', 'Ethical hacking skills', 'Industry recognition', 'High-demand skills'],
      skills: ['Ethical Hacking', 'Network Security', 'Linux', 'Python'],
      rating: 4.9,
      applicants: 75
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs', count: internshipPrograms.length },
    { id: 'ai-ml', name: 'AI & ML', count: internshipPrograms.filter(p => p.category === 'ai-ml').length },
    { id: 'data-science', name: 'Data Science', count: internshipPrograms.filter(p => p.category === 'data-science').length },
    { id: 'development', name: 'Development', count: internshipPrograms.filter(p => p.category === 'development').length },
    { id: 'business-intelligence', name: 'Business Intelligence', count: internshipPrograms.filter(p => p.category === 'business-intelligence').length },
    { id: 'cloud', name: 'Data Analysis', count: internshipPrograms.filter(p => p.category === 'cloud').length },
    { id: 'cybersecurity', name: 'Cybersecurity', count: internshipPrograms.filter(p => p.category === 'cybersecurity').length }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? internshipPrograms 
    : internshipPrograms.filter(program => program.category === selectedCategory);

  const handleApplyClick = () => {
    // External website for internship applications
    window.open('https://internship.cognista.com', '_blank');
  };

  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Briefcase className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry <span className="text-purple-600">Internship Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain real-world experience with our industry partner internships. Build your portfolio and kickstart your career.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Companies</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Completion Rate</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">₹25K</div>
            <div className="text-gray-600">Avg Stipend</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
            <div className="text-gray-600">Job Conversion</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-600 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Internship Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Program Image */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
                  {program.type}
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{program.rating}</span>
                  </div>
                </div>
              </div>

              {/* Program Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="flex items-center text-purple-600 mb-2">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{program.company}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{program.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      {program.stipend}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{program.applicants} applicants</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills You'll Gain</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {program.skills.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{program.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Apply Button */}
                <button 
                  onClick={handleApplyClick}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform group-hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Internship Journey?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of students who gained real-world experience through our internship programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = "https://cognista-internship.vercel.app/"}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Briefcase className="h-5 w-5" />
              <span>Browse All Internships</span>
              <ExternalLink className="h-4 w-4" />
            </button>
            <button 
              onClick={() => onOpenPopup('bookCall')}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Get Guidance</span>
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Our Internship Programs?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Industry Recognition', desc: 'Certificates from top companies' },
              { icon: Users, title: 'Expert Mentorship', desc: '1:1 guidance from professionals' },
              { icon: Briefcase, title: 'Real Projects', desc: 'Work on live industry projects' },
              { icon: ArrowRight, title: 'Job Opportunities', desc: '80% conversion to full-time roles' }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
