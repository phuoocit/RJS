import React,{ createContext, useState } from 'react';
const DishContext = createContext()

function DishProvider ({children}) {
    const [dish, setDish] = useState({})
    const handleCilck = (Dish) => {
        setDish(Dish)
    };
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const value = {
        dish,
        handleCilck, 
        handleClose,
        handleShow,
        show, setShow,
    }
    return (
        <DishContext.Provider value={value}>
            {children}
        </DishContext.Provider>
    )
}
export { DishProvider, DishContext }