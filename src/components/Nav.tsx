import { MdNightsStay, MdSunny } from "react-icons/md";

export default function Nav() {
  const box = () => {
    return (
      <div>
        <div>Home</div>
        <div>Project</div>
        <div>Contact</div>
      </div>
    );
  };

  const bottom = window.innerHeight;
  return (
    <div className="">
      <div className="flex justify-between mt-10">
        <button
          className="nav-btn"
          onClick={() =>
            window.scroll({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Home
        </button>
        <a href="#project">
          <button className="nav-btn">Projects</button>
        </a>
        <a href="#skills">
          <button className="nav-btn">skills</button>
        </a>
        <button
          className="nav-btn"
          onClick={() => {
            window.scroll({
              top: bottom,
              behavior: "smooth",
            });
          }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}
