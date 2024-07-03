// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [user, setUser] = useState(() => {
//         // Get user from localStorage if available
//         const storedUser = localStorage.getItem('user');
//         return storedUser ? JSON.parse(storedUser) : null;
//     });

//     useEffect(() => {
//         // Sync user data with localStorage
//         if (user) {
//             localStorage.setItem('user', JSON.stringify(user));
//         } else {
//             localStorage.removeItem('user');
//         }
//     }, [user]);

//     const signUp = async (firstname, lastname, email, password) => {
//         // Your signUp API call here
//         const response = { data: { user: { firstname, lastname, email, role: 'user' } } }; // Mock response
//         setUser(response.data.user);
//         return response;
//     };

//     const login = async (email, password) => {
//         // Your login API call here
//         const response = { data: { user: { email, role: 'user' } } }; // Mock response
//         setUser(response.data.user);
//         return response;
//     };

//     const logout = () => {
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, signUp, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext);


// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//     const [user, setUser] = useState(() => {
//         const storedUser = localStorage.getItem('user');
//         return storedUser ? JSON.parse(storedUser) : null;
//     });

//     useEffect(() => {
//         if (user) {
//             localStorage.setItem('user', JSON.stringify(user));
//         } else {
//             localStorage.removeItem('user');
//         }
//     }, [user]);

//     const signUp = async (firstname, lastname, email, password) => {
//         // Your signUp API call here
//         const response = { data: { user: { firstname, lastname, email, role: 'user' } } }; // Mock response
//         setUser(response.data.user);
//         return response;
//     };

//     const login = async (email, password) => {
//         // Your login API call here
//         const response = { data: { user: { email, role: 'user' } } }; // Mock response
//         setUser(response.data.user);
//         return response;
//     };

//     const logout = () => {
//         setUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ user, signUp, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const signUp = async (firstname, lastname, email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/Signupclient', { firstname, lastname, email, password });
            setUser(response.data.user);
            return response;
        } catch (error) {
            console.error('Sign Up failed', error);
            throw error;
        }
    };

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/login', { email, password });
            setUser(response.data.user);
            console.log('Received response:', response.data);
            return response;
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signUp, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);