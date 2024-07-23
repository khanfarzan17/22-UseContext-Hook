import React, { useContext } from "react";
import { GlobalContext } from "../context/context";

const Form = () => {
  const { handleusername, username, handleFinalvalue } =
    useContext(GlobalContext);

  return (
    <form onSubmit={handleFinalvalue} className="form">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your name"
        onChange={handleusername}
        value={username}
        className="input-field"
      />
      <button type="submit" className="submit-btn">
        Submit User{" "}
      </button>
    </form>
  );
};

export default Form;
