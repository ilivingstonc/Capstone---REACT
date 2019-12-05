import React from "react";
import OauthReceiver from "../OAuthReceiver"


const RenderProp = props => (
    <OauthReceiver
      {...props}
      render={({ processing, state, error }) => (
        <div>
          {processing && <p>Authorization in progress</p>}
          {state && <p>Will redirect you to {state.from}</p>}
          {error && <p className="error">Error: {error.message}</p>}
        </div>
      )}
    />
  );

  export default RenderProp;