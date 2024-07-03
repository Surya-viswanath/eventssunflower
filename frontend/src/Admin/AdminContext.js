
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContextadmin = createContext();

// export function AdminProvider({ children }) {
//     const [admin, setadmin] = useState(() => {
//         const storedUser = localStorage.getItem('admin');
//         console.log(storedUser);
//         return storedUser ? JSON.parse(storedUser) : null;
//     });

//     useEffect(() => {
//         if (admin) {
//             localStorage.setItem('admin', JSON.stringify(admin));
//         } else {
//             localStorage.removeItem('admin');
//         }
//     }, [admin]);
//     const login = async (Email,Password) => {
//         try {
//             const response = await axios.post('http://localhost:4000/adminlogin', { Email,Password});
//             setadmin(response.data.admin);
//             console.log('Received response:', response.data);
//             return response;
//         } catch (error) {
//             console.error('Login failed', error);
//             throw error;
//         }
//     };

//     const logout = () => {
//         setadmin(null);
//     };

//     return (
//         <AuthContextadmin.Provider value={{ admin,login, logout }}>
//             {children}
//         </AuthContextadmin.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContextadmin);


// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';

// const AuthContextadmin = createContext();

// export function AdminProvider({ children }) {
//     const [admin, setAdmin] = useState(() => {
//         const storedAdmin = localStorage.getItem("admin");
//         return storedAdmin ? JSON.parse(storedAdmin) : null;
//     });

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post('http://localhost:4000/adminlogin', { Email: email, Password: password });
//             setAdmin(response.data);
//             localStorage.setItem('admin', JSON.stringify(response.data));
//             return response;
//         } catch (error) {
//             console.error("Login error:", error.response);
//             throw error;
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem("admin");
//         setAdmin(null);
//     };

//     return (
//         <AuthContextadmin.Provider value={{ admin, login, logout }}>
//             {children}
//         </AuthContextadmin.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContextadmin);
// }

// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';

// const AuthContextadmin = createContext();

// export function AdminProvider({ children }) {
//     const [admin, setAdmin] = useState(() => {
//         const storedAdmin = localStorage.getItem("admin");
//         return storedAdmin ? JSON.parse(storedAdmin) : null;
//     });

//     const login = async (email, password) => {
//         try {
//             const response = await axios.post('http://localhost:4000/adminlogin', { Email: email, Password: password });
//             setAdmin(response.data);
//             localStorage.setItem('admin', JSON.stringify(response.data));
//             return response;
//         } catch (error) {
//             console.error("Login error:", error.response);
//             throw error;
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem("admin");
//         setAdmin(null);
//     };

//     return (
//         <AuthContextadmin.Provider value={{ admin, login, logout }}>
//             {children}
//         </AuthContextadmin.Provider>
//     );
// }

// export function useAuth() {
//     return useContext(AuthContextadmin);
// }