const isInvite = require('../index.js');

const urls = [
	'https://discord.gg/example',
	'https://disCOrd.gg/7548215',
	'http://discord.gg/5213567',
	'https://discord.com/invite/6246848',
	'https://discordapp.com/invite/9567935',

	'https://disboard.org/server/join/000000000000000000',
	'https://disboard.org/pl/server/join/000000000000000000',
	'https://discord.me/server/join/direct/example',

	'https://example.com',
	'https://wikipedia.org',
	'https://google.com',
	'https://github.com/sefinek24',
	'https://github.com/nodejs/node',
	'https://github.com/sefinek24/is-discord-invite',
	'https://www.youtube.com',
	'https://www.npmjs.com',
	'https://nodejs.org/en',

	'Hello world! 🐱',
];

for (let i = 0; i < urls.length; i++) {
	console.log(`${isInvite(urls[i])} -> ${urls[i]}`);
}