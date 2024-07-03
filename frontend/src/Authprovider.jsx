// import { createContext, useEffect, useState } from "react";

// import {
//   GoogleAuthProvider, getAuth,
//   signInWithPopup,
// } from "firebase/auth";
// import app from "./firebase/firebase.config";
// import useAxiosPublic from "./hooks/useAxiosPublic";
// // import { app } from "../firebase/firebase.config";
// export const AuthContext = createContext();

// export const AuthProdiver = ({ children }) => {
//   const axios = useAxiosPublic();
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const googleLogin = () => {
//       return signInWithPopup(auth, googleProvider);
//   };

//   const login = async (email, password) => {
//     const response = await axios.post("/login", { email, password });
//     localStorage.setItem("token", response.data.token);
//     setUser(response.data.user);
//     setIsLoading(false);
//     return response;
//   };

//   const signUp = async (firstname, lastname, email, password) => {
//     const response = await axios.post("/signup", {
//       firstname,
//       lastname,
//       email,
//       password,
//     });
//     setIsLoading(false);
//     setUser(response.data.user);
//     return response;
//   };
//   const logout = async () => {
//     setUser(null);
//     localStorage.removeItem("token");
//     setIsLoading(false);
//   };


//   useEffect(() => {
//     const unSubscribe = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           setIsLoading(true);
//           const response = await axios.post("/token-verify", { token });
//           setUser(response.data);
//           setIsLoading(false);
//         } catch (error) {
//           console.error("Token verification failed:", error);
//           setUser(null);
//           localStorage.removeItem("token");
//           setIsLoading(false);
//         }
//       } else {
//         setUser(null);
//         setIsLoading(false);
//       }
//     };

//     unSubscribe();
//   }, [axios]);

//   const userInfo = {
//     login,
//     signUp,
//     logout,
//     user,
//     setUser,
//     isLoading,
//     googleLogin,
//     setIsLoading
//   };

//   return (
//     <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect, useContext } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
  
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     const signup = async (name, email, password, phone) => {
//         const response = await axios.post('http://localhost:4000/Signupclient', {
//             Name: name,
//             Email: email,
//             Password: password,
//             Phone: phone,
//         });
//         setUser(response.data.user);
//         return response;
        
//     };

//     const login = async (email, password) => {
//         const response = await axios.post('http://localhost:4000/login', { email, password });
//         localStorage.setItem('token', response.data.token);
//         setUser(response.data.user);
//         return response;
//     };

//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('token');
//     };

//     useEffect(() => {
//         const checkLoggedInUser = async () => {
//             const token = localStorage.getItem('token');
//             if (token) {
//                 try {
//                     const response = await axios.post('http://localhost:4000/token-verify', { token });
//                     setUser(response.data.user);
//                 } catch (error) {
//                     console.error('Token verification failed:', error);
//                     setUser(null);
//                     localStorage.removeItem('token');
//                 }
//             }
//             setIsLoading(false);
//         };
//         checkLoggedInUser();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ user, signup, login, logout, isLoading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     return useContext(AuthContext);
// };




// import { createContext, useEffect, useState } from "react";
// import useAxiosPublic from "./hooks/useAxiosPublic";
// import {
//   GoogleAuthProvider, getAuth,
//   signInWithPopup,
// } from "firebase/auth";
// import app from "./firebase/firebase.config";
// // import { app } from "../firebase/firebase.config";
// export const AuthContext = createContext();

// const AuthProvider =({ children }) => {
//   const axios = useAxiosPublic();
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const googleLogin = () => {
//       return signInWithPopup(auth, googleProvider);
//   };

//   const login = async (email, password) => {
//     const response = await axios.post("/login", { email, password });
//     localStorage.setItem("token", response.data.token);
//     setUser(response.data.user);
//     setIsLoading(false);
//     return response;
//   };

//   const signUp = async (firstname, lastname, email, password) => {
//     const response = await axios.post("/Signupclient", {
//       firstname,
//       lastname,
//       email,
//       password,
//     });
//     setIsLoading(false);
//     setUser(response.data.user);
//     return response;
//   };
//   const logout = async () => {
//     setUser(null);
//     localStorage.removeItem("token");
//     setIsLoading(false);
//   };


//   useEffect(() => {
//     const unSubscribe = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           setIsLoading(true);
//           const response = await axios.post("/token-verify", { token });
//           setUser(response.data);
//           setIsLoading(false);
//         } catch (error) {
//           console.error("Token verification failed:", error);
//           setUser(null);
//           localStorage.removeItem("token");
//           setIsLoading(false);
//         }
//       } else {
//         setUser(null);
//         setIsLoading(false);
//       }
//     };

//     unSubscribe();
//   }, [axios]);

//   const userInfo = {
//     login,
//     signUp,
//     logout,
//     user,
//     setUser,
//     isLoading,
//     googleLogin,
//     setIsLoading
//   };

//   return (
//     <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;



// import { createContext, useEffect, useState } from "react";
// import useAxiosPublic from "./hooks/useAxiosPublic";
// import {
//   GoogleAuthProvider, getAuth,
//   signInWithPopup,
// } from "firebase/auth";
// import app from "./firebase/firebase.config";
// // import { app } from "../firebase/firebase.config";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const axios = useAxiosPublic();
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const googleLogin = () => {
//       return signInWithPopup(auth, googleProvider);
//   };

//   const login = async (email, password) => {
//     const response = await axios.post("/login", { email, password });
//     localStorage.setItem("token", response.data.token);
//     setUser(response.data.user);
//     setIsLoading(false);
//     return response;
//   };

//   const signUp = async (firstname, lastname, email, password) => {
//     const response = await axios.post("/Signupclient", {
//       firstname,
//       lastname,
//       email,
//       password,
//     });
//     localStorage.setItem("token", response.data.token); // Add this line to store the token
//     setUser(response.data.user);
//     setIsLoading(false);
//     return response;
//   };

//   const logout = async () => {
//     setUser(null);
//     localStorage.removeItem("token");
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const unSubscribe = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           setIsLoading(true);
//           const response = await axios.post("/token-verify", { token });
//           setUser(response.data);
//           setIsLoading(false);
//         } catch (error) {
//           console.error("Token verification failed:", error);
//           setUser(null);
//           localStorage.removeItem("token");
//           setIsLoading(false);
//         }
//       } else {
//         setUser(null);
//         setIsLoading(false);
//       }
//     };

//     unSubscribe();
//   }, [axios]);

//   const userInfo = {
//     login,
//     signUp,
//     logout,
//     user,
//     setUser,
//     isLoading,
//     googleLogin,
//     setIsLoading
//   };

//   return (
//     <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider; // Default export



// import { createContext, useEffect, useState } from "react";
// import useAxiosPublic from "./hooks/useAxiosPublic";
// import {
//   GoogleAuthProvider, getAuth,
//   signInWithPopup,
// } from "firebase/auth";
// import { app } from "./firebase/firebase.config";
// export const AuthContext = createContext();

// export const AuthProdiver = ({ children }) => {
//   const axios = useAxiosPublic();
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const googleLogin = () => {
//       return signInWithPopup(auth, googleProvider);
//   };

//   const login = async (email, password) => {
//     const response = await axios.post("/login", { email, password });
//     localStorage.setItem("token", response.data.token);
//     setUser(response.data.user);
//     setIsLoading(false);
//     return response;
//   };

//   const signUp = async (firstname, lastname, email, password) => {
//     const response = await axios.post("/Signupclient", {
//       firstname,
//       lastname,
//       email,
//       password,
//     });
//     setIsLoading(false);
//     setUser(response.data.user);
//     return response;
//   };
//   const logout = async () => {
//     setUser(null);
//     localStorage.removeItem("token");
//     setIsLoading(false);
//   };


//   useEffect(() => {
//     const unSubscribe = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           setIsLoading(true);
//           const response = await axios.post("/token-verify", { token });
//           setUser(response.data);
//           setIsLoading(false);
//         } catch (error) {
//           console.error("Token verification failed:", error);
//           setUser(null);
//           localStorage.removeItem("token");
//           setIsLoading(false);
//         }
//       } else {
//         setUser(null);
//         setIsLoading(false);
//       }
//     };

//     unSubscribe();
//   }, [axios]);

//   const userInfo = {
//     login,
//     signUp,
//     logout,
//     user,
//     setUser,
//     isLoading,
//     googleLogin,
//     setIsLoading
//   };

//   return (
//     <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
//   );
// };


import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "./hooks/useAxiosPublic";
import {
  GoogleAuthProvider, getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./firebase/firebase.config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { // Corrected from AuthProdiver to AuthProvider
  const axios = useAxiosPublic();
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // const login = async (email, password) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post("/login", { email, password });
  //     localStorage.setItem("id", response.data._id);
  //     console.log("id",response.data._id);
  //     setUser(response.data.user);
  //   } catch (error) {
  //     console.error("Login failed:", error.response ? error.response.data : error.message);
  //   }
  //   setIsLoading(false);
  // };

  // const signUp = async (firstname, lastname, email, password) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post("/Signupclient", {
  //       firstname,
  //       lastname,
  //       email,
  //       password,
  //     });
  //     localStorage.setItem("token", response.data.token);
  //     setUser(response.data.user);
  //   } catch (error) {
  //     console.error("Sign up failed:", error.response ? error.response.data : error.message);
  //   }
  //   setIsLoading(false);
  // };


  // const signUp = async (firstname, lastname, email, password) => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.post("/Signupclient", {
  //       firstname,
  //       lastname,
  //       email,
  //       password,
  //     });
  //     localStorage.setItem("token", response.data.token);
  //     setUser(response.data.user);
  //   } catch (error) {
  //     console.error("Sign up failed:", error.response ? error.response.data : error.message);
  //     // Handle error states here if needed
  //   }
  //   setIsLoading(false);
  // };


  const login = async (email, password) => {
    try {
      const response = await axios.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user); // Ensure response.data.user includes 'id' field
      setIsLoading(false);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      setIsLoading(false);
      throw error; // Handle error appropriately in your component
    }
  };
  
  const signUp = async (firstname, lastname, email, password) => {
    try {
      const response = await axios.post("/signup", {
        firstname,
        lastname,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user); // Ensure response.data.user includes 'id' field
      setIsLoading(false);
      return response;
    } catch (error) {
      console.error("Sign up failed:", error);
      setIsLoading(false);
      throw error; // Handle error appropriately in your component
    }
  };
  const logout = async () => {
    setUser(null);
    localStorage.removeItem("token");
    setIsLoading(false);
  };

  useEffect(() => {
    const unSubscribe = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          setIsLoading(true);
          console.log("Verifying token...");
          const response = await axios.post("/token-verify", { token });
          console.log("Token verification response:", response.data);
          setUser(response.data.user);
        } catch (error) {
          console.error("Token verification failed:", error.response ? error.response.data : error.message);
          setUser(null);
          localStorage.removeItem("token");
        }
      } else {
        setUser(null);
      }
      setIsLoading(false);
    };

    unSubscribe();
  }, [axios]);

  const userInfo = {
    login,
    signUp,
    logout,
    user,
    setUser,
    isLoading,
    googleLogin,
    setIsLoading,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};
