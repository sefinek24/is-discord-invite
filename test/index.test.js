const isInvite = require('../');

const validUrl = [
	'https://discord.gg/example',
	'discord.gg/example',
	'https://diSCOrd.gg/7548215',
	'http://discord.gg/5213567',
	'https://discord.com/invite/6246848',
	'https://discordapp.com/invite/9567935',

	// Disboard.org
	'https://disboard.org/server/join/000000000000000000',
	'https://disboard.org/en/server/join/000000000000000000',
	'https://disboard.org/pl/server/join/000000000000000000',

	// Discord.me
	'https://discord.me/server/join/direct/example',

	// discordhome.com
	'https://discordhome.com/join/00000',
];

const randomUrl = [
	'https://example.com',
	'https://google.com',
	'https://github.com/sefinek24/is-discord-invite',
	'https://www.npmjs.com',
];

test('Check for valid Discord invites', () => validUrl.forEach(url => expect(isInvite(url)).toBe(true)));
test('Check for random invalid links', () => randomUrl.forEach(url => expect(isInvite(url)).toBe(false)));