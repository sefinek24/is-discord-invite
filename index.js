module.exports = str => {
	if (!str) throw new Error('no data was given in the function');

	return (/dis(?:board\.org\/(?:pl\/)?server\/join|cord(?:\.me\/server\/join|(?:app\.com\/invite|\.(?:com\/invite|gg\/))))/gi).test(str);
};