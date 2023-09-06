const isInvitation = require('is-discord-invite');

const result = isInvitation.regex('https://discord.gg/invite/1234567890', { everything: true });
console.log(result);