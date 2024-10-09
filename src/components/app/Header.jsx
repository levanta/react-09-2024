import React from "react";
import Button from "../button/Button.jsx";
import {useUser} from "../../contexts/user-context/use-user";
import {useTheme} from "../../contexts/theme-context/use-theme.jsx";

const Header = () => {
  const {user, setUser} = useUser();
  const {theme, setTheme} = useTheme();

  return (
    <div>
      <h1>Рестораны</h1>
      <div>
        {user}
        <Button onClick={() => setUser(user ? '' : 'userName')}>
          {user ? 'logout' : 'login'}
        </Button>
      </div>
      <Button onClick={() => setTheme(!theme)}>
        toggle theme
      </Button>
    </div>
  );
};

export default Header;
