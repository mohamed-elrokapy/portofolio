import React, { useState, useEffect } from "react";
import { ExternalLink, Code, Award, FolderGit2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
const projectsData = [
{
    id: 0,
    title: "green land event",
    description:
      " A landing page to attend events associated with nature, featuring eco-friendly design, responsive layout, event details, registration form, and interactive location maps.",
    image:
      "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/488083317_617510071289497_876409715032607231_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=EZBXPnDMXvsQ7kNvwFlvT0N&_nc_oc=AdnrlOetcvGQFQJRv0JRjmyrT7mNdqjgm0rkI4UCy452kSpHVfHvs-yu-eQyReL-uUE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=MSMbrXn1PpeLaENFqqyl3Q&oh=00_AfROg0HHG4fwaZqv_whLI2JCUhARODYw1nE5UesjUgQxgw&oe=6893F43F", 
    technologies: [ "html","js","brevo", "Tailwind CSS"],
    github: "https://github.com/mohamed-elrokapy/work101",
    live: "https://work101.vercel.app/",
    featured: true,
  },  
{
    id: 1,
    title: "movie-series app",
    description:
      "A dynamic movie-series browsing application that allows users to explore trending films-series, view detailed information, and search using TheMovieDB API.",
    image:
      "https://images.pexels.com/photos/13710686/pexels-photo-13710686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // سينما
    technologies: ["React js", "redux", "Tailwind CSS"],
    github: "https://github.com/mohamed-elrokapy/movieApp",
    live: "https://movie-app-one-wine-86.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Portofolio",
    description:
      "A personal portfolio website that showcases my projects and technical skills as a front-end developer, demonstrating my expertise in building modern web applications.",
    image:
      "https://images.pexels.com/photos/5669630/pexels-photo-5669630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mohamed-elrokapy/portofolio",
    live: "https://portofolio-xi-wine.vercel.app/",
    featured: true,
  },

  {
    id: 3,
    title: "E Commerce with dashboard",
    description:
      "A responsive e-commerce platform with a functional admin dashboard to manage products, featuring modern UI components and smooth user experience.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    technologies: ["react js", "tailwind css", "context api"],
    github: "https://github.com/mohamed-elrokapy/e-commerce-with-dashboard",
    live: "https://e-commerce-with-dashboard-neon.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather forecast web application that fetches and displays real-time weather data for any global location using an external weather API with a clean responsive user interface",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/weather-app",
    live: "https://github.com/mohamed-elrokapy/weather-app",
    featured: false,
  },
  {
    id: 6,
    title: "simple timer",
    description:
      " A basic countdown timer built using vanilla JavaScript, featuring start, pause, and reset functionalities, with a clean interface to help users manage time effectively and stay focused.",

    image:
      "https://www.udacity.com/blog/wp-content/uploads/2021/09/Timer_Blog-scaled.jpeg",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/timer",
    live: "https://timer-orcin-two.vercel.app/",
    featured: false,
  },

  {
    id: 7,
    title: "simpleSignin_RegisterPages",
    description:
      "A simple authentication interface with Sign In and Register pages, focusing on clean form validation and UI.",
    image:
      "https://raw.githubusercontent.com/phithounsavanh/Tailwind-Simple-Signup-Page/master/Readme/tailwind%20register.png",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/simpleSignin_RegisterPages",
    live: "https://simple-countries-flages-k12l.vercel.app/",
    featured: false,
  },

  {
    id: 8,
    title: "simpleCountriesFlages",
    description:
      "A minimalistic app that displays a list of countries along with their flags, offering users a clean and simple interface to explore .",
    image:
      "https://media.istockphoto.com/id/147996027/photo/egyptian-flag.jpg?s=612x612&w=0&k=20&c=2ehSeASNsEChfe0f0AfWrxz5Z_FuKMbaBysuGUUb_lY=",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/simpleCountriesFlages",
    live: "https://simple-countries-flages.vercel.app/",
    featured: false,
  },

  {
    id: 9,
    title: "simple counter",
    description:
      "A basic counter app with increment and decrement buttons, built for learning state management logic.",
    image:
      "https://play-lh.googleusercontent.com/J4LOV4xhznSxJ1VTY6BcUdbOxq39czPfZB14DaGEtwdl_2cWxxAurWtr2yeaXlvi8WU",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/simpleCounter",
    live: "https://simple-counter-delta-three.vercel.app/",
    featured: false,
  },

  {
    id: 10,
    title: "simple clock",
    description:
      "A real-time analog/digital clock displaying the current time using vanilla JavaScript and DOM manipulation.",
    image:
      "https://www.seikoclocks.in/cdn/shop/files/Seiko-clocks-homepage_Mobile_New_1_x800.jpg?v=1692595903",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/simpleClock",
    live: "https://simple-clock-phi.vercel.app/",
    featured: false,
  },

  {
    id: 11,
    title: "currency-converter",
    description:
      "A real-time currency converter tool using exchange rates API to convert values between major currencies.",
    image:
      "https://cdn.britannica.com/87/191987-131-6D09155D/currency-exchange-rate-background-LED-display-board.jpg",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/currency-converter",
    live: "https://calculator-gie2.vercel.app/",
    featured: false,
  },

  {
    id: 12,
    title: "modern calculator",
    description:
      "A stylish calculator web app supporting basic arithmetic operations with a clean, responsive layout.",
    image:
      "https://img.designideas.pics/wp-content/uploads/formidable/13/12-15.jpg?strip=all&lossy=1&webp=82&avif=82&ssl=1&fit=1082,1050",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/calculator",
    live: "https://calculator-eait.vercel.app/",
    featured: false,
  },

  {
    id: 13,
    title: "simple bg-color",
    description:
      "A fun tool that allows users to switch or randomize the background color of the page with each click.",
    image: "https://images.pexels.com/photos/698513/pexels-photo-698513.jpeg",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/bgColor",
    live: "https://bg-color-1l17.vercel.app/",
    featured: false,
  },

  {
    id: 14,
    title: "100 memes",
    description:
      "A simple meme viewer that displays a collection of 100 random memes fetched from an API or dataset.",
    image:
      "https://play-lh.googleusercontent.com/jcbkTJ1CAmJ3eydoz0Fe3o9CKI3UmwxrkDRUKsCY-hiSkBPnUFNrhLRS3usYfuH-BPs=w240-h480-rw",
    technologies: ["html", "CSS", "JavaScript"],
    github: "https://github.com/mohamed-elrokapy/100memes",
    live: "https://100memes-elyp.vercel.app/",
    featured: false,
  },
];

const Projects: React.FC = () => {
  const { translations, language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    setFilteredProjects(
      filter === "all"
        ? projectsData
        : projectsData.filter((project) => project.featured)
    );
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

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <FolderGit2 size={48} className="mx-auto mb-4 opacity-50" />
            <p>{translations.projects.noProjects}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  language === "ar" ? "rtl" : "ltr"
                }`}>
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
                      {project.technologies.map((tech: string, i: number) => (
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
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
