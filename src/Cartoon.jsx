import "./Cartoon.css";
export default function Cartoon() {
  const gradientStyle = {
    color: "transparent",
    backgroundClip: "text",
    WebkitBackgroundClip: "text", // For WebKit-based browsers
    backgroundSize: "100% 200%",
    backgroundImage:
      "linear-gradient(145deg, rgb(255, 39, 100), rgb(0, 208, 255))",
    opacity: 1,
  };
  return (
    <div className="cartoonbox">
      <div className="cartoonimg">
        <img src="/public/Cartoon.png" alt="Your Name" className="cartoon" />
      </div>
      <div className="cartoontitle">
        <h3 className="uperones">Building</h3>
        <h1 className="midlleones">seamless</h1>
        <p>full-stack applications that Impacts Societies.</p>
        <h1 className="text-5xl text-center">
          <span style={gradientStyle}>Turning&nbsp;</span>
          <span className="text-7xl" style={gradientStyle}>
            ideas&nbsp;
          </span>
          <span style={gradientStyle}>into </span>
          <span style={gradientStyle}>Applications</span>
        </h1>
      </div>
    </div>
  );
}
