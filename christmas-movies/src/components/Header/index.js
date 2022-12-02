import LoginButton from "../LoginButton";
import LogoutButton from "../../LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";


function Header() {
    const { isAuthenticated } = useAuth0();

    return (
      <div className="Header">
        {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      </div>
    );
  }
  
  export default Header;