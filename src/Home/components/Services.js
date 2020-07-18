/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 18:26:19
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-18 02:12:59
 */

import React from 'react';

const Services = () => {
	return (
		<section className='ddnazzah-section' id='services-section'>
			<div className='container'>
				<div className='row justify-content-center py-5 mt-5'>
					<div className='col-md-12 heading-section text-center' data-aos='fade-up'>
						<h1 className='big big-2'>Services</h1>
						<h2 className='mb-4'>Services</h2>
						<p>Somewhere in Accra, in the great nation of Ghana</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4 text-center d-flex' data-aos='fade-up'>
						<div href='#' className='services-1'>
							<span className='icon'>
								<i className='flaticon-domain'></i>
							</span>
							<div className='desc'>
								<h3>Web Development</h3>
							</div>
						</div>
					</div>
					<div className='col-md-4 text-center d-flex' data-aos='fade-up'>
						<div href='#' className='services-1'>
							<span className='icon'>
								<i className='flaticon-coding'></i>
							</span>
							<div className='desc'>
								<h3>Mobile App Development</h3>
							</div>
						</div>
					</div>
					<div className='col-md-4 text-center d-flex' data-aos='fade-up'>
						<div href='#' className='services-1'>
							<span className='icon'>
								<i className='flaticon-seo'></i>
							</span>
							<div className='desc'>
								<h3>Desktop App Development</h3>
							</div>
						</div>
					</div>

					<div className='col-md-4 text-center d-flex' data-aos='fade-up'>
						<div href='#' className='services-1'>
							<span className='icon'>
								<i className='flaticon-project-management'></i>
							</span>
							<div className='desc'>
								<h3>Project Management</h3>
							</div>
						</div>
					</div>
					<div className='col-md-4 text-center d-flex' data-aos='fade-up'>
						<div href='#' className='services-1'>
							<span className='icon'>
								<i className='flaticon-web-settings'></i>
							</span>
							<div className='desc'>
								<h3>Web Hosting</h3>
							</div>
						</div>
					</div>
					<div className='col-md-4 text-center d-flex' data-aos='fade-up'>
						<div href='#' className='services-1'>
							<span className='icon'>
								<i className='flaticon-consultant'></i>
							</span>
							<div className='desc'>
								<h3>Software Consultancy</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
