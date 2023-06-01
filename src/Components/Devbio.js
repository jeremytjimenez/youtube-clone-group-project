import React from "react";
import "./Devbio.css";
const devs = [
  {
    profileImage: "../AssetsImgs/jeremy_jimnez_720.jpg",
    firstName: "Jeremy",
    lastName: "Jimenez",
    age: 24,
    bio: "In the world of digital battles, Jeremy, the Artistic Tech Savant, emerges as a formidable contender. With a passion for art, music, and technology, he combines his skills as a software engineer with his creative spirit. From a young age, he delved into video games, driven by a curiosity to understand their inner workings. Now, he embarks on a quest to establish a legendary career and portfolio, never forgetting the root of his passion. Armed with coding expertise and a palette of creativity, Jeremy strives to weave a tapestry of innovation and imagination that leaves a lasting impact.",
    gitHub: "https://github.com/jeremytjimenez",
  },
  {
    profileImage: "../AssetsImgs/hillary_brito.png",
    firstName: "Hillary",
    lastName: "Brito",
    age: 25,
    bio: "In the realm of digital battles, behold Hillary, a rising star in the world of software development. With a profound background in History and Education, she commands her code with the wisdom of ages. Her journey into technology began as a wide-eyed child, captivated by her older brother's mastery of classic Nintendo games like Mario and Kirby. Immersed in the realms of Sci-Fi and fantasy, she embarked on cosmic adventures alongside her beloved grandfather, delving into the wonders of Doctor Who and the epic saga of Lord of the Rings. It was through her first telescope, a cherished gift from her grandfather, that she discovered the boundless allure of the stars, igniting her passion for astronomy. Now, armed with her unique vision and unyielding determination, Hillary aspires to craft code that transcends mere functionality, infusing it with the radiant essence of her diverse inspirations. Prepare to witness the unfolding of her extraordinary talents, for her code is a dazzling testament to her indomitable spirit in this digital realm of warriors.",
    gitHub: "https://github.com/HillaryB110",
  },
];

const projectDescription = [
  {
    title: "JHILLMedia Youtube Clone Project",
    projectInfo:
      "A group project to build a youtube clone, utilizing React to create an attractive and functional website. Inspired by the vaporwave aesthetic to create a retro feel.",
  },
];

function Devbio() {
  return (
    <div>
      <div
        className="dev-card"
        style={{ backgroundColor: "#113e6e" }}
      >
        <h3>Project Description:</h3>
        {projectDescription.map((project, index) => (
          <div key={index}>
            <h4>{project.title}</h4>
            <p>{project.projectInfo}</p>
          </div>
        ))}
      </div>
      {devs.map((dev, index) => (
        <div key={index} className="dev-card">
          <img
            src={dev.profileImage}
            alt="Profile"
            className="img-fluid rounded-circle mx-auto my-2 "
            style={{ width: "10rem" }}
          />
          <h2>
            {dev.firstName} {dev.lastName}
          </h2>
          <p>Age: {dev.age}</p>
          <p>{dev.bio}</p>
          <a href={dev.gitHub}>{dev.firstName}'s GitHub</a>
        </div>
      ))}
    </div>
  );
}

export default Devbio;
