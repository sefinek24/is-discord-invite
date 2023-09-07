const isInvitation = require('../../index.js');

(async () => {
	const invitationCode = '2137XXXXXXXX2137';
	const url = `https://discord.gg/${invitationCode}`;
	const text = `Check out this Discord link: ${url}`;
	const result = await isInvitation.online(' https://discord.gg/sgdfsgfdgsfdgsfd https://discord.gg/prEpvx2dSRz https://discord.gg/sgdfsgfdgsfdgsfdhttps://discord.gg/sgdfsgfdgsfdgsfdhttps://discord.gg/sgdfsgfdgsfdgsfd');

	console.log(result);
})();