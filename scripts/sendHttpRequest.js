const https = require('https');

const sendHttpRequest = url => {
	return new Promise((resolve, reject) => {
		const postData = JSON.stringify({ url });

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

		const req = https.request(options, res => {
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
						resolve({ url, data: responseData });
					} catch (err) {
						reject(new Error(`Error parsing API response: ${err.message}`));
					}
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

module.exports = sendHttpRequest;