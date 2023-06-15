import { createContext, useEffect, useState } from "react";
import { api, createSession } from "../api/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(loggedUser);
    setIsLoggedIn(true);
  }, [1000]);

  const login = async (email, password) => {
    const response = await createSession(email, password);
    const loggedUser = response.data.usuarios;
    const token = response.data.token;

    console.log("user", response.data.user);
    console.log("token", response.data.token);

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setUser(loggedUser);
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
