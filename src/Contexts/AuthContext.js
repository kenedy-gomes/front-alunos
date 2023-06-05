import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);

  // Verificar se o usuário está autenticado ao carregar o contexto
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    const usersStorage = localStorage.getItem("user");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

   

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("user"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
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
    localStorage.removeItem("token");

  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user,  signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
