/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 18:33:51
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-15 05:31:27
 */
import React from 'react';

const Projects = ({ data, otherData }) => {
	return (
		<React.Fragment>
			<section className='ddnazzah-section ddnazzah-project' id='projects-section'>
				<div className='container'>
					<div className='row justify-content-center pb-5'>
						<div className='col-md-12 heading-section text-center' data-aos='fade-up'>
							<h1 className='big big-2'>Projects</h1>
							<h2 className='mb-4'>Projects</h2>
							<p>Somewhere in Accra, in the great nation of Ghana</p>
						</div>
					</div>
					<div className='row'>
						{data.map((project, index) => (
							<div className={index % 2 === 0 ? 'col-md-4' : 'col-md-8'} key={project.id}>
								<div
									className='project img  d-flex justify-content-center align-items-center'
									style={{ backgroundImage: `url(${project.image})` }}
									data-aos='fade-up'
								>
									<div className='overlay'></div>
									<div className='text text-center p-4'>
										<h3>
											<a href={project.link} target='_blank' rel='noopener noreferrer'>
												{project.name}
											</a>
										</h3>
										<span>{project.tech}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='pb-5' id='other-projects' style={{ marginBottom: 80 }}>
				<div className='container'>
					<div className='row justify-content-center pb-5 mt-5'>
						<div className='col-md-12 heading-section text-center' data-aos='fade-up'>
							<h3 className='big big-2'>Other Projects</h3>
							<p>Somewhere in Accra, in the great nation of Ghana</p>
						</div>
					</div>
					<div className='row'>
						{otherData.map((project) => (
							<div className='col-md-4 text-center d-flex' data-aos='fade-up' key={project.id}>
								<div href='#' className='services-1'>
									<span className='icon float-left'>
										<i className='icon-folder-open-o'></i>
									</span>
									<div className='desc'>
										<h3 className='mb-5'>{project.name}</h3>
										<p className='text-left'>{project.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Projects;
