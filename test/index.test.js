const isInvite = require('../');

const validUrl = [
	'https://discord.gg/example',
	'discord.gg/example',
	'https://diSCOrd.gg/VqdtyNjS',
	'http://discord.gg/DzRYkCR4',
	'https://discord.com/invite/6246848',
	'https://discordapp.com/invite/nbnhkaDL',
	'www.discord.gg/yQYb6WYS',
	'https://watchanimeattheoffice.com/invite/Df6KJWvU',
	'https://discordsays.com/invite/TvaKnzsxC6',

	// Disboard.org
	'https://disboard.org/server/join/000000000000000000',
	'https://disboard.org/en/server/join/000000000000000000',
	'https://disboard.org/pl/server/join/000000000000000000',
	'some text 1 2 3 https://disboard.org/pl/server/join/000000000000000000 3213 1 some text',

	// Other links
	'https://discord.me/server/join/direct/example',
	'https://discordhome.com/join/00000',
];

const randomUrl = [
	'https://example.com',
	'https://discord.com',
	'https://sefinek.net',
	'https://www.npmjs.com',
	'https://github.com/sefinek24/is-discord-invite',
];

test('Check for valid Discord invites', () => validUrl.forEach(url => expect(isInvite(url)).toBe(true)));
test('Check for random invalid links', () => randomUrl.forEach(url => expect(isInvite(url)).toBe(false)));