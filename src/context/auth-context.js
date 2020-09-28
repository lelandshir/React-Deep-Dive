import React from "react";

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});
//"context" is a globally available JS object, we decide where its available; can be passed w/o using props

export default authContext;
