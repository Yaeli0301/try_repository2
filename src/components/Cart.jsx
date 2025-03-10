import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";

export default function Cart() {

    const { cartArr, currentUser } = useContext(UserContext);
    //const userContext = useContext(UserContext);
 
    const cart = cartArr.filter(item => item.userId === currentUser.id); 

    
    if (cart.length === 0) {
        return <p>העגלה ריקה</p>;
    }

 
    return (
        <div>
            <h2>המוצרים בעגלה</h2>
            {cart.map(item => (
                <div key={item.id} >
                    <p><strong>שם המוצר:</strong> {item.name}</p>
                    <p><strong>מחיר:</strong> {item.price} ₪</p>
                </div>
            ))}
              <button onClick={() => Navigate('/Home')}>חזרה לעמוד הבית</button>
        </div>
        
    );
}