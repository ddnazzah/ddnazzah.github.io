/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 20:23:21
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-15 07:23:21
 */

import React from 'react';
import bg_1 from '../../_shared/assets/images/bg_1.jpg';

const GetInTouch = () => {
	return (
		<section className='ddnazzah-section ddnazzah-get-in-touch img margin-top' style={{ backgroundImage: `url(${bg_1})` }}>
			<div className='overlay'></div>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-md-7  text-center' data-aos='fade-up'>
						<h2>
							I'm <span>Available</span> for freelancing / employment
						</h2>
						<p>
							Solution-driven professional excelling in a highly collaborative work environment, finding solutions
							to challenges and focused on customer satisfaction
						</p>
						<p className='mb-0'>
							<a href='#contact-section' className='btn btn-primary btn-outline-primary py-3 px-5'>
								Get in touch
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetInTouch;
