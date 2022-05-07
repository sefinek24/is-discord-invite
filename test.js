const isDscInvite = require('./index.js');

const string = 'https://discord.gg/example025';
console.log(isDscInvite(string));

const string2 = 'https://example.com/url';
console.log(isDscInvite(string2));