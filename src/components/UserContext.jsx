import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [usersArr, setUsersArr] = useState([]);
    const [cartArr, setCartArr] = useState([]);
    const [currentUser, setCurrentUser] = useState({ id: "", name: "", tz: "", password: "" });

    const logIn = (name, password) => {

       let user = usersArr.find(l => l.name === name && l.pasword === password);

        if (user) {
            setCurrentUser( user )
            return true;
        }
        return false;
    }
    const SignUp = (user) => {

        setUsersArr({
            id: usersArr.length,
            name: user.name,
            tz: user.tz,
            password: user.password
        })
        setCurrentUser( user )
    }
    const logOut = () => {
       setCurrentUser(null);

    }
    const addToCart=(product)=>
    {
        setCartArr({userid:currentUser.id,product})
    }
    const deleteCart=(product)=>
    {
      let remove = cartArr.filter(p=>p=product);
      setCartArr(remove);
    }
    return (
        <>
        <UserContext.Provider value={{logIn,signIn,addToCart,logOut,deleteCart,cartArr,usersArr,currentUser}}>
                {children}
        </UserContext.Provider>
        
        </>
    )


}