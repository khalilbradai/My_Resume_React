import React from 'react';
import APIFetcher from '../APIFetcher/APIFetcher';

function Portfolio() {
  const apiUrl = 'https://api.github.com/search/repositories?q=stars:>10000&sort=stars';

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {/* Utilisation de APIFetcher pour récupérer les données depuis l'API GitHub */}
        <APIFetcher apiUrl={apiUrl}>
          {({ loading, error, data }) => (
            <div>
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : (
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                  {data.items.map(project => (
                    <div key={project.id} className="col-lg-4 col-md-6 portfolio-item filter-app">
                      <div className="portfolio-wrap">
                        <img src={project.owner.avatar_url} className="img-fluid" alt={project.name} />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.description}</p>
                          <div className="portfolio-links">
                            <a href={project.html_url} className="portfolio-lightbox" title={project.name}><i className="bx bx-plus"></i></a>
                            <a href={project.html_url} className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </APIFetcher>
      </div>
    </section>
  );
}

export default Portfolio;
