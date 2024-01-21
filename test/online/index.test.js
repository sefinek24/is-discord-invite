const IsInvitation = require('../../index.js');

describe('#IsInvitation.online', () => {
	it('Empty string', async () => {
		const result = await IsInvitation.online('');

		expect(result.success).toBe(true);
		expect(result.code).toBe(undefined);
		expect(result.isInvitation).toBe(false);
		expect(result.url).toBe(null);
		expect(result.invitationCode).toBe(null);
	});

	it('Is Discord invitation', async () => {
		const invitationCode = 'HjEyuee4mc';
		const url = `https://discord.gg/${invitationCode}`;
		const text = `Check out this Discord link: ${url}`;
		const result = await IsInvitation.online(text);

		expect(result.success).toBe(true);
		expect(result.code).toBe(200);
		expect(result.isInvitation).toBe(true);
		expect(result.url.full).toBe(url);
		expect(result.url.fetchedCode).toBe(invitationCode);
	});

	it('Is not Discord invitation', async () => {
		const invitationCode = '2137XXXXXXXX2137';
		const url = `https://discord.gg/${invitationCode}`;
		const text = `Check out this Discord link: ${url}`;
		const result = await IsInvitation.online(text);

		expect(result.success).toBe(true);
		expect(result.code).toBe(null);
		expect(result.isInvitation).toBe(false);
		expect(result.url).toBe(null);
		expect(result.invitationCode).toBe(undefined);
	});

	it('No valid links', async () => {
		const text = 'This is a random text without any Discord links.';
		const result = await IsInvitation.online(text);

		expect(result.success).toBe(true);
		expect(result.code).toBe(undefined);
		expect(result.isInvitation).toBe(false);
		expect(result.message).toBe('Not found any Discord invitation links');
		expect(result.url).toBe(null);
		expect(result.invitationCode).toBe(null);
		expect(result.discordResponse).toBe(undefined);
	});

	it('Error sending requests to the API server', async () => {
		const text = 'https://discord.gg/invalidlink';
		const result = await IsInvitation.online(text);

		expect(result.success).toBe(true);
		expect(result.code).toBe(null);
		expect(result.isInvitation).toBe(false);
		expect(result.message).toBe('No valid links found');
		expect(result.url).toBe(null);
		expect(result.invitationCode).toBe(undefined);
		expect(result.discordResponse).toBe(undefined);
	});

	it('Zero-width space', async () => {
		const text = '​​​​​​';
		const result = await IsInvitation.online(text);

		expect(result.success).toBe(true);
		expect(result.code).toBe(undefined);
		expect(result.isInvitation).toBe(false);
		expect(result.message).toBe('Not found any Discord invitation links');
		expect(result.url).toBe(null);
		expect(result.invitationCode).toBe(null);
		expect(result.discordResponse).toBe(undefined);
	});
});
