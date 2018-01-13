// revert mike

$(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5OK8uabGUBOv6UPTufvpmamGwNqYYLGI",
    authDomain: "gitinmahbellyapp.firebaseapp.com",
    databaseURL: "https://gitinmahbellyapp.firebaseio.com",
    projectId: "gitinmahbellyapp",
    storageBucket: "gitinmahbellyapp.appspot.com",
    messagingSenderId: "159443637055"
  };
  firebase.initializeApp(config);



  // get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  // add login event
  btnLogin.addEventListener('click', e => {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // add sign up event

  btnSignUp.addEventListener('click', e => {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  })

  // function to remove/show buttons if logged in

  let loginState = function (){
    btnLogout.classList.remove('hide');
    btnLogin.classList.add('hide');
    
  };

  let logoutState = function (){
    btnLogout.classList.add('hide');
    btnLogin.classList.remove('hide');
    
  };
  // add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      loginState();
      console.log(loginState)
    } else {
      console.log('not logged in');
      logoutState();

    }
  });
}());