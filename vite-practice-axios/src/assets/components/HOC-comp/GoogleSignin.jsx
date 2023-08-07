
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const withGoogleLogin = (WrappedComponent) => {
    const WithGoogleLogin = (props) => {
        const handleGoogleLogin = (response) => {
            // Handle the response from Google login
            console.log(response);
        };

        return (
            <div>
                <GoogleLogin
                    clientId="YOUR_CLIENT_ID"
                    buttonText="Login with Google"
                    onSuccess={handleGoogleLogin}
                    onFailure={handleGoogleLogin}
                    cookiePolicy="single_host_origin"
                />
                <WrappedComponent {...props} />
            </div>
        );
    };

    return WithGoogleLogin;
};

export default withGoogleLogin;