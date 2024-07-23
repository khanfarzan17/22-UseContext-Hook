import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const Navbar = () => {
  const { finalvalue } = useContext(GlobalContext);

  return (
    <nav className="nav-bar" style={{ display: "flex", gap: "20px" }}>
      <ul style={{ display: "flex", gap: "20px", flex: "1" }}>
        <li>Home</li>
        <li>User list</li>
      </ul>
      <p className="userName">User name is {finalvalue}</p>
    </nav>
  );
};

export default Navbar;
