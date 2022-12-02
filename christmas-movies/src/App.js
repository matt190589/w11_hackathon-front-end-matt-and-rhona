import "./App.css";
import Main from "./components/Main/index.js";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Header />
      {!isAuthenticated ? <LandingPage /> : <Main />}
    </div>
  );
}

export default App;
