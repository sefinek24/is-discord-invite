declare module '../regex.js' {
    export interface CheckViaRegex {
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
