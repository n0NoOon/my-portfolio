import { IoMenu } from "react-icons/io5";

export default function Nav() {
  const menu = () => {
    return (
      <div>
        <IoMenu />

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
          About Me
        </button>
        <a href="#project">
          <button className="nav-btn">Projects</button>
        </a>
        <a href="#skills">
          <button className="nav-btn">Skills</button>
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
