/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-06-07 08:40:15
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-07 08:54:24
 */

import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);

	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight]);
		};

		window.addEventListener('resize', updateSize);

		updateSize();

		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return size;
};

export default useWindowSize;
