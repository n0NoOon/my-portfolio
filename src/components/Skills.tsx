import { useState } from "react";
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

export default function Skills() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center my-10 font-bold">
        <h1>Skills / Technologies</h1>
      </div>
      <div className="flex flex-rows gap-5 justify-center flex-wrap">
        <div className="flex flex-col">
          <div className="flex justify-center p-4 rounded hover:bg-slate-500 hover:text-red-500">
            <SiHtml5 size={40} />
          </div>
          <div className="flex justify-center">HTML</div>
          <div>
            <div>This will appear when each skill being click</div>
            <div>And will display the brief info for that skill</div>
          </div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-slate-500 hover:text-blue-500">
            <SiCss3 size={40} />
          </div>
          <div className="flex justify-center">CSS</div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-gray-500 hover:text-yellow-300">
            <SiJavascript size={40} />
          </div>
          <div className="flex justify-center">Javascript</div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-gray-500 hover:text-blue-500">
            <SiTypescript size={40} />
          </div>
          <div className="flex justify-center">Typescript</div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-gray-500 hover:text-orange-600">
            <SiGit size={40} color="" />
          </div>
          <div className="flex justify-center">Git</div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-gray-500 hover:text-blue-500">
            <SiReact size={40} color="" />
          </div>
          <div className="flex justify-center">React</div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-gray-500 hover:text-blue-500">
            <SiTailwindcss size={40} color="" />
          </div>
          <div className="flex justify-center">Tailwind</div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-gray-500 hover:text-blue-500">
            <SiPostgresql size={40} color="" />
          </div>
          <div className="flex justify-center">Prosgresql</div>
        </div>
        <div>
          <div className="p-4 rounded hover:bg-gray-500 hover:text-yellow-500">
            <SiPython size={40} color="" />
          </div>
          <div className="flex justify-center">Python</div>
        </div>
      </div>
    </div>
  );
}
