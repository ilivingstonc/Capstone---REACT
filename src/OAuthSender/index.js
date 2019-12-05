import React, { Component } from 'react';
import { OauthSender } from 'react-oauth-flow';
 
class SendToStrava extends Component {
  render() {
    return (
      <OauthSender
        authorizeUrl="https://www.strava.com/oauth/authorize/"
        clientId={'41243'}
        redirectUri="http://localhost:3000"
        // state={{ from: '/' }}
        render={({ url }) => <a href={url}>Login with Strava</a>}
      />
    );
  }
}


export default SendToStrava;