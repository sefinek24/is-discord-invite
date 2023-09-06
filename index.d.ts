declare module 'is-discord-invite' {
    type IsInviteLink = (str: string) => boolean;
    const isInviteLink: IsInviteLink;
    export = isInviteLink;
}
