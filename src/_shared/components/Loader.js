/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-10 03:43:36
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-10 04:15:26
 */

import { css } from '@emotion/core';
import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = ({ loading }) => {
	const override = css`
		display: block;
		margin: 0 auto;
	`;

	return (
		<div id='ddnazzah-loader' className='fullscreen d-flex align-items-center'>
			<PropagateLoader css={override} size={15} color={'rgb(100, 255, 218)'} loading={loading} />
		</div>
	);
};

export default Loader;
