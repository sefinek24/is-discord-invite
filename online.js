const https = require('https');

const discordLinkRegex = /(https:\/\/discord\.gg\/[a-zA-Z0-9]+)|(https:\/\/discord\.com\/invite\/[a-zA-Z0-9]+)/g;

module.exports = async (url) => {
	try {
		const discordLinks = url.match(discordLinkRegex);

		if (!discordLinks) {return {
			success: false,
			code: null,
			isInvitation: false,
			message: 'No Discord links found in the text.',
			url: null,
			invitationCode: null,
			discordResponse: null,
		};}

		const sendHttpRequest = (link) => {
			return new Promise((resolve, reject) => {
				const postData = JSON.stringify({ url: link });

				const options = {
					hostname: 'api.sefinek.net',
					port: 443,
					path: '/api/v2/discord/invitation',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Content-Length': postData.length,
					},
				};

				const req = https.request(options, (res) => {
					let data = '';

					res.on('data', (chunk) => {
						data += chunk;
					});

					res.on('end', () => {
						if (res.statusCode !== 200) {
							reject(new Error(`Error sending request to API server: ${res.statusCode}`));
						} else {
							try {
								const responseData = JSON.parse(data);
								resolve({ link, data: responseData });
							} catch (error) {
								reject(new Error(`Error parsing API response: ${error.message}`));
							}
						}
					});
				});

				req.on('error', (error) => {
					console.error(`Error sending request to API server: ${error.message}`);
					reject(error);
				});

				req.write(postData);
				req.end();
			});
		};

		// Use Promise.all to send all HTTP requests concurrently
		const responsePromises = discordLinks.map(sendHttpRequest);

		// Wait for all promises to resolve
		const results = await Promise.all(responsePromises);
		return results[0].data;
	} catch (error) {
		console.error('Error sending requests to the API server:', error.message);
		return {
			success: false,
			code: null,
			isInvitation: false,
			message: 'Error sending requests to the API server',
			url,
			invitationCode: null,
			discordResponse: error.response ? error.response.data : null,
		};
	}
};
