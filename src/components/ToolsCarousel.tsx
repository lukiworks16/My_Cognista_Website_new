import React, { useEffect, useState } from 'react';

const ToolsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tools = [
    { 
      name: 'Python', 
      category: 'Programming', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Versatile programming language for AI, data science, and web development'
    },
    { 
      name: 'TensorFlow', 
      category: 'AI/ML Framework', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      description: 'Google\'s open-source machine learning framework'
    },
    { 
      name: 'PyTorch', 
      category: 'AI/ML Framework', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      description: 'Facebook\'s deep learning framework for research and production'
    },
    { 
      name: 'Pandas', 
      category: 'Data Analysis', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      description: 'Powerful data manipulation and analysis library for Python'
    },
    { 
      name: 'NumPy', 
      category: 'Scientific Computing', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      description: 'Fundamental package for scientific computing with Python'
    },
    { 
      name: 'Tableau', 
      category: 'Data Visualization', 
      logo: 'https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png',
      description: 'Leading data visualization and business intelligence platform'
    },
    { 
      name: 'Power BI', 
      category: 'Business Intelligence', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
      description: 'Microsoft\'s business analytics solution'
    },
    { 
      name: 'MySQL', 
      category: 'Database', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      description: 'World\'s most popular open-source relational database'
    },
    { 
      name: 'MongoDB', 
      category: 'NoSQL Database', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      description: 'Leading NoSQL document database for modern applications'
    },
    { 
      name: 'Docker', 
      category: 'Containerization', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: 'Platform for developing, shipping, and running applications'
    },
    { 
      name: 'Git', 
      category: 'Version Control', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: 'Distributed version control system for tracking changes'
    },
    { 
      name: 'Jupyter', 
      category: 'Development Environment', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
      description: 'Interactive computing environment for data science'
    },
    { 
      name: 'React', 
      category: 'Frontend Framework', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'JavaScript library for building user interfaces'
    },
    { 
      name: 'Django', 
      category: 'Web Framework', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      description: 'High-level Python web framework for rapid development'
    },
    { 
      name: 'AWS', 
      category: 'Cloud Platform', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
      description: 'Amazon\'s comprehensive cloud computing platform'
    },
    { 
      name: 'Scikit-learn', 
      category: 'Machine Learning', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
      description: 'Simple and efficient machine learning library for Python'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(tools.length / 4));
    }, 4000);

    return () => clearInterval(interval);
  }, [tools.length]);

  const getVisibleTools = () => {
    const startIndex = currentIndex * 4;
    return tools.slice(startIndex, startIndex + 4);
  };

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Master <span className="text-orange-400">Industry-Standard</span> Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn the most in-demand tools and technologies used by top companies worldwide
          </p>
        </div>

        {/* Featured Tools Carousel - Desktop */}
        <div className="hidden lg:block mb-16">
          <div className="grid grid-cols-4 gap-6 transition-all duration-500">
            {getVisibleTools().map((tool, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2 group"
              >
                <div className="bg-white rounded-xl p-4 mb-6 mx-auto w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.textContent = tool.name.charAt(0);
                    }}
                  />
                  <div className="hidden w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-sm text-orange-400 mb-3 font-medium">{tool.category}</p>
                <p className="text-xs text-gray-300 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(tools.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-orange-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="block lg:hidden mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.slice(0, 12).map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="bg-white rounded-lg p-3 mb-3 mx-auto w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.textContent = tool.name.charAt(0);
                    }}
                  />
                  <div className="hidden w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold"></div>
                </div>
                <h3 className="font-bold text-white text-sm">{tool.name}</h3>
                <p className="text-xs text-orange-400">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Technology Stack */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8 text-orange-400">Complete Technology Stack</h3>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center border border-white/10 hover:bg-white/20 transition-all group cursor-pointer"
                title={tool.description}
              >
                <div className="bg-white rounded-md p-2 mb-2 mx-auto w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.textContent = tool.name.charAt(0);
                    }}
                  />
                  <div className="hidden w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-sm"></div>
                </div>
                <div className="text-xs font-medium text-white group-hover:text-orange-400 transition-colors">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">16+</div>
            <div className="text-gray-300 font-medium">Technologies</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-gray-300 font-medium">Hands-on Learning</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">Live</div>
            <div className="text-gray-300 font-medium">Industry Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">Job</div>
            <div className="text-gray-300 font-medium">Ready Skills</div>
          </div>
        </div>

        {/* Technology Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Technology Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: 'Programming & Development', tools: ['Python', 'React', 'Django'], color: 'from-blue-500 to-cyan-500' },
              { category: 'AI & Machine Learning', tools: ['TensorFlow', 'PyTorch', 'Scikit-learn'], color: 'from-purple-500 to-pink-500' },
              { category: 'Data & Analytics', tools: ['Pandas', 'NumPy', 'Tableau'], color: 'from-green-500 to-teal-500' },
              { category: 'Infrastructure & Tools', tools: ['Docker', 'AWS', 'Git'], color: 'from-orange-500 to-red-500' }
            ].map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <h4 className="font-bold text-white mb-3">{category.category}</h4>
                <div className="space-y-1">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="text-sm text-gray-300">• {tool}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;