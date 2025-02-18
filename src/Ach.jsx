import Cartoon from "./Cartoon";
import StatsCard from "./Countupstar";
import "./Ach.css";
export default function Ach() {
  return (
    <div className="ach-main">
      <div className="ach-one">
        <StatsCard
          number={10}
          label="Projects"
          subLabel="of Web Devlopment and Deep Learning  "
        />
        <StatsCard number={5} label="Hackathons" subLabel="Secured top 10 rank in 5 hackathons" />
        <StatsCard number={2} label="Internships" subLabel="at DRDO and CrackCode " />
        <StatsCard number={50} label=" Question of DSA " subLabel="on Leetcode" />
      </div>
      <div className="ach-two">
        <Cartoon />
      </div>
    </div>
  );
}
