import { useRef } from "react";

export default function Project() {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView();
  };

  return (
    <div ref={projectRef} id="project" className="flex flex-col content-center">
      <div className="flex justify-center">
        <h1 className="font-bold">Projects</h1>
      </div>
      <div className="flex gap-10">
        <div className="mt-10">
          <a href="https://n0nooon.github.io/AirQuality/" target="_blank">
            <img
              src="images/AirQuality.png"
              alt=""
              className="w-[500px] hover:scale-110 rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
