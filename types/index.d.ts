import { RegexModule } from '../regex.js';
import { OnlineModuleResult } from '../online.js';

declare module 'is-discord-invite' {
    export const regex: RegexModule;
    export const online: (str: string) => Promise<OnlineModuleResult>;
}
