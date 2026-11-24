



function ProductCard ({project}) {
    return (
        <div className="pCard">

          <div className="imgWrapper">
            <img src={project.image} alt={project.name}/>
          </div>
          <div className="projectData">
            <div className="projectMinor">
              <span>{project.id} </span>
              <span>{project.date} </span>
            </div>
        <div className="projectMain">
            <h3> {project.name} </h3>
          <p> {project.shortDescription} </p>
          {project.languages.map((language) =>(
              <span key={language}>{language}</span>))}
        </div>
        <div className="projectDetails">
          <a href={project.link} target="_blank" rel="noopener noreferer">Go to Website</a>

        <a href={project.readme} target="_blank" rel="noopener noreferer"> Project Documentation </a>
          <a href={project.github} target="_blank" rel="noopener noreferer"> View Source Code </a>
        </div>
        </div>
        </div>
    );
}

export default ProductCard
