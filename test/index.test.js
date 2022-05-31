const isInvite = require('../');

const validUrl = [
	'https://discord.gg/example',
	'discord.gg/example',
	'https://diSCOrd.gg/7548215',
	'http://discord.gg/JpAGQkhV',
	'https://discord.com/invite/6246848',
	'https://discordapp.com/invite/9567935',
	'www.discord.gg/9567935',

	// Disboard.org
	'https://disboard.org/server/join/000000000000000000',
	'https://disboard.org/en/server/join/000000000000000000',
	'https://disboard.org/pl/server/join/000000000000000000',

	// Other links
	'https://discord.me/server/join/direct/example',
	'https://discordhome.com/join/00000',
];

const randomUrl = [
	'https://example.com',
	'https://sefinek.fun',
	'https://www.npmjs.com',
	'https://github.com/sefinek24/is-discord-invite',
];

test('Check for valid Discord invites', () => validUrl.forEach(url => expect(isInvite(url)).toBe(true)));
test('Check for random invalid links', () => randomUrl.forEach(url => expect(isInvite(url)).toBe(false)));