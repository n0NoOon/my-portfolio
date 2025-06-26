export default function AboutMe() {
  return (
    <div id="about-me" className="flex flex-col items-center mt-20">
      <div className="flex gap-8">
        <div>
          <img
            src={import.meta.env.BASE_URL + "images/profile.jpeg"}
            alt="FACE"
            width="60px"
            className="rounded-full"
          />
        </div>
        <div className="content-center font-semibold">
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
