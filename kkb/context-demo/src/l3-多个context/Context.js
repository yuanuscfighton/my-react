import React from "react";

export const L3ThemeContext = React.createContext({
  theme: {
    themeColor: 'default-color'
  }
});

export const L3UserContext = React.createContext({
  user: {
    name: '未填写姓名'
  }
})