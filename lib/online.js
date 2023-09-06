const sendHttpRequest = require('../scripts/sendHttpRequest.js');
const discordLinkRegex = /(https:\/\/discord\.gg\/[a-zA-Z0-9]+)|(https:\/\/discord\.com\/invite\/[a-zA-Z0-9]+)/g;

module.exports = async (text) => {
	try {
		const discordLinks = text.match(discordLinkRegex);

		if (!discordLinks || discordLinks.length === 0) return null;

		for (const link of discordLinks) {
			const result = await sendHttpRequest(link);

			if (result.data.success && result.data.isInvitation) return result.data;
		}

		return discordLinks[discordLinks.length - 1].data;
	} catch (error) {
		console.error('Error sending requests to the API server:', error.message);
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