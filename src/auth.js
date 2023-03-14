import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { App } from 'App';

export const Auth = () => {
  const [googleResponse, setGoogleResponse] = useState(null);

  const handleGoogleLoginSuccess = (response) => {
    sessionStorage.setItem('client_Id', response.clientId);
    setGoogleResponse(response);
  };
  const handleLogout = () => {
    setGoogleResponse(null);
    sessionStorage.removeItem('client_Id'); 
    localStorage.removeItem('reduxState');   
  };

  return (
    <div>
      {googleResponse || sessionStorage.getItem('client_Id') ? (
        <>
          <div>Ви увійшли як авторизований користувач.</div>
          <button onClick={handleLogout}>Вийти</button>
          <App/>
        </>
      ) : (
        <GoogleLogin
          clientId="773914815143-mlr5eo10nimtjckqbpn91pj0iahp056u.apps.googleusercontent.com"
          buttonText="Увійти з Google"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginSuccess}
          cookiePolicy={'single_host_origin'}
          style={{top:'50%', left: '50%'}}
        />
      )}
    </div>
  );
};