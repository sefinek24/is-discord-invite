const isInvitation = require('../index.js');

const result = isInvitation('https://discord.gg/invite/1234567890', { everything: true });
console.log(result);