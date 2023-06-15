import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
