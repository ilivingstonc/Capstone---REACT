import React, {Component} from 'react';
import './style.css'
import SendToStrava from "../OAuthSender"

//this redirects users to Strava's authentication
 class LoginPage extends Component {
    render() {
        return (
            <div>
                <SendToStrava />
            </div>
            
        )
    }
}

export default LoginPage