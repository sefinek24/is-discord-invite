declare module 'is-discord-invite' {
    interface DiscordInvitationOptions {
        defaultDiscordUrls?: boolean;
        otherDiscordUrls?: boolean;
        disboard?: boolean;
        discordMe?: boolean;
        discordhome?: boolean;
        everything?: boolean;
    }

    type isInvitation = (url: string, options?: DiscordInvitationOptions) => boolean;
    export = isInvitation;
}