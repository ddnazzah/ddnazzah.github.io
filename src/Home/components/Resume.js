/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 18:24:26
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-11-17 03:01:22
 */

import React from "react";
import Timeline from "react-tree-timeline";

const Resume = ({ data }) => {
    return (
        <section
            className="ddnazzah-section ddnazzah-no-pb"
            id="resume-section"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-md-10 heading-section text-center "
                        data-aos="fade-up"
                    >
                        <h1 className="big big-2">Resume</h1>
                        <h2 className="mb-4">Resume</h2>
                        <p>
                            Solution-driven professional excelling in a highly
                            collaborative work environment, finding solutions to
                            challenges and focused on customer satisfaction
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Timeline
                            data={data}
                            wrapperClassName="tl-wrapper"
                            descriptionClassName="tl-description"
                            titleClassName="tl-title"
                            timelineClassName="tl-timeline"
                            dateClassName="tl-date"
                        />
                        {/* <div className='resume-wrap '>
							<ol className='ol-timeline'>
								{data.map((resume) => (
									<li className='tl-item' data-aos='fade-up' key={resume.id}>
										<p>
											<span className='item-section'>{resume.date}</span>
										</p>
										<div className='content-wrapper'>
											<h5 className='title'>{resume.title}</h5>
											<div className='position'>{resume.position}</div>
										</div>
									</li>
								))}
							</ol>
						</div> */}
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6 text-center" data-aos="fade-up">
                        <p>
                            <a
                                href="https://drive.google.com/file/d/1wyWt80my9HUC3hsxTSSLB5FLq64Vp5Kj/view?usp=sharing"
                                className="btn btn-primary btn-outline-primary py-4 px-5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
