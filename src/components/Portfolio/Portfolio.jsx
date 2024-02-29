import React from 'react';
import { Link } from 'react-router-dom';

import './Portfolio.scss';

import studiesLogo from '../../pages/Projects/Studies/images/studies-logo-300x200.gif';
import TurnoverLogo from '../../pages/Projects/Turnover/images/turnover-300x200.png';
import jspLogo from '../../pages/Projects/JSP/images/jsp-new-logo-300x200.png';
import MusicalNotesLogo from '../../pages/Projects/Musical-Notes/images/musical-notes-logo-300x200.jpg';

const Portfolio = () => {
    return (
        <div>
            <section id="portfolio">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Personal Projects</h2>
                            <hr />
                        </div>
                    </div>

                    {/* First row */}
                    <div className="row">
                        {/* Musical Notes Project */}
                        {/* JSP Project */}
                        <Link to="jsp" className="center">
                            <div className="portfolio-item">
                                <div className="portfolio-link">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={jspLogo} className="img-fluid img-thumbnail center" alt="img" />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Second row */}
                    <div className="row">
                        {/* Musical Notes Project */}
                        <Link to="musical-notes" className="center">
                            <div className="portfolio-item">
                                <div className="portfolio-link">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={MusicalNotesLogo} className="img-fluid img-thumbnail center" alt="img" />
                                </div>
                            </div>
                        </Link>

                        {/* Turnover Project */}
                        <Link to="turnover" className="center">
                            <div className="portfolio-item">
                                <div className="portfolio-link">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={TurnoverLogo} className="img-fluid img-thumbnail center" alt="img" />
                                </div>
                            </div>
                        </Link>
                        {/* Studies Project */}
                        <Link to="studies" className="center">
                            <div className="portfolio-item">
                                <div className="portfolio-link">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src={studiesLogo} className="img-fluid img-thumbnail center" alt="img" />
                                </div>
                            </div>
                        </Link>
                    </div> {/* Second row */}

                </div>
            </section>
        </div>
    );
}

export default Portfolio;
