import React from 'react';
import { BookOpen, Users, Wrench, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Job-Ready Curriculum",
      description: "Learn through real-world case studies and industry-relevant projects that prepare you for actual work scenarios."
    },
    {
      icon: Users,
      title: "1:1 Mentorship",
      description: "Get personalized guidance from industry leaders working at top tech companies like Google, Meta, and Microsoft."
    },
    {
      icon: Wrench,
      title: "Industry Tools",
      description: "Master cutting-edge tools: Python, TensorFlow, Power BI, Tableau, MongoDB, MySQL, Pandas, Docker, and more."
    },
    {
      icon: Award,
      title: "Certifications & Portfolio",
      description: "Build a strong portfolio with live projects and earn industry-recognized certifications to boost your career."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-purple-600">TechAcademy</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just teach theory - we prepare you for real-world success with practical skills and industry connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Master Industry-Standard Tools</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-gray-700 text-sm">Python</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                  alt="TensorFlow"
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-gray-700 text-sm">TensorFlow</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                  alt="Power BI"
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-gray-700 text-sm">Power BI</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
              <div className="flex flex-col items-center">
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Symbol.png"
                  alt="Tableau"
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-gray-700 text-sm">Tableau</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-gray-700 text-sm">Docker</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 group">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold text-gray-700 text-sm">MongoDB</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-600 mb-4">And many more industry-standard technologies...</p>
            <div className="flex justify-center">
              <a 
                href="#tools" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
              >
                View All Technologies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;