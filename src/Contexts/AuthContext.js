import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Verificar se o usuário está autenticado ao carregar o contexto
  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("user");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.email;

      if (hasUser) {
        setUser(JSON.parse(hasUser[0]));
      }
    }
  }, []);

  const login = (email, password) => {
    const usersStorage = localStorage.getItem("user");
    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser) {
      if (hasUser === email && hasUser === password) {
        const token =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        localStorage.setItem(
          "user_token",
          JSON.stringify({ email, password, token })
        );
        setUser({ email, password });
        return;
      } else {
        return "Email ou Password incorreto!";
      }
    } else {
      return "Usario não cadastrado!";
    }
  };

  const Signup = (email, password) => {
    const usersStorage = localStorage.getItem("user");
    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser) {
      return "Já tem uma conta com este E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }

    localStorage.setItem("user", JSON.stringify(newUser));
    return;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, login, Signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
