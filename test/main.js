const isInvite = require('../index.js');

const string = 'https://discord.gg/example025';
console.log(isInvite(string));

const string2 = 'https://example.com/url';
console.log(isInvite(string2));