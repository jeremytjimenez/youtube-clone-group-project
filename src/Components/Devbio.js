import React from 'react'
const devs = [
  {
    firstName: "Jeremy",
    lastName: "Jimenez",
    age: 24,
    bio: "In the world of digital battles, Jeremy, the Artistic Tech Savant, emerges as a formidable contender. With a passion for art, music, and technology, he combines his skills as a software engineer with his creative spirit. From a young age, he delved into video games, driven by a curiosity to understand their inner workings. Now, he embarks on a quest to establish a legendary career and portfolio, never forgetting the root of his passion. Armed with coding expertise and a palette of creativity, Jeremy strives to weave a tapestry of innovation and imagination that leaves a lasting impact.",
    gitHub: "https://github.com/jeremytjimenez",
  },
  {
    firstName: "Hillary",
    lastName: "Brito",
    age: 25,
    bio: "Hillary is a dev with ......",
    gitHub: "https://github.com/HillaryB110",
  },
];
const projectDescription = [
    {
        title : "JHILLMedia Youtube Clone Project",
        projectInfo: "A group project to build a youtube clone, utilizing React to create an attractive and functional website. Inspired by the vaporwave aesthetic to create a retro feel."
    }
]
function Devbio() {
  return (
    <div className="card my-4 border-3 border-primary-subtle text-center">
      {devs.map((dev, index) => (
        <div key={index}>
          <h2>
            {dev.firstName} {dev.lastName}
          </h2>
          <p>Age: {dev.age}</p>
          <p>{dev.bio}</p>
          <p>{dev.gitHub}</p>
        </div>
      ))}
      <h3>Project Description:</h3>
      {projectDescription.map((project, index) => (
        <div key= {index}>
          <h4>{project.title}</h4>
          <p>{project.projectInfo}</p>
        </div>
      ))}
    </div>
  );
}



export default Devbio