declare module '../regex.js' {
    export interface RegexModule {
        /**
         * This module checks if a given string is an invitation link to a Discord server.
         *
         * @param {string} str - The input string to be checked.
         * @param {object} options - An options object for customizing the behavior.
         * @returns {boolean} - Returns `true` if the input is a valid Discord server invitation link, `false` otherwise.
         */
        isDiscordInvite(str: string, options?: {
            defaultDiscordUrls?: boolean;
            otherDiscordUrls?: boolean;
            disboard?: boolean;
            discordMe?: boolean;
            discordhome?: boolean;
            everything?: boolean;
        }): boolean;
    }
}
