// import { initializeApp, } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyDDVJ1O47ERpUt5CanBwUP5EkInnbduaAY",
//   authDomain: "alriyadi-84240.firebaseapp.com",
//   projectId: "alriyadi-84240",
//   storageBucket: "alriyadi-84240.appspot.com",
//   messagingSenderId: "762088616571",
//   appId: "1:762088616571:web:9d77ece78cf7c87518a8de",
//   measurementId: "G-2BSZJZ8C5Q"
// };

// export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);

// export default app

import { initializeApp, } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyBQysagE3aGiM39xem9iU-59w3lIuQ8sfs",
  // authDomain: "dream-craft-events-da8fb.firebaseapp.com",
  // projectId: "dream-craft-events-da8fb",
  // storageBucket: "dream-craft-events-da8fb.appspot.com",
  // messagingSenderId: "923847074423",
  // appId: "1:923847074423:web:6cc8329fa7464c9a751c72"
  apiKey: "AIzaSyDDVJ1O47ERpUt5CanBwUP5EkInnbduaAY",
  authDomain: "alriyadi-84240.firebaseapp.com",
  projectId: "alriyadi-84240",
  storageBucket: "alriyadi-84240.appspot.com",
  messagingSenderId: "762088616571",
  appId: "1:762088616571:web:9d77ece78cf7c87518a8de"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app