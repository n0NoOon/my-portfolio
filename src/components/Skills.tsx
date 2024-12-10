import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiVite,
  SiGit,
} from "react-icons/si";

export default function Skills() {
  return (
    <div>
      <div className="flex justify-center my-5 font-bold">
        <h1>Skills / Technologies</h1>
      </div>
      <div className="flex flex-rows gap-5 justify-center">
        <div className="p-4 rounded hover:bg-slate-500 hover:text-red-500">
          <SiHtml5 size={40} />
        </div>
        <div className="p-4 rounded hover:bg-slate-500 hover:text-blue-500">
          <SiCss3 size={40} />
        </div>
        <div className="p-4 rounded hover:bg-gray-500 hover:text-yellow-300">
          <SiJavascript size={40} />
        </div>
        <div className="p-4 rounded hover:bg-gray-500 hover:text-blue-500">
          <SiTypescript size={40} />
        </div>
        <div className="p-4 rounded hover:bg-gray-500 hover:text-orange-600">
          <SiGit size={40} color="" />
        </div>
        <div className="p-4 rounded hover:bg-gray-500 hover:text-blue-500">
          <SiReact size={40} color="" />
        </div>
        <div className="p-4 rounded hover:bg-gray-500 hover:text-blue-500">
          <SiTailwindcss size={40} color="" />
        </div>
        <div className="p-4 rounded hover:bg-gray-500 hover:text-yellow-500">
          <SiVite size={40} color="" />
        </div>
      </div>
    </div>
  );
}
