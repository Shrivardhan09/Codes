

import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginPage = () => {
    const handleGoogleLogin = (response) => {
        if (response.error) {
            // Handle login failure
            console.log('Google login failed:', response.error);
        } else {
            // Handle login success
            console.log('Google login successful!');
            console.log('User profile:', response.profileObj);
            console.log('Access token:', response.accessToken);
        }
    };

    return (
        <div>
            <h1>Google Login Page</h1>
            <GoogleLogin
                clientId="YOUR_CLIENT_ID"
                buttonText="Login with Google"
                onSuccess={handleGoogleLogin}
                onFailure={handleGoogleLogin}
                cookiePolicy="single_host_origin"
            />
        </div>
    );
};
export default GoogleLoginPage;
