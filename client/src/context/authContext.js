import { createContext, useState, useEffect } from "react";
import axios from "axios";

// we need user info in multiple components, so we'll store that infor here
// we create context here, then in index.js wrap our app with this context provider,
// then we'll be able to use our user state anywhere in our app
export const AuthContext = createContext();

// children represent the components that we want to apply this to
// in this case it will be our App component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  //   each time we change the currentUser, we need to update localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    // basically we can use these functions - currentUser, login, logout everywhere in our app
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
