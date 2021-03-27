import React from "react";

function Layout({ children }) {
  return (
    <div className="Layout">
      <main>{children}</main>
    </div>
  );
}

export default Layout;
