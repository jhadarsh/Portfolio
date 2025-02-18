import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./Skills.css";
const cards = [
  {
    id: 1,
    title: "MERN Stack Web Development",
    description:
      "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "Crafting dynamic and interactive web experiences with modern JavaScript techniques.",
  },
  {
    id: 3,
    title: "Bootstrap",
    description:
      "Designing responsive and mobile-first websites with pre-built components.",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    description:
      "Creating sleek, utility-first designs with Tailwind's modern CSS framework.",
  },
  {
    id: 5,
    title: "C++",
    description:
      "Writing efficient and robust programs for problem-solving and system-level applications.",
  },
  {
    id: 6,
    title: "Java",
    description:
      "Developing scalable and secure applications with object-oriented principles.",
  },
  {
    id: 7,
    title: "DSA (Data Structures and Algorithms)",
    description:
      "Solving complex computational problems with optimized algorithms and data structures.",
  },
  {
    id: 8,
    title: "Deep Learning",
    description:
      "Building intelligent models for AI applications using neural networks and frameworks.",
  },
  {
    id: 9,
    title: "Python",
    description:
      "Writing versatile and scalable code for web development, machine learning, and automation.",
  },
  {
    id: 10,
    title: "Material UI",
    description:
      "Creating modern, aesthetic React components with Material Design principles.",
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <div className="container">
      <div className="upperbox">
        <h3 className="Title">Skills</h3>
      </div>
      <div className="alllogobox"> 
        <div className="logo3 logobox3">
          <div className="js logo">
            <img src="/public/JavaScript-logo.png" alt="Your Name" className="photologo" />
          </div>
          <div className="tail logo">
            <img src="/public/vite.svg" alt="Your Name" className="photologo" />
          </div>
        </div>

        <div className="logobox1">
          <div className="logo1">
            <div className="py logo">
              <img src="/public/python.png" alt="Your Name" className="photologo" />
            </div>
            <div className="re logo">
              <img src="/public/React-icon.svg.png" alt="Your Name" className="photologo" />
            </div>
          </div>

          <div className="skillsmain">
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
                gap: 2,
              }}
            >
              {cards.map((card, index) => (
                <Card>
                  <CardActionArea
                    onClick={() => setSelectedCard(index)}
                    data-active={selectedCard === index ? "" : undefined}
                    sx={{
                      height: "100%",
                      "&[data-active]": {
                        backgroundColor: "action.selected",
                        "&:hover": {
                          backgroundColor: "action.selectedHover",
                        },
                      },
                    }}
                  >
                    <CardContent className="card-small" sx={{ height: "100%" }}>
                      <Typography variant="h5" component="div">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent> 
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </div>
          <div className="logo2">
            <div className="cp logo">
              <img src="../cpp.png" alt="Your Name" className="photologo" />
            </div>
            <div className="ht logo">
              <img src="../HTML.png" alt="Your Name" className="photologo" />
            </div>
          </div>
        </div>
        <div className="logo4 logobox2">
          <div className="mong logo">
            <img src="../mongo.png" alt="Your Name" className="photologo" />
          </div>
          <div className="sq logo">
            <img src="../SQL.png" alt="Your Name" className="photologo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectActionCard;
