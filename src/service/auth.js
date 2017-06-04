import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';
import { playerLoggedIn, playerLoggedOut } from '../actions';

export default class Auth {
  constructor(store) {
    this.lock = new Auth0Lock('32BbtHrb7MbfBgTHoDGmGuv6loMkTtvA', 'mineflip.auth0.com', {
      oidcConformant: true,
      autoclose: true,
      auth: {
        redirectUrl: window.location.origin + '/oauth_cb',
        responseType: 'token',
        audience: `https://mineflip.auth0.com/userinfo`,
        params: {
          scope: 'openid profile'
        }
      }
    });
    this.store = store;
  }

  login() {
    this.lock.show();
  }

  handleAuthentication() {
    // Add callback Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this));
    // Add callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', (err) => {
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
      browserHistory.push('/');
    });
  }

  fetchUserInfo() {
    let accessToken = localStorage.getItem('access_token');
    if(this.isAuthenticated() && accessToken) {
      this.lock.getUserInfo(accessToken, (error, profile) => {
        if (!error) {
          this.store.dispatch(playerLoggedIn(profile));
        }
      });
    }
  }

  setSession(authResult) {
    if (authResult && authResult.accessToken) {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (!error) {
          this.store.dispatch(playerLoggedIn(profile));
        }
      });
      // Set the time that the access token will expire at
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      browserHistory.push('/');
    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this.store.dispatch(playerLoggedOut());
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}