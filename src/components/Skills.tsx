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
    <div className="flex flex-rows gap-5 justify-center">
      <SiHtml5 />
      <SiCss3 />
      <SiJavascript />
      <SiTypescript />
      <SiGit />
      <SiReact />
      <SiTailwindcss />
      <SiVite />
    </div>
  );
}
