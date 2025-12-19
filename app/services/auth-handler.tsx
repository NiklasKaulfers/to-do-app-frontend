'use client'
import {AuthContextProps} from "react-oidc-context";
import AuthError from "@/app/errors/auth-error";

export default class AuthHandler {
    protected static auth: AuthContextProps | undefined;

    private constructor() {
    }

    static setAuthContext(auth: AuthContextProps){
        if (this.auth){
            throw new AuthError("Auth already set");
        }
        this.auth = auth;
    }

    static getAuthContext(): AuthContextProps{
        if (this.auth){
            return this.auth;
        }
        throw new AuthError("Auth returned null");
    }
}