import { createContext, useState } from "react";
export const Authcontext = createContext();

const AuthContextProvider = ({ children }) => {
    const [correct, setCorrect] = useState(false)

    // const [isAuth, setIsAuth] = useState(false);
  
    // const handleLogin = (body) => {
    //   fetch(`http://localhost:4000/User`, {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(() => setIsAuth(true))
    //     .catch(() => setIsAuth(false));
    // };
  
  
    console.log(correct," check correct in context  ");
    return (
      <Authcontext.Provider value={{ correct, setCorrect }}>
        {children}
      </Authcontext.Provider>
    );
  };
  
  export default AuthContextProvider;
  