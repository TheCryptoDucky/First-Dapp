import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="HJJ9nRC8FM00Y2HGOn81vN9Hh6ooSFhbRiaxId72" serverUrl="https://kgoprexh9ggw.usemoralis.com:2053/server">
          <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
