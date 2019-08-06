import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCXlfkhlgSqlk8F_rbaL4Owc-7i_-TOL20",
    authDomain: "photowall-c5f06.firebaseapp.com",
    databaseURL: "https://photowall-c5f06.firebaseio.com",
    projectId: "photowall-c5f06",
    storageBucket: "",
    messagingSenderId: "406066691099",
    appId: "1:406066691099:web:d97570d8856c5533"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  export {database}