const { createContext, useState, useEffect, useContext } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user , setUser] = useState('');
    useEffect(() => {
        const storedUser = localStorage.getItem('role');
        if (storedUser){
            setUser(storedUser);
        }
    },[])

    return (
        <AuthContext.Provider value={{ user , setUser }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);