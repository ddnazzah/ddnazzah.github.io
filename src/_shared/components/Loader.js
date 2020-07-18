/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-10 03:43:36
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-19 06:11:56
 */

import { css } from '@emotion/core';
import clsx from 'clsx';
import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = ({ loading, fullscreen, size, hCenter }) => {
	const override = css`
		display: block;
		margin: 0 auto;
	`;

	return (
		<div id='ddnazzah-loader' className={clsx(fullscreen ? 'fullscreen' : '', hCenter ? 'd-flex align-items-center' : '')}>
			<PropagateLoader css={override} size={size || 15} color={'rgb(100, 255, 218)'} loading={loading} />
		</div>
	);
};

export default Loader;
