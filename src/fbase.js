import * as firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
    authDomain: process.env.REACT_APP_FIRE_BASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIRE_BASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIRE_BASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGIN_ID,
    appId: process.env.REACT_APP_FIRE_BASE_APP_ID
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const authService = firebase.auth()