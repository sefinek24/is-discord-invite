const https = require('node:https');
const { name, version, devDependencies } = require('../package.json');

const options = {
	hostname: 'api.sefinek.net',
	port: 443,
	path: '/api/v2/discord/invitation',
	method: 'POST',
	headers: {
		'User-Agent': `${name}/${version} (+https://github.com/sefinek24/is-discord-invite) ${process.env.JEST_WORKER_ID === undefined ? '' : `jest/${devDependencies.jest.replace('^', '')}`}`,
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Cache-Control': 'no-cache',
		'CF-IPCountry': 'false',
		'CF-Visitor': '{"scheme":"https"}',
		'Connection': 'keep-alive',
		'DNT': '1',
		'Pragma': 'no-cache',
		'Referrer-Policy': 'strict-origin-when-cross-origin',
		'X-Content-Type-Options': 'nosniff',
		'X-Frame-Options': 'DENY',
		'X-XSS-Protection': '1; mode=block',
	},
};

module.exports = url => {
	const postData = JSON.stringify({ url });

	return new Promise((resolve, reject) => {
		const req = https.request(options, res => {
			let responseData = '';

			res.on('data', chunk => {
				responseData += chunk;
			});

			res.on('end', () => {
				if (res.statusCode === 200) {
					try {
						resolve({ data: JSON.parse(responseData) });
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