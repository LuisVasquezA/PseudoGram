import React, { Component } from 'react';
import firebase from 'firebase';

import FileUpload from './FileUpload'
import './App.css';




class App extends Component{
  constructor (){
    super();
    this.state ={
      user: null
    };

    this.handleauth = this.handleauth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount () {
  firebase.auth().onAuthStateChanged(user => {
    this.setState({ user });
  });
}
handleauth(){
    const provider = new firebase.auth.GoogleAuthProvider();
 
      firebase.auth().signInWithPopup(provider)
      .then(result => console.log('${result.user.email} ha iniciados sesión'))
      .catch(error => console.log('Error ${error.code} : ${error.message}'))
  }

  handleLogout () {
      firebase.auth().signOut()
      .then(result => console.log('${result.user.email} ha salido'))
      .catch(error => console.log('Error ${error.code} : ${error.message}'))
  }

  renderLoginButton (){
//Si el usuario esta loguado
if(this.state.user){
  return(
      <div>
            <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
            <p>Hola {this.state.user.displayName}!</p>
            <button class={"logout"} onClick={this.handleLogout}>Salir</button>

            <FileUpload />
            
      </div>

    );

}else{
  //Si no lo esta
  return(
  <button class={"googleBoton"} onClick={this.handleauth}>Login con Google</button>
)
}




  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className={"logoCam"}></div>
         
          <h1 className="App-title">PseudoGram</h1>
        </header>
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
      </div>
    );
  }
}





  


export default App;
