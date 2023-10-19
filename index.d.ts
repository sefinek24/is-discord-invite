declare module 'is-discord-invite' {
    interface RegexFilters {
        everything?: boolean;
        defaultDiscordUrls?: boolean;
        otherDiscordUrls?: boolean;
        disboard?: boolean;
        discordMe?: boolean;
        discordhome?: boolean;
    }


    interface DiscordResponse {
        type: number;
        code: string;
        inviter: {
            id: string;
            username: string;
            avatar: string;
            discriminator: string;
            public_flags: number;
            flags: number;
            banner: string | null;
            accent_color: string | null;
            global_name: string;
            avatar_decoration_data: string | null;
            banner_color: string | null;
        };
        expires_at: string;
        flags: number;
        guild: {
            id: string;
            name: string;
            splash: string;
            banner: string;
            description: string;
            icon: string;
            features: string[];
            verification_level: number;
            vanity_url_code: string | null;
            nsfw_level: number;
            nsfw: boolean;
            premium_subscription_count: number;
        };
        guild_id: string;
        channel: {
            id: string;
            type: number;
            name: string;
        };
    }

    interface SefinekAPIResponse {
        success: boolean;
        code: number;
        isInvitation: boolean;
        message: string;
        url: string;
        invitationCode: string;
        discordResponse: DiscordResponse;
    }


    export function regex(text: string, options?: RegexFilters): boolean;
    export function online(text: string): Promise<SefinekAPIResponse>;
}