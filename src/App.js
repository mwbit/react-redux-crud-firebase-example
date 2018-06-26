import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

// import FormCadastro from './components/FormCadastro';
import FormLoginCad from './components/FormLoginCad'

class App extends Component {

  componentWillMount() {
    //Here put your firebase info 
    let config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);

  }

  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <div>
          <FormLoginCad />
        </div>
      </Provider>
    );
  }
}

export default App;
