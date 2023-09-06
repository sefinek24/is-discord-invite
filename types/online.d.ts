declare module '../online.js' {
    export interface OnlineModuleResult {
        success: boolean;
        code: string | null;
        isInvitation: boolean;
        message: string;
        url: string;
        invitationCode: string | null;
        discordResponse: any; // Tutaj możesz dodać dokładniejszy typ w zależności od struktury danych
    }

    function online(str: string): Promise<OnlineModuleResult>;
}
