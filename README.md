## ⭐ » What is that?
**EN:** This package will check that the URL is an invitation to the Discord server.  
**PL:** Ten moduł sprawdzi, czy adres URL jest zaproszeniem na serwer Discord.

## 📥 » How to install this package?
> **$** npm install is-discord-invite

## 📝 » Examples
```js
const isInvite = require('is-discord-invite');

console.log(isInvite('https://discord.gg/example024')); // true
console.log(isInvite('https://example.com')); // false
```

```js
const url = 'https://discord.gg/example064';

if (isDscInvite(url)) {
    interaction.reply('\\✅ This is an invitation!');
} else {
    interaction.reply('\\❎ This is not an invitation.');
}
```

## 📝 • Changelog
> <a href="https://github.com/sefinek24/is-discord-invite/blob/main/CHANGELOG.md" target="_blank">https://github.com/sefinek24/is-discord-invite/blob/main/CHANGELOG.md</a>

## 🤝 » Help
Open new <a href="https://github.com/sefinek24/is-discord-invite/issues/new" target="_blank">Issue</a> on Github.

### Thank you ❤️