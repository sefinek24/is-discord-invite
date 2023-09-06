const isInvite = require('../');

describe('Discord Invite Link Validation', () => {
	const validInviteUrls = [
		'https://discord.gg/example',
		'discord.gg/example',
		'https://diSCOrd.gg/VqdtyNjS',
		'http://discord.gg/DzRYkCR4',
		'https://discord.com/invite/6246848',
		'https://discordapp.com/invite/nbnhkaDL',
		'www.discord.gg/yQYb6WYS',
		'https://watchanimeattheoffice.com/invite/Df6KJWvU',
		'https://discordsays.com/invite/TvaKnzsxC6',
		'https://disboard.org/server/join/000000000000000000',
		'https://disboard.org/en/server/join/000000000000000000',
		'https://disboard.org/pl/server/join/000000000000000000',
		'some text 1 2 3 https://disboard.org/pl/server/join/000000000000000000 3213 1 some text',
		'https://discord.me/server/join/direct/example',
		'https://discordhome.com/join/00000',
	];

	const invalidUrls = [
		'https://example.com',
		'https://discord.com',
		'https://sefinek.net',
		'https://www.npmjs.com',
		'https://github.com/sefinek24/is-discord-invite',
	];

	test.each(validInviteUrls)('Valid invite link: %s', (url) => {
		expect(isInvite(url)).toBe(true);
	});

	test.each(invalidUrls)('Invalid link: %s', (url) => {
		expect(isInvite(url)).toBe(false);
	});
});
