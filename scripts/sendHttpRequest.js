const https = require('https');

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

module.exports = sendHttpRequest;