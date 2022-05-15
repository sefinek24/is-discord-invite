<div align="center">
    <h1>🌍・What is that?・🌍</h1>
    <p>
        <b>EN:</b> This npm package will check a string is an invitation to the Discord server.<br>
        <b>PL:</b> Ten moduł npm sprawdzi, czy ciąg znaków jest zaproszeniem na jakikolwiek serwer Discord.
    </p>
    <a href="https://www.npmjs.com/package/is-discord-invite" target="_blank" title="is-discord-invite - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/is-discord-invite.svg?maxAge=3600" alt="npm downloads">
        <img src="https://img.shields.io/github/issues/sefinek24/is-discord-invite" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek24/is-discord-invite" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/is-discord-invite" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/is-discord-invite" alt="Code size">
        <img src="https://img.shields.io/tokei/lines/github/sefinek24/is-discord-invite" alt="Total lines">
    </a>
</div>

## 📥 » Installation
> **$** npm install is-discord-invite

## 📝 » Examples
```js
const isInvite = require('is-discord-invite');

isInvite('https://discord.gg/example024'); // true
isInvite('https://example.com'); // false
```

```js
// For Discord.js - https://www.npmjs.com/package/discord.js
const url = 'https://discord.gg/example064';

if (isDscInvite(url)) {
    interaction.reply('\\✅ This is an invitation!');
} else {
    interaction.reply('\\❎ This is not an invitation.');
}
```

## 📝 » Changelog
> https://github.com/sefinek24/is-discord-invite/blob/main/CHANGELOG.md

## 🤝 » Help
Open new [Issue](https://github.com/sefinek24/is-discord-invite/issues/new) on GitHub.

## ⭐ » Thank you
Give a star if you can on [GitHub](https://github.com/sefinek24/is-discord-invite) page.