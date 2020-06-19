/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-08 20:27:48
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-10 06:27:05
 */

import React from 'react';

const Footer = () => {
	return (
		<React.Fragment>
			<footer className='ddnazzah-footer'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 text-center'>
							<div className='ddnazzah-footer-social2 d-none d-md-block d-lg-none'>
								<ul>
									<li>
										<a
											href='https://github.com/bchiang7'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='GitHub'
										>
											<span className='icon-github'></span>
										</a>
									</li>
									<li>
										<a
											href='https://www.linkedin.com/in/dieu-donne-nazzah-327854179/'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='Linkedin'
										>
											<span className='icon-linkedin'></span>
										</a>
									</li>
									<li>
										<a
											href='https://www.instagram.com/ddnazzah/'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='Instagram'
										>
											<span className='icon-instagram'></span>
										</a>
									</li>
									<li>
										<a
											href='https://twitter.com/ddnazzah'
											target='_blank'
											rel='nofollow noopener noreferrer'
											aria-label='Twitter'
										>
											<span className='icon-twitter'></span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-12 text-center'>
							<p>Designed & Built by Dieu-Donne Nazzah</p>
						</div>
					</div>
				</div>
			</footer>

			{/* <!-- social media --> */}
			<div className='ddnazzah-footer-social d-none d-lg-block' data-aos='fade-up' data-aos-delay='2200'>
				<ul>
					<li>
						<a
							href='https://github.com/bchiang7'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='GitHub'
						>
							<span className='icon-github'></span>
						</a>
					</li>
					<li>
						<a
							href='https://www.linkedin.com/in/dieu-donne-nazzah-327854179/'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='Linkedin'
						>
							<span className='icon-linkedin'></span>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/ddnazzah/'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='Instagram'
						>
							<span className='icon-instagram'></span>
						</a>
					</li>
					<li>
						<a
							href='https://twitter.com/ddnazzah'
							target='_blank'
							rel='nofollow noopener noreferrer'
							aria-label='Twitter'
						>
							<span className='icon-twitter'></span>
						</a>
					</li>
				</ul>
			</div>

			<div className='ddnazzah-footer-email d-none d-lg-block' data-aos='fade-up' data-aos-delay='3000'>
				<div className='ddnazzah-footer-email-inner'>
					<a href='mailto:dieudonnenazzah.yahoo.co.uk' className=''>
						dieudonnenazzah.yahoo.co.uk
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
