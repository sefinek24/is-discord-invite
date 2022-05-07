## ⭐ What is that?
**EN:** This package will check that the URL is an invitation to the Discord server.  
**PL:** Ten moduł sprawdzi, czy adres URL jest zaproszeniem na serwer Discord.

## ✨ How to install?
> **$** npm install is-discord-invite

## 📝 Examples
```js
const isDscInvite = require('is-discord-invite');

console.log(isDscInvite('https://discord.gg/example025')); // true
console.log(isDscInvite('https://example.com/url')); // false
```

```js
const url = 'https://discord.gg/example064';

if (isDscInvite(url)) {
    interaction.reply('\\✅ This is an invitation!');
} else {
    interaction.reply('\\❎ This is not an invitation.');
}
```

## 🤝 Help
Open new <a href="https://github.com/sefinek24/is-discord-invite/issues/new" target="_blank">Issue</a> on Github.