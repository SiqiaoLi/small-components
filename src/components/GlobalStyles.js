import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App{
    font-family: sans-serif;
    padding-left: 250px;
  }

  .menu-list {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    list-style: none;
    background-color: #eee;
    padding: 0;
    margin: 0;
    padding-top: 30px;
    overflow: auto;
    li{
      padding: 5px 15px;
      color: #2175bc;
    }
    li.is-active{
      background-color: #2175bc;
      color: #fff !important;
    }
    a{
      text-decoration: none;
    }
  }

`;

export default GlobalStyles;
