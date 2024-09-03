import { Fade } from "react-awesome-reveal";

const Portfolio = ({ data }) => {
  if (!data || !data.projects || data.projects.length === 0) {
    return null;
  }

  const renderProjects = data.projects.map((project) => {
    const projectImage = `images/portfolio/${project.image}`;

    return (
      <div key={project.title} className="columns portfolio-item">
        <div
          className="item-wrap"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="900"
        >
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            title={project.title}
          >
            <img alt={project.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <p>{project.category}</p>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {renderProjects}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
