import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProviderWapper(props) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [status, setStatus] = useState(0);

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        user
      );
      const data = await response.data;
      console.log(response);
      console.log(response.data);

      console.log(response.status);
    } catch (e) {
      console(e);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, login, logout, status, setStatus }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWapper };
