import React from "react";
import {MyContext, MyUserContext} from "./Context";

export default class ConsumerPage extends React.Component {
  render() {
    return (
      <div>
        <h2>使用Consumer</h2>
        <MyContext.Consumer>
          {
            theme => {
              return <p>
                读取到的themeColor是 {theme.themeColor}

                <MyUserContext.Consumer>
                  {
                    userInfo => {return <p>读取到的userName是 {userInfo.userName}</p>}
                  }
                </MyUserContext.Consumer>
              </p>
            }
          }
        </MyContext.Consumer>
      </div>
    );
  }
}