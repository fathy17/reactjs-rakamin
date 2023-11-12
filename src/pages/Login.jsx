import { GoogleLogin } from '@react-oauth/google';
import React from 'react';

export default function Login() {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}
