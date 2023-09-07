<div align="center">
    <h1>Is this an invitation to a Discord server? ➕</h1>
    <p>
        This module checks whether a string is a Discord server invitation.
        If it is, it fetches information from the API to find out more about the server.
        An alternative (but inferior) method is validating the string solely through regex.
    </p>
    <a href="https://www.npmjs.com/package/is-discord-invite" target="_blank" title="is-discord-invite - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/is-discord-invite.svg?maxAge=3600" alt="npm downloads">
        <img src="https://img.shields.io/github/issues/sefinek24/is-discord-invite" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek24/is-discord-invite" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/is-discord-invite" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/is-discord-invite" alt="Code size">
    </a>
</div>

## 📥 » Installation
```bash
npm install is-discord-invite
```

## 🤔 » Table

| Function        | Async/await | Options                    | Validation                                 | Faster method | Reliability | Recommended |
|-----------------|:------------|----------------------------|:-------------------------------------------|---------------|-------------|:------------|
| regex(text, {}) | No          | [View](#regextext-options) | [Only Regex](grex.md)                      | ✅             | ❌           | ❌           |
| online(text)    | Yes         | [View](#onlinetext)        | [api.sefinek.net](https://api.sefinek.net) | ❌             | ✅           | ✅           |


## 🌍 API
### `regex(text, options)`
Checks if the given string contains Discord server invitations. Validation is based solely on the string itself. In this case, the script does NOT verify whether the link is actually associated with a server.

- `url` (string): The input string to be checked.
- `options` (object, optional): An options object for customizing the behavior. You can customize which types of Discord server invitation links to check by setting specific options to `true` or `false`. Available options include:
    - `defaultDiscordUrls` (boolean, default `false`): Check default Discord invitation URLs.
    - `otherDiscordUrls` (boolean, default `false`): Checks other domains created by Discord Inc. that redirect to discord.com/*.
    - `disboard` (boolean, default `false`): Checks URL addresses associated with the **disboard.org** website.
    - `discordMe` (boolean, default `false`): Checks URL addresses associated with the **discord.me** website.
    - `discordhome` (boolean, default `false`): Checks URL addresses associated with the **discordhome.com** website.

If no options are provided, the `everything` option will be set to `true`, meaning that all types of Discord server invitation links will be checked.

**Returns**: `true` if the input is a valid Discord server invitation link, `false` otherwise.


### `online(text)`
Checks for valid Discord invitation links in the provided text and fetches invitation data.

- `text` (string): The input text to search for Discord invitation links.

**Returns**: A Promise that resolves to an object with invitation data.


### Invitation Data
If a valid invitation link is found, the returned data will have the following structure:

```json
{
  "success": true,
  "code": 200,
  "isInvitation": true,
  "message": "Success",
  "url": "https://discord.gg/prEpvx2SRz",
  "invitationCode": "prEpvx2SRz",
  "discordResponse": {
    "type": 0,
    "code": "prEpvx2SRz",
    "inviter": {
      "id": "561621386569973783",
      "username": "sefinek24",
      "avatar": "a_999b0e0278a65f7b145706c7e2822903",
      "discriminator": "0",
      "public_flags": 256,
      "flags": 256,
      "banner": null,
      "accent_color": null,
      "global_name": "Sefinek",
      "avatar_decoration_data": null,
      "banner_color": null
    },
    "expires_at": null,
    "guild": {
      "id": "1149087970587062392",
      "name": "pussycat",
      "splash": null,
      "banner": null,
      "description": null,
      "icon": null,
      "features": [
        "COMMUNITY",
        "NEWS"
      ],
      "verification_level": 1,
      "vanity_url_code": null,
      "nsfw_level": 0,
      "nsfw": false,
      "premium_subscription_count": 0
    },
    "guild_id": "1149087970587062392",
    "channel": {
      "id": "1149087970587062395",
      "type": 0,
      "name": "general"
    }
  }
}
```

In case the invitation was not valid 100%:
```json
{
    "success": true,
    "code": 200,
    "isInvitation": false,
    "message": "Request failed with status code 404",
    "url": "https://discord.gg/notVaild",
    "invitationCode": "notVaild",
    "discordResponse": {
        "message": "Unknown Invite",
        "code": 10006
    }
}
```


## 📄 » Examples

### Regex
Quick method, but definitely not recommended for most cases. `isInvitation` will be `true` even if the invitation has expired or simply doesn't work.

```js
const isInvitation = require('is-discord-invite');

const result1 = isInvitation.regex('https://discord.gg/BKzhQwd6fa', { everything: true }); // Example with `everything` option
console.log(result1); // true

const result2 = isInvitation.regex('https://discord.gg/notVaildUrl');
console.log(result2); // true

const result3 = isInvitation.regex('https://example.com/bKzhAdd6Fa');
console.log(result3); // false
```

### Online
In this case, `isInvitation` will be `true` due to the link with the code `BKzhQwd6fa`, as it is the only valid one.  

```js
const isInvitation = require('is-discord-invite');

(async () => {
    const result = await isInvitation.online(
        'Lorem ipsum dolor sit amet, https://discord.gg/notVaild consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna https://discord.gg/BKzhQwd6fa aliqua.',
    );

    console.log(result.isInvitation); // true
})();
```
If the regex detects any invitation, the script sends a POST request to the API to verify the link's validity.


## 🤝 » Help
If you need assistance, visit my official website where you can find my email and current Discord username. Feel free to send me a message on Discord or reach out via email.

Alternatively, you can create a new [Issue](https://github.com/sefinek24/is-discord-invite/issues/new).

## 🌿 Pull requests
Collaborators are welcome! If you'd like to share your suggestions or corrections for this project, we encourage you to create Pull Requests.

## ⭐ » Thanks
Thank you for your interest in this module. If you like it or find it useful, please consider starring the [repository](https://github.com/sefinek24/is-discord-invite).