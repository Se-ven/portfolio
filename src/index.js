import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import * as serviceWorker from './serviceWorker';

/*
class MainApp extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>TEST</h1>
      </div>
    );
  }
}
ReactDOM.render(<MainApp />, document.getElementById("app"));
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('App')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
