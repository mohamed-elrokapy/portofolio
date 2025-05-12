import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Code, Award, FolderGit2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard for e-commerce platforms with analytics and order management features.",
    image: "/Screenshot (182).png",
    technologies: ["React", "Tailwind CSS", "REST API"],
    github: "https://github.com/mohamed-elrokapy/e-commerceWithDashboard",
    live: "https://e-commerce-with-dashboard.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Personal Blog Platform",
    description:
      "A blogging platform that allows users to create, edit and publish articles with a markdown editor.",
    image:
      "https://images.pexels.com/photos/7956230/pexels-photo-7956230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    github: "https://github.com/mohamed-elrokapy/",
    live: "https://project2-demo.vercel.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Weather Application",
    description:
      "Weather forecast application that provides real-time weather data for any location worldwide.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Weather API"],
    github: "https://github.com/mohamed-elrokapy/",
    live: "https://project3-demo.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website template for developers to showcase their work and skills.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/mohamed-elrokapy/",
    live: "https://project4-demo.vercel.app/",
    featured: true,
  },
];

const Projects: React.FC = () => {
  const { translations, language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.featured);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          {translations.projects.title}
        </h2>

        <div className="max-w-xl mx-auto text-center mb-12">
          <div className="inline-flex bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              }`}>
              {translations.projects.viewAll}
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "featured"
                  ? "bg-white dark:bg-gray-700 text-teal-600 dark:text-teal-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
              }`}>
              {translations.projects.featured}
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 dark:border-teal-400"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <FolderGit2 size={48} className="mx-auto mb-4 opacity-50" />
            <p>{translations.projects.noProjects}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] ${
                  language === "ar" ? "rtl" : "ltr"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-0 right-0 bg-teal-600 text-white py-1 px-3 flex items-center gap-1 rounded-bl-lg">
                      <Award size={14} />
                      <span className="text-xs font-medium">
                        {translations.projects.featured}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {translations.projects.technologies}:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs font-medium text-gray-800 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-md transition-colors">
                      <ExternalLink size={16} />
                      {translations.projects.viewProject}
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium rounded-md transition-colors">
                      <Github size={16} />
                      <Code size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://github.com/mohamed-elrokapy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors">
            <Github size={18} />
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
