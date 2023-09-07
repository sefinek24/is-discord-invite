const sendHttpRequest = require('../scripts/sendHttpRequest.js');
const discordLinkRegex = /(https:\/\/discord\.gg\/[a-zA-Z0-9]+)|(https:\/\/discord\.com\/invite\/[a-zA-Z0-9]+)/g;

/**
 * Checks for valid Discord invitation links in a given text and fetches invitation data.
 *
 * @param {string} text - The input text to search for Discord invitation links.
 * @returns {Promise<Object|null>} - Returns invitation data if a valid link is found, or `null` if no valid links are found.
 */
module.exports = async text => {
	// If no text or an empty string is provided, return a default object
	if (!text || text.length === 0) {
		return {
			success: true,
			code: undefined,
			isInvitation: false,
			message: 'String is empty',
			url: null,
			invitationCode: null,
			discordResponse: undefined,
		};
	}

	// Match Discord invitation links in the text
	const discordLinks = text.match(discordLinkRegex);

	// If no links or an empty array is found, return a default object
	if (!discordLinks || discordLinks.length === 0) {
		return {
			success: true,
			code: undefined,
			isInvitation: false,
			message: 'Not found any Discord invitation links',
			url: null,
			invitationCode: null,
			discordResponse: undefined,
		};
	}


	try {
		// Iterate through the links and fetch invitation data
		for (const link of discordLinks) {
			const result = await sendHttpRequest(link);

			// If a valid invitation link is found, return the data
			if (result.data.success && result.data.isInvitation) {
				return result.data;
			}
		}

		// If no valid invitations are found, return default values
		return {
			success: true,
			code: null,
			isInvitation: false,
			message: 'No valid links found',
			url: text.trim(),
			invitationCode: null,
			discordResponse: null,
		};
	} catch (error) {
		console.error('Error sending requests to the API server:', error.message);

		// If an error occurs during the request, return an error object
		return {
			success: false,
			code: null,
			isInvitation: false,
			message: 'Error sending requests to the API server',
			url: text,
			invitationCode: null,
			discordResponse: error.response ? error.response.data : null,
		};
	}
};