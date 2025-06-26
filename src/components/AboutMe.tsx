export default function AboutMe() {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex gap-3">
        <div>
          <img
            src="/images/face.jpg"
            alt="FACE"
            width="50px"
            className="rounded-full"
          />
        </div>
        <div className="content-center">
          <p className="text-center">Sitthipat Wisesrawd</p>
          <p className="text-center">Nont</p>
        </div>
      </div>
      <div className="flex flex-wrap mt-3 pt-10">
        <p className="container text-center w-auto">
          I'm a former cook, who decide to change his carreer from Food industry
          to Tech industry. I'm looking forward to become full-stack developer
          which led me to seeking more oppotunities to improve myself as well as
          my skills to achive my goals.
        </p>
      </div>
    </div>
  );
}
