import React from "react";
import {L4ThemeContext, L4UserContext} from "./Context";


export default class ConsumerPage extends React.Component {
  render() {
    return (
      <div>
        <h2>使用Consumer</h2>
        <L4ThemeContext.Consumer>
          {
            theme => {
              return <p>
                读取到的themeColor是 {theme.themeColor}

                <L4UserContext.Consumer>
                  {
                    userInfo => {
                      return <p>读取到的userName是 {userInfo.userName}</p>
                    }
                  }
                </L4UserContext.Consumer>
              </p>
            }
          }
        </L4ThemeContext.Consumer>
      </div>
    );
  }
}