import React,{ createContext, useState } from 'react';


const StaffContext = createContext()

function StaffProvider ({children}) {
    const [userId, setUserId] = useState('')
    const handleCilck = (staff) => {
        setUserId(staff.id)
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const value = {
        userId,
        handleCilck, 
        handleClose,
        handleShow,
        show, setShow,
    }
    return (
        <StaffContext.Provider value={value}>
            {children}
        </StaffContext.Provider>
    )
}
export { StaffProvider, StaffContext }