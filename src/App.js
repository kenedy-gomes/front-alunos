import "./App.css";
import { AuthProvider } from "./Contexts/AuthContext";

import Router from "./Routes/routes";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
