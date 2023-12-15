const IsInvitation = require('../../index.js');

const result = IsInvitation.regex('https://discord.gg/invite/1234567890', { everything: true });
console.log(result);