import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );


//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     try {
//       setCurrentUser(JSON.parse(storedUser) || null);
//     } catch (e) {
//       console.error("Error parsing JSON from localStorage:", e);
//       localStorage.removeItem("user"); // Optionally clear the invalid data
//       setCurrentUser(null);
//     }
//   }, []);

  const updateUser = (data) => {
    setCurrentUser(data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);


  return (
    <AuthContext.Provider value={{ currentUser,updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};