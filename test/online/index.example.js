const IsInvitation = require('../../index.js');

(async () => {
	const result = await IsInvitation.online(
		'Lorem ipsum dolor sit amet, https://discord.gg/;;;;;; consectetur adipiscing elit, https://discord.gg/fgasfasd sed do eiusmod tempor https://discord.gg/HjEyuee4mc incididunt ut labore https://discord.gg/000000000 et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationhttps://discord.gg/yrtyretbhe ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velithttps://disdsgasgaesse cillum dolore eu fugiat nulla pariatur. Excepteurhttps://discord.gg/prEpvx2SRz sint occaecat cupidatat nondiscord.gg/fgasfasdproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	);

	console.log(result); // Use `result.isInvitation` to check if the text contains a valid Discord invitation link.
})();