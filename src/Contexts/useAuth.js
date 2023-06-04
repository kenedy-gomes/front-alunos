import { useContext } from "react";

const useAuth = () => {
  const context = useContext(useContext);

  return context;
};

export default useAuth;
