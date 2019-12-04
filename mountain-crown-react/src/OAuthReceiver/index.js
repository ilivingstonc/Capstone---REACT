import React, { Component } from 'react';
import { OauthReceiver } from 'react-oauth-flow';
 
class ReceiveFromStrava extends Component {
  handleSuccess = async (accessToken, { response, state }) => {
    console.log(accessToken)
    console.log('Successfully authorized');
    // await setProfileFromStrava(accessToken);
    // await redirect(state.from);
  };
 
  handleError = error => {
    console.error('An error occured');
    console.error(error.message);
  };
 
  render() {
      console.log(process.env)
    return (
      <OauthReceiver
        tokenUrl="https://api.strava.com/oauth/token"
        clientId={process.env.REACT_APP_CLIENT_ID}
        clientSecret={process.env.REACT_APP_CLIENT_SECRET}
        redirectUri="http://localhost:3000"
        onAuthSuccess={this.handleSuccess}
        onAuthError={this.handleError}
      
        render={({ processing, state, error }) => (
          <div>
            {processing && <p>Authorizing now...</p>}
            {error && (
              <p className="error">An error occured: {error.message}</p>
            )}
        
          </div>
        )}
      />
    );
  }
}

export default ReceiveFromStrava