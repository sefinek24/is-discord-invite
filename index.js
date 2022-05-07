module.exports = str => {
	if (!str) throw new Error('no data was given in the function');

	return (/discord(?:app\.com\/invite|\.(?:com\/invite|gg))/gim).test(str);
};