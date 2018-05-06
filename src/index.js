import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import configureStore from './store'
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
const Wrapper = () => {
    return (<MuiThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>)
}
ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
