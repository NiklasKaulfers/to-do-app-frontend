import {type AuthContextProps} from "react-oidc-context";

export default class AuthHandler {
    protected static auth: AuthContextProps;

    private constructor() {
    }

    static setAuthContext(auth: AuthContextProps){
        this.auth = auth;
    }

    static getAuthContext(): AuthContextProps{
        return this.auth;
    }

    static signOut(): void {
        const clientId = "74f06735fgqvbmqpt9g8t4f4p2";
        const logoutUri = import.meta.env.VITE_REDIRECT_URL!;
        const cognitoDomain = "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_W75hDAqdT";
        globalThis.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    }
}