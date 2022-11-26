import {useContext} from "react";
import {L2Context} from "./Context";

export default function UseContextPage() {
  const context = useContext(L2Context);
  return (
    <div>
      <p className = {context.themeColor}>
        读取到的themeColor是 {context.themeColor}
      </p>
    </div>
  )
}