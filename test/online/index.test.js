const isInvitation = require('../../index.js');

describe('#isInvitation.online', () => {
	it('Empty string', async () => {
		const result = await isInvitation.online('');

		expect(result.success).toEqual(true);
		expect(result.code).toEqual(undefined);
		expect(result.isInvitation).toEqual(false);
		expect(result.url).toEqual(null);
		expect(result.invitationCode).toEqual(null);
	});

	it('Is Discord invitation', async () => {
		const invitationCode = 'BKzhQwd6fa';
		const url = `https://discord.gg/${invitationCode}`;
		const text = `Check out this Discord link: ${url}`;
		const result = await isInvitation.online(text);

		expect(result.success).toEqual(true);
		expect(result.code).toEqual(200);
		expect(result.isInvitation).toEqual(true);
		expect(result.url).toEqual(url);
		expect(result.invitationCode).toEqual(invitationCode);
	});

	it('Is not Discord invitation', async () => {
		const invitationCode = '2137XXXXXXXX2137';
		const url = `https://discord.gg/${invitationCode}`;
		const text = `Check out this Discord link: ${url}`;
		const result = await isInvitation.online(text);

		// expect(result.success).toEqual(true);
		expect(result.code).toEqual(null);
		expect(result.isInvitation).toEqual(false);
		expect(result.url).toEqual(text);
		expect(result.invitationCode).toEqual(null);
	});
});
