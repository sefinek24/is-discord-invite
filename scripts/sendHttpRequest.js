const https = require('https');
const { name, version } = require('../package.json');

module.exports = url => {
	return new Promise((resolve, reject) => {
		const postData = JSON.stringify({ url });

		const options = {
			hostname: 'api.sefinek.net',
			port: 443,
			path: '/api/v2/discord/invitation',
			method: 'POST',
			headers: {
				'User-Agent': `${name}/${version} (+https://github.com/sefinek24/is-discord-invite)`,
				'Accept': 'application/json',
			},
		};

		const req = https.request(options, res => {
			let responseData = '';

			res.on('data', chunk => {
				responseData += chunk;
			});

			res.on('end', () => {
				if (res.statusCode === 200) {
					try {
						resolve({ url, data: JSON.parse(responseData) });
					} catch (err) {
						reject(new Error(`Error parsing API response: ${err.message}`));
					}
				} else {
					reject(new Error(`Error sending request to API server: ${res.statusCode}`));
				}
			});
		});

		req.on('error', err => {
			console.error(`Error sending request to API server: ${err.message}`);
			reject(err);
		});

		req.write(postData);
		req.end();
	});
};