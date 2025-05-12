import React from 'react';
import { Code, Palette, GitBranch } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { translations } = useLanguage();
  
  const skillCategories = [
    {
      id: 'frontend',
      icon: <Code size={24} />,
      title: translations.skills.frontend,
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Next.js', level: 70 },
      ]
    },
    {
      id: 'design',
      icon: <Palette size={24} />,
      title: translations.skills.design,
      skills: [
        { name: 'Responsive Design', level: 85 },
        { name: 'UI/UX Basics', level: 70 },
        { name: 'CSS Animations', level: 75 },
      ]
    },
    {
      id: 'tools',
      icon: <GitBranch size={24} />,
      title: translations.skills.tools,
      skills: [
        { name: 'Git/GitHub', level: 80 },
        { name: 'Postman', level: 75 },
        { name: 'VS Code', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {translations.skills.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-teal-600 dark:bg-teal-400 h-2 rounded-full transition-all duration-1000 ease-in-out" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            {translations.skills.keySkills}
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              'HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js', 
              'Responsive Design', 'Git', 'GitHub', 'Postman', 
              'ES6+', 'Component Design', 'Vercel Deployment'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-teal-50 hover:text-teal-600 dark:hover:bg-teal-900/20 dark:hover:text-teal-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;