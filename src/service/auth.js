import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'mineflip.auth0.com',
    clientID: '32BbtHrb7MbfBgTHoDGmGuv6loMkTtvA',
    redirectUri: 'http://localhost:3000/oauth_cb',
    audience: 'https://mineflip.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}