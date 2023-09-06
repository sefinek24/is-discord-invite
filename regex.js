const discordPatterns = [
	/discord(?:app\.com\/invite|\.(?:com\/invite|gg))\//gi,
	/(?:watchanimeattheoffice|discordsays)\.com\/invite\//gi,
	/disboard\.org\/(?:(?:en\/)?|pl\/)server\/join/gi,
	/discordhome\.com\/join\//gi,
	/discord\.me\/server\/join\//gi,
];

/**
 * This module checks if a given string is an invitation link to a Discord server.
 *
 * @param {string} url - The input string to be checked.
 * @param {object} options - An options object for customizing the behavior.
 * @returns {boolean} - Returns `true` if the input is a valid Discord server invitation link, `false` otherwise.
 */
module.exports = (url, options = {}) => {
	const {
		defaultDiscordUrls = false,
		otherDiscordUrls = false,
		disboard = false,
		discordMe = false,
		discordhome = false,
	} = options;

	if (!Object.keys(options).length) options.everything = true;

	const patterns = [];
	if (defaultDiscordUrls || options.everything) patterns.push(discordPatterns[0]);
	if (otherDiscordUrls || options.everything) patterns.push(discordPatterns[1]);
	if (disboard || options.everything) patterns.push(discordPatterns[2]);
	if (discordMe || options.everything) patterns.push(discordPatterns[3]);
	if (discordhome || options.everything) patterns.push(discordPatterns[4]);

	const regex = new RegExp(patterns.map(pattern => `(${pattern.source})`).join('|'), 'gi');
	return regex.test(url);
};