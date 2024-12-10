import { MdNightsStay, MdSunny } from "react-icons/md";

export default function Nav() {
  return (
    <div className="flex justify-center mt-10 gap-10">
      <button className="nav-btn">Home</button>
      <button className="nav-btn">Projects</button>
      <button className="nav-btn">Contact</button>
    </div>
  );
}
