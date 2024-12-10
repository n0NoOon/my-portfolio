export default function AboutMe() {
  return (
    <div className="flex items-center">
      <div className="flex gap-3 px-10 ">
        <div>
          <img
            src="/images/face.jpg"
            alt="FACE"
            width="50px"
            className="rounded-full"
          />
        </div>
        <div className="content-center">
          <p className="text-center">Sitthipat Wisesrawd ( Non )</p>
        </div>
      </div>
      <div className="flex mt-3 pt-10 ml-10">
        <p className="container text-center w-[500px]">
          {/* I'm a former cook, who decide to change his carreer from Food industry
          to tech. I'm looking forward to become full-stack developer which led
          me to seeking more oppotunities to improve myself as well as my skills
          to achive my goals. */}
          NON
        </p>
      </div>
    </div>
  );
}
