export default function Project() {
  return (
    <div id="projects" className="flex flex-col content-center mt-[5rem]">
      <div className="flex justify-center">
        <h1 className="font-bold">Projects</h1>
      </div>
      <div className="flex gap-10 lg:justify-center">
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <a href="https://n0nooon.github.io/AirQuality/" target="_blank">
            <img
              src="images/AirQuality.png"
              alt=""
              className="w-[500px] hover:scale-110 rounded-md"
            />
          </a>
          <div className="flex">
            <p className="lg:w-[500px]">
              A Real-Time AirQuality checker with React and Typescript styling
              by tailwindcss making it responsive using third-party API for the
              real-time information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
