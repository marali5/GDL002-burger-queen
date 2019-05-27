import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAcNdaAXTEDJjcKa59s2HGUXM868K4LMo0",
    authDomain: "nuevoburger-97064.firebaseapp.com",
    projectId: "nuevoburger-97064",
};

const firebaseAuth = firebase.initializeApp(firebaseConfig);

export default firebaseAuth; 