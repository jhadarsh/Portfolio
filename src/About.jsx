import Profile from "./Profile";
import Education from "./Education";
import "./About.css";
export default function About() {
  return (
    <div className="Aboutme">
      <div>
        <Profile />
      </div>
      <div>
        <Education />
      </div>
    </div>
  );
}
