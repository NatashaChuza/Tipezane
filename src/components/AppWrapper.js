import React, { Fragment } from "react";
import Centers from "./Centers";

function AppWrapper({ children }) {
  return (
    <Fragment>
      <Centers />
      <div className="main">{children}</div>
    </Fragment>
  );
}

export default AppWrapper;
