import React from 'react'
const devs= [
    {
        firstName: "Jeremy",
        lastName: "Jimenez",
        age: 24, 
        bio: `Jeremy is a budding young software engineer with a strong interest in art, music and other creative mediums. 
        His interest in technology spans back to playing video games on the computer as a young child with a drive to understand the inner workings of
        the `,
        gitHub: "https://github.com/jeremytjimenez"
    },
    {
        firstName: "Hillary",
        lastName: "Brito",
        age: 25, 
        bio: "Hillary is a dev with ......",
        gitHub: "https://github.com/HillaryB110"
    },
    
]
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