import React from "react";

export const L4ThemeContext = React.createContext({
  theme: {
    themeColor: 'default-color'
  }
});

export const L4UserContext = React.createContext({
  user: {
    name: '未填写姓名'
  }
})