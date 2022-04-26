// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDKd1Qq5JEmR98rFYjEpPc7GXVSh7pCtUY",
        authDomain: "olimpia-e94d7.firebaseapp.com",
        projectId: "olimpia-e94d7",
        storageBucket: "olimpia-e94d7.appspot.com",
        messagingSenderId: "985004099577",
        appId: "1:985004099577:web:d1a9bcb788ace21e32df28"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);
}

export default initializeFirebase;