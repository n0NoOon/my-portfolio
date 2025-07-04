import { useState, useRef, useEffect } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostgresql,
  SiPython,
} from "react-icons/si";

const skills = [
  {
    key: "html",
    label: "HTML",
    icon: <SiHtml5 size={40} />,
    info: "HTML is the standard markup language for creating web pages.",
    className: "hover:text-orange-500 focus:text-orange-500",
  },
  {
    key: "css",
    label: "CSS",
    icon: <SiCss3 size={40} />,
    info: "CSS is used to style and layout web pages.",
    className: "hover:text-blue-500 focus:text-blue-500",
  },
  {
    key: "js",
    label: "Javascript",
    icon: <SiJavascript size={40} />,
    info: "JavaScript is a programming language for the web.",
    className: "hover:text-yellow-500 focus:text-yellow-500",
  },
  {
    key: "ts",
    label: "Typescript",
    icon: <SiTypescript size={40} />,
    info: "TypeScript is a typed superset of JavaScript.",
    className: "hover:text-blue-500 focus:text-blue-500",
  },
  {
    key: "git",
    label: "Git",
    icon: <SiGit size={40} />,
    info: "Git is a version control system.",
    className: "hover:text-orange-500 focus:text-orange-500",
  },
  {
    key: "react",
    label: "React",
    icon: <SiReact size={40} />,
    info: "React is a JavaScript library for building UIs.",
    className: "hover:text-blue-500 focus:text-blue-500",
  },
  {
    key: "tailwind",
    label: "Tailwind",
    icon: <SiTailwindcss size={40} />,
    info: "Tailwind CSS is a utility-first CSS framework.",
    className: "hover:text-blue-500 focus:text-blue-500",
  },
  {
    key: "postgresql",
    label: "Prosgresql",
    icon: <SiPostgresql size={40} />,
    info: "PostgreSQL is a powerful open source database.",
    className: "hover:text-blue-500 focus:text-blue-500",
  },
  {
    key: "python",
    label: "Python",
    icon: <SiPython size={40} />,
    info: "Python is a versatile programming language.",
    className: "hover:text-yellow-500 focus:text-yellow-500",
  },
];

export default function Skills() {
  const [selected, setSelected] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelected(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col" id="skills" ref={containerRef}>
      <div className="flex justify-center my-10 font-bold">
        <h1 className="border-b-2">Skills / Technologies</h1>
      </div>
      <div className="flex flex-row gap-5 justify-center flex-wrap">
        {skills.map((skill) => (
          <div key={skill.key} className="flex flex-col items-center relative">
            <button
              className={`p-4 rounded hover:bg-slate-500 ${skill.className} ${
                selected === skill.key
                  ? "ring-4 ring-blue-400 bg-slate-700"
                  : ""
              }`}
              onClick={() =>
                setSelected(selected === skill.key ? null : skill.key)
              }
            >
              {skill.icon}
            </button>
            <div className="flex justify-center">{skill.label}</div>
            {selected === skill.key && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 w-48 bg-gray-800 p-3 rounded shadow-lg transition-all duration-200">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-800"></div>
                <div className="text-sm text-center">{skill.info}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
