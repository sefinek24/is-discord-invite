const isInvitation = require('../../index.js');

describe('#isInvitation.online', () => {
	it('Empty string', async () => {
		const result = await isInvitation.online('');

		expect(result.success).toBe(true);
		expect(result.code).toBe(undefined);
		expect(result.isInvitation).toBe(false);
		expect(result.url).toBe(null);
		expect(result.invitationCode).toBe(null);
	});

	it('Is Discord invitation', async () => {
		const invitationCode = 'BKzhQwd6fa';
		const url = `https://discord.gg/${invitationCode}`;
		const text = `Check out this Discord link: ${url}`;
		const result = await isInvitation.online(text);

		expect(result.success).toBe(true);
		expect(result.code).toBe(200);
		expect(result.isInvitation).toBe(true);
		expect(result.url).toBe(url);
		expect(result.invitationCode).toBe(invitationCode);
	});

	it('Is not Discord invitation', async () => {
		const invitationCode = '2137XXXXXXXX2137';
		const url = `https://discord.gg/${invitationCode}`;
		const text = `Check out this Discord link: ${url}`;
		const result = await isInvitation.online(text);

		expect(result.success).toBe(true);
		expect(result.code).toBe(null);
		expect(result.isInvitation).toBe(false);
		expect(result.url).toBe(text);
		expect(result.invitationCode).toBe(null);
	});
});
