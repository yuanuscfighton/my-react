import {useContext} from "react";
import {L3ThemeContext, L3UserContext} from "./Context";

export default function UseContextPage() {
  const themeContext = useContext(L3ThemeContext);
  const userContext = useContext(L3UserContext);

  return (
    <div>
      <p className = {themeContext.themeColor}>
        这是themeContext
      </p>
      <p>这是userContext: {userContext.name}</p>
    </div>
  )
}