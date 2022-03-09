import { createContext, useState } from 'react';


const StaffContext = createContext()

function StaffProvider ({children}) {
    const [userId, setUserId] = useState('')
    const handleCilck = (id) => {
        setUserId(id)
    };
    
    const value = {
        userId,
        handleCilck
    }
    return (
        <StaffContext.Provider value={value}>
            {children}
        </StaffContext.Provider >
    )
}
export { StaffProvider, StaffContext }