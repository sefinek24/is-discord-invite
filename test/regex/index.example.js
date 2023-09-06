const isInvitation = require('../../index.js');

const result = isInvitation.regex('https://discord.gg/invite/1234567890', { everything: true });
console.log(result);