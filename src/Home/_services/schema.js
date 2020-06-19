/*
 * @Author: Dieu-Donne Nazzah
 * @Date: 2020-02-26 16:31:22
 * @Last Modified by: Dieu-Donne Nazzah
 * @Last Modified time: 2020-06-09 03:24:44
 */
const schema = {
	name: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {
			maximum: 191,
		},
	},
	email: {
		presence: { allowEmpty: false, message: 'is required' },
		email: true,
		length: {
			maximum: 64,
		},
	},
	subject: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {
			maximum: 191,
		},
	},
	message: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {},
	},
};

export default schema;
