import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {
    const [ allTasks, setAllTasks ] = useState(null);

    return(
        <AuthContext.Provider value={{ allTasks, setAllTasks }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext)
