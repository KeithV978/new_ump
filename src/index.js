import React from 'react';
import ReactDOM  from 'react-dom/client';
// import {createRoot } from 'react-dom/client';
import App from './App'; 
import configureStore from './Redux/store'
// import firebase from './services/config';

// import { Loader } from './Components';
// import { onAuthStateFail, onAuthStateSuccess } from './Redux/actions/auth_actions';

const { store, persistor } = configureStore();

const root =  ReactDOM.createRoot(document.getElementById('root'))
root.render(<App persistor={persistor} store={store}/>)
// ReactDOM.render(<App persistor={persistor} store={store}/>, document.getElementById('root'));


// render(<Loader/>, root);

//  firebase.auth.onAuthStateChanged((user) => {
//   if(user){
//     store.dispatch(onAuthStateSuccess(user));
//   } else {
//     store.dispatch(onAuthStateFail('Failed to authenticate'))
//   }
//   render(
//     <React.StrictMode>
//       <App persistor={persistor} store={store}/>
//     </React.StrictMode>,  
//     root
//   );
//  })