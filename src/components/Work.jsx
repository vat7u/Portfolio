import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/Baraka_project.png',
    title: 'Restaurant web app',
    tags: ['Laravel', 'MVC', 'PHP'],
    projectLink: 'https://github.com/vat7u/Riad-Baraka-project'
  },
  {
    imgSrc: '/images/Recipes project.png',
    title: 'Recipes app',
    tags: ['ReactJS', 'Firebase'],
    projectLink: 'https://github.com/vat7u/Recipe-Project'
  },
  {
    imgSrc: '/images/REST-API.png',
    title: 'Rest API',
    tags: ['Laravel', 'API', 'PHP'],
    projectLink: 'https://github.com/vat7u/rest-api'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work