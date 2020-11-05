import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import App from './routes/App';
import reducer from './reducers';
import initialState from '../initialState.json';

const initialStore = initialState;
const store = createStore(reducer,initialStore);

ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>, 
document.getElementById('app'));
