import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main'
import {BrowserRouter} from 'react-router-dom'
import './styles/stylesheet.css'
            
ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('root'));