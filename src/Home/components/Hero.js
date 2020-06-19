/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 18:21:08
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-15 06:40:16
 */
import React from 'react';
import me_2 from '../../_shared/assets/images/me_2.png';
import { useWindowSize } from '../../_shared/hooks';

const Hero = () => {
	const [, height] = useWindowSize();

	return (
		<section id='home-section' className='hero'>
			<div className='home-slider owl-carousel'>
				<div className='slider-item'>
					<div className='overlay'></div>
					<div className='container'>
						<div
							className='row d-md-flex no-gutters slider-text align-items-end justify-content-end'
							data-scrollax-parent='true'
						>
							<div
								className='one-third js-fullheight order-md-last img'
								style={{ backgroundImage: `url(${me_2})`, height }}
							>
								<div className='overlay'></div>
							</div>
							<div
								className='one-forth d-flex align-items-center '
								data-scrollax=" properties: { translateY: '70%' }"
								data-aos='fade-up'
								data-aos-delay='1200'
							>
								<div className='text'>
									<span className='subheading'>Hello!</span>
									<h1 className='mb-4 mt-3'>
										I'm <span>Dieu-Donne Nazzah</span>
									</h1>
									<h2 className='mb-4'>I develop things for the world.</h2>
									<p>
										<a href='#contact-section' className='btn btn-primary btn-outline-primary py-3 px-4 mr-2'>
											Get in touch
										</a>
										<a href='#projects-section' className='btn btn-white btn-outline-white py-3 px-4'>
											My works
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- <div className="slider-item">
					<div className="overlay"></div>
					<div className="container">
						<div
							className="row d-flex no-gutters slider-text align-items-end justify-content-end"
							data-scrollax-parent="true"
						>
							<div
								className="one-third js-fullheight order-md-last img"
								style="background-image: url(images/me_1.png);"
							>
								<div className="overlay"></div>
							</div>
							<div
								className="one-forth d-flex align-items-center "
								data-scrollax=" properties: { translateY: '70%' }"
							>
								<div className="text">
									<span className="subheading">Hello!</span>
									<h1 className="mb-4 mt-3">I'm a <span>web designer</span> based in London</h1>
									<p>
										<a href="#" className="btn btn-primary btn-outline-primary py-3 px-4">Hire me</a>
										<a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div> --> */}
			</div>
		</section>
	);
};

export default Hero;
