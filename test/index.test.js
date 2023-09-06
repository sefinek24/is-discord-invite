const isDiscordInviteLink = require('../index.js');

describe('#isDiscordInviteLink', () => {
	// https://discord.gg
	describe('https://discord.gg', () => {
		test('Valid Discord.gg link 1', () => {
			const url = 'https://discord.gg/b8nzKetf';
			expect(isDiscordInviteLink(url)).toBe(true);
		});

		test('Valid Discord.gg link 2', () => {
			const url = 'https://discord.gg/4EBN3vJ';
			expect(isDiscordInviteLink(url)).toBe(true);
		});

		test('Valid Discord.gg link 3', () => {
			const url = 'foo exampple 123123 https://discord.gg/WNdbZDJm computer cat UwU :DDDDDD';
			expect(isDiscordInviteLink(url)).toBe(true);
		});

		test('Valid link with options', () => {
			const url = 'https://discord.gg/d9XxuDc';
			const options = {
				defaultDiscordUrls: true,
			};
			expect(isDiscordInviteLink(url, options)).toBe(true);
		});
	});

	// https://discord.com/invite
	describe('https://discord.com/invite', () => {
		test('Valid Discord.com/invite link 1', () => {
			const url = 'https://discord.com/invite/b8nzKetf';
			expect(isDiscordInviteLink(url)).toBe(true);
		});

		test('Valid Discord.gg/invite link 2', () => {
			const url = 'https://discord.gg/invite/t6uYRKR';
			expect(isDiscordInviteLink(url)).toBe(true);
		});

		test('Valid Discord.gg/invite link 3', () => {
			const url = 'ABCDE123>&^*%mn$v%&$^n#^$%#hb$%^h#b<https://discord.gg/invite/t6uYRKR?qwpe{r:lqfeQWECFRQ';
			expect(isDiscordInviteLink(url)).toBe(true);
		});
	});


	// otherDiscordUrls
	describe('otherDiscordUrls', () => {
		test('Valid other Discord domain - watchanimeattheoffice.com', () => {
			const url = 'https://watchanimeattheoffice.com/invite/VFbpeG48c';
			expect(isDiscordInviteLink(url)).toBe(true);
		});

		test('Valid other Discord domain - discordsays.com', () => {
			const url = 'https://discordsays.com/invite/TvaKnzsxC6';
			expect(isDiscordInviteLink(url)).toBe(true);
		});
	});


	// disboard
	describe('https://disboard.org', () => {
		test('Valid Disboard.org link', () => {
			const url = 'https://disboard.org/en/server/join/1149087970587062392';
			expect(isDiscordInviteLink(url)).toBe(true);
		});
	});

	// discordMe
	describe('https://discord.me', () => {
		test('Valid Discord.me link', () => {
			const url = 'https://discord.me/server/join/1149087970587062392';
			expect(isDiscordInviteLink(url)).toBe(true);
		});

		test('Valid link with everything option', () => {
			const url = 'https://discord.me/server/join/1149087970587062392';
			const options = {
				everything: true,
			};
			expect(isDiscordInviteLink(url, options)).toBe(true);
		});
	});

	// discordhome
	test('https://discordhome.com', () => {
		const url = 'https://discordhome.com/join/1149087970587062392';
		expect(isDiscordInviteLink(url)).toBe(true);
	});
});


describe('#isNotVaildDiscordInviteLink', () => {

});