import React, { useState } from 'react';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Download, Phone, Star, Calendar, Target, Code, BarChart, Brain, Database, MapPin, Building2, ExternalLink, Briefcase } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

interface InternshipDetailPageProps {
  internshipId: string;
  onBack: () => void;
  onOpenPopup: (popupType: string) => void;
}

const InternshipDetailPage: React.FC<InternshipDetailPageProps> = ({ internshipId, onBack, onOpenPopup }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const internshipData = {
    '1': {
      title: 'AI & Machine Learning Internship',
      subtitle: 'Work on cutting-edge AI projects including computer vision, NLP, and deep learning',
      duration: '1/2/3/6 Months',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      type: 'Paid',
      stipend: '₹15,000 - ₹25,000/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.8,
      applicants: 150,
      overview: {
        description: 'Join our AI & Machine Learning internship program and work on real-world projects that impact millions of users. You\'ll collaborate with experienced engineers and researchers to build intelligent systems using cutting-edge technologies.',
        highlights: [
          'Work on live AI projects',
          'Mentorship from AI experts',
          'Access to GPU clusters',
          'Research paper opportunities',
          'Industry certification',
          'Full-time job opportunity'
        ],
        outcomes: [
          'AI Engineer',
          'Machine Learning Engineer',
          'Data Scientist',
          'Computer Vision Engineer',
          'NLP Engineer',
          'Research Scientist'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'AI Fundamentals',
            duration: '1 week',
            topics: ['Python for AI', 'Mathematics Review', 'ML Basics', 'Neural Networks']
          },
          {
            title: 'Computer Vision Projects',
            duration: '2-3 weeks',
            topics: ['Image Classification', 'Object Detection', 'Face Recognition', 'Medical Imaging']
          },
          {
            title: 'Natural Language Processing',
            duration: '2-3 weeks',
            topics: ['Text Processing', 'Sentiment Analysis', 'Chatbots', 'Language Models']
          },
          {
            title: 'Deep Learning Applications',
            duration: '2-4 weeks',
            topics: ['CNNs', 'RNNs', 'Transformers', 'GANs']
          },
          {
            title: 'Production Deployment',
            duration: '1-2 weeks',
            topics: ['Model Deployment', 'API Development', 'Monitoring', 'Scaling']
          }
        ]
      },
      requirements: ['Python Programming', 'Machine Learning Basics', 'TensorFlow/PyTorch', 'Statistics'],
      tools: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLTK', 'Scikit-learn', 'Docker', 'AWS'],
      projects: [
        'AI-Powered Customer Support Chatbot',
        'Computer Vision System for Quality Control',
        'Fraud Detection Model for Financial Transactions',
        'Recommendation Engine for E-commerce Platform',
        'Automated Document Processing System'
      ],
      benefits: [
        'Monthly stipend of ₹15,000 - ₹25,000',
        'Certificate of completion',
        'Letter of recommendation',
        'Full-time job opportunity',
        'Mentorship from industry experts',
        'Access to premium tools and resources'
      ]
    },
    '2': {
      title: 'Data Science Internship',
      subtitle: 'Analyze large datasets, build predictive models, and create data-driven insights',
      duration: '1/2/3/6 Months',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      type: 'Paid',
      stipend: '₹12,000 - ₹22,000/month',
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://miro.medium.com/0*OqcIHYENsQGpHN-9.jpg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      applicants: 200,
      overview: {
        description: 'Dive deep into data science with our comprehensive internship program. Work with real business data, build predictive models, and generate insights that drive strategic decisions.',
        highlights: [
          'Real business data analysis',
          'End-to-end ML projects',
          'Statistical modeling',
          'Data visualization',
          'Business intelligence',
          'Industry mentorship'
        ],
        outcomes: [
          'Data Scientist',
          'Business Analyst',
          'Data Analyst',
          'ML Engineer',
          'Research Analyst',
          'BI Developer'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Data Science Foundations',
            duration: '1 week',
            topics: ['Python/R', 'Statistics', 'Data Manipulation', 'EDA']
          },
          {
            title: 'Machine Learning Projects',
            duration: '2-3 weeks',
            topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Selection', 'Validation']
          },
          {
            title: 'Data Visualization',
            duration: '1-2 weeks',
            topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau']
          },
          {
            title: 'Business Intelligence',
            duration: '2-3 weeks',
            topics: ['SQL', 'Dashboard Creation', 'KPI Design', 'Reporting']
          },
          {
            title: 'Advanced Analytics',
            duration: '1-2 weeks',
            topics: ['Time Series', 'A/B Testing', 'Causal Inference', 'Big Data']
          }
        ]
      },
      requirements: ['Python/R', 'SQL', 'Statistics', 'Data Visualization'],
      tools: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Pandas', 'NumPy', 'Scikit-learn'],
      projects: [
        'Customer Lifetime Value Prediction',
        'Sales Forecasting Dashboard',
        'Market Basket Analysis',
        'Churn Prediction Model',
        'A/B Testing Framework'
      ],
      benefits: [
        'Monthly stipend of ₹12,000 - ₹22,000',
        'Industry certification',
        'Portfolio development',
        'Job placement assistance',
        'Networking opportunities',
        'Real-world experience'
      ]
    },
    '3': {
      title: 'Full Stack Development Internship',
      subtitle: 'Develop complete web applications using modern frameworks and technologies',
      duration: '1/2/3/6 Months',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      type: 'Paid',
      stipend: '₹10,000 - ₹20,000/month',
      icon: Code,
      color: 'from-orange-500 to-red-500',
      image: 'https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/03f61980c4f9.jpg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.6,
      applicants: 180,
      overview: {
        description: 'Build complete web applications from frontend to backend. Learn modern development practices, work with real clients, and deploy applications to production.',
        highlights: [
          'Full-stack development',
          'Modern frameworks',
          'Database design',
          'API development',
          'DevOps practices',
          'Client projects'
        ],
        outcomes: [
          'Full Stack Developer',
          'Frontend Developer',
          'Backend Developer',
          'Web Developer',
          'Software Engineer',
          'DevOps Engineer'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Frontend Development',
            duration: '2-3 weeks',
            topics: ['React/Angular', 'HTML/CSS', 'JavaScript', 'Responsive Design']
          },
          {
            title: 'Backend Development',
            duration: '2-3 weeks',
            topics: ['Node.js/Python', 'REST APIs', 'Authentication', 'Security']
          },
          {
            title: 'Database Management',
            duration: '1-2 weeks',
            topics: ['SQL/NoSQL', 'Database Design', 'ORM', 'Optimization']
          },
          {
            title: 'DevOps & Deployment',
            duration: '1-2 weeks',
            topics: ['Docker', 'CI/CD', 'Cloud Deployment', 'Monitoring']
          },
          {
            title: 'Client Projects',
            duration: '2-4 weeks',
            topics: ['Requirements Analysis', 'Project Planning', 'Development', 'Testing']
          }
        ]
      },
      requirements: ['HTML/CSS/JavaScript', 'React/Angular', 'Node.js', 'Database Knowledge'],
      tools: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'VS Code'],
      projects: [
        'E-commerce Web Application',
        'Social Media Dashboard',
        'Task Management System',
        'Real-time Chat Application',
        'Content Management System'
      ],
      benefits: [
        'Monthly stipend of ₹10,000 - ₹20,000',
        'Portfolio development',
        'Client interaction experience',
        'Code review sessions',
        'Agile methodology training',
        'Job placement support'
      ]
    },
    '4': {
      title: 'Business Intelligence Internship',
      subtitle: 'Create interactive dashboards and reports using Power BI and Tableau',
      duration: '1/2/3/6 Months',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      type: 'Paid',
      stipend: '₹8,000 - ₹18,000/month',
      icon: BarChart,
      color: 'from-green-500 to-teal-500',
      image: 'https://www.elternativa.com/wp-content/uploads/2024/03/10-Data-Warehousing-y-Business-Intelligence.jpg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.5,
      applicants: 120,
      overview: {
        description: 'Transform raw data into actionable business insights. Create compelling visualizations, build interactive dashboards, and support data-driven decision making.',
        highlights: [
          'Dashboard development',
          'Data visualization',
          'Business analysis',
          'KPI design',
          'Report automation',
          'Client presentations'
        ],
        outcomes: [
          'BI Developer',
          'Data Analyst',
          'Business Analyst',
          'Reporting Specialist',
          'Dashboard Designer',
          'Analytics Consultant'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'BI Fundamentals',
            duration: '1 week',
            topics: ['BI Concepts', 'Data Warehousing', 'ETL Basics', 'Business Requirements']
          },
          {
            title: 'Power BI Development',
            duration: '2-3 weeks',
            topics: ['Data Modeling', 'DAX', 'Visualizations', 'Dashboard Design']
          },
          {
            title: 'Tableau Mastery',
            duration: '2-3 weeks',
            topics: ['Advanced Charts', 'Calculations', 'Parameters', 'Story Telling']
          },
          {
            title: 'SQL & Data Analysis',
            duration: '1-2 weeks',
            topics: ['Complex Queries', 'Data Cleaning', 'Statistical Analysis', 'Performance']
          },
          {
            title: 'Business Projects',
            duration: '2-4 weeks',
            topics: ['Requirements Gathering', 'Dashboard Creation', 'Testing', 'Deployment']
          }
        ]
      },
      requirements: ['SQL', 'Excel', 'Power BI/Tableau', 'Business Acumen'],
      tools: ['Power BI', 'Tableau', 'SQL Server', 'Excel', 'Python', 'QlikView'],
      projects: [
        'Executive Sales Dashboard',
        'Financial Performance Analytics',
        'Customer Analytics Portal',
        'Operational KPI Dashboard',
        'Marketing Campaign Analysis'
      ],
      benefits: [
        'Monthly stipend of ₹8,000 - ₹18,000',
        'BI tool certifications',
        'Business analysis skills',
        'Client interaction',
        'Portfolio building',
        'Industry networking'
      ]
    },
    '5': {
      title: 'Data Analytics Internship',
      subtitle: 'Analyzing data sets, generating reports, and supporting decision-making processes',
      duration: '1/2/3/6 Months',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      type: 'Paid',
      stipend: '₹8,000 - ₹16,000/month',
      icon: BarChart,
      color: 'from-indigo-500 to-purple-500',
      image: 'https://edvancer.in/wp-content/uploads/2022/10/What-is-data-analytics-How-it-can-help-your-career.jpg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      applicants: 90,
      overview: {
        description: 'Focus on data analysis, reporting, and visualization. Learn to extract insights from complex datasets and present findings to stakeholders.',
        highlights: [
          'Data analysis techniques',
          'Statistical reporting',
          'Visualization tools',
          'Business insights',
          'Decision support',
          'Stakeholder communication'
        ],
        outcomes: [
          'Data Analyst',
          'Business Analyst',
          'Reporting Analyst',
          'Market Research Analyst',
          'Operations Analyst',
          'Financial Analyst'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Data Analysis Basics',
            duration: '1 week',
            topics: ['Excel Advanced', 'Statistics', 'Data Types', 'Quality Assessment']
          },
          {
            title: 'SQL & Databases',
            duration: '1-2 weeks',
            topics: ['Query Writing', 'Joins', 'Aggregations', 'Database Design']
          },
          {
            title: 'Visualization Tools',
            duration: '2-3 weeks',
            topics: ['Power BI', 'Tableau', 'Chart Selection', 'Dashboard Design']
          },
          {
            title: 'Statistical Analysis',
            duration: '1-2 weeks',
            topics: ['Descriptive Statistics', 'Hypothesis Testing', 'Correlation', 'Regression']
          },
          {
            title: 'Business Applications',
            duration: '2-4 weeks',
            topics: ['Market Analysis', 'Financial Reporting', 'Operations Analytics', 'Presentations']
          }
        ]
      },
      requirements: ['Basic Programming', 'Power BI', 'Tableau', 'Excel'],
      tools: ['Excel', 'Power BI', 'Tableau', 'SQL', 'Python', 'SPSS'],
      projects: [
        'Sales Performance Analysis',
        'Customer Segmentation Study',
        'Market Trend Analysis',
        'Financial KPI Dashboard',
        'Operational Efficiency Report'
      ],
      benefits: [
        'Monthly stipend of ₹8,000 - ₹16,000',
        'Analytics certification',
        'Business acumen development',
        'Presentation skills',
        'Industry exposure',
        'Career guidance'
      ]
    },
    '6': {
      title: 'Cybersecurity Internship',
      subtitle: 'Learn ethical hacking, security auditing, and implement security measures',
      duration: '1/2/3/6 Months',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      type: 'Paid',
      stipend: '₹12,000 - ₹25,000/month',
      icon: Award,
      color: 'from-red-500 to-pink-500',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.9,
      applicants: 75,
      overview: {
        description: 'Dive into cybersecurity with hands-on experience in ethical hacking, security auditing, and implementing robust security measures for enterprise systems.',
        highlights: [
          'Ethical hacking techniques',
          'Security auditing',
          'Penetration testing',
          'Security frameworks',
          'Incident response',
          'Compliance standards'
        ],
        outcomes: [
          'Cybersecurity Analyst',
          'Ethical Hacker',
          'Security Consultant',
          'Penetration Tester',
          'Security Engineer',
          'Incident Response Specialist'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Security Fundamentals',
            duration: '1 week',
            topics: ['Security Principles', 'Threat Landscape', 'Risk Assessment', 'Compliance']
          },
          {
            title: 'Ethical Hacking',
            duration: '2-3 weeks',
            topics: ['Penetration Testing', 'Vulnerability Assessment', 'Social Engineering', 'Tools']
          },
          {
            title: 'Network Security',
            duration: '2-3 weeks',
            topics: ['Firewalls', 'IDS/IPS', 'VPN', 'Network Monitoring']
          },
          {
            title: 'System Security',
            duration: '1-2 weeks',
            topics: ['OS Hardening', 'Access Control', 'Encryption', 'Backup Security']
          },
          {
            title: 'Security Projects',
            duration: '2-4 weeks',
            topics: ['Security Audit', 'Incident Response', 'Policy Development', 'Training']
          }
        ]
      },
      requirements: ['Networking', 'Linux', 'Security Basics', 'Programming'],
      tools: ['Kali Linux', 'Metasploit', 'Wireshark', 'Nmap', 'Burp Suite', 'OWASP ZAP'],
      projects: [
        'Vulnerability Assessment Report',
        'Penetration Testing Framework',
        'Security Policy Development',
        'Incident Response Plan',
        'Security Awareness Training'
      ],
      benefits: [
        'Monthly stipend of ₹12,000 - ₹25,000',
        'Security certifications',
        'Ethical hacking skills',
        'Industry recognition',
        'High-demand expertise',
        'Career advancement'
      ]
    },
    'all-internships': {
      title: 'All Internship Programs',
      subtitle: 'Comprehensive overview of all available internship opportunities',
      duration: 'Various',
      company: 'J2L Technologies',
      location: 'Bangalore, India',
      type: 'Paid',
      stipend: '₹8,000 - ₹25,000/month',
      icon: Briefcase,
      color: 'from-purple-600 to-blue-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      applicants: 815,
      overview: {
        description: 'Explore all our internship programs across different technology domains. Choose the path that aligns with your career goals and interests.',
        highlights: [
          '6 Different Programs',
          'Flexible Duration Options',
          'Industry-Standard Projects',
          'Expert Mentorship',
          'Certification & Portfolio',
          'Job Placement Assistance'
        ],
        outcomes: [
          'Technology Specialist',
          'Industry Professional',
          'Project Leader',
          'Technical Consultant',
          'Innovation Expert',
          'Career Advancement'
        ]
      },
      curriculum: {
        modules: [
          {
            title: 'Program Selection',
            duration: '1 week',
            topics: ['Career Assessment', 'Program Overview', 'Skill Evaluation', 'Goal Setting']
          },
          {
            title: 'Foundation Training',
            duration: '1-2 weeks',
            topics: ['Industry Basics', 'Tool Introduction', 'Best Practices', 'Project Setup']
          },
          {
            title: 'Specialized Learning',
            duration: '4-20 weeks',
            topics: ['Domain Expertise', 'Advanced Techniques', 'Real Projects', 'Mentorship']
          },
          {
            title: 'Portfolio Development',
            duration: '2-4 weeks',
            topics: ['Project Documentation', 'Presentation Skills', 'Portfolio Building', 'Showcase']
          },
          {
            title: 'Career Transition',
            duration: '2-4 weeks',
            topics: ['Job Preparation', 'Interview Skills', 'Networking', 'Placement Support']
          }
        ]
      },
      requirements: ['Basic Computer Skills', 'Learning Enthusiasm', 'Commitment', 'Communication Skills'],
      tools: ['Various based on program', 'Industry-standard tools', 'Latest technologies', 'Professional software'],
      projects: [
        'AI & Machine Learning Projects',
        'Data Science Applications',
        'Full Stack Web Development',
        'Business Intelligence Dashboards',
        'Data Analytics Solutions',
        'Cybersecurity Implementations'
      ],
      benefits: [
        'Competitive stipends (₹8K - ₹25K/month)',
        'Industry certifications',
        'Professional portfolio',
        'Job placement assistance',
        'Networking opportunities',
        'Career mentorship'
      ]
    }
  };

  const internship = internshipData[internshipId as keyof typeof internshipData];
  if (!internship) return null;

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Program' },
    { id: 'projects', label: 'Projects' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'apply', label: 'Apply Now' }
  ];

  const handleApplyClick = () => {
    window.open('https://cognista-internship.vercel.app/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${internship.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <internship.icon className="h-12 w-12" />
                <div className="bg-white/20 px-4 py-2 rounded-full">
                  <span className="font-semibold">{internship.type}</span>
                </div>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{internship.title}</h1>
              <p className="text-xl mb-6 opacity-90">{internship.subtitle}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span>{internship.company}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">{internship.rating}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleApplyClick}
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Apply Now</span>
                </button>
                <WhatsAppButton 
                  message={`Hi! I'm interested in the ${internship.title} program. Can you provide more details?`}
                  className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
                >
                  <span>Chat on WhatsApp</span>
                </WhatsAppButton>
              </div>
            </div>

            <div className="relative">
              <img
                src={internship.image}
                alt={internship.title}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {internship.overview.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                    <ul className="space-y-3">
                      {internship.overview.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Career Outcomes</h3>
                    <ul className="space-y-3">
                      {internship.overview.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Target className="h-5 w-5 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {internship.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Program Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{internship.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Company:</span>
                    <span className="font-semibold">{internship.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">{internship.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold text-green-600">{internship.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Stipend:</span>
                    <div>
                      <span className="text-lg font-bold text-green-600">{internship.stipend}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button 
                    onClick={handleApplyClick}
                    className={`w-full bg-gradient-to-r ${internship.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Apply Now</span>
                  </button>
                  <button 
                    onClick={() => onOpenPopup('bookCall')}
                    className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Get Guidance</span>
                  </button>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h4 className="font-bold text-green-800 mb-3">Program Benefits</h4>
                <ul className="space-y-2">
                  {internship.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-green-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Program Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internship.curriculum.modules.map((module, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {module.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hands-on Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internship.projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project}</h3>
                  <p className="text-gray-600 text-sm">
                    Real-world project that you'll work on during the internship to build your portfolio.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Prerequisites</h3>
                <ul className="space-y-4">
                  {internship.requirements.map((req, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-8 border">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What We Provide</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Complete training materials</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Industry mentor assignment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Access to premium tools</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Job placement assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'apply' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Apply for This Program</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 border">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-green-600 mb-2">{internship.stipend}</div>
                <div className="text-lg text-gray-600">Monthly Stipend</div>
                <div className="text-sm text-green-600 font-semibold">Paid Internship Program</div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Complete {internship.duration} program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Industry mentorship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Real-world projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Job placement assistance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Portfolio development</span>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handleApplyClick}
                  className={`w-full bg-gradient-to-r ${internship.color} text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2`}
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Apply Now</span>
                </button>
                <WhatsAppButton 
                  message={`Hi! I want to apply for the ${internship.title} program. Can you help me with the application process?`}
                  className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-lg justify-center"
                >
                  <span>Get Application Help</span>
                </WhatsAppButton>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className={`bg-gradient-to-r ${internship.color} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Internship?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of successful interns who kickstarted their careers with {internship.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleApplyClick}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Apply Now</span>
            </button>
            <WhatsAppButton 
              message={`Hi! I want to apply for the ${internship.title} program. Please guide me through the process.`}
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg"
            >
              <span>Get Guidance</span>
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetailPage;