import React from "react";

function LayoutPublic({ children }) {
  return (
    <div className="LayoutPublic">
      <main>{children}</main>
    </div>
  );
}

export default LayoutPublic;
