const sendHttpRequest = require('../scripts/sendHttpRequest.js');
const discordLinkRegex = /(https:\/\/discord\.(?:gg|com)\/[a-zA-Z0-9]+(?:-\d{18,19})?)/gim;

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
	} catch (err) {
		console.error('Error sending requests to the API server:', err.message);

		// If an error occurs during the request, return an error object
		return {
			success: false,
			code: null,
			isInvitation: false,
			message: 'Error sending requests to the API server',
			url: text,
			invitationCode: null,
			discordResponse: err.response ? err.response.data : null,
		};
	}
};