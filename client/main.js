import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import React from 'react';  
import App from '../imports/ui/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../imports/reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


Meteor.startup(()=>{
  ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>, 
    document.getElementById('app'));
});