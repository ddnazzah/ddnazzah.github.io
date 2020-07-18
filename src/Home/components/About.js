/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 18:22:31
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-07-18 01:48:16
 */

import AnimatedNumber from 'animated-number-react';
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import me_1 from '../../_shared/assets/images/me_1.png';

const About = ({ number_of_project }) => {
	const [startEnter, setStartEnter] = useState(false);

	const _handleWaypointEnter = () => {
		setStartEnter(true);
	};

	return (
		<section className='ddnazzah-about img ddnazzah-section ddnazzah-no-pb' id='about-section'>
			<div className='container'>
				<div className='row d-flex'>
					<div className='col-md-6 col-lg-5 d-flex'>
						<div className='img-about img d-flex align-items-stretch'>
							<div className='overlay'></div>
							<div
								className='img d-flex align-self-stretch align-items-center'
								style={{
									backgroundImage: `url(${me_1})`,
									backgroundPosition: 'center',
									backgroundSize: 'contain',
								}}
							></div>
						</div>
					</div>
					<div className='col-md-6 col-lg-7 pl-lg-5 pb-5'>
						<div className='row justify-content-start pb-3'>
							<div className='col-md-12 heading-section ' data-aos='fade-up'>
								<h1 className='big'>About</h1>
								<h2 className='mb-4'>About Me</h2>
								<p>
									I am a software engineer based in Accra, Ghana. I develop softwares for web, mobile and
									desktop platforms using state of the art technologies mostly in Javascript.
								</p>
								<p>
									I graduated from{' '}
									<a href='https://www.knust.edu.gh/'> Kwame Nkrumah University of Science and Technology</a>{' '}
									with a bachelor's in Computer Engineering and for the past 4+ years, I have been a team player
									and team leader providing solutions with the <a href='#projects-section'>stuffs I build</a>.
								</p>
								<ul className='about-info mt-4 px-md-0 px-2'>
									<li className='d-flex'>
										<span>Name:</span> <span>Dieu-Donne</span>
									</li>
									{/* <!-- <li className="d-flex"><span>Date of birth:</span> <span>January 01, 1987</span></li> --> */}
									<li className='d-flex'>
										<span>Address:</span> <span>East-Legon, Accra Ghana</span>
									</li>
									{/* <!-- <li className="d-flex"><span>Zip code:</span> <span>1000</span></li> --> */}
									<li className='d-flex'>
										<span>Email:</span> <span>dieudonnenazzah@yahoo.co.uk</span>
									</li>
									<li className='d-flex'>
										<span>Phone: </span> <span>+233-20-132-9311</span>
									</li>
								</ul>
							</div>
						</div>
						<Waypoint onEnter={_handleWaypointEnter}>
							<div className='counter-wrap  d-flex mt-md-3' data-aos='fade-up'>
								<div className='text'>
									<p className='mb-4'>
										{startEnter ? (
											<AnimatedNumber
												value={number_of_project}
												duration={7000}
												formatValue={(value) => value.toFixed(0)}
											/>
										) : (
											0
										)}
										{'+ '}
										<span> Projects complete</span>
									</p>
									<p>
										<a
											href='https://drive.google.com/file/d/1WDW6nb8ZctnmiESBfR75hgaplangQHCW/view?usp=sharing'
											className='btn btn-primary btn-outline-primary py-3 px-3'
											target='_blank'
											rel='noopener noreferrer'
										>
											Download CV
										</a>
									</p>
								</div>
							</div>
						</Waypoint>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
