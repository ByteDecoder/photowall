import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './components/app'
import thunk from 'redux-thunk'
import './styles/stylesheet.css'

const store = createStore(
     rootReducer, 
     compose(
          applyMiddleware(thunk),
          (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose    
     )
);
            
const mainEntryPoint = <Provider store={store}>
                            <BrowserRouter><App /></BrowserRouter>
                       </Provider>

ReactDOM.render(mainEntryPoint, document.getElementById('root'));