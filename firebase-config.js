import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-storage.js";

const firebaseConfig = {
apiKey: "AIzaSyArKUqthRHDrO1xXn39wJP-JCiBZdilOcY",
authDomain: "piano-deluxe-premium.firebaseapp.com",
projectId: "piano-deluxe-premium",
storageBucket: "piano-deluxe-premium.firebasestorage.app",
messagingSenderId: "79307845171",
appId: "1:79307845171:web:c21918694f6d916fbbfd46"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);