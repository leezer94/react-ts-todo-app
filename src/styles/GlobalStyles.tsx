import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
      margin: 0;
      height: 100%;
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.5;
      background-color: #f1f5f9;
    }

    .App {
      max-width: 960px;
      margin: 0 auto;
    }
    
    a {
      text-decoration: none;
    }
    
    main .wrapper {
      width: 540px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }
    
    hr {
      border: 0;
      height: 1px;
      background-color: lightgray;
    }
    
    ul li button {
      width: 60px;
      line-height: inherit;
      cursor: pointer;
      height: auto;
      border: none;
      outline: none;
      border-radius: 2rem;
    }
    
    ul li button:hover {
      background-color: rgb(229, 231, 235);
    }
    
    .sold-out {
      text-decoration: line-through;
      color: gray;
    }
`;

export default GlobalStyle;
