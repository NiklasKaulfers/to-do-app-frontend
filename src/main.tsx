// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {AuthProvider} from "react-oidc-context";
import {BrowserRouter} from "react-router-dom";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_FfUy12Xfv",
    client_id: "3mhmqngo8l6pvv0lbttubjq05q",
    redirect_uri: import.meta.env.VITE_REDIRECT_URL!,
    response_type: "code",
    scope: "email openid phone",
};

const root = ReactDOM.createRoot(document.getElementById("root")!);

// wrap the application with AuthProvider
root.render(
    <React.StrictMode>
        <AuthProvider {...cognitoAuthConfig}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);